import React from 'react'
import { motion } from 'framer-motion';

export default function Index({ type }) {

  const isClient = typeof window !== 'undefined';
  const initialPath = isClient ? `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0` : '';
  const targetPath = isClient ? `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0` : '';

  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    type === 'nav' ? (
      <svg className="absolute top-0 right-[-99px] w-full h-full fill-white stroke-none transform rotate-180">
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    ) : (
      <svg className="absolute top-0 left-[-99px] w-full h-full fill-white stroke-none transform">
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    )
  );
}
