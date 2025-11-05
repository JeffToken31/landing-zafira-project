'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/Button';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      aria-label="Section d’introduction du projet Zafira"
    >
      {/* Dégradé de superposition pour la lisibilité */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Bulles animées décoratives */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-pink-500 opacity-30"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-20 h-20 rounded-full bg-pink-300 opacity-30"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-40 h-40 rounded-full bg-[#fedc27] opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-blue-500 opacity-30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-10 right-1/4 w-28 h-28 rounded-full bg-blue-300 opacity-30"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Colonne texte */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-white">
          <Image
            src="/logo_zafira_carre__.jpg"
            alt="Logo Zafira"
            width={200}
            height={200}
            className="rounded-xl mb-6 shadow-lg"
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF69B4] drop-shadow-md">
            Redonner confiance par l’image
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-[#FFD700]/90 mt-4 mb-10">
            Accompagnement à la réinsertion par l’image de soi
          </h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="heroSection"
              size="lg"
              href="https://ton-projet-deploye.com"
              className="bg-[#FF69B4] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-[#ff5ca4] transition"
            >
              Découvrir nos actions
            </Button>
          </motion.div>
        </div>

        {/* Colonne mockups */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-6">
          {/* Mockup PC */}
          <div className="w-full max-w-lg shadow-2xl rounded-xl overflow-hidden">
            <Image
              src="/mockup_pc.png"
              alt="Aperçu de l’application Zafira sur ordinateur"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Mockup mobile */}
          <div className="w-32 sm:w-36 md:w-40 shadow-xl rounded-xl overflow-hidden">
            <Image
              src="/mockup_mobile.png"
              alt="Aperçu de l’application Zafira sur mobile"
              width={200}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
