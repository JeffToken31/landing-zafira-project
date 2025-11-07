'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Button} from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-pink-500 opacity-30"
          animate={{y: [0, 15, 0]}}
          transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}
        />
      </div>

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10"
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: 'easeOut'}}
      >
        {/* Partie texte */}
        <div className="flex-1 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <Image
            src="/logozafira.png"
            alt="Logo Zafira"
            width={220}
            height={220}
            priority
            className="my-4"
          />

          {/* h1 avec dégradé coloré identique aux titres features */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            When technology supports solidarity
          </h1>

          {/* h2 avec le nom “Zafira Solidaire” en rose */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-[#FFD700]/90 mt-4 mb-8 text-center lg:text-left max-w-2xl leading-relaxed">
            <span className="text-pink-500 font-semibold">
              Zafira Solidaire
            </span>{' '}
            is a project born from a collaboration between developers and a
            committed association. It is a platform designed to attract
            investors, conceived to support and inspire people rebuilding their
            future.
          </h2>

          <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{type: 'spring', stiffness: 300}}
          >
            <Button
              variant="heroSection"
              size="lg"
              href="https://github.com/JeffToken31/Portfolio-project-Zafira"
            >
              Github project
            </Button>
          </motion.div>
        </div>

        {/* Images à droite */}
        <div className="flex-1 flex flex-col items-center gap-8">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/pc_screen.png"
              alt="PC screen"
              width={900}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="relative w-40 sm:w-48">
            <Image
              src="/mobile_screen.png"
              alt="Mobile screen"
              width={250}
              height={500}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
