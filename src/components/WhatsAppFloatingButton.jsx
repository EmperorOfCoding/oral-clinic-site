import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { whatsappLink } from '../lib/site.js';

// Icone oficial do WhatsApp (SVG inline, sem dependencia de emoji).
function WhatsAppGlyph({ className = 'h-7 w-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 4C9.74 4 4.62 9.12 4.62 15.42c0 2.02.53 3.97 1.54 5.7L4.5 27.5l6.56-1.72a11.36 11.36 0 0 0 4.98 1.15h.01c6.3 0 11.42-5.12 11.42-11.42S22.34 4 16.04 4zm0 20.84h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.89 1.02 1.04-3.79-.22-.39a9.38 9.38 0 0 1-1.44-5.01c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.24 9.44-9.44 9.44zm5.18-7.07c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.68-.69 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.54-.33z" />
    </svg>
  );
}

export default function WhatsAppFloatingButton() {
  const reduce = useReducedMotion();
  const cta = whatsappLink('Olá! Gostaria de agendar uma consulta na Oral Clinic.');

  return (
    <motion.a
      href={cta}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_-10px_rgba(37,211,102,0.7)]">
        {/* Pulso muito sutil, desativado quando o usuario prefere menos movimento */}
        {!reduce && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />}
        <WhatsAppGlyph className="relative h-7 w-7" />
      </span>
      <span className="hidden rounded-full bg-white py-2.5 pl-4 pr-5 text-sm font-semibold text-ink shadow-card md:group-hover:inline-block">
        Agendar pelo WhatsApp
      </span>
    </motion.a>
  );
}
