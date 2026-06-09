import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, ClipboardList, MapPin, Layers, Leaf, Coffee, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

const differentials = [
  { icon: HeartHandshake, title: 'Atendimento humanizado', desc: 'Escuta atenta e cuidado próximo em cada etapa do seu tratamento.' },
  { icon: ClipboardList, title: 'Planejamento individualizado', desc: 'Cada plano é desenhado a partir da sua necessidade e do seu objetivo.' },
  { icon: MapPin, title: 'Localização estratégica na Boca do Rio', desc: 'Em uma região de fácil acesso em Salvador.' },
  { icon: Layers, title: 'Odontologia e estética no mesmo lugar', desc: 'Tratamentos odontológicos e estéticos integrados em uma única clínica.' },
  { icon: Leaf, title: 'Foco em estética natural', desc: 'Resultados harmônicos que respeitam as características do seu rosto.' },
  { icon: Coffee, title: 'Ambiente acolhedor', desc: 'Um espaço confortável e tranquilo, pensado para o seu bem-estar.' },
  { icon: MessageCircle, title: 'Agendamento fácil pelo WhatsApp', desc: 'Marque sua consulta de forma rápida, direta e sem burocracia.' },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-20 sm:py-28">
      {/* Bloco escuro teal para criar contraste premium e descanso visual */}
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-900 px-6 py-16 sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-dots" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aqua-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

          <div className="relative">
            <SectionHeading
              eyebrow="Por que a Oral Clinic"
              title="Por que escolher a Oral Clinic?"
              description="Reunimos cuidado, técnica e acolhimento para que sua experiência seja segura, confortável e centrada em você."
              className="[&_.eyebrow]:text-aqua-300 [&_h2]:text-white [&_p]:text-brand-100"
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
              {/* Foto de atendimento humanizado */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="relative overflow-hidden rounded-3xl border border-white/15 shadow-card"
              >
                <img
                  src="/images/foto_4_oral_clinic.png"
                  alt="Atendimento humanizado na Oral Clinic"
                  className="h-64 w-full object-cover lg:h-full"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-display text-lg font-semibold text-white">Cuidado de perto, do início ao fim</p>
                  <p className="mt-1 text-sm text-brand-100/90">Uma experiência pensada para o seu conforto.</p>
                </div>
              </motion.div>

              {/* Grade de diferenciais */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="grid gap-4 sm:grid-cols-2"
              >
                {differentials.map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-aqua-400/15 text-aqua-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-100/90">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
