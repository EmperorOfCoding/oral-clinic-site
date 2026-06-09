import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, inView } from '../lib/motion.js';
import { CLINIC, whatsappLink } from '../lib/site.js';

export default function Location() {
  const cta = whatsappLink('Olá! Gostaria de agendar uma consulta na Oral Clinic.');

  return (
    <section id="localizacao" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Clínica odontológica na Boca do Rio"
          title="Estamos na Boca do Rio, em Salvador"
          description="A Oral Clinic está localizada na Boca do Rio, em uma região de fácil acesso em Salvador."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Cartao de informacoes */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="card-soft flex flex-col p-8 sm:p-10"
          >
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <MapPin className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Endereço</p>
                  <p className="mt-1 text-[1.05rem] leading-relaxed text-ink">
                    {CLINIC.address.line1}
                    <br />
                    {CLINIC.address.line2}
                    <br />
                    {CLINIC.address.line3}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Phone className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">WhatsApp</p>
                  <p className="mt-1 text-[1.05rem] text-ink">{CLINIC.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Clock className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Atendimento</p>
                  <div className="mt-2 flex flex-col gap-1.5 text-[1.05rem] text-ink w-full max-w-[280px]">
                    <div className="flex justify-between gap-4">
                      <span>Segunda a Quinta</span>
                      <span className="font-medium text-brand-700">08h às 17h30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sexta-feira</span>
                      <span className="font-medium text-brand-700">08h às 17h</span>
                    </div>
                    <div className="flex justify-between gap-4 opacity-50">
                      <span>Sábado e Domingo</span>
                      <span className="font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://www.google.com/maps/dir//R.+H%C3%A9lio+Machado,+33+-+Boca+do+Rio,+Salvador+-+BA,+41710-200/@-12.9781457,-38.4337356,17z/data=!4m18!1m8!3m7!1s0x7161bb2b7c13c9b:0x4f83a944a3df937f!2sR.+H%C3%A9lio+Machado,+33+-+Boca+do+Rio,+Salvador+-+BA,+41710-200!3b1!8m2!3d-12.9781457!4d-38.4311607!16s%2Fg%2F11c43tzgct!4m8!1m0!1m5!1m1!1s0x7161bb2b7c13c9b:0x4f83a944a3df937f!2m2!1d-38.4311607!2d-12.9781457!3e2?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
                <Navigation className="h-4 w-4" strokeWidth={2} />
                Como chegar
              </a>
              <a href={cta} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Agendar consulta
              </a>
            </div>
          </motion.div>

          {/* Area do mapa (placeholder para embed real do Google Maps) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="relative min-h-[320px] overflow-hidden rounded-4xl border border-white shadow-card lg:min-h-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9015909123427!2d-38.43373562492353!3d-12.978145687337813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bb2b7c13c9b%3A0x4f83a944a3df937f!2sR.%20H%C3%A9lio%20Machado%2C%2033%20-%20Boca%20do%20Rio%2C%20Salvador%20-%20BA%2C%2041710-200!5e0!3m2!1spt-BR!2sbr!4v1781019651948!5m2!1spt-BR!2sbr" 
              className="absolute inset-0 h-full w-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Oral Clinic na Boca do Rio"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
