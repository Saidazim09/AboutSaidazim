"use client"

import { motion } from "framer-motion"
import { MessageCircle, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://newuu.uz/uploads/slider-images/1738840174.jpg"
          alt="New Uzbekistan University Campus"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Logo and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* VEKIN Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="relative mb-6"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2026-03-14_18-15-56-qQJvuyV9dAFMWpHdglBu3vrJ3BMuuw.jpg"
                  alt="VEKIN Official Logo"
                  fill
                  className="object-contain rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl glow-neon opacity-50" />
              </div>
            </motion.div>

            {/* VEKIN Text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-neon text-glow-neon font-mono tracking-wider mb-4"
            >
              VEKIN
            </motion.h2>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            >
              Saidazim Muqumjonov
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty"
            >
              Kelajakdagi AI Engineer & Creative Developer | Tuynuk Market Co-Founder
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#connect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-primary-foreground font-semibold rounded-xl glow-neon hover:glow-neon-lg transition-all duration-300"
            >
              <MessageCircle size={20} />
            Xabar Yozing
            </motion.a>
          </motion.div>

          {/* Right Side - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-neon/20 rounded-3xl blur-3xl" />
              <div className="absolute -inset-2 bg-neon/10 rounded-3xl blur-xl" />
              
              {/* Portrait Container */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-neon/30 glow-neon"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portret-ODyGDh8vKXK4b4uBedVoaW9M6G8JDr.jpg"
                  alt="Saidazim Muqumjonov - VEKIN"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Neon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon/10 via-transparent to-neon/10" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 border-2 border-neon/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-neon/30 rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Pastroqqa Ham Tushing</span>
            <ChevronDown size={20} className="text-neon" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
