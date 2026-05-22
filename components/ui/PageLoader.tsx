"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import logo from "../../public/nexolialogo.png"

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#53828a] to-[#b05f76] z-[9999]"
    >
      {/* Logo animé complexe */}
      <motion.div
        initial={{ scale: 0.3, y: -50 }}
        animate={{ scale: [0.3, 1.2, 1], y: [-50, 20, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-6"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5, // commence après le rebond initial
          }}
          className="w-full h-full"
        >
          <Image
            src={logo}
            alt="NEXOLIA Logo"
            width={96}
            height={96}
            className="border-2 border-white shadow-lg"
            style={{borderRadius:'50%'}}
          />
        </motion.div>
      </motion.div>

      {/* Texte animé */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-center"
      >
        Chargement de votre expérience...
      </motion.p>
    </motion.div>
  )
}
