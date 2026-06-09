# Oral Clinic Odontologia e Estética — Site

Landing page institucional de conversão para a Oral Clinic, clínica odontológica e estética na Boca do Rio, Salvador - BA. O objetivo é atrair novos pacientes e gerar agendamentos via WhatsApp.

## Stack

- React 18
- Vite 5 (com pré-renderização estática para SEO)
- Tailwind CSS 3
- Framer Motion (animações)
- lucide-react (ícones)

## Scripts

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build estático com pré-renderização em dist/
npm run preview  # pré-visualiza o build de produção
```

O `npm run build` gera o HTML já com o conteúdo renderizado (`dist/index.html`),
garantindo que títulos, textos e termos de SEO local fiquem disponíveis no HTML
servido, e não apenas após o JavaScript carregar.

## Onde editar

| O que | Arquivo |
|---|---|
| WhatsApp, telefone, endereço, Instagram, links de navegação | `src/lib/site.js` |
| Metadados de SEO, título, Open Graph, JSON-LD | `index.html` |
| Cores, fontes, sombras (design tokens) | `tailwind.config.js` |
| Cada seção da página | `src/components/*.jsx` |

## Identidade e imagens

- **Cor de marca:** roxo/violeta, extraída da logo. Ajuste tokens em `tailwind.config.js`.
- **Logo:** arquivo oficial em `public/images/logo-oral-clinic-melhorada.png`
  (ladrilho roxo autocontido). Referenciado direto via `<img />` no `Header.jsx`
  e no `Footer.jsx`.
- **Fotos:** de `public/images/` (Unsplash, uso livre comercial). Troque os arquivos
  `hero-paciente.jpg` e `atendimento-humanizado.jpg` por fotos reais (mesma proporção).

## Pendências do cliente

- [ ] Confirmar o número de WhatsApp correto (com o 9 de celular) em `src/lib/site.js`.
- [ ] Trocar as fotos do Unsplash por fotos reais da clínica (`public/images/`).
- [ ] Inserir a logo oficial em `public/images/logo.png` (opcional).
- [ ] Substituir os depoimentos placeholder por avaliações reais autorizadas
      (`src/components/Testimonials.jsx`).
- [ ] Inserir o embed real do Google Maps (`src/components/Location.jsx`).
- [ ] Confirmar o @ oficial do Instagram em `src/lib/site.js`.
- [ ] Adicionar dados do responsável técnico / CRO no rodapé, se exigido.

## Notas de comunicação (saúde)

O conteúdo evita promessas de resultado garantido, não inventa nomes de
dentistas, números de CRO, tempo de experiência, prêmios ou depoimentos. O foco
é avaliação, planejamento, segurança, estética natural e cuidado individualizado.
