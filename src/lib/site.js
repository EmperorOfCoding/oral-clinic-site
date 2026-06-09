// Informacoes de negocio centralizadas. Edite somente este arquivo para
// atualizar contato, endereco e links em todo o site.

export const CLINIC = {
  name: 'Oral Clinic',
  fullName: 'Oral Clinic Odontologia e Estética',
  phoneDisplay: '(71) 9151-2249',
  // Numero no formato internacional para o WhatsApp (55 + DDD + numero).
  // ATENCAO: confirme se o numero correto inclui o 9 extra de celular
  // (ex.: 5571991512249). Atualizado conforme contato informado.
  whatsappNumber: '557191512249',
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
export function whatsappLink(message = 'Olá! Gostaria de agendar uma consulta na Oral Clinic.') {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

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
