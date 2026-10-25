import { MotionConfig } from 'framer-motion';
import { findRoute } from './routes.js';

export default function App({ path = '/' }) {
  const { Page } = findRoute(path);

  return (
    // reducedMotion="user" faz o Framer Motion respeitar prefers-reduced-motion:
    // desativa movimento (translate/scale) mantendo fades suaves de opacidade,
    // garantindo que nenhum conteudo fique invisivel.
    <MotionConfig reducedMotion="user">
      <Page />
    </MotionConfig>
  );
}
