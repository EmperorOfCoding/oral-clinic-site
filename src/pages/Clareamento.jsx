import { CalendarCheck, Coffee, Sparkles, ThermometerSnowflake } from 'lucide-react';
import { whatsappLink } from '../lib/site.js';
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
  'Olá! Vim pela página de clareamento dental e gostaria de agendar uma avaliação.'
);

const FACTS = [
  { title: 'Avaliação', text: 'antes de qualquer clareamento' },
  { title: 'Dra. Marcela', text: 'responsável técnica, CRO-BA 10244' },
  { title: 'Seg a sex', text: 'atendimento na Boca do Rio' },
];

// Escala de cor de referencia, do mais claro ao mais escuro.
const TONS = ['#fffefb', '#fbf7ee', '#f6efdc', '#f0e5c8', '#e9dbb3', '#e1cf9d', '#d8c488', '#cdb673'];

const CHECAGENS = [
  { title: 'Saúde bucal', text: 'Cáries, gengiva e restaurações são avaliadas antes.' },
  { title: 'Cor de partida', text: 'O tom atual é registrado na escala de cor.' },
  { title: 'Técnica indicada', text: 'Escolhemos a opção adequada ao seu caso.' },
];

const CUIDADOS = [
  {
    Icon: ThermometerSnowflake,
    title: 'Sensibilidade acompanhada',
    text: 'Se surgir desconforto, ajustamos a conduta.',
  },
  { Icon: Coffee, title: 'Hábitos do dia a dia', text: 'Orientação sobre café, vinho e cigarro.' },
  {
    Icon: CalendarCheck,
    title: 'Retornos combinados',
    text: 'Acompanhamos o resultado depois do clareamento.',
  },
];

const ETAPAS = [
  {
    title: 'Fale pelo WhatsApp',
    text: 'Você conta o que deseja e agenda o horário.',
    tom: TONS[2],
  },
  {
    title: 'Avaliação presencial',
    text: 'Exame, registro do tom e escolha da técnica.',
    tom: TONS[4],
  },
  {
    title: 'Clareamento e retorno',
    text: 'Tratamento com acompanhamento até o fim.',
    tom: TONS[6],
  },
];

export const FAQ = [
  {
    question: 'Clareamento causa sensibilidade?',
    answer: 'Pode ocorrer. Acompanhamos e orientamos.',
  },
  {
    question: 'Qualquer pessoa pode clarear?',
    answer: 'Depende da avaliação clínica dos dentes.',
  },
  {
    question: 'Quanto custa?',
    answer: 'O valor depende do caso e é informado após a avaliação presencial.',
  },
];

function Swatches({ className, swatchClassName }) {
  return (
    <div aria-hidden="true" className={`flex ${className}`}>
      {TONS.map((tom) => (
        <span
          key={tom}
          className={`flex-1 border border-ink/[0.09] ${swatchClassName}`}
          style={{ backgroundColor: tom }}
        />
      ))}
    </div>
  );
}

