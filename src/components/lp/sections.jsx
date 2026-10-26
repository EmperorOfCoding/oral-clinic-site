import { CalendarClock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC, OPENING_HOURS } from '../../lib/site.js';
import { Eyebrow, Section, WhatsAppButton } from './ui.jsx';

// Cabecalho enxuto das landing pages: marca, telefone e um unico CTA.
// Sem menu de navegacao, para manter o foco na conversao.
const HEADER_TONES = {
  dark: { name: 'text-white', sub: 'text-mist', phone: 'text-mist', cta: 'white' },
  light: { name: 'text-ink', sub: 'text-graphite', phone: 'text-graphite', cta: 'primary' },
  // Sobre a foto de implantes o canto superior direito e escuro (tecido roxo)
  // a partir de lg, onde o veu claro e removido.
  overlay: { name: 'text-ink', sub: 'text-graphite', phone: 'text-ink lg:text-white', cta: 'primary' },
};

export function LpHeader({ tone = 'light', ctaHref }) {
  const style = HEADER_TONES[tone];
  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-6 sm:px-8 xl:px-24">
      <a href="/" className="flex items-center gap-3" aria-label="Oral Clinic Odontologia e Estética, página inicial">
        <img
          src="/images/logo-oral-clinic-melhorada.png"
          alt=""
          width="44"
          height="44"
          className="h-11 w-11 rounded-[10px]"
        />
        <span className="flex flex-col">
          <span className={`font-display text-xl leading-tight ${style.name}`}>Oral Clinic</span>
          <span className={`hidden text-[0.69rem] tracking-[0.11em] sm:block ${style.sub}`}>Odontologia e Estética</span>
        </span>
      </a>
      <div className="flex items-center gap-7">
        <a href={`tel:+${CLINIC.whatsappNumber}`} className={`hidden text-sm font-medium md:inline ${style.phone}`}>
          {CLINIC.phoneDisplay}
        </a>
        <WhatsAppButton href={ctaHref} variant={style.cta} size="sm">
          Agendar avaliação
        </WhatsAppButton>
      </div>
    </header>
  );
}

// Faixa de tres fatos logo abaixo do hero.
export function FactsBar({ facts, tone = 'dark', compact = false, className = '' }) {
  const dark = tone === 'dark';
  const border = dark ? 'border-white/15' : 'border-ink/[0.09]';
  return (
    <div className={`border-t ${border} px-5 sm:px-8 xl:px-24 ${className}`}>
      <ul className="mx-auto grid max-w-[1248px] md:grid-cols-3">
        {facts.map((fact, index) => (
          <li
            key={fact.title}
            className={`flex items-center gap-4 ${compact ? 'py-5 md:py-[26px]' : 'py-5 md:py-7'} ${
              index > 0 ? `border-t md:border-l md:border-t-0 md:pl-8 ${border}` : ''
            }`}
          >
            <span
              className={`shrink-0 whitespace-nowrap font-display ${compact ? 'text-2xl' : 'text-[1.625rem]'} ${
                dark ? 'text-champagne' : 'text-brand-700'
              }`}
            >
              {fact.title}
            </span>
            <span className={`text-sm leading-5 ${dark ? 'text-mist' : 'text-graphite'}`}>{fact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Tres perguntas em colunas, com fio escuro no topo.
export function FaqColumns({ items }) {
  return (
    <Section bg="bg-lavanda-100" className="lg:py-24" innerClassName="flex flex-col gap-12">
      <Eyebrow>Perguntas frequentes</Eyebrow>
      <dl className={`grid gap-10 md:gap-14 ${items.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4 lg:gap-10' : items.length > 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'}`}>
        {items.map((item) => (
          <div key={item.question} className="flex flex-col gap-3 border-t border-ink pt-6">
            <dt className="font-display text-2xl leading-[1.25] text-ink">{item.question}</dt>
            <dd className="text-base leading-relaxed text-graphite">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

const INFO_ROWS = [
  { Icon: MapPin, title: CLINIC.address.line1, text: CLINIC.address.line2 },
  { Icon: CalendarClock, title: OPENING_HOURS[0].days, text: OPENING_HOURS[0].hours },
  { Icon: CalendarClock, title: OPENING_HOURS[1].days, text: OPENING_HOURS[1].hours },
  { Icon: Phone, title: CLINIC.phoneDisplay, text: 'WhatsApp e telefone' },
];

// CTA final em roxo, com endereco, horarios e telefone.
export function CtaFinal({ title, lead, buttonLabel, href }) {
  return (
    <section id="agendar" className="bg-brand-700 px-5 py-16 sm:px-8 lg:py-24 xl:px-24">
      <div className="mx-auto grid w-full max-w-[1248px] items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-20">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-display text-[2.2rem] font-normal leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-brand-100">{lead}</p>
          <WhatsAppButton href={href} variant="white" className="mt-2">
            {buttonLabel}
          </WhatsAppButton>
        </div>
        <ul>
          {INFO_ROWS.map(({ Icon, title: rowTitle, text }, index) => (
            <li
              key={`${rowTitle}-${index}`}
              className={`flex items-center gap-[18px] py-[18px] ${index > 0 ? 'border-t border-white/25' : ''}`}
            >
              <Icon className="h-[22px] w-[22px] shrink-0 text-white" strokeWidth={1.6} aria-hidden="true" />
              <span className="flex flex-col gap-0.5">
                <span className="font-display text-[1.19rem] text-white">{rowTitle}</span>
                <span className="text-sm text-brand-100">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Rodape com a identificacao legal da responsavel tecnica (CFO).
export function LpFooter({ note }) {
  return (
    <footer className="bg-ink px-5 py-9 sm:px-8 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-[1.06rem] text-white">{CLINIC.fullName}</p>
        <p className="text-[0.81rem] text-mist">
          Responsável técnica: {CLINIC.responsavelTecnica}, {CLINIC.cro}
        </p>
      </div>
      {note && <p className="mx-auto mt-3 w-full max-w-[1248px] text-xs text-mist/80">{note}</p>}
    </footer>
  );
}

// Atalho permanente de agendamento (pilula verde). Estatico, sem animacao.
export function LpFloatingCta({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-wa p-3.5 text-[0.94rem] sm:px-[22px] font-extrabold text-white shadow-card transition-colors hover:bg-wa-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
      <span className="hidden sm:inline">Agendar avaliação</span>
    </a>
  );
}
