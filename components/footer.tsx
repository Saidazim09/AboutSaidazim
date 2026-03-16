"use client"

import { motion } from "framer-motion"
import { AppWindow, ChevronsLeftRightEllipsis, Heart, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2026-03-14_18-15-56-qQJvuyV9dAFMWpHdglBu3vrJ3BMuuw.jpg"
                alt="VEKIN Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-bold text-neon font-mono">VEKIN</p>
              <p className="text-xs text-muted-foreground">
                {new Date().getFullYear()} Saidazim Muqumjonov
              </p>
            </div>
          </div>

          {/* Location */}
          <motion.a
            href="https://maps.app.goo.gl/BnK4pmVChY3mfgKX9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
          >
            <MapPin size={16} />
            Andijon, Uzbekistan
          </motion.a>

           {/* AI bilan yaratildeee */} 
           <p className="flex items-center gap-2 text-sm text-muted-foreground"> 
           Made {" "} 
            <motion.span 
              animate={{ x: [-2, 2, -2] }} // Chapga-o'ngga siljish animatsiyasi
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
              >  
               <ChevronsLeftRightEllipsis size={18} className="text-neon" /> 
              </motion.span>{" "} 
               by SAIDAZIM 
               </p>
        </div>
      </div>
    </footer>
  )
}
