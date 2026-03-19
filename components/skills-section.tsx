"use client"

import { motion } from "framer-motion"
import { Sparkles, Globe, Zap, Brain, Shield, Wrench } from "lucide-react"

const skills = [
  {
    name: "Python",
    level: "Rivojlangan",
    percentage: 91,
    description: "Backend skriptlar yozish, avtomatlashtirish, ma’lumotlarga ishlov berish hamda Sun’iy intellekt va Mashinali o‘rganish (AI/ML) sohasidagi tajribalar. 3 yildan ortiq amaliy tajriba. Bu mening eng kuchli dasturlash tilim — botlardan tortib AI loyihalarigacha bo‘lgan barcha yo‘nalishlarda aynan shu tildan foydalanaman. (Pythonga muqobil C++ va kelajakda C++ni ham o'rganmoqchiman)",
    icon: Sparkles,
    primary: true,
  },
  {
    name: "HTML, CSS & JavaScript",
    level: "Ekspert",
    percentage: 70,
    description: "Semantik maketlash, zamonaviy CSS, animatsiyalar, moslashuvchan (responsive) dizayn va JavaScript. Interaktiv veb-interfeyslar va loyihalar yaratish bo‘yicha 1 yildan ortiq amaliy tajribaga egaman.",
    icon: Globe,
    primary: false,
  },
  {
    name: "Hardware",
    level: "Malakali",
    percentage: 80,
    description: "PC yig'ish, komponentlar diagnostikasi, elektronika tuzatish, sxemalar asoslari.",
    icon: Wrench,
    primary: false,
  },
  {
    name: "Cybersecurity",
    level: "O'rganilyabdi",
    percentage: 60,
    description: "Tarmoq xavfsizligi, axloqiy xakerlik tushunchalari va CTF (HacktheBox) musobaqalari. Ushbu yo‘nalishda Kiber-hujumlarning oldini olish va tizimlarni himoya qilish bo‘yicha amaliy bilimlar.",
    icon: Shield,
    primary: false,
  },
  {
    name: "AI & Robotics",
    level: "Ishqiboz",
    percentage: 75,
    description: "Mashinali o‘rganish (Machine Learning), robototexnika nazariyasi va NewUU (Yangi O‘zbekiston universiteti)ga kirish uchun tayyorgarlik. Kelajak texnologiyalari poydevorini o‘rganish.",
    icon: Brain,
    primary: false,
  },
  // {
  //   name: "Hardware",
  //   level: "Expert",
  //   percentage: 80,
  //   description: "PC building, component diagnosis, electronics repair, circuit basics.",
  //   icon: Wrench,
  //   primary: false,
  // },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Ekspert": return "bg-neon/20 text-neon"
    case "Rivojlangan": return "bg-blue-500/20 text-blue-400"
    case "Malakali": return "bg-yellow-500/20 text-yellow-400"
    case "O'rganilyabdi": return "bg-yellow-500/20 text-yellow-400"
    case "Ishqiboz": return "bg-blue-500/20 text-blue-400"
    default: return "bg-neon/20 text-neon"
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 relative section-glow">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-neon text-sm font-mono mb-2">// 03. QOBILYATLARIM</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Mening <span className="text-neon text-glow-neon">Texnologik Arsenalim</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm text-pretty">
            Murakkab Python skriptlarini yozishdan tortib, apparat vositalari (hardware) bilan ishlashgacha bo‘lgan — men egallagan texnologiyalar jamlanmasi. Doimiy o‘rganish va tinimsiz yaratish jarayonidaman.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Primary Skill - Python */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="md:row-span-2 glass-card rounded-xl p-5 relative overflow-hidden group border border-neon/20"
          >
            {/* Glow effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon/10 rounded-full blur-3xl group-hover:bg-neon/20 transition-all duration-500" />
            
            <div className="relative z-10">
              {/* Primary badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neon/20 text-neon text-xs font-medium rounded-full mb-4">
                <Sparkles size={12} />
                ASOSIY MAHORATIM
              </span>

              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-400 fill-current">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <h3 className="text-xl font-bold">Python</h3>
                </div>
                <span className="ml-auto text-2xl font-bold text-neon">85%</span>
              </div>

              {/* Level badge */}
              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${getLevelColor("Advanced")} mb-3`}>
                Malakali
              </span>

              {/* Progress bar */}
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                  className="h-full bg-neon glow-neon-sm rounded-full"
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                Backend skriptlash, avtomatlashtirish, ma'lumotlar bilan ishlash, AI/ML eksperimentlar. 3+ yil amaliy tajriba. Mening eng kuchli dasturlash tilim — botlardan tortib AI loyihalarigacha ishlatiladi.
              </p>
            </div>
          </motion.div>

          {/* Other Skills - 2x2 Grid */}
          {skills.slice(1).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="glass-card rounded-xl p-4 relative overflow-hidden group"
            >
              {/* Glow */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-neon/0 rounded-full blur-2xl group-hover:bg-neon/15 transition-all duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <skill.icon size={20} className="text-muted-foreground group-hover:text-neon transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{skill.name}</h3>
                    <span className={`inline-block px-1.5 py-0.5 text-[10px] font-medium rounded ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-neon">{skill.percentage}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-secondary rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-neon/70 rounded-full"
                  />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {skill.description}
                </p>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-neon/25 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
