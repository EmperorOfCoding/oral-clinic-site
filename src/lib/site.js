// Informacoes de negocio centralizadas. Edite somente este arquivo para
// atualizar contato, endereco e links em todo o site.

export const CLINIC = {
  name: 'Oral Clinic',
  fullName: 'Oral Clinic Odontologia e Estética',
  phoneDisplay: '(71) 99151-2249',
  whatsappNumber: '5571991512249',
  instagramUrl: 'https://www.instagram.com/oral_clinic_odontologia/',
  address: {
    line1: 'R. Hélio Machado, 33',
    line2: 'Boca do Rio, Salvador - BA',
    line3: '41710-200',
  },
  // Link de busca do Google Maps pelo endereco da clinica
  mapsUrl:
    'https://maps.app.goo.gl/5NkiEUXoSosy4Q887',
};

// Monta um link wa.me com mensagem pre-preenchida.
export function whatsappLink(message = 'Olá! Vim pelo site da Oral Clinic e gostaria de agendar uma consulta.') {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Link direto para o campo de atendimento do Google Meu Negocio.
// Mensagem identifica origem GMB para rastreio de conversoes.
export const WHATSAPP_GMB_URL = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent('Olá! Vi a Oral Clinic no Google e gostaria de agendar uma consulta de avaliação.')}`;

// Links de navegacao do header (ancoras das secoes da pagina).
export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Casos Reais', href: '#casos-reais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];
