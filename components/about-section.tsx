"use client"

import { motion } from "framer-motion"
import { User, Zap, Calendar, MapPin, GraduationCap, Cpu } from "lucide-react"
import Image from "next/image"

const infoCards = [
  { icon: User, label: "To'liq Ismim", value: "Saidazim Muqumjonov Ilyosbek o'g'li", color: "text-yellow-400" },
  { icon: Zap, label: "Tahallusim (Nickname)", value: "VEKIN", color: "text-yellow-400" },
  { icon: Calendar, label: "Tug'ilgan Sanam", value: "April 20, 2009", color: "text-blue-400" },
  { icon: MapPin, label: "Yashash Joyim", value: "Andijon, Uzbekistan", color: "text-neon", hasLink: true },
  { icon: MapPin, label: "Joriy Manzilim", value: "Baliqchi tumani, UZ", color: "text-red-400", hasLink: true },
  { icon: GraduationCap, label: "Ta'limdagi Maqsadim", value: "NewUU — AI & Robotics Faculty", color: "text-pink-400" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative section-glow">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-neon text-sm font-mono mb-2">// 01. MEN Haqimda</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Who is <span className="text-neon text-glow-neon">VEKIN?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Portrait Card */}
            <div className="relative glass-card rounded-xl overflow-hidden border border-neon/20">
              <div className="relative h-72 md:h-80">
                <Image
                  src="grok_image_1773633328385.jpg"
                  alt="Saidazim Muqumjonov"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold">Saidazim Muqumjonov</h3>
                  <p className="text-neon text-sm font-mono">@VEKIN // AI Muhandisi & Co-Founder</p>
                </div>
              </div>
            </div>

            {/* VEKIN Explain Card */}
            <div className="glass-card rounded-xl p-4 border border-border/50">
              <p className="text-xs text-neon font-mono mb-2">{'>'}_ VEKIN.explain()</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-medium">VEKIN</span> — bu mening Kiber-Pasportim. Bir paytlar oddiygina o'yin tahallusi sifatida boshlangan bu nom, bugun men raqamli koinotda faxr bilan olib yuradigan nomga aylandi. U ijodkorlik, texnik qiziquvchanlik va yaratishga bo'lgan intilishni anglatadi. Virtual olamlardan tortib, real kodlar va startaplargacha — men kiber-makonda VEKIN sifatida mavjudman va ijod qilaman.
              </p>
            </div>
          </motion.div>
          





          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Bio Text */}
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-neon font-medium">Men 17 yoshli sun'iy intellekt muhandisi (AI Engineer) va kreativ dasturchiman (Creative Developer)</span>. O'zbekistonning Andijon, Baliqchi tumanidanman. Texnologiyalar olamiga qadamim juda erta boshlangan — 11 yoshimdan buyon Raqamli texnologiyalarni o'rganaman, Innovatsion va Biznes loyihalarda va qurilmalar (hardware) bilan ishlashga qiziqaman.
              </p>
              <p className="text-muted-foreground leading-relaxed">
               Hozirgi kunda kelajak Asrini(yuz yilligini) belgilab beruvchi soha — Sun’iy intellekt va Robototexnika<span className="text-neon font-medium">(AI Engineering & Robotics)</span> yo‘nalishi bo‘yicha tahsil olish uchun <span className="text-neon font-medium">New Uzbekistan University (Yangi O‘zbekiston universiteti — NewUU)</span>ga kirishga tayyorgarlik ko‘rmoqdaman. O‘qish bilan bir qatorda, O‘zbekistondagi Zamonaviy texnikalar, maishiy texnika va elektronika mahsulotlarining zamonaviy onlayn savdo platformasi — <span className="text-neon font-medium">Tuynuk Market</span> loyihasiga ham asos soldim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Asosiy qiziqishlarim — <span className="text-neon font-medium">Kiberxavfsizlik(Cybersecurity)</span>,<span className="text-neon font-medium"> Dasturchilik(Software Developing)</span> hamda <span className="text-neon font-medium">Sun'iy Intellekt va Robototexnika(AI Engineering & Robotics)</span> sohalarini qamrab oladi. Men faqat nazariyani o‘rganishga emas, balki real loyihalarni hayotga tatbiq etishga ishonaman.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card rounded-lg p-3 group hover:border-neon/30 transition-all border border-border/50"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <card.icon size={14} className={card.color} />
                    <p className="text-[10px] text-muted-foreground font-mono">{card.label}</p>
                  </div>
                  <p className="text-sm font-medium flex items-center gap-1">
                    {card.value}
                    {card.hasLink && <span className="w-1.5 h-1.5 rounded-full bg-neon" />}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Family Card - Coming Soon */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-5 mt-4 mx-4 md:mx-0 relative overflow-hidden border border-dashed border-white/10 w-auto md:col-span-2"
          >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
             <User className="text-blue-400" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{`About Saidazim's Family`}</h3>
              <p className="text-muted-foreground text-sm">Shaxsiy Hayotim</p>
            </div>
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 bg-neon/20 text-neon text-sm font-medium rounded-full"
            >
              Tez kunlarda...
            </motion.span>
          </div>
          
        </motion.div>
        </div>
      </div>
    </section>
  )
}
