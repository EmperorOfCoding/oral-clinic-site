// Variantes de animacao (Framer Motion).
// Direcao: movimento discreto e institucional. Sem animacao infinita,
// sem elementos flutuando. A animacao reforca a leitura, nao decora.
//
// IMPORTANTE: o site e pre-renderizado (SSG). Nunca aplicar variante com
// opacity 0 em elemento acima da dobra (o HTML estatico sairia invisivel
// ate a hidratacao, quebrando o LCP). Ver Hero.jsx.

const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

// Entrada de imagem: escala minima, sem chamar atencao para si.
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.02 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Container que escalona a entrada dos filhos.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

// Viewport padrao para whileInView: dispara cedo e apenas uma vez.
export const inView = { once: true, amount: 0.05, margin: '0px 0px -60px 0px' };
