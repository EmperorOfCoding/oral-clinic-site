import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, ClipboardList, PlayCircle, RefreshCw } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { inView } from '../lib/motion.js';

const steps = [
  { icon: MessageCircle, title: 'Agendamento pelo WhatsApp', desc: 'Você fala diretamente com a clínica e marca o melhor horário, sem burocracia.' },
  { icon: Search, title: 'Avaliação clínica', desc: 'Examinamos sua saúde bucal e entendemos suas necessidades e objetivos.' },
  { icon: ClipboardList, title: 'Planejamento personalizado', desc: 'Montamos um plano de tratamento individualizado, com clareza sobre cada etapa.' },
  { icon: PlayCircle, title: 'Início do tratamento', desc: 'Conduzimos os procedimentos com segurança, conforto e atenção aos detalhes.' },
  { icon: RefreshCw, title: 'Acompanhamento e manutenção', desc: 'Cuidamos da continuidade dos resultados com acompanhamento próximo.' },
];

const lineItem = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Process() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Simples do começo ao fim"
          title="Como funciona seu atendimento"
          description="Um caminho claro e acolhedor, do primeiro contato à manutenção do seu sorriso."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Linha vertical da timeline */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-8">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <motion.li
                key={title}
                custom={i}
                variants={lineItem}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className={`relative flex items-start gap-5 sm:w-1/2 ${
                  i % 2 === 0 ? 'sm:ml-0 sm:pr-10 sm:text-right sm:flex-row-reverse' : 'sm:ml-auto sm:pl-10'
                }`}
              >
                {/* Marcador numerado */}
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-brand-100">
                  <Icon className="h-6 w-6 text-brand-600" strokeWidth={1.7} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
