"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Rocket, Apple, Smartphone, TrendingUp, Link2, CheckCircle2, Tv, Laptop, WashingMachine, Bot } from "lucide-react"
import Image from "next/image"

const tabs = ["OVERVIEW", "TECH", "LINKS"]

const products = [
  { name: "Smart TV 55\"", price: "4,500,000 so'm", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop" },
  { name: "Laptop Pro", price: "12,800,000 so'm", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop" },
  { name: "Kir yuvish mashinasi", price: "3,200,000 so'm", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=200&fit=crop" },
  { name: "Robot Vakum", price: "1,900,000 so'm", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

const plannedFeatures = [
  { name: "Fond bozori (aksiyalar bozori) bilan integratsiya qilish.", icon: TrendingUp },
  { name: "Kripto-portfel kuzatuvchisi (kriptovalyuta aktivlarini kuzatib borish vositasi).", icon: "B" },
  { name: "Tuynuk Market ekotizimi bilan bog‘lanish.", icon: Link2 },
  { name: "Mobil ilova (iOS va Android platformalari uchun).", icon: Smartphone },
  { name: "Aqlli investitsiya tahlillari (investitsiyalar bo‘yicha tushuncha va tavsiyalar).", icon: Bot },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("OVERVIEW")

  return (
    <section id="projects" className="py-16 md:py-24 relative section-glow">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-neon text-sm font-mono mb-2">// 04. LOYIHALARIM</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Mening <span className="text-neon text-glow-neon">Loyihalarim</span>
          </h2>
        </motion.div>

        {/* Tuynuk Market Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl overflow-hidden mb-6 border border-neon/20"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30 border-b border-border/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-2">tuynuk_market.loyihasi</span>
            <span className="ml-auto px-2 py-0.5 border border-neon/50 text-neon text-xs font-mono rounded">
              FAOL // 2025-2026
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Content */}
            <div className="lg:col-span-3 p-5">
              {/* Logo and Title */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 3 }}
                  className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-black p-1.5 border border-neon/30"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2026-03-14_18-15-56-Zw1OpxcHR9rCzd2ILa5NeFVwolMJYI.jpg"
                    alt="Tuynuk Market Logo"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-neon">Tuynuk Market</h3>
                  <p className="text-muted-foreground text-sm">Elektron tijorat bozori (e-commerce marketplace) · Uzbekistan</p>
                  <div className="flex gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary/50 text-xs rounded">
                      <Apple size={12} /> iOS
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary/50 text-xs rounded">
                      <Smartphone size={12} /> Android
                    </span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                      activeTab === tab
                        ? "bg-neon text-primary-foreground"
                        : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "OVERVIEW" && (
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed">
                    <span className="text-neon font-medium">Tuynuk Market</span> - O‘zbekistondagi maishiy texnika va elektronika mahsulotlariga ixtisoslashgan zamonaviy savdo platformasi (marketplace). U mahalliy bozorda yaqqol ajralib turuvchi bo'lajak Gigant brend va foydalanuvchi uchun maksimal darajada qulay (user-first) interfeysi bilan yaratilgan.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Loyiha hammuassisi (co-founder) sifatida men texnik arxitektura, Frontend & Backend qismi va Telegram hamjamiyatini(<a href="https://t.me/tuynuk_market" className="text-neon hover:underline">@tuynuk_market</a>) rivojlantirish bilan shug‘ullanaman. Ushbu platforma butun O‘zbekiston bo‘ylab sifatli elektronika sotuvchilari va xaridorlarini birlashtiradi. Ilova iOS va Android operatsion tizimlarida mavjud.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-0.5">Lavozim</p>
                      <p className="text-sm font-semibold">Co-founder & CEO</p>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-0.5">Market</p>
                      <p className="text-sm font-semibold">Uzbekistan</p>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-0.5">Platformalar</p>
                      <p className="text-sm font-semibold flex items-center gap-1">
                        <Smartphone size={14} className="text-neon" /> iOS & Android
                      </p>
                    </div>
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-0.5">Status</p>
                      <p className="text-sm font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" /> Faol
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href="https://t.me/tuynuk_market"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 bg-neon text-primary-foreground text-sm font-medium rounded-lg glow-neon-sm"
                    >
                      KANALIGA O'TISH
                    </motion.a>
                    <motion.a
                      href="#connect"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-4 py-2 border border-neon/50 text-neon text-sm font-medium rounded-lg hover:bg-neon/10 transition-colors"
                    >
                      VEKINga bog'lanish
                    </motion.a>
                  </div>
                </div>
              )}

              {activeTab === "TECH" && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Tuynuk Market’da qo‘llanilgan texnologiyalar:</p>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Node.js", "PostgreSQL", "Telegram Bot API", "Redux", "Stripe"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-secondary/50 text-xs rounded-lg border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "LINKS" && (
                <div className="space-y-3">
                  <a href="https://t.me/tuynuk_market" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-blue-400">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium group-hover:text-neon transition-colors">Telegram Kanali</p>
                      <p className="text-xs text-muted-foreground">@tuynuk_market</p>
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground" />
                  </a>
                </div>
              )}
            </div>

            {/* Right - Product Preview */}
            <div className="lg:col-span-2 p-4 bg-secondary/20 border-l border-border/30">
              {/* Mini browser header */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-t-lg mb-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">tuynuk-market.uz</span>
              </div>

              {/* Mini header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/30">
                <span className="text-neon font-bold text-sm">Tuynuk Market</span>
                <div className="flex gap-2 text-[10px] text-muted-foreground">
                  <span>Bosh sahifa</span>
                  <span>Mahsulotlar</span>
                  <span>Aksiya</span>
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-2 gap-2">
                {products.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-secondary/30 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-20">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="p-2">
                      <p className="text-xs font-medium truncate">{product.name}</p>
                      <p className="text-[10px] text-neon">{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tuynuk Invest - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-5 relative overflow-hidden border border-dashed border-neon/20"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left */}
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-black p-1.5 border border-neon/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2026-03-14_18-15-56-Zw1OpxcHR9rCzd2ILa5NeFVwolMJYI.jpg"
                    alt="Tuynuk Invest Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neon">Tuynuk Invest</h3>
                  <p className="text-muted-foreground text-xs font-mono">Investitsiya qilish Platformasi · Aksiyalar · Crypto · Ekotizim</p>
                </div>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full"
                >
                  <Rocket size={12} />
                  TEZ KUNLARDA
                </motion.span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-3">
                <span className="text-neon">Aksiyalar</span>, <span className="text-neon">Crypto</span> uchun kelajak platformasi va Tuynuk Market bilan bevosita integratsiya. Foydalanuvchilar bizning <span className="text-neon">Ekotizimimizga</span> sarmoya kiritishlari mumkin.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <span className="text-neon">Tuynuk Invest</span> kundalik xarid qilish va aqlli investitsiya o'rtasidagi bo'shliqni bartaraf etadi - barchasi Tuynuk ekotizimida. O‘zbekistonning fintech maydoni uchun inqilobiy qadam.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Aksiyalar", "Crypto", "DeFi", "TUYNUK Ekotizimi", "Mobile-First"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-neon/10 text-neon text-xs rounded-lg border border-neon/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Planned Features */}
            <div className="bg-secondary/20 rounded-xl p-4">
              <p className="text-xs text-muted-foreground font-mono mb-3">{'>'}_ rejalashtirilgan_xususiyatlar[]</p>
              <div className="space-y-2">
                {plannedFeatures.map((feature) => (
                  <div key={feature.name} className="flex items-center justify-between p-2 bg-secondary/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      {typeof feature.icon === "string" ? (
                        <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-yellow-400">{feature.icon}</span>
                      ) : (
                        <feature.icon size={16} className="text-muted-foreground" />
                      )}
                      <span className="text-sm">{feature.name}</span>
                    </div>
                    <span className="text-[10px] text-yellow-400 font-mono">Tez orada</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
