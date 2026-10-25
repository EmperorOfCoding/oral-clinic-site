import Home from './pages/Home.jsx';
import Protese, { FAQ as ProteseFaq } from './pages/Protese.jsx';
import Clareamento, { FAQ as ClareamentoFaq } from './pages/Clareamento.jsx';
import Periodontia, { FAQ as PeriodontiaFaq } from './pages/Periodontia.jsx';
import Implantes, { FAQ as ImplantesFaq } from './pages/Implantes.jsx';
import CanalEndodontia, { FAQ as CanalEndodontiaFaq } from './pages/CanalEndodontia.jsx';

// Rotas do site. Cada rota e pre-renderizada em dist/<path>/index.html
// (ver prerender.mjs). A pagina inicial atende o grupo de anuncios "Dentista";
// as demais atendem um grupo de anuncios por servico.
//
// `title` e `description` alimentam <title>, meta description, canonical e
// Open Graph de cada rota. A pagina inicial usa os valores de index.html.
export const ROUTES = [
  { path: '/', Page: Home },
  {
    path: '/protese',
    ogImage: '/images/og/protese.jpg',
    ogAlt: 'Prótese dentária na Boca do Rio, Salvador | Oral Clinic',
    Page: Protese,
    service: 'Prótese dentária',
    crumb: 'Prótese dentária',
    faq: ProteseFaq,
    title: 'Prótese dentária na Boca do Rio, Salvador | Oral Clinic',
    description:
      'Prótese dentária fixa, removível ou sobre implante na Boca do Rio, Salvador. Avaliação presencial com a Dra. Marcela Karin antes do plano. Agende pelo WhatsApp.',
  },
  {
    path: '/clareamento',
    ogImage: '/images/og/clareamento.jpg',
    ogAlt: 'Clareamento dental na Boca do Rio, Salvador | Oral Clinic',
    Page: Clareamento,
    service: 'Clareamento dental',
    crumb: 'Clareamento dental',
    faq: ClareamentoFaq,
    title: 'Clareamento dental na Boca do Rio, Salvador | Oral Clinic',
    description:
      'Clareamento dental caseiro supervisionado ou no consultório, com avaliação prévia e acompanhamento da sensibilidade. Oral Clinic, Boca do Rio, Salvador.',
  },
  {
    path: '/periodontia',
    ogImage: '/images/og/periodontia.jpg',
    ogAlt: 'Periodontia na Boca do Rio, Salvador | Oral Clinic',
    Page: Periodontia,
    service: 'Periodontia',
    crumb: 'Periodontia',
    faq: PeriodontiaFaq,
    title: 'Periodontia na Boca do Rio, Salvador | Oral Clinic',
    description:
      'Avaliação e tratamento da gengiva e dos tecidos que sustentam os dentes. Sangramento, mau hálito e gengiva inflamada. Oral Clinic, Boca do Rio, Salvador.',
  },
  {
    path: '/implantes',
    ogImage: '/images/og/implantes.jpg',
    ogAlt: 'Implantes dentários na Boca do Rio, Salvador | Oral Clinic',
    Page: Implantes,
    service: 'Implantes dentários',
    crumb: 'Implante dentário',
    faq: ImplantesFaq,
    title: 'Implantes dentários na Boca do Rio, Salvador | Oral Clinic',
    description:
      'Implante dentário planejado caso a caso, com avaliação e exames antes de qualquer procedimento. Oral Clinic, Boca do Rio, Salvador. Agende pelo WhatsApp.',
  },
  {
    path: '/canal-endodontia',
    ogImage: '/images/og/canal-endodontia.jpg',
    ogAlt: 'Tratamento de canal na Boca do Rio, Salvador | Oral Clinic',
    Page: CanalEndodontia,
    service: 'Tratamento de canal e endodontia',
    crumb: 'Tratamento de canal',
    faq: CanalEndodontiaFaq,
    title: 'Tratamento de canal na Boca do Rio, Salvador | Oral Clinic',
    description:
      'Dor de dente? Avalie com a Dra. Marcela Karin se o tratamento de canal é o caminho para preservar o seu dente. Anestesia local e plano explicado. Boca do Rio, Salvador.',
  },
];

const SITE_URL = 'https://www.oral-clinic-salvador.com.br';

// JSON-LD de uma rota de servico: Service + FAQPage + BreadcrumbList.
// O prestador referencia a entidade Dentist (@id) declarada em index.html.
export function buildJsonLd({ path, service, crumb, description, faq }) {
  const url = `${SITE_URL}${path}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service,
      serviceType: service,
      description,
      url,
      provider: { '@id': `${SITE_URL}/#clinic` },
      areaServed: ['Boca do Rio', 'Salvador', 'Bahia'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Oral Clinic', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: crumb, item: url },
      ],
    },
  ];
}

// Normaliza "/protese/" e "/protese" para a mesma chave; desconhecidas caem na home.
export function findRoute(pathname = '/') {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return ROUTES.find((route) => route.path === path) ?? ROUTES[0];
}
