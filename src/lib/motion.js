// Variantes reutilizaveis de animacao (Framer Motion).
// O componente Reveal aplica fade + slide-up suave ao entrar na viewport.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Container que escalona a entrada dos filhos.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Configuracao padrao de viewport para whileInView.
export const inView = { once: true, amount: 0.05, margin: '0px 0px -40px 0px' };
