"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "ASOSIY", href: "#home" },
  { name: "MEN HAQIMDA", href: "#about" },
  { name: "QOBILYATLARIM", href: "#skills" },
  { name: "LOYIHALARIM", href: "#projects" },
  { name: "IJTIMOIY TARMOQLAR", href: "#social" },
  { name: "BOG'LANISH", href: "#connect" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#050a1f]/80 backdrop-blur-xl py-4" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2.5 text-xl font-bold text-neon text-glow-neon font-mono"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2026-03-14_18-15-56-qQJvuyV9dAFMWpHdglBu3vrJ3BMuuw.jpg" 
                alt="VEKIN Logo" 
                className="w-8 h-8 rounded-lg object-cover border border-neon/50 shadow-[0_0_8px_rgba(0,255,157,0.3)]"
              />
              VEKIN
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 1, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`relative px-3 py-2 text-xs font-mono tracking-wider transition-colors ${
                      isActive ? "text-neon" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon glow-neon-sm"
                      />
                    )}
                  </motion.a>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="#connect"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2 text-xs font-bold font-mono tracking-wider border border-neon text-neon rounded-lg hover:bg-neon/10 transition-all glow-neon-sm"
              >
                XABAR YOZISH
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-neon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-16 glass-strong lg:hidden"
          >
            <div className="flex flex-col items-center gap-4 p-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="text-lg font-mono text-foreground hover:text-neon transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#connect"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-4 px-6 py-3 bg-neon text-primary-foreground font-bold rounded-lg glow-neon-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                XABAR YOZISH
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
