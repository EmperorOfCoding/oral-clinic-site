import { Plus } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { CLINIC, whatsappLink } from '../lib/site.js';

// Duvidas antes da primeira consulta. Sem preco: o valor e apresentado na
// avaliacao. As respostas ficam no HTML pre-renderizado (details/summary),
// visiveis para buscadores mesmo fechadas.
const perguntas = [
  {
    question: 'Aceita plano odontológico?',
    answer:
      'O atendimento na Oral Clinic é particular, sem convênio. Na avaliação, você recebe o plano de tratamento com o valor antes de decidir.',
  },
  {
    question: 'Quanto custa o tratamento?',
    answer:
      'O valor depende do tratamento indicado e da condição de cada caso. Por isso, ele é apresentado na avaliação, junto com o plano, antes de qualquer procedimento.',
  },
  {
    question: 'O tratamento dói?',
    answer:
      'Os procedimentos que podem causar desconforto são feitos com anestesia local. A equipe explica cada etapa e orienta os cuidados depois.',
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer: 'Depende do tratamento e do seu caso. O tempo de cada etapa é informado no plano, antes de começar.',
  },
  {
    question: 'Como agendo a avaliação?',
    answer: `Pelo WhatsApp ${CLINIC.phoneDisplay}, direto com a clínica. O atendimento é de segunda a sexta-feira.`,
  },
  {
    question: 'Onde fica a clínica?',
    answer: `Na ${CLINIC.address.line1}, Boca do Rio, em Salvador.`,
  },
];

const CTA_DUVIDA = whatsappLink('Olá! Vim pelo site da Oral Clinic e tenho uma dúvida antes de agendar.');

export default function HomeFaq() {
  return (
    <section id="perguntas-frequentes" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Dúvidas antes da primeira consulta"
              lead="Não encontrou sua pergunta? A equipe responde pelo WhatsApp."
            />
            <a href={CTA_DUVIDA} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-8">
              Tirar dúvida pelo WhatsApp
            </a>
          </div>

          <div className="border-b border-ink/[0.09]">
            {perguntas.map((item, index) => (
              <details key={item.question} open={index === 0} className="group border-t border-ink/[0.09]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-[1.2rem] font-normal leading-snug text-ink sm:text-[1.3rem]">
                    {item.question}
                  </h3>
                  <Plus
                    className="h-5 w-5 shrink-0 text-brand-700 transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </summary>
                <p className="-mt-2 pb-6 pr-10 text-[0.97rem] leading-relaxed text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
