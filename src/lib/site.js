// Informacoes de negocio centralizadas. Edite somente este arquivo para
// atualizar contato, endereco, horarios, responsavel tecnica e links.

export const CLINIC = {
  name: 'Oral Clinic',
  fullName: 'Oral Clinic Odontologia e Estética',
  phoneDisplay: '(71) 99151-2249',
  whatsappNumber: '5571991512249',
  instagramUrl: 'https://www.instagram.com/oral_clinic_odontologia/',
  // Responsavel tecnica: exigencia legal (CFO) e do Google Ads para saude.
  responsavelTecnica: 'Dra. Marcela Karin',
  cro: 'CRO-BA 10244',
  address: {
    line1: 'R. Hélio Machado, 33',
    line2: 'Boca do Rio, Salvador - BA',
    line3: '41710-200',
  },
  mapsUrl: 'https://maps.app.goo.gl/5NkiEUXoSosy4Q887',
  directionsUrl:
    'https://www.google.com/maps/dir//R.+H%C3%A9lio+Machado,+33+-+Boca+do+Rio,+Salvador+-+BA,+41710-200/@-12.9781457,-38.4337356,17z',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9015909123427!2d-38.43373562492353!3d-12.978145687337813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bb2b7c13c9b%3A0x4f83a944a3df937f!2sR.%20H%C3%A9lio%20Machado%2C%2033%20-%20Boca%20do%20Rio%2C%20Salvador%20-%20BA%2C%2041710-200!5e0!3m2!1spt-BR!2sbr!4v1781019651948!5m2!1spt-BR!2sbr',
};

// Horario de atendimento da clinica.
export const OPENING_HOURS = [
  { days: 'Segunda a quinta', hours: '08h às 17h30' },
  { days: 'Sexta-feira', hours: '08h às 17h' },
  { days: 'Sábado e domingo', hours: 'Fechado', closed: true },
];

// Monta um link wa.me com mensagem pre-preenchida.
export function whatsappLink(
  message = 'Olá! Vim pelo site da Oral Clinic e gostaria de agendar uma avaliação.'
) {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Mensagem padrao de agendamento, usada nos CTAs principais.
export const CTA_AGENDAR = whatsappLink();

// Link direto para o campo de atendimento do Google Meu Negocio.
// Mensagem identifica origem GMB para rastreio de conversoes.
export const WHATSAPP_GMB_URL = whatsappLink(
  'Olá! Vi a Oral Clinic no Google e gostaria de agendar uma consulta de avaliação.'
);

// Links de navegacao do header. Cada href precisa corresponder ao id de uma
// secao renderizada em App.jsx, senao a navegacao falha silenciosamente.
export const NAV_LINKS = [
  { label: 'A clínica', href: '#a-clinica' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Casos reais', href: '#casos-reais' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
];

// Tratamentos agrupados por intencao do paciente, nao por especialidade.
// A ordem reflete a prioridade comercial definida pela clinica.
export const TREATMENT_GROUPS = [
  {
    id: 'reabilitacao',
    title: 'Reabilitação oral',
    summary:
      'Recuperar dentes perdidos ou comprometidos, devolvendo função mastigatória e conforto.',
    items: [
      { name: 'Implantes dentários', desc: 'Reposição de dentes perdidos com planejamento individualizado.' },
      { name: 'Prótese dentária', desc: 'Soluções fixas e removíveis para restaurar função e estética.' },
      { name: 'Tratamento de canal', desc: 'Endodontia para preservar o dente comprometido por infecção.' },
    ],
  },
  {
    id: 'saude',
    title: 'Saúde e prevenção',
    summary:
      'Manter a saúde bucal em dia e tratar precocemente o que pode se agravar.',
    items: [
      { name: 'Clínica geral', desc: 'Avaliação, diagnóstico e cuidado preventivo contínuo.' },
      { name: 'Periodontia', desc: 'Tratamento da gengiva e dos tecidos de suporte dos dentes.' },
      { name: 'Cirurgia oral menor', desc: 'Procedimentos realizados em consultório com anestesia local.' },
    ],
  },
  {
    id: 'estetica',
    title: 'Estética do sorriso',
    summary:
      'Ajustar cor, formato e harmonia buscando um resultado natural.',
    items: [
      { name: 'Clareamento dental', desc: 'Clareamento acompanhado, respeitando a sensibilidade de cada paciente.' },
      { name: 'Facetas dentárias', desc: 'Correção de formato e cor com planejamento estético prévio.' },
      { name: 'Harmonização orofacial', desc: 'Procedimentos estéticos faciais com foco em naturalidade.' },
    ],
  },
  {
    id: 'alinhamento',
    title: 'Alinhamento e função',
    summary:
      'Corrigir o posicionamento dos dentes e a mordida, com impacto em estética e função.',
    items: [
      { name: 'Ortodontia', desc: 'Aparelhos convencionais para correção do alinhamento e da mordida.' },
      { name: 'Alinhadores transparentes', desc: 'Alternativa discreta para casos com indicação adequada.' },
    ],
  },
];
