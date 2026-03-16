"use client"

import { motion } from "framer-motion"
import { User, Zap, Calendar, MapPin, GraduationCap, Cpu } from "lucide-react"
import Image from "next/image"

const infoCards = [
  { icon: User, label: "Full Name", value: "Saidazim Muqumjonov Ilyosbek o'g'li", color: "text-yellow-400" },
  { icon: Zap, label: "Nickname", value: "VEKIN", color: "text-yellow-400" },
  { icon: Calendar, label: "Date of Birth", value: "April 20, 2009", color: "text-blue-400" },
  { icon: MapPin, label: "Hometown", value: "Andijon, Uzbekistan", color: "text-neon", hasLink: true },
  { icon: MapPin, label: "Current Location", value: "Baliqchi district, UZ", color: "text-red-400", hasLink: true },
  { icon: GraduationCap, label: "Education Goal", value: "NewUU — AI & Robotics Faculty", color: "text-pink-400" },
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
          <p className="text-neon text-sm font-mono mb-2">// 01. ABOUT</p>
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
                  <p className="text-neon text-sm font-mono">@VEKIN // AI Engineer & Founder</p>
                </div>
              </div>
            </div>

            {/* VEKIN Explain Card */}
            <div className="glass-card rounded-xl p-4 border border-border/50">
              <p className="text-xs text-neon font-mono mb-2">{'>'}_ VEKIN.explain()</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-medium">VEKIN</span> is my cyber identity. What  once  started as a  simple  gaming nickname has  transformed  into the name I proudly  carry throughout the digital  universe. It stands for  creativity, technical  curiosity, and the drive to build. From virtual worlds to real code and startups — I exist and  create in the cyber space as VEKIN.
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
                I'm a <span className="text-neon font-medium">17-year-old AI Engineer & Creative Developer</span> from Baliqchi district, Uzbekistan. My journey into tech started early — I've been building websites, learning Python, and exploring hardware since I was 11.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently preparing to enter <span className="text-neon font-medium">New Uzbekistan University (NewUU)</span> to study AI & Robotics — the field I believe will define the next century. Alongside my studies, I co-founded <span className="text-neon font-medium">Tuynuk Market</span>, a modern e-commerce marketplace for household appliances and electronics in Uzbekistan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My core interests span <span className="text-neon">Cybersecurity</span>, <span className="text-neon">Software Development</span>, and <span className="text-neon">AI & Robotics</span>. I believe in building real things — not just learning theory.
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
          // 129-qatorni shunday o'zgartiring:
          className="glass-card rounded-xl p-5 mt-4 mx-4 md:mx-0 relative overflow-hidden border border-dashed border-white/10 w-auto md:col-span-2"
          >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
             <User className="text-blue-400" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{`About Saidazim's Family`}</h3>
              <p className="text-muted-foreground text-sm">Personal Life</p>
            </div>
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 bg-neon/20 text-neon text-sm font-medium rounded-full"
            >
              Coming Soon...
            </motion.span>
          </div>
          
        </motion.div>
        </div>
      </div>
    </section>
  )
}
