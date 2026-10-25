import { MessageCircle } from 'lucide-react';

// Primitivas compartilhadas pelas landing pages de servico.
// Todas renderizam em opacidade plena: as paginas sao pre-renderizadas (SSG)
// e nao podem depender de hidratacao para ficar visiveis.

// Secao de largura total com fundo proprio e conteudo limitado a 1248px.
export function Section({ id, bg = 'bg-cloud', className = '', innerClassName = '', children }) {
  return (
    <section id={id} className={`${bg} px-5 py-16 sm:px-8 lg:py-[104px] xl:px-24 ${className}`}>
      <div className={`mx-auto w-full max-w-[1248px] ${innerClassName}`}>{children}</div>
    </section>
  );
}

// Rotulo de secao: fio champagne + texto curto em caixa alta.
export function Eyebrow({ children, tone = 'gold', className = '' }) {
  const light = tone === 'light';
  return (
    <p className={`flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className={`h-px w-8 shrink-0 ${light ? 'bg-champagne' : 'bg-champagne-dark'}`} />
      <span
        className={`text-xs font-bold uppercase tracking-[0.17em] ${
          light ? 'text-champagne' : 'text-champagne-dark'
        }`}
      >
        {children}
      </span>
    </p>
  );
}

// Titulo de secao com rotulo. `light` inverte as cores para fundos escuros.
export function SectionTitle({ eyebrow, children, light = false, className = '' }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <Eyebrow tone={light ? 'light' : 'gold'}>{eyebrow}</Eyebrow>
      <h2 className={`lp-h2 ${light ? 'text-white' : ''}`}>{children}</h2>
    </div>
  );
}

// H1 em linhas fixas, com a ultima em destaque italico.
export function Headline({ lines, accent = 'text-brand-700', color = 'text-ink', className = '' }) {
  return (
    <h1
      className={`font-display font-normal leading-[1.03] tracking-[-0.03em] ${color} ${className}`}
    >
      {lines.map((line, index) => {
        const isAccent = index === lines.length - 1;
        return (
          <span key={line} className={`block ${isAccent ? `italic ${accent}` : ''}`}>
            {line}
          </span>
        );
      })}
    </h1>
  );
}

const BUTTON_VARIANTS = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700',
  white: 'bg-white text-brand-800 hover:bg-brand-50 focus-visible:outline-white',
  green: 'rounded-[10px] bg-wa text-white hover:bg-wa-dark focus-visible:outline-wa',
};

// Botao de WhatsApp. O clique e contabilizado como conversao pelo script
// global do index.html (qualquer link wa.me).
export function WhatsAppButton({ href, children, variant = 'primary', size = 'md', className = '' }) {
  const sizes = {
    sm: 'px-[22px] py-3 text-sm gap-2',
    md: 'px-[30px] py-[18px] text-base gap-2.5',
    lg: 'px-8 py-5 text-lg gap-3',
  };
  const shape = variant === 'green' ? '' : 'rounded-full';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${shape} ${sizes[size]} ${BUTTON_VARIANTS[variant]} ${className}`}
    >
      <MessageCircle className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} strokeWidth={1.8} aria-hidden="true" />
      {children}
    </a>
  );
}

// Foto com contorno champagne deslocado (moldura editorial).
// O tamanho vem de `className` (largura e proporcao).
export function FramedPhoto({
  src,
  alt,
  radius = 'rounded-3xl',
  offset = 'right',
  className = '',
  eager = false,
  width,
  height,
  objectPosition,
}) {
  const shift =
    offset === 'left'
      ? '-translate-x-3 translate-y-3 lg:-translate-x-6 lg:translate-y-6'
      : 'translate-x-3 translate-y-3 lg:translate-x-6 lg:translate-y-6';
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className={`absolute inset-0 border border-champagne ${shift} ${radius}`} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`relative h-full w-full object-cover ${radius}`}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  );
}

// Lista editorial separada por fios (numerada ou com icone).
export function RuleList({ children, tone = 'light', className = '' }) {
  const border = tone === 'dark' ? 'border-white/15' : 'border-ink/[0.09]';
  return <ul className={`border-b ${border} ${className}`}>{children}</ul>;
}

export function RuleItem({ tone = 'light', className = '', children }) {
  const border = tone === 'dark' ? 'border-white/15' : 'border-ink/[0.09]';
  return <li className={`border-t ${border} ${className}`}>{children}</li>;
}

// Linha rotulo/valor usada nas tabelas de comparacao.
export function DetailRow({ label, value, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div
      className={`flex items-center justify-between gap-4 border-t py-3.5 ${
        dark ? 'border-white/15' : 'border-ink/[0.09]'
      }`}
    >
      <dt className="text-[0.69rem] font-bold uppercase tracking-[0.145em] text-champagne-dark">
        <span className={dark ? 'text-champagne' : ''}>{label}</span>
      </dt>
      <dd className={`text-right text-sm font-semibold ${dark ? 'text-white' : 'text-ink'}`}>{value}</dd>
    </div>
  );
}
