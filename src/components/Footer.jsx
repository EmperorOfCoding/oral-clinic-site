import { Instagram } from 'lucide-react';
import Logo from './Logo.jsx';
import { CLINIC, NAV_LINKS, OPENING_HOURS, CTA_AGENDAR } from '../lib/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/[0.08] bg-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />

            <p className="mt-6 max-w-sm text-[0.9rem] leading-relaxed text-graphite">
              Clínica odontológica e estética na Boca do Rio, em Salvador. Cuidamos
              do seu sorriso com avaliação, planejamento e acompanhamento.
            </p>

            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[0.85rem] font-medium text-graphite transition-colors hover:text-brand-700"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.6} />
              @oral_clinic_odontologia
            </a>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
              Navegação
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9rem] text-graphite transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-graphite/65">
              Contato
            </h3>
            <address className="mt-5 space-y-4 text-[0.9rem] not-italic leading-relaxed text-graphite">
              <p>
                {CLINIC.address.line1}
                <br />
                {CLINIC.address.line2}
                <br />
                {CLINIC.address.line3}
              </p>
              <p>
                <a
                  href={CTA_AGENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-700"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </p>
            </address>

            <div className="mt-6 space-y-1.5 text-[0.82rem] text-graphite/80">
              {OPENING_HOURS.filter((slot) => !slot.closed).map((slot) => (
                <p key={slot.days}>
                  {slot.days}: {slot.hours}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Identificacao profissional e aviso legal. */}
        <div className="mt-14 border-t border-ink/[0.08] pt-8">
          <p className="text-[0.82rem] font-medium text-graphite">
            Responsável técnica: {CLINIC.responsavelTecnica}, {CLINIC.cro}
          </p>
          <p className="mt-3 max-w-2xl text-[0.78rem] leading-relaxed text-graphite/70">
            As informações deste site têm caráter informativo e não substituem uma
            avaliação profissional individualizada. Os resultados de tratamento
            variam conforme a condição clínica de cada paciente.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-[0.78rem] text-graphite/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {CLINIC.fullName}. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{' '}
              <a
                href="https://vexaris.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                Vexaris
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
