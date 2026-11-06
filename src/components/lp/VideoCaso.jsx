import { useEffect, useRef } from 'react';

// Video de caso: toca mudo quando entra na tela e pausa ao sair. O som fica nos
// controles. `muted` e definido por ref porque nao vem no HTML pre-renderizado.
export function VideoCaso() {
  const video = useRef(null);

  useEffect(() => {
    const element = video.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    element.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) element.play().catch(() => {});
        else element.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={video}
      src="/videos/protese-caso.mp4"
      poster="/images/lp/protese-caso-poster.webp"
      width="960"
      height="600"
      controls
      loop
      muted
      playsInline
      preload="metadata"
      aria-label="Vídeo narrado pela Dra. Marcela Karin: a prótese antiga da paciente, com desgaste e folga, e a entrega da nova prótese total superior"
      className="aspect-[8/5] w-full rounded-3xl bg-ink object-cover"
    />
  );
}
