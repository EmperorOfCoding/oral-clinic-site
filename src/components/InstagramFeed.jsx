import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

const posts = [
  {
    id: 1,
    image: '/images/WhatsApp Image 2026-06-09 at 13.00.58 (1).jpeg',
    likes: 'Curtido por maria.silva e outras pessoas',
    caption: 'Mais um sorriso transformado! 😁 O antes e depois que nos enche de orgulho. A odontologia vai muito além da estética, é sobre devolver função, autoestima e qualidade de vida. Venha fazer sua avaliação!',
    comments: 'Ver todos os 12 comentários'
  },
  {
    id: 2,
    image: '/images/WhatsApp Image 2026-06-09 at 13.00.58.jpeg',
    likes: 'Curtido por joao.souza e outras pessoas',
    caption: 'Aquele resultado que fala por si só! 😍 Facetas em resina entregando naturalidade e harmonia. Cada detalhe pensado para o rosto da paciente. Maravilhoso!',
    comments: 'Ver todos os 8 comentários'
  },
  {
    id: 3,
    image: '/images/WhatsApp Image 2026-06-09 at 13.00.59.jpeg',
    likes: 'Curtido por ana.clara e outras pessoas',
    caption: 'Devolvendo sorrisos e mudando vidas! ✨ Implante dentário com excelência. Função mastigatória perfeita e estética impecável. Agende sua consulta.',
    comments: 'Ver todos os 15 comentários'
  }
];

export default function InstagramFeed() {
  return (
    <section id="casos-reais" className="relative bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Casos Reais"
          title="Transformações que mudam vidas"
          description="Confira alguns dos nossos resultados de antes e depois. Arraste e veja a diferença que um sorriso novo pode fazer."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Instagram Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-brand-100 p-1">
                    <img src="/images/dente-oral-clinic-Photoroom.png" alt="Avatar" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">oral_clinic_odontologia</p>
                    <p className="text-xs text-slate-500">Salvador, BA</p>
                  </div>
                </div>
                <button className="text-slate-900 hover:text-slate-600">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              {/* Instagram Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={`Caso Clínico ${post.id}`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Instagram Footer */}
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="text-slate-900 hover:text-slate-600">
                      <Heart className="h-6 w-6" />
                    </button>
                    <button className="text-slate-900 hover:text-slate-600">
                      <MessageCircle className="h-6 w-6" />
                    </button>
                    <button className="text-slate-900 hover:text-slate-600">
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                  <button className="text-slate-900 hover:text-slate-600">
                    <Bookmark className="h-6 w-6" />
                  </button>
                </div>
                
                <p className="mb-2 text-sm font-semibold text-slate-900">
                  {post.likes}
                </p>
                <p className="text-sm text-slate-900 line-clamp-3">
                  <span className="font-semibold mr-2">oral_clinic_odontologia</span>
                  {post.caption}
                </p>
                <button className="mt-2 text-sm text-slate-500 hover:text-slate-700">
                  {post.comments}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
