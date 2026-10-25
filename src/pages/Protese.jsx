import { ArrowRight, CalendarCheck, HeartHandshake, MessageCircle } from 'lucide-react';
import { CLINIC, whatsappLink } from '../lib/site.js';
import {
  CtaFinal,
  FactsBar,
  FaqColumns,
  LpFloatingCta,
  LpFooter,
  LpHeader,
} from '../components/lp/sections.jsx';
import {
  DetailRow,
  Eyebrow,
  FramedPhoto,
  Headline,
  RuleItem,
  RuleList,
  Section,
  SectionTitle,
  WhatsAppButton,
} from '../components/lp/ui.jsx';

const CTA = whatsappLink(
  'Olá! Vim pela página de prótese dentária e gostaria de agendar uma avaliação.'
);

const FACTS = [
  { title: '12 anos', text: 'de experiência em odontologia' },
  { title: 'Avaliação', text: 'presencial antes de qualquer tratamento' },
  { title: 'Seg a sex', text: 'atendimento na Boca do Rio' },
];

const SITUACOES = [
  { situation: 'Perdi um dente', indication: 'Coroa ou ponte fixa' },
  { situation: 'Perdi vários dentes', indication: 'Prótese parcial' },
  { situation: 'Uso dentadura e ela não firma', indication: 'Prótese total sobre implantes' },
  { situation: 'Minha prótese antiga incomoda', indication: 'Reavaliar ou refazer' },
];

const TIPOS = [
  {
    title: 'Prótese fixa',
    text: 'Coroas e pontes cimentadas, com aparência natural.',
    image: '/images/lp/prot-ponte.webp',
    alt: 'Ponte dentária fixa sobre modelo de dentes',
    details: [
      ['Indicada para', 'Poucos dentes ausentes'],
      ['Higiene', 'Escovação e fio dental'],
    ],
  },
  {
    title: 'Prótese removível',
    text: 'Parcial ou total, retirada para limpar.',
    image: '/images/lp/prot-removivel.webp',
    alt: 'Prótese dentária removível sobre superfície clara',
    details: [
      ['Indicada para', 'Vários dentes ausentes'],
      ['Higiene', 'Retirada e limpa fora da boca'],
    ],
  },
  {
    title: 'Sobre implante',
    text: 'Prótese apoiada em implantes, com mais estabilidade.',
    image: '/images/lp/prot-implante.webp',
    alt: 'Prótese apoiada em implantes dentários',
    details: [
      ['Indicada para', 'Quem busca estabilidade'],
      ['Higiene', 'Cuidado com a região do implante'],
    ],
  },
];

const PONTOS = [
  { Icon: MessageCircle, text: 'Plano explicado antes' },
  { Icon: HeartHandshake, text: 'Conforto no atendimento' },
  { Icon: CalendarCheck, text: 'Retorno para ajustes' },
];

const ETAPAS = [
  { title: 'Primeiro contato', text: 'Você conta o que sente e agenda pelo WhatsApp.' },
  { title: 'Avaliação presencial', text: 'Examinamos sua saúde bucal e o seu objetivo.' },
  { title: 'Plano apresentado', text: 'Você conhece as etapas antes de começar.' },
  { title: 'Tratamento e retorno', text: 'Instalação e retorno para ajuste, conforme o seu plano.' },
];

export const FAQ = [
  {
    question: 'Prótese fixa ou removível: qual escolher?',
    answer: 'Depende de quantos dentes faltam. Definimos na avaliação.',
  },
  {
    question: 'Preciso de avaliação antes?',
    answer: 'Sim. O exame presencial vem antes do plano.',
  },
  {
    question: 'Quanto custa?',
    answer: 'O valor depende do caso e é informado após a avaliação presencial.',
  },
];

