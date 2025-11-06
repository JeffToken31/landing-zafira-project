'use client';

import {motion, useInView, useAnimation} from 'framer-motion';
import {useRef, useEffect} from 'react';

interface FeatureProps {
  title: string;
  description: string;
  videoSrc: string;
  reverse?: boolean;
}

export default function FeatureBlock({
  title,
  description,
  videoSrc,
  reverse,
}: FeatureProps) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, {once: true, margin: '-100px'});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      videoRef.current?.play().catch(() => {});
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center ${
        reverse ? 'md:flex-row-reverse' : ''
      } gap-12 lg:gap-20 py-12 w-full overflow-hidden`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {opacity: 0, y: 80},
        visible: {
          opacity: 1,
          y: 0,
          transition: {duration: 1, ease: 'easeOut'},
        },
      }}
    >
      {/* Glow background */}
      <div
        className={`absolute inset-0 pointer-events-none blur-[100px] opacity-40 ${
          reverse ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
        } from-primary/30 via-cyan-500/20 to-transparent`}
      />

      {/* Texte */}
      <motion.div
        className={`flex-1 px-6 md:px-10 z-10 ${
          reverse ? 'lg:pl-16' : 'lg:pr-16'
        }`}
        initial={{opacity: 0, x: reverse ? 80 : -80}}
        animate={controls}
        variants={{
          visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
        }}
      >
        <motion.h3
          className="font-heading text-3xl md:text-4xl mb-6 tracking-tight leading-snug bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent"
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
          {title}
        </motion.h3>
        <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-[580px] text-neutral-500">
          {description}
        </p>
      </motion.div>

      {/* Vidéo */}
      <motion.div
        className={`relative flex justify-center w-[95%] md:w-[90%] lg:w-[45%] mx-auto overflow-hidden rounded-3xl shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_50px_rgba(56,189,248,0.45)] transition-all duration-700 ${
          reverse ? 'lg:ml-12' : 'lg:mr-12'
        }`}
        whileHover={{scale: 1.03}}
        transition={{type: 'spring', stiffness: 120}}
      >
        {/* Halo animé */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-cyan-500/10 blur-3xl animate-pulse" />
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="w-full h-auto object-contain rounded-3xl relative z-10"
        />
      </motion.div>
    </motion.section>
  );
}
