import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  ArrowDown,
  ShieldCheck,
  Sparkles,
  Smile,
  AlignHorizontalDistributeCenter,
  HeartHandshake,
  Star,
} from 'lucide-react';
import { whatsappLink } from '../lib/site.js';

const floatingCards = [
  { icon: Smile, label: 'Implantes', pos: 'left-[-6%] top-[14%]', delay: 0 },
  { icon: Sparkles, label: 'Facetas', pos: 'right-[-4%] top-[26%]', delay: 0.6 },
  { icon: AlignHorizontalDistributeCenter, label: 'Invisalign', pos: 'left-[-2%] bottom-[16%]', delay: 1.2 },
  { icon: HeartHandshake, label: 'Harmonização', pos: 'right-[-7%] bottom-[8%]', delay: 1.8 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const cta = whatsappLink('Olá! Gostaria de agendar uma consulta na Oral Clinic.');

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Atmosfera de fundo: malha de gradiente teal/aqua + textura de pontos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-cloud to-cloud" />
        <div className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-aqua-200/40 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-dots opacity-60" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Coluna de texto */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            <span className="h-px w-6 bg-brand-400" />
            Dentista em Salvador, na Boca do Rio
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]"
          >
            Transforme seu sorriso com{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              cuidado
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7.5C50 2.5 150 2.5 198 7.5" stroke="#c2a36b" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            , estética e segurança
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Na Oral Clinic Odontologia e Estética, você encontra tratamentos
            odontológicos completos em Salvador, com atendimento humanizado e
            soluções modernas para cuidar da sua saúde bucal e da sua autoestima.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={cta} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              Agendar pelo WhatsApp
            </a>
            <a href="#tratamentos" className="btn-secondary text-base">
              Conhecer tratamentos
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </a>
          </motion.div>

          {/* Selos de confianca */}
          <motion.ul variants={item} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-slate-500">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-brand-500" strokeWidth={2} />
              Tratamento seguro e planejado
            </li>
            <li className="flex items-center gap-2">
              <HeartHandshake className="h-4.5 w-4.5 text-brand-500" strokeWidth={2} />
              Atendimento humanizado
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-brand-500" strokeWidth={2} />
              Estética natural
            </li>
          </motion.ul>
        </motion.div>

        {/* Coluna visual: painel premium + cards flutuantes de servicos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Halos suaves de profundidade atras da foto */}
            <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-aqua-200/50 blur-3xl" />
            <div className="absolute bottom-[-12%] left-[-8%] -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />

            {/*
              Foto do hero. Para trocar, substitua o arquivo em
              public/images/hero-paciente.jpg (mesma proporcao retrato).
            */}
            <div className="relative h-full w-full overflow-hidden rounded-5xl border-4 border-white bg-brand-100 shadow-card">
              <img
                src="/images/foto_dona.png"
                alt="Dra. Claudia, cirurgiã dentista da Oral Clinic em Salvador"
                className="h-full w-full object-cover"
                width="1200"
                height="1500"
                loading="eager"
                fetchpriority="high"
              />
              {/* Leve overlay roxo para integrar a foto a identidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-brand-900/10" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-3xl border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <Star className="h-5 w-5" strokeWidth={2} fill="currentColor" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Cada sorriso é único</p>
                  <p className="text-xs text-slate-500">Planejamento individualizado para cada paciente</p>
                </div>
              </div>
            </div>

            {/* Cards flutuantes de servicos */}
            {floatingCards.map(({ icon: Icon, label, pos, delay }) => (
              <motion.div
                key={label}
                className={`absolute ${pos} hidden sm:block`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + delay * 0.18 }}
              >
                <div
                  className="flex items-center gap-2.5 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-card backdrop-blur animate-float"
                  style={{ animationDelay: `${delay}s` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
