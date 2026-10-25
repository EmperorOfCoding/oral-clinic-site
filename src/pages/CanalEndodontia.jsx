import {
  BadgeCheck,
  CalendarClock,
  CircleAlert,
  MapPin,
  Minus,
  Phone,
  Plus,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Timer,
  UserRound,
} from 'lucide-react';
import { CLINIC, OPENING_HOURS, whatsappLink } from '../lib/site.js';
import { LpFloatingCta } from '../components/lp/sections.jsx';
import { WhatsAppButton } from '../components/lp/ui.jsx';

const CTA = whatsappLink(
  'Olá! Vim pela página de tratamento de canal e gostaria de agendar uma avaliação.'
);
const CTA_DOR = whatsappLink(
  'Olá! Estou com dor de dente e gostaria de uma avaliação o quanto antes.'
);

const SELOS = [
  { Icon: BadgeCheck, text: 'CRO-BA 10244' },
  { Icon: CalendarClock, text: '12 anos de experiência' },
  { Icon: ScanLine, text: 'Avaliação presencial' },
];

const SINAIS = [
  'Dor forte ou latejante, principalmente à noite',
  'Sensibilidade ao quente ou ao frio que não passa',
  'Dor ao mastigar ou ao tocar no dente',
  'Dente escurecido sem causa aparente',
  'Inchaço ou "caroço" na gengiva',
  'Cárie profunda ou dente quebrado',
];

const DUVIDAS = [
  {
    Icon: Syringe,
    title: '"Canal dói?"',
    text: 'O tratamento é feito com anestesia local. A dor que leva à clínica costuma vir da inflamação ou da infecção, e é isso que o tratamento busca resolver.',
  },
  {
    Icon: ShieldCheck,
    title: '"Não é melhor tirar o dente?"',
    text: 'Sempre que possível, preservar o dente natural é o melhor caminho. A avaliação mostra se isso é viável no seu caso.',
  },
  {
    Icon: Timer,
    title: '"Vou perder muito tempo?"',
    text: 'O plano é apresentado antes de começar, com as etapas e o número de sessões previstos para o seu caso.',
  },
];

const ETAPAS = [
  { title: 'Você chama no WhatsApp', text: 'Conta o que está sentindo e escolhe o horário.' },
  { title: 'Exame e radiografia', text: 'A Dra. Marcela examina o dente e confirma o diagnóstico.' },
  { title: 'Plano explicado', text: 'Você sabe as etapas e as sessões antes de começar.' },
  { title: 'Tratamento e proteção', text: 'Limpeza do canal e restauração para proteger o dente.' },
];

const FATOS = [
  { title: '12 anos', text: 'de experiência' },
  { title: 'CRO-BA', text: '10244' },
  { title: 'Seg a sex', text: 'na Boca do Rio' },
];

export const FAQ = [
  {
    question: 'Quanto tempo dura o tratamento de canal?',
    answer:
      'Depende do dente e do quadro. Na avaliação você recebe o número de sessões previsto para o seu caso.',
  },
  {
    question: 'Preciso passar por avaliação antes?',
    answer: 'Sim. O exame clínico e a radiografia vêm antes de qualquer decisão sobre o tratamento.',
  },
  {
    question: 'Depois do canal, o dente precisa de coroa?',
    answer:
      'Depende do caso. A restauração que protege o dente é definida na avaliação e apresentada no plano.',
  },
  {
    question: 'Como agendo e onde fica a clínica?',
    answer: `Pelo WhatsApp, no ${CLINIC.phoneDisplay}. A clínica fica na ${CLINIC.address.line1}, ${CLINIC.address.line2}. Atendimento de segunda a quinta, ${OPENING_HOURS[0].hours}, e sexta, ${OPENING_HOURS[1].hours}.`,
  },
];

const INFO = [
  { Icon: MapPin, title: CLINIC.address.line1, text: CLINIC.address.line2 },
  {
    Icon: CalendarClock,
    title: `Segunda a quinta, ${OPENING_HOURS[0].hours}`,
    text: `Sexta, ${OPENING_HOURS[1].hours}`,
  },
  { Icon: Phone, title: CLINIC.phoneDisplay, text: 'WhatsApp e telefone' },
];

