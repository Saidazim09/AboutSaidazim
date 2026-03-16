"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Wallet, Copy, Check, Mail, ExternalLink, Instagram } from "lucide-react"

const quickContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "vekinreacts@gmail.com",
    color: "text-yellow-400",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" {...props} className={`w-5 h-5 fill-current ${props.className}`}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    label: "Telegram",
    value: "t.me/vekin_officixl",
    color: "text-blue-400",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" {...props} className={`w-5 h-5 fill-current ${props.className}`}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: "Instagram",
    value: "@vekin_verified",
    color: "text-pink-400",
  },
]

export function ConnectSection() {
  const [copied, setCopied] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    window.open(`https://t.me/vekin_officixl?text=${message}`, "_blank")
  }

  return (
    <section id="connect" className="py-16 md:py-24 relative section-glow">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-neon text-sm font-mono mb-2">// 07. CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's <span className="text-neon text-glow-neon">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm text-pretty">
            Have a project idea, collaboration proposal, or just want to say hi? I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        {/* Support Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs text-muted-foreground font-mono mb-3">{'>'}_ support_vekin[]</p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Crypto Wallet */}
            <div className="glass-card rounded-xl p-4 relative overflow-hidden group border border-neon/20">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon/5 rounded-full blur-3xl group-hover:bg-neon/15 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Crypto Wallet</h3>
                    <p className="text-xs text-neon font-mono">Send any crypto</p>
                    <p className="text-xs text-muted-foreground">TON Blockchain</p>
                  </div>
                </div>
                
                <div className="p-2.5 bg-secondary/50 rounded-lg mb-3">
                  <p className="text-[10px] text-muted-foreground font-mono mb-1">Wallet Address:</p>
                  <code className="text-xs text-neon break-all font-mono">
                    UQA21tfvAHyBJJoQVe1T5ogoot3SLoAavgeHooP176S_etwC
                  </code>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => copyToClipboard("UQA21tfvAHyBJJoQVe1T5ogoot3SLoAavgeHooP176S_etwC", "wallet")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-neon/10 text-neon text-sm font-medium rounded-lg border border-neon/30 hover:bg-neon/20 transition-colors"
                >
                  <Copy size={14} />
                  {copied === "wallet" ? "COPIED!" : "COPY WALLET ADDRESS"}
                </motion.button>

                <p className="text-[10px] text-muted-foreground text-center mt-2">Support my work with TON or any crypto</p>
              </div>
            </div>

            {/* Visa Card Design */}
            <div className="relative overflow-hidden rounded-xl">
               
                <div className="bg-gradient-to-br from-teal-600/90 via-cyan-700/90 to-teal-800/90 p-8 rounded-2xl relative group flex flex-col justify-between aspect-[2/0.65] w-full shadow-2xl">
                {/* Chip */}
                <div className="absolute top-5 left-5 w-10 h-7 rounded bg-gradient-to-br from-yellow-400 to-yellow-600" />
                
                {/* Circles */}
                <div className="absolute top-5 right-5 w-6 h-6 rounded-full border border-white/30" />

                {/* Card Number */}
                <div className="mt-12 mb-5">
                  <p className="text-xl md:text-2xl font-mono text-white tracking-widest">
                    4916 9903 5169 6254
                  </p>
                </div>

                {/* Card Holder */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-white/60 font-mono mb-0.5">CARD HOLDER</p>
                    <p className="text-sm font-bold text-white tracking-wide">SAIDAZIM MUQUMJONOV</p>
                  </div>
                  <p className="text-2xl font-bold italic text-white/90">VISA</p>
                </div>

                {/* Tap to copy */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => copyToClipboard("4916990351696254", "card")}
                  className="absolute bottom-2 right-4 text-[10px] text-white/60 hover:text-white/80 transition-colors flex items-center gap-1"
                >
                  {copied === "card" ? <Check size={10} /> : null}
                  {copied === "card" ? "copied!" : "tap to copy"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-5 border border-border/50"
          >
            <p className="text-xs text-neon font-mono mb-4">{'>'}_ send_message ( Working on Beta !!! )</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-muted-foreground mb-1.5 block font-mono">
                  name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-muted-foreground mb-1.5 block font-mono">
                  email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-muted-foreground mb-1.5 block font-mono">
                  message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-all resize-none text-sm"
                  placeholder="What's on your mind?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-neon text-primary-foreground font-semibold rounded-lg glow-neon-sm hover:glow-neon transition-all"
              >
                <Send size={16} />
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>





          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
          <p className="text-xs text-neon font-mono mb-4">{'>'}_ quick_contact</p>
    {[
        { label: "Telegram (Personal)", value: "t.me/Saidazim_verified", icon: Send, color: "text-blue-400", isSpecial: true, specialType: "beam" },
        { label: "Telegram (Channel)", value: "t.me/vekin_officixl", icon: Send, color: "text-sky-400", isSpecial: true, specialType: "pulse" },
        { label: "Email", value: "vekinreacts@gmail.com", icon: Mail, color: "text-yellow-400", isSpecial: false },
        { label: "Instagram", value: "@vekin_verified", icon: Instagram, color: "text-pink-400", isSpecial: false }
    ].map((contact, index) => (
        <motion.a
            key={index}
            href={contact.label.includes("Email") ? `mailto:${contact.value}` : `https://${contact.value}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          //  {/* Sichqoncha borganda (hover) animatsiyasi qo'shildi */}
            whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-4 p-4 glass-card rounded-xl border relative overflow-hidden group transition-all duration-300 ${
                contact.isSpecial ? "border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)]" : "border-white/10"
            }`}
        >
            {/* 1. Shaxsiy Telegram uchun aylanuvchi nur (Beam effect) */}
            {contact.specialType === "beam" && (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-150%] opacity-50 pointer-events-none"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, #3b82f6 30deg, transparent 60deg)"
                    }}
                />
            )}

            {/* 2. Kanal uchun pulsatsiyalanuvchi fon (Pulse effect) */}
            {contact.specialType === "beam" && (
                <motion.div
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-sky-500 pointer-events-none"
                />
            )}

            <div className="relative z-10 w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                <contact.icon className={`${contact.color} group-hover:scale-110 transition-transform duration-300`} size={20} />
            </div>

            <div className="relative z-10 flex-1">
                <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider">{contact.label}</p>
                <p className="font-medium text-sm group-hover:text-neon transition-colors duration-300">{contact.value}</p>
            </div>
            
            <ExternalLink size={14} className="relative z-10 text-muted-foreground group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </motion.a>
    ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
