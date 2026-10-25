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
  'Olá! Vim pela página de implantes dentários e gostaria de agendar uma avaliação.'
);

const FACTS = [
  { title: 'Avaliação', text: 'com exames antes de planejar' },
  { title: 'Dra. Marcela', text: 'responsável técnica, CRO-BA 10244' },
  { title: 'Seg a sex', text: 'atendimento na Boca do Rio' },
];

const PECAS = [
  { title: 'Coroa', text: 'A parte visível, feita com aparência natural.', position: 'left', top: 'lg:top-[150px]' },
  { title: 'Pilar', text: 'Peça que conecta a coroa ao implante.', position: 'right', top: 'lg:top-[290px]' },
  { title: 'Implante', text: 'Apoio de titânio, colocado no osso.', position: 'left', top: 'lg:top-[480px]' },
];

const CASOS = [
  {
    mark: '1',
    title: 'Um dente ausente',
    text: 'Reposição individual, sem apoiar nos dentes vizinhos.',
  },
  {
    mark: '2+',
    title: 'Vários dentes',
    text: 'Implantes que sustentam pontes ou próteses parciais.',
  },
  {
    mark: 'Total',
    title: 'Dentadura que não firma',
    text: 'Sua dentadura se mexe? A prótese sobre implantes dá mais estabilidade.',
  },
];

const ETAPAS = [
  { title: 'Avaliação e exames', text: 'Exame clínico e de imagem da região.' },
  { title: 'Planejamento', text: 'Definimos o plano e você o conhece por inteiro.' },
  { title: 'Cirurgia', text: 'Colocação do implante, com atenção ao conforto.' },
  { title: 'Cicatrização', text: 'Período de integração, com retornos.' },
  { title: 'Prótese final', text: 'Coroa ou prótese sobre o implante.' },
];

export const FAQ = [
  {
    question: 'Todo mundo pode fazer implante?',
    answer: 'Depende da avaliação clínica e dos exames.',
  },
  {
    question: 'O procedimento dói?',
    answer:
      'O procedimento é feito com anestesia local. Algum desconforto depois pode ocorrer, e a equipe orienta o cuidado.',
  },
  {
    question: 'Quanto custa?',
    answer: 'O valor depende do caso e é informado após a avaliação presencial.',
  },
];