export default function Protese() {
  return (
    <div className="min-h-dvh bg-cloud">
      <main>
        <section className="bg-ink">
          <LpHeader tone="dark" ctaHref={CTA} />
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1fr_520px] lg:gap-[72px] lg:pb-[72px] lg:pt-14 xl:px-24">
            <div className="flex flex-col items-start gap-7">
              <Eyebrow tone="light">Prótese dentária | Boca do Rio, Salvador</Eyebrow>
              <Headline
                lines={['Mastigar,', 'falar e sorrir', 'sem receio.']}
                color="text-white"
                accent="text-champagne"
                className="text-[2.9rem] sm:text-[4.5rem] lg:text-[5.5rem] lg:leading-[1.02]"
              />
              <p className="max-w-[500px] text-lg leading-relaxed text-mist">
                Prótese fixa, removível ou sobre implante, planejada para o seu caso após uma
                avaliação presencial na Oral Clinic.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <WhatsAppButton href={CTA}>Agendar avaliação de prótese</WhatsAppButton>
                <a href="#caminhos" className="text-[0.94rem] font-semibold text-white underline-offset-4 hover:underline">
                  Qual prótese serve ao meu caso?
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-[520/640] w-full max-w-[520px]">
              <div
                aria-hidden="true"
                className="absolute left-[10.8%] top-0 h-[93.75%] w-[84.6%] rounded-t-full border border-champagne"
              />
              <img
                src="/images/lp/dra-marcela.webp"
                alt={`${CLINIC.responsavelTecnica}, responsável técnica da Oral Clinic, de braços cruzados na clínica`}
                width="1000"
                height="1300"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="absolute left-0 top-[6.25%] h-[93.75%] w-[84.6%] rounded-t-full object-cover"
              />
              <div className="absolute bottom-[4%] right-0 flex flex-col gap-0.5 rounded-2xl bg-cloud px-[22px] py-4">
                <span className="font-display text-[1.06rem] text-ink">{CLINIC.responsavelTecnica}</span>
                <span className="text-xs font-semibold text-graphite">
                  Responsável técnica | {CLINIC.cro}
                </span>
              </div>
            </div>
          </div>
          <FactsBar facts={FACTS} tone="dark" />
        </section>

        <Section id="situacoes" innerClassName="grid items-start gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
          <img
            src="/images/lp/prot-coroa.webp"
            alt="Coroa dentária sobre superfície clara"
            width="1000"
            height="1400"
            loading="lazy"
            decoding="async"
            className="aspect-[440/620] w-full max-w-[440px] rounded-t-full rounded-b-2xl object-cover"
          />
          <div className="flex flex-col gap-10">
            <SectionTitle eyebrow="Por onde começar">Qual é a sua situação?</SectionTitle>
            <RuleList>
              {SITUACOES.map((item, index) => (
                <RuleItem
                  key={item.situation}
                  className="flex flex-wrap items-center gap-x-10 gap-y-2 py-7 sm:flex-nowrap lg:py-8"
                >
                  <span className="lp-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 flex-1 basis-[60%] font-display text-[1.4rem] leading-tight tracking-[-0.02em] text-ink sm:basis-auto lg:text-[1.625rem]">
                    {item.situation}
                  </span>
                  <span className="text-[0.94rem] font-semibold text-brand-700">{item.indication}</span>
                  <ArrowRight className="hidden h-6 w-6 shrink-0 text-brand-700 sm:block" strokeWidth={1.6} aria-hidden="true" />
                </RuleItem>
              ))}
            </RuleList>
            <p className="text-sm text-graphite">A indicação final depende da avaliação clínica.</p>
          </div>
        </Section>

        <Section id="caminhos" bg="bg-lavanda-100" innerClassName="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Os três caminhos">Três caminhos para recuperar os dentes.</SectionTitle>
            <p className="shrink-0 text-[0.94rem] text-graphite">Cada caso pede uma solução diferente.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {TIPOS.map((tipo, index) => (
              <article key={tipo.title} className="flex flex-col gap-6">
                <img
                  src={tipo.image}
                  alt={tipo.alt}
                  width="900"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-[320px] w-full rounded-t-full rounded-b-2xl object-cover md:h-[380px]"
                />
                <div className="flex flex-col gap-2">
                  <span className="font-display text-sm text-champagne-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[1.875rem] leading-tight tracking-[-0.02em] text-ink">
                    {tipo.title}
                  </h3>
                  <p className="text-base leading-6 text-graphite">{tipo.text}</p>
                </div>
                <dl className="border-b border-ink/[0.09]">
                  {tipo.details.map(([label, value]) => (
                    <DetailRow key={label} label={label} value={value} />
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </Section>

        <Section innerClassName="grid items-center gap-14 lg:grid-cols-[480px_1fr] lg:gap-24">
          <FramedPhoto
            src="/images/lp/atendimento.webp"
            alt="Atendimento humanizado na Oral Clinic"
            width="1000"
            height="1300"
            className="mx-auto aspect-[456/596] w-[calc(100%-0.75rem)] max-w-[456px] lg:mx-0"
          />
          <div className="flex flex-col gap-8">
            <Eyebrow>Atendimento humanizado</Eyebrow>
            <h2 className="lp-h2">Cuidado com calma, do início ao fim.</h2>
            <p className="lp-lead">Aqui você é ouvido e entende cada etapa antes de começar.</p>
            <RuleList>
              {PONTOS.map(({ Icon, text }) => (
                <RuleItem key={text} className="flex items-center gap-[18px] py-5">
                  <Icon className="h-6 w-6 shrink-0 text-brand-700" strokeWidth={1.6} aria-hidden="true" />
                  <span className="font-display text-[1.375rem] text-ink">{text}</span>
                </RuleItem>
              ))}
            </RuleList>
          </div>
        </Section>

        <section className="relative flex min-h-[480px] items-center overflow-hidden bg-ink px-5 py-16 sm:px-8 xl:px-24">
          <img
            src="/images/lp/prot-avaliacao.webp"
            alt=""
            aria-hidden="true"
            width="1800"
            height="600"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/85 lg:bg-[linear-gradient(90deg,#2a1538F5_0%,#2a1538D9_45%,#2a153800_85%)]"
          />
          <div className="relative mx-auto flex w-full max-w-[1248px] flex-col gap-6">
            <div className="flex max-w-[640px] flex-col gap-6">
              <Eyebrow tone="light">Nosso método</Eyebrow>
              <p className="font-display text-[2rem] leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.875rem]">
                Primeiro entendemos a sua boca. Depois, planejamos a prótese.
              </p>
              <p className="text-[1.06rem] text-mist-light">Planejamento individual, com explicação em cada etapa.</p>
            </div>
          </div>
        </section>

        <Section innerClassName="flex flex-col gap-16">
          <SectionTitle eyebrow="Como funciona">Quatro passos, do WhatsApp ao tratamento.</SectionTitle>
          <div>
            <div aria-hidden="true" className="hidden items-center lg:flex">
              {ETAPAS.map((etapa, index) => (
                <div key={etapa.title} className={`flex items-center ${index < ETAPAS.length - 1 ? 'flex-1' : ''}`}>
                  <span className={`h-4 w-4 shrink-0 rounded-full ${index === 0 ? 'bg-brand-700' : 'bg-champagne'}`} />
                  {index < ETAPAS.length - 1 && <span className="h-px flex-1 bg-champagne" />}
                </div>
              ))}
            </div>
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:pt-8">
              {ETAPAS.map((etapa, index) => (
                <li key={etapa.title} className="flex flex-col gap-2.5 border-t border-champagne pt-6 lg:border-t-0 lg:pt-0">
                  <span className="font-display text-[0.94rem] text-champagne-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-ink">{etapa.title}</h3>
                  <p className="text-[0.94rem] leading-[1.45] text-graphite">{etapa.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <FaqColumns items={FAQ} />
        <CtaFinal
          title="Agende sua avaliação de prótese dentária."
          lead="Conte a sua situação pelo WhatsApp e escolha o horário da avaliação."
          buttonLabel="Agendar avaliação de prótese"
          href={CTA}
        />
      </main>
      <LpFooter />
      <LpFloatingCta href={CTA} />
    </div>
  );
}
