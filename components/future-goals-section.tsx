"use client"

import { motion } from "framer-motion"
import { GraduationCap, Globe, Zap, Rocket, ExternalLink, Heart, User } from "lucide-react"
import Image from "next/image"

const whyNewUU = [
  { icon: "🎓", text: "World-class AI & Robotics curriculum" },
  { icon: Globe, text: "International partnerships and research labs" },
  { icon: Zap, text: "Cutting-edge technology infrastructure" },
  { icon: Rocket, text: "Direct pathway to AI engineering career" },
]

export function FutureGoalsSection() {
  return (
    <section className="py-16 md:py-24 relative section-glow">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-neon text-sm font-mono mb-2">// 02. FUTURE GOALS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Where I'm <span className="text-neon text-glow-neon">Headed</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl overflow-hidden border border-neon/20"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - NewUU Info */}
            <div className="p-5 lg:p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1.5">
                  <Image 
                    src="newuu_image1.jpg"
                    alt="NewUU Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="px-2 py-0.5 bg-neon/20 text-neon text-[10px] font-mono rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon" />
                      Target: 2026
                    </span>
                  </div>
                  <h3 className="text-lg font-bold"> 
                    <a
                  href="https://newuu.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon hover:underline transition-colors"
                  >  New Uzbekistan University</a></h3>
                  <p className="text-xs text-muted-foreground font-mono">NewUU — newuu.uz</p>
                </div>
              </div>

              {/* Faculty Card */}
              <div className="p-3 bg-secondary/30 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                    <GraduationCap size={14} className="text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-sm">AI & Robotics Faculty</h4>
                </div>
                <p className="text-xs text-neon font-mono">Artificial Intelligence · Robotics · Machine Learning</p>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                  Planning to study at New Uzbekistan University (NewUU) in the AI & Robotics faculty — the most cutting-edge program in Uzbekistan, focused on building the next generation of AI engineers and robotics specialists.
                </p>
              </div>

              {/* Why NewUU */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground font-mono mb-2">{'>'}_ why_newuu[]</p>
                <div className="space-y-2">
                  {whyNewUU.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {typeof item.icon === "string" ? (
                        <span className="text-sm">{item.icon}</span>
                      ) : (
                        <item.icon size={14} className="text-neon" />
                      )}
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Campus Image */}
            <div className="p-4 lg:p-5 bg-secondary/20">
              <div className="relative h-full min-h-[280px] rounded-xl overflow-hidden">
                <Image
                  src="newuu_big_image.png"
                  alt="NewUU Campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-semibold text-sm"> <a
                  href="https://newuu.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon hover:underline transition-colors"
                  >  New Uzbekistan University</a></p>
                  <p className="text-xs text-neon font-mono">Tashkent, Uzbekistan ·  <a
                  href="https://newuu.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon hover:underline transition-colors"
                  >newuu.uz</a></p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="text-center p-2 bg-secondary/30 rounded-lg">
                  <p className="text-lg font-bold text-neon">2026</p>
                  <p className="text-[10px] text-muted-foreground font-mono">Target Year</p>
                </div>
                <div className="text-center p-2 bg-secondary/30 rounded-lg">
                  <p className="text-lg font-bold text-neon">AI</p>
                  <p className="text-[10px] text-muted-foreground font-mono">Faculty</p>
                </div>
                <div className="text-center p-2 bg-secondary/30 rounded-lg">
                  <p className="text-lg font-bold text-neon">#1</p>
                  <p className="text-[10px] text-muted-foreground font-mono">In UZ</p>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="https://newuu.uz/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-2.5 border border-neon/50 text-neon text-sm font-medium rounded-lg hover:bg-neon/10 transition-colors"
              >
                VISIT NEWUU WEBSITE
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Family Card - Coming Soon
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-5 mt-4 relative overflow-hidden border border-dashed border-neon/20"
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
        </motion.div> */}
      </div>
    </section>
  )
}
