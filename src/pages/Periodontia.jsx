import {
  ArrowDownToLine,
  Brush,
  CalendarCheck,
  Droplets,
  Flame,
  Frown,
  GitCommitHorizontal,
  MoveHorizontal,
  Wind,
} from 'lucide-react';
import { CLINIC, whatsappLink } from '../lib/site.js';
import {
  CtaFinal,
  FaqColumns,
  LpFloatingCta,
  LpFooter,
  LpHeader,
} from '../components/lp/sections.jsx';
import {
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
  'Olá! Vim pela página de periodontia e gostaria de agendar uma avaliação.'
);

const SINAIS = [
  { Icon: Droplets, title: 'Sangramento', text: 'ao escovar ou usar fio dental' },
  { Icon: Wind, title: 'Mau hálito', text: 'que não passa com a higiene' },
  { Icon: Flame, title: 'Gengiva vermelha', text: 'inchada ou sensível' },
  { Icon: ArrowDownToLine, title: 'Gengiva recuando', text: 'dentes parecendo mais longos' },
  { Icon: MoveHorizontal, title: 'Dente mole', text: 'ou com espaços novos entre eles' },
  { Icon: Frown, title: 'Desconforto', text: 'ao mastigar ou escovar' },
];

const ESTAGIOS = [
  { title: 'Gengiva saudável', text: 'Rosada, firme e sem sangramento ao escovar.', dot: 'bg-white' },
  {
    title: 'Gengivite',
    text: 'Inflamação inicial da gengiva, ainda sem perda dos tecidos de suporte.',
    dot: 'bg-champagne',
  },
  {
    title: 'Periodontite',
    text: 'A inflamação atinge o osso e os tecidos que sustentam os dentes.',
    dot: 'bg-brand-700',
  },
];

const ETAPAS = [
  {
    title: 'Exame da gengiva',
    text: 'Sondagem para medir a saúde dos tecidos ao redor dos dentes.',
  },
  { title: 'Limpeza profissional', text: 'Remoção de placa e tártaro, com conforto.' },
  { title: 'Orientação de higiene', text: 'Você aprende a cuidar da gengiva em casa.' },
  { title: 'Retornos de manutenção', text: 'Acompanhamento para preservar o resultado.' },
];

const HABITOS = [
  {
    Icon: Brush,
    title: 'Escova macia',
    text: 'Escovação suave, conforme a orientação da equipe.',
  },
  {
    Icon: GitCommitHorizontal,
    title: 'Fio e escova interdental',
    text: 'Limpeza entre os dentes, onde a escova não alcança.',
  },
  {
    Icon: CalendarCheck,
    title: 'Retorno periódico',
    text: 'Consultas de manutenção no intervalo indicado.',
  },
];

export const FAQ = [
  {
    question: 'Gengiva que sangra é normal?',
    answer: 'Não é o esperado. Vale uma avaliação para entender a causa.',
  },
  {
    question: 'A limpeza dói?',
    answer: 'Em gengiva inflamada pode haver sensibilidade. Avise a equipe e ajustamos o cuidado.',
  },
  {
    question: 'Quanto custa?',
    answer: 'O valor depende do caso e é informado após a avaliação presencial.',
  },
];