function SmallEyebrow({ children, light = false, className = '' }) {
  return (
    <p
      className={`text-xs font-extrabold uppercase tracking-[0.17em] ${
        light ? 'text-champagne' : 'text-champagne-dark'
      } ${className}`}
    >
      {children}
    </p>
  );
}

export default function CanalEndodontia() {
  return (
    <div className="min-h-dvh bg-cloud">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 bg-champagne-dark px-5 py-2.5 text-[0.81rem] text-white sm:px-8 xl:px-24">
        <p className="font-semibold">Atendimento de segunda a sexta na Boca do Rio, Salvador</p>
        <a href={`tel:+${CLINIC.whatsappNumber}`} className="flex items-center gap-2 font-bold">
          <Phone className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          {CLINIC.phoneDisplay}
        </a>
      </div>

      <main>
        <section className="relative overflow-hidden bg-ink">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-[48%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#7E22CE55_0%,#7E22CE00_100%)]"
          />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[640px_1fr] lg:gap-16 lg:pb-0 lg:pt-11 xl:px-24">
            <div className="flex flex-col gap-6 lg:pb-16">
              <a href="/" className="mb-6 flex w-fit items-center gap-3" aria-label="Oral Clinic Odontologia e Estética, página inicial">
                <img
                  src="/images/logo-oral-clinic-melhorada.png"
                  alt=""
                  width="42"
                  height="42"
                  className="h-[42px] w-[42px] rounded-[10px]"
                />
                <span className="flex flex-col gap-0.5">
                  <span className="font-display text-xl font-medium leading-tight text-white">Oral Clinic</span>
                  <span className="text-[0.56rem] font-semibold tracking-[0.18em] text-[#cdbfe0]">
                    ODONTOLOGIA E ESTÉTICA
                  </span>
                </span>
              </a>

              <p className="flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.69rem] font-bold uppercase tracking-[0.13em] text-[#efe6f7]">
                <Stethoscope className="h-3.5 w-3.5 shrink-0 text-champagne" strokeWidth={1.8} aria-hidden="true" />
                Canal e endodontia | Boca do Rio, Salvador
              </p>
              <h1 className="font-display text-[2.9rem] font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-[4.25rem]">
                <span className="block">Dor de dente</span>{' '}
                <span className="block italic text-champagne">não deve esperar.</span>{' '}
                <span className="mt-3 block text-[0.34em] font-normal leading-snug tracking-normal text-[#efe6f7]">
                  Tratamento de canal na Boca do Rio, em Salvador
                </span>
              </h1>
              <p className="text-[1.19rem] leading-relaxed text-[#e4d9ef]">
                Na Oral Clinic, na Boca do Rio, em Salvador, a Dra. Marcela avalia se o tratamento de canal
                é o caminho para tratar e preservar o seu dente. Atendimento com anestesia local e plano explicado antes de começar.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton href={CTA} variant="green" size="lg" className="font-extrabold shadow-[0_8px_24px_#1FA85540]">
                  Agendar avaliação pelo WhatsApp
                </WhatsAppButton>
                <a href={CTA_DOR} target="_blank" rel="noopener noreferrer" className="max-w-[120px] text-[0.81rem] font-semibold leading-[1.4] text-[#cdbfe0] hover:text-white">
                  Dor agora? Fale no WhatsApp
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-7 gap-y-3 pt-2">
                {SELOS.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-[0.81rem] font-semibold text-white">
                    <Icon className="h-5 w-5 text-champagne" strokeWidth={1.6} aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:self-end">
              <img
                src="/images/lp/canal-procedimento.webp"
                alt="Dra. Marcela Karin realizando um procedimento odontológico em paciente"
                width="1100"
                height="1355"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="aspect-[520/640] w-full rounded-t-full border-2 border-champagne object-cover"
              />
              <div className="absolute -bottom-4 left-4 flex items-center gap-3.5 rounded-[14px] bg-white px-[22px] py-4 shadow-[0_12px_30px_#00000040] sm:-left-12 lg:bottom-20">
                <UserRound className="h-[26px] w-[26px] shrink-0 text-brand-700" strokeWidth={1.6} aria-hidden="true" />
                <span className="flex flex-col gap-0.5">
                  <span className="font-display text-base font-semibold text-ink">{CLINIC.responsavelTecnica}</span>
                  <span className="text-xs text-graphite">Responsável técnica | {CLINIC.cro}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lavanda-100 px-5 py-16 sm:px-8 lg:py-[88px] xl:px-24">
          <div className="mx-auto grid max-w-[1248px] items-center gap-12 lg:grid-cols-[460px_1fr] lg:gap-[84px]">
            <img
              src="/images/lp/im-radiografia.webp"
              alt="Radiografia odontológica usada na avaliação do dente"
              width="1000"
              height="1009"
              loading="lazy"
              decoding="async"
              className="aspect-[460/464] w-full max-w-[460px] rounded-t-full rounded-b-2xl object-cover"
            />
            <div className="flex flex-col gap-5">
              <SmallEyebrow>Quando procurar um dentista</SmallEyebrow>
              <h2 className="font-display text-[2.1rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.625rem]">
                Esses sinais pedem uma avaliação.
              </h2>
              <ul className="grid gap-3.5 sm:grid-cols-2">
                {SINAIS.map((sinal) => (
                  <li
                    key={sinal}
                    className="flex items-center gap-3 rounded-xl border border-ink/[0.09] bg-white px-[18px] py-4"
                  >
                    <CircleAlert className="h-[22px] w-[22px] shrink-0 text-champagne-dark" strokeWidth={1.7} aria-hidden="true" />
                    <span className="text-[0.94rem] font-semibold leading-[1.4] text-ink">{sinal}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.94rem] leading-6 text-graphite">
                Só o exame clínico e a radiografia confirmam se o caso é de canal. Quanto antes a
                avaliação, mais opções para tratar e preservar o dente.
              </p>
              <WhatsAppButton href={CTA} variant="green" className="w-fit font-extrabold">
                Quero avaliar meu dente
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-[84px] xl:px-24">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-10">
            <div className="flex flex-col gap-3.5">
              <SmallEyebrow>O que costuma gerar medo</SmallEyebrow>
              <h2 className="max-w-[700px] font-display text-[1.9rem] font-medium leading-[1.14] tracking-[-0.02em] text-ink sm:text-[2.375rem]">
                Antes de decidir, tire as três dúvidas que mais atrasam o tratamento.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {DUVIDAS.map(({ Icon, title, text }) => (
                <article
                  key={title}
                  className="flex flex-col gap-3.5 rounded-2xl border border-ink/[0.09] bg-white px-7 py-[30px]"
                >
                  <Icon className="h-[30px] w-[30px] text-brand-700" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{title}</h3>
                  <span aria-hidden="true" className="h-[3px] w-9 bg-champagne" />
                  <p className="text-[0.94rem] leading-6 text-graphite">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-5 py-16 sm:px-8 lg:py-[84px] xl:px-24">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-12">
            <div className="flex flex-col items-center gap-3.5 text-center">
              <SmallEyebrow light>Como funciona</SmallEyebrow>
              <h2 className="font-display text-[2rem] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.5rem]">
                Do primeiro contato ao dente protegido.
              </h2>
            </div>
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {ETAPAS.map((etapa, index) => (
                <li key={etapa.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne text-[0.94rem] font-extrabold text-ink">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {index < ETAPAS.length - 1 && <span aria-hidden="true" className="hidden h-0.5 flex-1 bg-white/20 lg:block" />}
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-tight text-white">{etapa.title}</h3>
                  <p className="text-sm leading-[1.55] text-[#cdbfe0]">{etapa.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20 xl:px-24">
          <div className="mx-auto grid max-w-[1248px] items-center gap-12 lg:grid-cols-[520px_1fr] lg:gap-16">
            <img
              src="/images/lp/dra-paciente.webp"
              alt="Dra. Marcela Karin em atendimento na Oral Clinic"
              width="1100"
              height="930"
              loading="lazy"
              decoding="async"
              className="aspect-[520/440] w-full rounded-[20px] object-cover"
            />
            <div className="flex max-w-[664px] flex-col gap-5">
              <SmallEyebrow>Quem cuida do seu caso</SmallEyebrow>
              <h2 className="font-display text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.5rem]">
                Dra. Marcela Karin, cirurgiã-dentista.
              </h2>
              <p className="text-[1.06rem] leading-[1.6] text-graphite">
                Atendimento próximo, com explicação clara em cada etapa. Você entende o que está
                acontecendo no seu dente e decide com informação.
              </p>
              <dl className="grid gap-5 pt-2 sm:grid-cols-3">
                {FATOS.map((fato) => (
                  <div key={fato.title} className="flex flex-col gap-1 border-l-[3px] border-champagne py-1 pl-[18px]">
                    <dt className="font-display text-[1.625rem] font-semibold leading-tight text-ink">{fato.title}</dt>
                    <dd className="text-[0.81rem] font-semibold text-graphite">{fato.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-lavanda-100 px-5 py-16 sm:px-8 lg:py-20 xl:px-24">
          <div className="mx-auto flex max-w-[860px] flex-col gap-8">
            <h2 className="text-center font-display text-[2rem] font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[2.375rem]">
              Perguntas frequentes
            </h2>
            <div className="flex flex-col gap-3">
              {FAQ.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className="group rounded-xl border border-ink/[0.09] bg-white px-6 py-[18px] [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.06rem] font-bold text-ink">
                    {item.question}
                    <Plus className="h-[18px] w-[18px] shrink-0 text-champagne-dark group-open:hidden" strokeWidth={2} aria-hidden="true" />
                    <Minus className="hidden h-[18px] w-[18px] shrink-0 text-champagne-dark group-open:block" strokeWidth={2} aria-hidden="true" />
                  </summary>
                  <p className="mt-2 text-[0.94rem] leading-6 text-graphite">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="agendar" className="relative overflow-hidden bg-brand-800 px-5 py-16 sm:px-8 lg:py-[84px] xl:px-24">
          <img
            src="/images/lp/prot-consultorio.webp"
            alt=""
            aria-hidden="true"
            width="1800"
            height="1000"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
          />
          <div className="relative mx-auto grid max-w-[1248px] items-center gap-12 lg:grid-cols-[1fr_444px] lg:gap-[100px]">
            <div className="flex flex-col items-start gap-[22px]">
              <h2 className="font-display text-[2.2rem] font-medium leading-[1.1] tracking-[-0.02em] text-white sm:text-[3.125rem]">
                Dente doendo na Boca do Rio? Agende a sua avaliação hoje.
              </h2>
              <p className="max-w-[560px] text-lg leading-[1.5] text-[#e4d9ef]">
                Fale com a clínica pelo WhatsApp, conte o que está sentindo e escolha o melhor horário.
              </p>
              <WhatsAppButton href={CTA} variant="green" size="lg" className="mt-1 text-[1.19rem] font-extrabold">
                Agendar pelo WhatsApp
              </WhatsAppButton>
            </div>
            <ul className="flex flex-col gap-[18px] rounded-[18px] bg-white p-7">
              {INFO.map(({ Icon, title, text }) => (
                <li key={title} className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavanda-100">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[0.94rem] font-bold text-ink">{title}</span>
                    <span className="text-[0.81rem] text-graphite">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-3.5 bg-white px-5 py-8 sm:px-8 xl:px-24">
        <p className="mx-auto w-full max-w-[1248px] text-[0.81rem] font-semibold text-ink">
          {CLINIC.fullName} | Responsável técnica: {CLINIC.responsavelTecnica}, {CLINIC.cro}
        </p>
        <p className="mx-auto w-full max-w-[1248px] text-xs text-graphite">
          A indicação de tratamento depende de avaliação clínica. Os resultados variam de caso a caso.
        </p>
      </footer>
      <LpFloatingCta href={CTA} />
    </div>
  );
}
