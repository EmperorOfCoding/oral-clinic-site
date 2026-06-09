import React from 'react';
import { motion } from 'framer-motion';
import { Frown, AlignHorizontalDistributeCenter, Smile, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

const points = [
  { icon: Frown, text: 'Tenho vergonha de sorrir' },
  { icon: AlignHorizontalDistributeCenter, text: 'Quero alinhar meus dentes sem aparelho aparente' },
  { icon: Smile, text: 'Perdi um ou mais dentes' },
  { icon: Sparkles, text: 'Quero melhorar a estética do meu sorriso' },
  { icon: Activity, text: 'Sinto dor, sangramento ou desconforto na gengiva' },
  { icon: ShieldCheck, text: 'Quero um tratamento seguro e bem planejado' },
];

export default function PainPoints() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Você se identifica?"
          title="Seu sorriso pode influenciar sua autoestima, sua saúde e sua confiança"
          description="Entendemos o que motiva cada paciente. O primeiro passo para mudar é se reconhecer em uma destas situações."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {points.map(({ icon: Icon, text }) => (
            <motion.div
              key={text}
              variants={fadeUp}
              className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <p className="pt-1.5 text-[1.05rem] font-medium leading-snug text-ink">"{text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
