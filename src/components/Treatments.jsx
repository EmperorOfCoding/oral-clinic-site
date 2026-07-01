import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  HeartPulse,
  Smile,
  Layers,
  Sparkles,
  AlignHorizontalDistributeCenter,
  Eye,
  Wand2,
  Zap,
  Scissors,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { whatsappLink } from '../lib/site.js';

const treatments = [
  {
    icon: Stethoscope,
    name: 'Clínica Geral',
    desc: 'Prevenção, diagnóstico e cuidado completo para manter sua saúde bucal em dia.',
  },
  {
    icon: HeartPulse,
    name: 'Periodontia',
    desc: 'Tratamento da gengiva e dos tecidos de suporte dos dentes, prevenindo sangramentos, inflamações e perdas dentárias.',
  },
  {
    icon: Smile,
    name: 'Implantes Dentários',
    desc: 'Recupere dentes perdidos com estabilidade, segurança e aparência natural.',
  },
  {
    icon: Layers,
    name: 'Prótese Dentária',
    desc: 'Soluções para restaurar função mastigatória, estética e conforto.',
  },
  {
    icon: Sparkles,
    name: 'Facetas Dentárias',
    desc: 'Melhore formato, cor e harmonia do sorriso com planejamento estético personalizado.',
  },
  {
    icon: AlignHorizontalDistributeCenter,
    name: 'Ortodontia',
    desc: 'Correção do alinhamento dos dentes e da mordida para melhorar estética e função.',
  },
  {
    icon: Eye,
    name: 'Invisalign / Alinhadores',
    desc: 'Alinhe seus dentes de forma discreta, confortável e previsível.',
  },
  {
    icon: Wand2,
    name: 'Harmonização Orofacial',
    desc: 'Procedimentos estéticos para valorizar a harmonia facial com naturalidade.',
  },
  {
    icon: Zap,
    name: 'Clareamento Dental',
    desc: 'Clareia os dentes com segurança e eficácia, devolvendo o brilho natural do sorriso.',
  },
  {
    icon: Scissors,
    name: 'Cirurgia Oral Menor',
    desc: 'Procedimentos cirúrgicos simples realizados em consultório com anestesia local e recuperação rápida.',
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="relative py-20 sm:py-28">
      {/* Fundo claro com leve realce */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cloud via-white to-cloud" />

      <div className="container-page">
        <SectionHeading
          eyebrow="Odontologia estética em Salvador"
          title="Tratamentos odontológicos e estéticos em um só lugar"
          description="Da prevenção à transformação do sorriso, reunimos especialidades completas para cuidar da sua saúde bucal e da sua autoestima com planejamento individualizado."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {treatments.map(({ icon: Icon, name, desc }) => {
            const link = whatsappLink(`Olá! Gostaria de saber mais sobre ${name} na Oral Clinic.`);
            return (
              <motion.article
                key={name}
                variants={fadeUp}
                className="group relative flex flex-col rounded-4xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{name}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-600">{desc}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Quero saber mais
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