export default function Clareamento() {
  return (
    <div className="min-h-dvh bg-cloud">
      <main>
        <section className="bg-lavanda-100">
          <LpHeader tone="light" ctaHref={CTA} />
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[1fr_560px] lg:gap-[88px] lg:pb-[88px] lg:pt-10 xl:px-24">
            <div className="flex flex-col items-start gap-8">
              <Eyebrow>Clareamento dental | Boca do Rio, Salvador</Eyebrow>
              <Headline
                lines={['Um sorriso', 'mais claro,', 'com cuidado.']}
                className="text-[3rem] sm:text-[4.75rem] lg:text-[5.75rem] lg:leading-[1.02]"
              />
              <p className="max-w-[500px] text-lg leading-relaxed text-graphite">
                Clareamento indicado após avaliação, com acompanhamento da sensibilidade e respeito
                ao tom natural dos seus dentes.
              </p>
              <WhatsAppButton href={CTA}>Agendar avaliação de clareamento</WhatsAppButton>
              <div className="flex w-full max-w-[500px] flex-col gap-3">
                <Swatches className="gap-1" swatchClassName="h-14 rounded-t-3xl rounded-b-md" />
                <p className="text-[0.81rem] text-graphite">
                  Escala de cor: o tom de partida é registrado na avaliação.
                </p>
              </div>
            </div>

            <div className="relative mx-auto aspect-[560/720] w-full max-w-[560px]">
              <div
                aria-hidden="true"
                className="absolute left-[5%] top-0 h-[97.2%] w-[92.9%] rounded-full border border-champagne"
              />
              <img
                src="/images/lp/cl-escala.webp"
                alt="Escala de cor de dentes sobre superfície lilás"
                width="1100"
                height="1415"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="absolute left-0 top-[2.8%] h-[97.2%] w-[92.9%] rounded-full object-cover"
              />
            </div>
          </div>
          <FactsBar facts={FACTS} tone="light" />
        </section>

        <Section innerClassName="grid items-center gap-14 lg:grid-cols-[640px_1fr] lg:gap-[88px]">
          <div className="relative lg:ml-6">
            <FramedPhoto
              src="/images/lp/cl-antes-depois.webp"
              alt="Antes e depois de um clareamento dental realizado na clínica"
              width="1300"
              height="1218"
              offset="left"
              className="aspect-[640/576] w-[calc(100%-0.75rem)] ml-3 lg:ml-0 lg:w-full"
            />
            <p className="absolute bottom-3 left-7 right-4 w-fit max-w-[calc(100%-2.75rem)] rounded-lg bg-ink/90 px-3.5 py-2 text-[0.81rem] text-white lg:bottom-4 lg:left-4">
              Caso real da clínica. Resultados variam de pessoa para pessoa.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <Eyebrow>Antes de clarear</Eyebrow>
            <h2 className="lp-h2 lg:text-[3.25rem] lg:leading-[1.08]">Primeiro, a avaliação.</h2>
            <p className="lp-lead">
              O clareamento é indicado após o exame dos dentes e da gengiva. Por isso começamos pela
              avaliação.
            </p>
            <RuleList>
              {CHECAGENS.map((item, index) => (
                <RuleItem key={item.title} className="flex gap-6 py-6">
                  <span className="lp-num">{String(index + 1).padStart(2, '0')}</span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-2xl leading-tight text-ink">{item.title}</h3>
                    <p className="text-[0.94rem] leading-[1.45] text-graphite">{item.text}</p>
                  </div>
                </RuleItem>
              ))}
            </RuleList>
          </div>
        </Section>

        <Section bg="bg-ink" innerClassName="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Duas formas de clarear" light>
              A técnica certa para a sua rotina.
            </SectionTitle>
            <p className="shrink-0 text-[0.94rem] text-mist">Escolha conforme a sua rotina e a avaliação.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="flex flex-col gap-7">
              <img
                src="/images/lp/cl-moldeira.webp"
                alt="Moldeiras de clareamento sob medida com gel"
                width="1000"
                height="670"
                loading="lazy"
                decoding="async"
                className="h-[320px] w-full rounded-t-full rounded-b-2xl object-cover lg:h-[400px]"
              />
              <div className="flex flex-col gap-2">
                <span className="font-display text-sm text-champagne">01</span>
                <h3 className="font-display text-[2rem] leading-tight tracking-[-0.02em] text-white">
                  Caseiro supervisionado
                </h3>
                <p className="text-base leading-6 text-mist">
                  Moldeiras sob medida e gel, com uso em casa e retornos de controle.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-between gap-7 rounded-t-[200px] rounded-b-2xl bg-white/[0.07] px-8 pb-10 pt-16 sm:px-10 lg:pt-14">
              <Sparkles className="h-11 w-11 text-champagne" strokeWidth={1.2} aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <span className="font-display text-sm text-champagne">02</span>
                <h3 className="font-display text-[2rem] leading-tight tracking-[-0.02em] text-white">
                  No consultório
                </h3>
                <p className="text-base leading-6 text-mist">
                  Aplicação conduzida pela equipe, em sessões marcadas na clínica.
                </p>
              </div>
              <dl className="border-b border-white/15">
                <DetailRow tone="dark" label="Onde" value="Na Oral Clinic" />
                <DetailRow tone="dark" label="Acompanhamento" value="Pela equipe, na sessão" />
                <DetailRow tone="dark" label="Indicação" value="Definida na avaliação" />
              </dl>
            </article>
          </div>
        </Section>

        <Section innerClassName="flex flex-col gap-12">
          <Swatches className="gap-1.5" swatchClassName="h-28 rounded-t-3xl rounded-b-lg sm:h-48 sm:rounded-t-[60px] lg:h-[260px]" />
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
            <p className="max-w-[760px] font-display text-[2rem] leading-[1.12] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3.25rem] lg:leading-[1.1]">
              Cada sorriso tem o seu tom. Respeitamos o seu.
            </p>
            <p className="max-w-sm text-[0.94rem] leading-6 text-graphite">
              O resultado varia de pessoa para pessoa e depende da avaliação clínica.
            </p>
          </div>
        </Section>

        <Section bg="bg-lavanda-100" innerClassName="grid items-center gap-14 lg:grid-cols-[480px_1fr] lg:gap-24">
          <FramedPhoto
            src="/images/lp/cl-cuidados.webp"
            alt="Cuidados após o clareamento dental"
            width="1000"
            height="1415"
            radius="rounded-t-full rounded-b-3xl"
            className="mx-auto aspect-[456/656] w-[calc(100%-0.75rem)] max-w-[456px] lg:mx-0"
          />
          <div className="flex flex-col gap-7">
            <Eyebrow>Durante e depois</Eyebrow>
            <h2 className="lp-h2 lg:text-[3.25rem] lg:leading-[1.08]">Sensibilidade e cuidados, com orientação.</h2>
            <p className="lp-lead">Você sabe o que esperar e como se cuidar em cada fase.</p>
            <RuleList>
              {CUIDADOS.map(({ Icon, title, text }) => (
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

        <Section innerClassName="flex flex-col gap-16">
          <SectionTitle eyebrow="Como funciona">Três passos até o seu clareamento.</SectionTitle>
          <ol className="grid gap-12 md:grid-cols-3 md:gap-12">
            {ETAPAS.map((etapa, index) => (
              <li key={etapa.title} className="flex flex-col gap-5">
                <span
                  aria-hidden="true"
                  className="h-[72px] w-[72px] rounded-full border border-ink/[0.09]"
                  style={{ backgroundColor: etapa.tom }}
                />
                <span className="font-display text-[0.94rem] text-champagne-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[1.75rem] leading-tight text-ink">{etapa.title}</h3>
                <p className="text-base leading-[1.55] text-graphite">{etapa.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <FaqColumns items={FAQ} />
        <CtaFinal
          title="Agende sua avaliação de clareamento dental."
          lead="Envie uma mensagem e escolha o horário para avaliar o seu sorriso."
          buttonLabel="Agendar avaliação de clareamento"
          href={CTA}
        />
      </main>
      <LpFooter />
      <LpFloatingCta href={CTA} />
    </div>
  );
}
