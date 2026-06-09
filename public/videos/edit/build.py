#!/usr/bin/env python3
"""Junta as partes de cada depoimento da Oral Clinic em um video unico.
- Depoimento 1: gravacao continua (sem silencios) -> concat lossless (-c copy).
- Depoimentos 2 e 3: corta pausas internas (colapsa cada silencio para ~0.30s)
  com fades de audio de 30ms em cada fronteira, depois concatena.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

FFMPEG = r"C:\Users\Intel\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"
FFPROBE = r"C:\Users\Intel\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffprobe.exe"

SRC = Path(r"c:\Users\Intel\OneDrive\Desktop\Projetos Github\empiricus-brain\clientes\oral-clinic\projeto\public\videos")
EDIT = SRC / "edit"
SEG = EDIT / "_seg"
SEG.mkdir(parents=True, exist_ok=True)

NOISE = "-30dB"
MIN_SIL = 0.6      # so pausas >= 0.6s contam como silencio
KEEP_PAD = 0.15    # mantem 0.15s de cada lado -> ~0.30s de respiro residual
FADE = 0.03        # 30ms de fade de audio nas fronteiras

TESTIMONIALS = {
    "depoimento_1": dict(mode="join", parts=[
        "depoimento_1_oral.mp4", "depoimento_1_oral_2.mp4", "depoimento_1_oral_3.mp4"]),
    "depoimento_2": dict(mode="trim", parts=[
        "depoimento_2_oral.mp4", "depoimento_2_oral_2.mp4"]),
    "depoimento_3": dict(mode="trim", parts=[
        "depoimento_3_oral_1.mp4", "depoimento_3_oral_2.mp4"]),
}


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def duration(path):
    out = run([FFPROBE, "-v", "error", "-show_entries", "format=duration",
               "-of", "json", str(path)]).stdout
    return float(json.loads(out)["format"]["duration"])


def silences(path):
    r = run([FFMPEG, "-hide_banner", "-nostats", "-i", str(path),
             "-af", f"silencedetect=noise={NOISE}:d={MIN_SIL}", "-f", "null", "-"])
    log = r.stderr
    starts = [float(x) for x in re.findall(r"silence_start:\s*([0-9.]+)", log)]
    ends = [float(x) for x in re.findall(r"silence_end:\s*([0-9.]+)", log)]
    return list(zip(starts, ends))


def keep_intervals(path):
    dur = duration(path)
    sils = silences(path)
    segs = []
    prev = 0.0
    for s, e in sils:
        keep_end = min(s + KEEP_PAD, dur)
        if keep_end - prev > 0.05:
            segs.append((prev, keep_end))
        prev = max(e - KEEP_PAD, prev)
    if dur - prev > 0.05:
        segs.append((prev, dur))
    return segs


def extract(path, start, end, out):
    # Input-side seek (-ss antes de -i) + -t duracao: preciso e com audio intacto.
    d = end - start
    fout = max(d - FADE, 0)
    af = f"afade=t=in:st=0:d={FADE},afade=t=out:st={fout:.3f}:d={FADE}"
    run([FFMPEG, "-y", "-ss", f"{start:.3f}", "-i", str(path), "-t", f"{d:.3f}",
         "-c:v", "libx264", "-profile:v", "main", "-pix_fmt", "yuv420p",
         "-crf", "18", "-preset", "medium", "-r", "30",
         "-af", af, "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-ac", "2",
         "-movflags", "+faststart", str(out)])


def concat_copy(files, out):
    lst = SEG / "list.txt"
    lst.write_text("".join(f"file '{f.as_posix()}'\n" for f in files), encoding="utf-8")
    run([FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(lst),
         "-c", "copy", "-movflags", "+faststart", str(out)])


def build(name, spec):
    out = EDIT / f"{name}.mp4"
    if spec["mode"] == "join":
        files = [SRC / p for p in spec["parts"]]
        concat_copy(files, out)
        print(f"[{name}] JOIN lossless -> {duration(out):.2f}s")
        return
    # trim mode
    segs = []
    idx = 0
    for p in spec["parts"]:
        path = SRC / p
        ints = keep_intervals(path)
        for (s, e) in ints:
            seg = SEG / f"{name}_{idx:02d}.mp4"
            extract(path, s, e, seg)
            segs.append(seg)
            idx += 1
        print(f"  {p}: {len(ints)} segmento(s) mantido(s)")
    concat_copy(segs, out)
    print(f"[{name}] TRIM -> {duration(out):.2f}s ({len(segs)} segmentos)")


if __name__ == "__main__":
    targets = sys.argv[1:] or list(TESTIMONIALS)
    for t in targets:
        build(t, TESTIMONIALS[t])