export default function Periodontia() {
  return (
    <div className="min-h-dvh bg-cloud">
      <main>
        <section className="bg-lavanda-100">
          <LpHeader tone="light" ctaHref={CTA} />
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[560px_1fr] lg:gap-20 lg:pr-12 xl:pr-24">
            <img
              src="/images/lp/pe-modelo.webp"
              alt="Modelo anatômico de arcadas dentárias com gengiva sobre bancada clara"
              width="1200"
              height="1630"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="h-[380px] w-full rounded-br-[140px] object-cover sm:h-[460px] lg:h-[760px] lg:rounded-br-none lg:rounded-r-[280px]"
            />
            <div className="flex flex-col items-start gap-8 px-5 pb-14 sm:px-8 lg:p-0">
              <Eyebrow>Periodontia | Boca do Rio, Salvador</Eyebrow>
              <Headline
                lines={['Gengiva saudável,', 'dentes bem', 'cuidados.']}
                className="text-[2.6rem] sm:text-[4rem] lg:text-[4.75rem] lg:leading-[1.04]"
              />
              <p className="max-w-[520px] text-lg leading-relaxed text-graphite">
                Avaliação e tratamento da gengiva e dos tecidos que sustentam os dentes, com orientação
                para o cuidado em casa.
              </p>
              <WhatsAppButton href={CTA}>Agendar avaliação de periodontia</WhatsAppButton>
              <div className="flex w-full max-w-[520px] items-center justify-between gap-4 border-t border-ink/[0.09] pt-4">
                <span className="font-display text-lg text-ink">{CLINIC.responsavelTecnica}</span>
                <span className="text-xs font-semibold text-graphite">
                  Responsável técnica | {CLINIC.cro}
                </span>
              </div>
            </div>
          </div>
        </section>

        <Section innerClassName="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Sinais de alerta">Você notou algum destes sinais?</SectionTitle>
            <p className="shrink-0 text-[0.94rem] text-graphite">Só a avaliação confirma a causa.</p>
          </div>
          <ul className="grid border-b border-ink/[0.09] sm:grid-cols-2 lg:grid-cols-3">
            {SINAIS.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col gap-5 border-t border-ink/[0.09] py-8 sm:border-l sm:px-8 sm:[&:nth-child(odd)]:border-l-0 sm:[&:nth-child(odd)]:pl-0 lg:p-10 lg:[&:nth-child(odd)]:border-l lg:[&:nth-child(odd)]:pl-10 lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0"
              >
                <Icon className="h-9 w-9 text-brand-700" strokeWidth={1.4} aria-hidden="true" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[1.875rem] leading-tight tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="text-base leading-6 text-graphite">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section bg="bg-ink" innerClassName="flex flex-col gap-16">
          <SectionTitle eyebrow="Por que avaliar cedo" light>
            A doença da gengiva avança em silêncio.
          </SectionTitle>
          <div className="flex flex-col gap-8">
            <div aria-hidden="true" className="hidden items-center lg:flex">
              {ESTAGIOS.map((estagio, index) => (
                <div key={estagio.title} className={`flex items-center ${index < ESTAGIOS.length - 1 ? 'flex-1' : ''}`}>
                  <span className={`h-[18px] w-[18px] shrink-0 rounded-full ${estagio.dot}`} />
                  {index < ESTAGIOS.length - 1 && <span className="h-px flex-1 bg-champagne" />}
                </div>
              ))}
            </div>
            <ol className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              {ESTAGIOS.map((estagio, index) => (
                <li key={estagio.title} className="flex flex-col gap-2.5 border-t border-white/15 pt-6 lg:border-t-0 lg:pt-0">
                  <span className="font-display text-[0.94rem] text-champagne">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[1.875rem] leading-tight text-white">{estagio.title}</h3>
                  <p className="text-base leading-[1.55] text-mist">{estagio.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-sm text-mist">O diagnóstico e o tratamento dependem da avaliação clínica.</p>
        </Section>

        <Section bg="bg-lavanda-100" innerClassName="grid items-center gap-14 lg:grid-cols-[1fr_480px] lg:gap-24">
          <div className="flex flex-col gap-7 lg:order-1">
            <Eyebrow>Na clínica</Eyebrow>
            <h2 className="lp-h2 lg:text-[3.25rem] lg:leading-[1.08]">Do exame à manutenção, passo a passo.</h2>
            <RuleList>
              {ETAPAS.map((etapa, index) => (
                <RuleItem key={etapa.title} className="flex gap-6 py-[22px]">
                  <span className="lp-num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-[1.625rem] leading-tight text-ink">{etapa.title}</h3>
                    <p className="text-[0.94rem] leading-[1.45] text-graphite">{etapa.text}</p>
                  </div>
                </RuleItem>
              ))}
            </RuleList>
          </div>
          <FramedPhoto
            src="/images/lp/pe-sonda.webp"
            alt="Sonda periodontal medindo a gengiva em um modelo anatômico"
            width="1000"
            height="1485"
            radius="rounded-t-full rounded-b-3xl"
            className="mx-auto aspect-[456/676] w-[calc(100%-0.75rem)] max-w-[456px] lg:order-2 lg:mx-0"
          />
        </Section>

        <section className="relative flex min-h-[480px] items-center overflow-hidden bg-ink px-5 py-16 sm:px-8 xl:px-24">
          <img
            src="/images/lp/pe-limpeza.webp"
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
              <Eyebrow tone="light">Nosso cuidado</Eyebrow>
              <p className="font-display text-[2rem] leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.875rem]">
                A gengiva sustenta o sorriso. Cuidar dela vem primeiro.
              </p>
              <p className="text-[1.06rem] text-mist-light">Tratamento conduzido após avaliação presencial.</p>
            </div>
          </div>
        </section>

        <Section innerClassName="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Em casa">Pequenos hábitos protegem a gengiva.</SectionTitle>
            <p className="shrink-0 text-[0.94rem] text-graphite">Orientados pela equipe na avaliação.</p>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[760px_1fr] lg:gap-12">
            <img
              src="/images/lp/pe-higiene.webp"
              alt="Escova macia e fio dental sobre bancada clara"
              width="1500"
              height="907"
              loading="lazy"
              decoding="async"
              className="h-[280px] w-full rounded-3xl object-cover sm:h-[380px] lg:h-[460px]"
            />
            <RuleList>
              {HABITOS.map(({ Icon, title, text }) => (
                <RuleItem key={title} className="flex items-center gap-5 py-[22px]">
                  <Icon className="h-7 w-7 shrink-0 text-brand-700" strokeWidth={1.5} aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-2xl leading-tight text-ink">{title}</h3>
                    <p className="text-[0.94rem] leading-[1.45] text-graphite">{text}</p>
                  </div>
                </RuleItem>
              ))}
            </RuleList>
          </div>
        </Section>

        <FaqColumns items={FAQ} />
        <CtaFinal
          title="Agende sua avaliação de periodontia."
          lead="Envie uma mensagem e escolha o horário para avaliar a sua gengiva."
          buttonLabel="Agendar avaliação de periodontia"
          href={CTA}
        />
      </main>
      <LpFooter />
      <LpFloatingCta href={CTA} />
    </div>
  );
}
