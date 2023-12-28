import React from 'react'
import { motion } from 'framer-motion'

const Blur = ({closeMenu}) => {
  return (
    <motion.section
    initial={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' }}
    animate={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(0,0,0,0.5)' }}
    exit={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' }}
    transition={{ duration: 0.5 }}
    className="flex w-[100vw] z-[12] fixed top-0 left-0 h-screen backdrop-filter backdrop-blur-[20px] text-[black] cursor-pointer"
    onClick={closeMenu}
  >
  </motion.section>

  )
}

export default Blur