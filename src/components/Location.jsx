import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, inView } from '../lib/motion.js';
import { CLINIC, OPENING_HOURS, CTA_AGENDAR } from '../lib/site.js';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Localização"
          title="Na Boca do Rio, com acesso fácil em Salvador"
          lead="Atendimento presencial na Rua Hélio Machado, 33. O agendamento é feito pelo WhatsApp."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            <dl>
              <div className="border-t border-ink/[0.09] py-5">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                  Endereço
                </dt>
                <dd className="mt-2 text-[1rem] leading-relaxed text-ink">
                  {CLINIC.address.line1}
                  <br />
                  {CLINIC.address.line2}
                  <br />
                  {CLINIC.address.line3}
                </dd>
              </div>

              <div className="border-t border-ink/[0.09] py-5">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                  WhatsApp
                </dt>
                <dd className="mt-2 text-[1rem] text-ink">
                  <a
                    href={CTA_AGENDAR}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-700"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div className="border-t border-b border-ink/[0.09] py-5">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                  Horário de atendimento
                </dt>
                <dd className="mt-3 space-y-2">
                  {OPENING_HOURS.map((slot) => (
                    <div
                      key={slot.days}
                      className={`flex justify-between gap-6 text-[0.93rem] ${
                        slot.closed ? 'text-graphite/50' : 'text-ink'
                      }`}
                    >
                      <span>{slot.days}</span>
                      <span className="font-medium">{slot.hours}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CTA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar avaliação
              </a>
              <a
                href={CLINIC.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Como chegar
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="overflow-hidden rounded-[1.75rem] border border-ink/[0.07]"
          >
            <iframe
              src={CLINIC.mapsEmbedUrl}
              className="h-[380px] w-full border-0 lg:h-[520px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa com a localização da Oral Clinic na Boca do Rio, Salvador"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
