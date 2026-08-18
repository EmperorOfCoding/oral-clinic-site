import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { TREATMENT_GROUPS, whatsappLink } from '../lib/site.js';

export default function Treatments() {
  return (
    <section id="tratamentos" className="border-y border-ink/[0.06] bg-lavanda-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Organizados pelo que você precisa resolver"
          lead="Reunimos as especialidades em quatro frentes de cuidado. A indicação exata depende da avaliação clínica presencial."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2"
        >
          {TREATMENT_GROUPS.map((group) => (
            <motion.article key={group.id} variants={fadeUp}>
              <h3 className="font-display text-[1.35rem] font-normal text-ink">{group.title}</h3>
              <p className="mt-2.5 text-[0.94rem] leading-relaxed text-graphite/85">{group.summary}</p>

              <ul className="mt-6">
                {group.items.map((item) => (
                  <li key={item.name} className="border-t border-ink/[0.08] py-4">
                    <p className="text-[0.95rem] font-semibold text-ink">{item.name}</p>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-graphite/85">{item.desc}</p>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(
                  `Olá! Gostaria de saber mais sobre ${group.title.toLowerCase()} na Oral Clinic.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-[0.83rem] font-semibold text-brand-700 underline decoration-champagne decoration-2 underline-offset-[6px] transition-colors hover:text-brand-800"
              >
                Agendar avaliação
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
