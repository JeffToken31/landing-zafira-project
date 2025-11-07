'use client';

import {motion, useInView, useAnimation} from 'framer-motion';
import {useRef, useEffect} from 'react';
import {SiGithub, SiLinkedin} from 'react-icons/si';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: '-100px'});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const team = [
    {
      name: 'Ingrid Mornac',
      role: 'Full Stack Developer',
      linkedin: 'https://linkedin.com/in/ingrid-mornac-a01816a1/',
      github: 'https://github.com/mornac',
    },
    {
      name: 'Jeffrey Basset',
      role: 'Full Stack Developer',
      linkedin: 'https://www.linkedin.com/in/jeffrey-basset/',
      github: 'https://github.com/JeffToken31',
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 overflow-hidden flex flex-col items-center text-center text-neutral-500 dark:text-zinc-100"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {opacity: 0, y: 80},
        visible: {opacity: 1, y: 0, transition: {duration: 1, ease: 'easeOut'}},
      }}
    >
      {/* Halo global */}
      <div className="absolute inset-0 pointer-events-none blur-[100px] opacity-30 bg-gradient-to-br from-primary/30 via-pink-400/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* TITRE PRINCIPAL */}
        <motion.h2
          className="font-heading text-4xl md:text-5xl mb-10 bg-gradient-to-r from-primary via-pink-400 to-blue-500 bg-clip-text text-transparent"
          initial={{backgroundPosition: '200% center'}}
          animate={{
            backgroundPosition: ['0% center', '200% center'],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
        >
          About the project
        </motion.h2>

        {/* TEXTE INTRO */}
        <motion.p
          className="text-lg leading-relaxed font-medium mb-16 max-w-3xl mx-auto"
          variants={{
            hidden: {opacity: 0, y: 40},
            visible: {
              opacity: 1,
              y: 0,
              transition: {duration: 0.8, delay: 0.3},
            },
          }}
        >
          The Zafira Solidaire website was created following a request from her
          manager, Fariza S. <br />
          <br />
          We wanted to create a clear, accessible, and supportive digital tool —
          an online space where the association can share its activities,
          recruit new members, and showcase its partners. This project is part
          of a learning and engagement process: we are combining our technical
          skills with our desire to contribute to a real cause. Developed within
          the framework of the Holberton School program,{' '}
          <span className="text-primary font-semibold">
            Zafira Solidaire
          </span>{' '}
          illustrates how technology can serve solidarity and strengthen social
          bonds.
          <br />
          <br />
          This project allowed us to explore REST APIs, secure authentication,
          and dynamic frontend design with React and Next.js. <br />
          It was developed as part of the{' '}
          <a
            href="https://www.holbertonschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Holberton School Toulouse
          </a>{' '}
          curriculum.
        </motion.p>

        {/* SOUS-TITRE */}
        <motion.h3
          className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary via-pink-400 to-blue-500 bg-clip-text text-transparent"
          initial={{backgroundPosition: '200% center'}}
          animate={{
            backgroundPosition: ['0% center', '200% center'],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'linear',
          }}
        >
          Meet the Team
        </motion.h3>

        {/* CARTES MEMBRES */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 justify-center items-center mb-20"
          variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {staggerChildren: 0.2}},
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_50px_rgba(56,189,248,0.45)] transition-all duration-700 hover:scale-[1.02]"
              variants={{
                hidden: {opacity: 0, y: 40},
                visible: {opacity: 1, y: 0},
              }}
              whileHover={{scale: 1.03}}
              transition={{type: 'spring', stiffness: 120}}
            >
              {/* Halo animé autour de chaque carte */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-pink-400/10 blur-3xl animate-pulse -z-10 rounded-3xl" />

              <h3 className="text-xl font-semibold mb-2 text-neutral-600 dark:text-zinc-300">
                {member.name}
              </h3>
              <p className="text-sm mb-6 text-zinc-500 dark:text-zinc-400">
                {member.role}
              </p>

              <div className="flex justify-center gap-5">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub
                    size={24}
                    className="text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
                  />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin
                    size={24}
                    className="text-[#0A66C2] dark:text-[#4dabff] hover:text-primary transition-colors"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LIEN GITHUB */}
        <motion.div
          variants={{
            hidden: {opacity: 0, y: 30},
            visible: {opacity: 1, y: 0, transition: {delay: 0.4}},
          }}
        >
          <p className="text-base">
            📦 Source code available on{' '}
            <a
              href="https://github.com/JeffToken31/Portfolio-project-Zafira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
