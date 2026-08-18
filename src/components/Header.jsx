import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV_LINKS, CTA_AGENDAR } from '../lib/site.js';

// Altura do header fixo, usada para compensar o scroll ate as ancoras.
const HEADER_OFFSET = 72;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll do corpo enquanto o menu mobile estiver aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (event, href) => {
    setOpen(false);
    if (!href.startsWith('#')) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-ink/[0.07] bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <a
            href="#inicio"
            onClick={(event) => handleNavClick(event, '#inicio')}
            className="shrink-0"
            aria-label="Oral Clinic, ir para o início"
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="whitespace-nowrap text-[0.83rem] font-medium text-graphite transition-colors hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CTA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-brand-700/25 px-5 py-2.5 text-[0.83rem] font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:inline-flex"
            >
              Agendar avaliação
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-lavanda-100 lg:hidden"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/[0.06] bg-white lg:hidden"
          >
            <div className="container-page py-5">
              <nav className="flex flex-col" aria-label="Navegação mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="border-b border-ink/[0.05] py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={CTA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Agendar avaliação pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
