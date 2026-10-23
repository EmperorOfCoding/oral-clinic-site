// Marca da Oral Clinic: simbolo do dente + nome.
//
// O PNG do simbolo tem o contorno do dente em branco, o que o torna invisivel
// sobre fundo claro. Por isso ele e aplicado como mascara CSS e colorido por
// currentColor, garantindo contraste em qualquer superficie.
const MASK_STYLE = {
  WebkitMaskImage: 'url(/images/dente-oral-clinic-Photoroom.png)',
  WebkitMaskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskImage: 'url(/images/dente-oral-clinic-Photoroom.png)',
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  backgroundColor: 'currentColor',
};

export default function Logo({ className = '', tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`h-9 w-9 shrink-0 ${isDark ? 'text-white' : 'text-brand-700'}`}
        style={MASK_STYLE}
        role="img"
        aria-label="Símbolo da Oral Clinic"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] tracking-tight ${isDark ? 'text-white' : 'text-ink'}`}
        >
          <span className="font-semibold">Oral</span> Clinic
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] ${
            isDark ? 'text-white/60' : 'text-graphite/60'
          }`}
        >
          Odontologia e Estética
        </span>
      </span>
    </span>
  );
}