export default function Implantes() {
  return (
    <div className="min-h-dvh bg-cloud">
      <main>
        <section className="relative flex flex-col overflow-hidden bg-lavanda-100 lg:min-h-[900px]">
          <img
            src="/images/lp/im-hero.webp"
            alt="Implantes dentários e pilar de titânio sobre um prato lilás com tecido roxo ao fundo"
            width="2000"
            height="1250"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[78%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-lavanda-100/85 lg:bg-transparent"
          />
          <LpHeader tone="overlay" ctaHref={CTA} />
          <div className="relative z-10 flex flex-1 items-center px-5 pb-14 pt-6 sm:px-8 lg:pb-16 lg:pt-10 xl:px-24">
            <div className="mx-auto w-full max-w-[1248px]">
              <div className="flex max-w-[640px] flex-col items-start gap-[30px]">
                <Eyebrow>Implantes dentários | Boca do Rio, Salvador</Eyebrow>
                <Headline
                  lines={['Reponha o dente', 'que faltou,', 'com firmeza.']}
                  className="text-[2.75rem] sm:text-[4.25rem] lg:text-[4.875rem] lg:leading-[1.03]"
                />
                <p className="max-w-[500px] text-lg leading-relaxed text-graphite">
                  Implante planejado caso a caso, com avaliação e exames antes de qualquer procedimento.
                </p>
                <WhatsAppButton href={CTA}>Agendar avaliação de implante</WhatsAppButton>
              </div>
            </div>
          </div>
          <FactsBar facts={FACTS} tone="dark" compact className="relative z-10 bg-ink" />
        </section>

        <Section innerClassName="flex flex-col gap-16">
          <SectionTitle eyebrow="Como é o implante" className="items-center text-center">
            Três peças, uma estrutura firme.
          </SectionTitle>
          <div className="relative flex flex-col items-center gap-10 lg:block lg:h-[720px]">
            <FramedPhoto
              src="/images/lp/im-pecas.webp"
              alt="Coroa, pilar e implante de titânio dispostos lado a lado"
              width="1000"
              height="1500"
              radius="rounded-full"
              className="aspect-[480/720] w-[calc(100%-0.75rem)] max-w-[480px] lg:absolute lg:left-1/2 lg:top-0 lg:w-[480px] lg:-translate-x-[calc(50%+12px)]"
            />
            {PECAS.map((peca, index) => (
              <div
                key={peca.title}
                className={`flex w-full max-w-[480px] flex-col gap-2 border-t border-ink/[0.09] pt-[18px] lg:absolute lg:w-[330px] lg:max-w-none ${peca.top} ${
                  peca.position === 'right' ? 'lg:right-0' : 'lg:left-0 lg:items-end lg:text-right'
                }`}
              >
                <span className="font-display text-[0.94rem] text-champagne-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[2rem] leading-tight tracking-[-0.02em] text-ink">{peca.title}</h3>
                <p className="text-base leading-6 text-graphite">{peca.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section bg="bg-lavanda-100" innerClassName="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Para quem é">Do dente isolado à arcada completa.</SectionTitle>
            <p className="shrink-0 text-[0.94rem] text-graphite">Cada situação pede um plano diferente.</p>
          </div>
          <div className="grid md:grid-cols-3">
            {CASOS.map((caso, index) => (
              <article
                key={caso.title}
                className={`flex flex-col gap-4 py-8 md:px-10 md:py-2 ${
                  index === 0 ? 'md:pl-0' : 'border-t border-ink/[0.09] md:border-l md:border-t-0'
                }`}
              >
                <span className="font-display text-[4rem] leading-none tracking-[-0.03em] text-brand-700 lg:text-[5.5rem]">
                  {caso.mark}
                </span>
                <h3 className="font-display text-[1.875rem] leading-tight tracking-[-0.02em] text-ink">{caso.title}</h3>
                <p className="text-base leading-6 text-graphite">{caso.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section bg="bg-ink" innerClassName="grid items-center gap-14 lg:grid-cols-[600px_1fr] lg:gap-[88px]">
          <FramedPhoto
            src="/images/lp/im-modelo.webp"
            alt="Modelo de arcada dentária com implantes sobre superfície clara"
            width="1200"
            height="1320"
            className="aspect-[576/636] w-[calc(100%-0.75rem)] max-w-[576px] lg:w-[576px]"
          />
          <div className="flex flex-col gap-7">
            <Eyebrow tone="light">O caminho</Eyebrow>
            <h2 className="lp-h2 text-white lg:text-[3rem] lg:leading-[1.08]">Cada etapa explicada antes de começar.</h2>
            <RuleList tone="dark">
              {ETAPAS.map((etapa, index) => (
                <RuleItem key={etapa.title} tone="dark" className="flex items-center gap-5 py-[18px]">
                  <span className="font-display text-base text-champagne">{String(index + 1).padStart(2, '0')}</span>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-display text-[1.4375rem] leading-tight text-white">{etapa.title}</h3>
                    <p className="text-sm leading-5 text-mist">{etapa.text}</p>
                  </div>
                </RuleItem>
              ))}
            </RuleList>
            <p className="text-sm text-mist">O tempo de cada fase é informado no seu plano.</p>
          </div>
        </Section>

        <FaqColumns items={FAQ} />
        <CtaFinal
          title="Agende sua avaliação de implantes."
          lead="Envie uma mensagem e escolha o horário da sua avaliação com exames."
          buttonLabel="Agendar avaliação de implante"
          href={CTA}
        />
      </main>
      <LpFooter />
      <LpFloatingCta href={CTA} />
    </div>
  );
}
