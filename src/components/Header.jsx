import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, whatsappLink } from '../lib/site.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const cta = whatsappLink('Olá! Vim pelo site da Oral Clinic e gostaria de agendar uma consulta.');

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.body.style.overflow = '';
      setOpen(false);
      
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
          const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 150);
    } else {
      document.body.style.overflow = '';
      setOpen(false);
    }
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center p-4 transition-all duration-500 sm:top-2 sm:p-0"
    >
      <div
        className={`w-full max-w-7xl transition-all duration-500 sm:rounded-full ${
          scrolled || open
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(42,21,56,0.15)] border border-brand-100/60 py-2.5 px-6 xl:px-8'
            : 'bg-transparent border border-transparent py-4 px-6 xl:px-8'
        }`}
      >
        <div className="flex h-12 items-center justify-between">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 group shrink-0" aria-label="Oral Clinic, ir para o início">
            <div
              className="h-14 w-14 shrink-0 bg-brand-700 transition-transform duration-500 group-hover:scale-105"
              style={{
                WebkitMaskImage: 'url(/images/dente-oral-clinic-Photoroom.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: 'url(/images/dente-oral-clinic-Photoroom.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
              aria-label="Símbolo Dente Oral Clinic"
              role="img"
            />
            
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-wide">
                <span className="text-brand-700">ORAL</span>
                <span className="text-slate-800">CLINIC</span>
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-brand-500/80">
                Odontologia & Estética
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-4 xl:gap-8 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative whitespace-nowrap text-[13px] xl:text-sm font-semibold text-slate-600 transition-colors hover:text-brand-700 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0 ml-4">
            <a href={cta} target="_blank" rel="noopener noreferrer" className="btn-primary shadow-soft whitespace-nowrap px-5 py-2.5 text-sm">
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Agendar consulta
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-100 bg-white/80 text-brand-700 backdrop-blur transition hover:bg-white lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="pt-4 pb-2">
                <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="rounded-2xl px-4 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <a
                  href={cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleNavClick(e, cta)}
                  className="btn-primary mt-4 w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  Agendar consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
