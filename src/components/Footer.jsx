import React from 'react';
import { MapPin, MessageCircle, Instagram } from 'lucide-react';
import { CLINIC, NAV_LINKS, whatsappLink } from '../lib/site.js';

export default function Footer() {
  const cta = whatsappLink('Olá! Vim pelo site da Oral Clinic e gostaria de agendar uma consulta.');
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-brand-100 bg-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-oral-clinic-melhorada.png"
                alt="Oral Clinic Odontologia e Estética"
                className="h-12 w-12 rounded-2xl object-cover shadow-soft"
                width="96"
                height="96"
              />
              <span className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight">
                  <span className="text-brand-700">ORAL</span>
                  <span className="text-slate-600">CLINIC</span>
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-500">
                  Odontologia e Estética
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              Clínica odontológica e estética em Salvador, na Boca do Rio. Cuidamos
              do seu sorriso com atenção, planejamento e responsabilidade.
            </p>
            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-600 transition hover:border-brand-300 hover:bg-brand-50"
              aria-label="Instagram da Oral Clinic"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>

          {/* Links rapidos */}
          <nav aria-label="Links rápidos">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-brand-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-500" strokeWidth={1.8} />
                <span>
                  {CLINIC.address.line1}
                  <br />
                  {CLINIC.address.line2}
                  <br />
                  {CLINIC.address.line3}
                </span>
              </li>
              <li>
                <a href={cta} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-brand-700">
                  <MessageCircle className="h-4.5 w-4.5 shrink-0 text-brand-500" strokeWidth={1.8} />
                  {CLINIC.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso e creditos */}
        <div className="mt-12 border-t border-slate-100 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            As informações deste site não substituem uma avaliação profissional individualizada.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {CLINIC.fullName}. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <a href="https://vexaris.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 hover:text-brand-700">
                Vexaris
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
