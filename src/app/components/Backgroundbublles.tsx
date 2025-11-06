'use client';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';

interface Bubble {
  color: string;
  size: number;
  top: string;
  left: string;
  yRange: number;
  xRange: number;
  duration: number;
}

const DESKTOP_BUBBLES: Bubble[] = [
  {
    color: 'var(--bubble-pink)',
    size: 240,
    top: '5%',
    left: '10%',
    yRange: 20,
    xRange: 10,
    duration: 9,
  },
  {
    color: 'var(--bubble-yellow)',
    size: 240,
    top: '60%',
    left: '70%',
    yRange: 25,
    xRange: -12,
    duration: 10,
  },
  {
    color: 'var(--bubble-blue)',
    size: 240,
    top: '35%',
    left: '80%',
    yRange: 18,
    xRange: 8,
    duration: 8,
  },
  {
    color: 'var(--bubble-yellow)',
    size: 120,
    top: '20%',
    left: '30%',
    yRange: 15,
    xRange: -8,
    duration: 7,
  },
  {
    color: 'var(--bubble-blue)',
    size: 120,
    top: '40%',
    left: '50%',
    yRange: 20,
    xRange: 10,
    duration: 6,
  },
  {
    color: 'var(--bubble-pink)',
    size: 120,
    top: '75%',
    left: '15%',
    yRange: 18,
    xRange: -6,
    duration: 8,
  },
  {
    color: 'var(--bubble-blue)',
    size: 60,
    top: '10%',
    left: '60%',
    yRange: 12,
    xRange: -6,
    duration: 5,
  },
  {
    color: 'var(--bubble-yellow)',
    size: 60,
    top: '50%',
    left: '20%',
    yRange: 10,
    xRange: 6,
    duration: 5,
  },
  {
    color: 'var(--bubble-pink)',
    size: 60,
    top: '85%',
    left: '50%',
    yRange: 14,
    xRange: -5,
    duration: 5,
  },
  {
    color: 'var(--bubble-blue)',
    size: 60,
    top: '65%',
    left: '40%',
    yRange: 10,
    xRange: 5,
    duration: 6,
  },
  {
    color: 'var(--bubble-yellow)',
    size: 60,
    top: '20%',
    left: '85%',
    yRange: 8,
    xRange: -4,
    duration: 6,
  },
  {
    color: 'var(--bubble-pink)',
    size: 60,
    top: '55%',
    left: '5%',
    yRange: 12,
    xRange: 5,
    duration: 7,
  },
];

const MOBILE_BUBBLES: Bubble[] = [
  {
    color: 'var(--bubble-pink)',
    size: 80,
    top: '5%',
    left: '10%',
    yRange: 8,
    xRange: 3,
    duration: 6,
  },
  {
    color: 'var(--bubble-yellow)',
    size: 100,
    top: '25%',
    left: '60%',
    yRange: 10,
    xRange: -5,
    duration: 7,
  },
  {
    color: 'var(--bubble-blue)',
    size: 60,
    top: '55%',
    left: '30%',
    yRange: 6,
    xRange: 4,
    duration: 6,
  },
  {
    color: 'var(--bubble-yellow)',
    size: 40,
    top: '70%',
    left: '75%',
    yRange: 8,
    xRange: -4,
    duration: 5,
  },
  {
    color: 'var(--bubble-blue)',
    size: 50,
    top: '85%',
    left: '20%',
    yRange: 7,
    xRange: 5,
    duration: 7,
  },
  {
    color: 'var(--bubble-pink)',
    size: 30,
    top: '40%',
    left: '80%',
    yRange: 9,
    xRange: -3,
    duration: 6,
  },
];

export default function BackgroundBubbles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bubbles = isMobile ? MOBILE_BUBBLES : DESKTOP_BUBBLES;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-25 bubble"
          style={
            {
              top: b.top,
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              backgroundColor: b.color,
              ['--bubble-color' as string]: b.color,
            } as React.CSSProperties
          }
          animate={{
            y: [0, b.yRange, 0],
            x: [0, b.xRange, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
