'use client';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-white dark:bg-black">

      <div className="absolute inset-0 z-0">
        <motion.div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-pink-500 opacity-30"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >

        <div className="flex-1 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src="/logozafira.jpg" alt="Logo Zafira" className="w-48 sm:w-52 md:w-56 mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF69B4] text-center lg:text-left">
            Redonner confiance par l’image
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-[#FFD700]/90 mt-4 mb-8 text-center lg:text-left">
            Accompagnement à la réinsertion par l’image de soi
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button variant="heroSection" size="lg" href="https://ton-projet-deployé.com">
              Découvrir nos actions
            </Button>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-8">

          <div className="relative w-full max-w-3xl border border-gray-300 rounded-2xl shadow-2xl bg-gray-50">
            <img
              src="/pc_screen.png"
              alt="PC screen"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="relative w-40 sm:w-48 border border-gray-300 rounded-3xl shadow-xl bg-gray-50">
            <img
              src="/mobile_screen.png"
              alt="Mobile Screen"
              className="w-full h-auto rounded-2xl"
            />
          </div>

        </div>

      </motion.div>
    </section>
  );
}
