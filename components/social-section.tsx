"use client"

import { motion } from "framer-motion"
import { ExternalLink, Mail } from "lucide-react"

const socials = [
  {
    name: "Instagram",
    handle: "@vekin_verified",
    url: "https://www.instagram.com/vekin_verified/",
    description: "Daily tech content, behind-the-scenes dev life, and Uzbekistan tech community.",
    cta: "FOLLOW",
    color: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-500/30",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-pink-400">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "Telegram (Personal)",
    handle: "t.me/vekin_officixl",
    url: "https://t.me/vekin_officixl",
    description: "Direct messages, project updates, and quick tech discussions. DMs open.",
    cta: "MESSAGE",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-400">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@vekin_official",
    url: "https://www.youtube.com/@vekin_official",
    description: "Tech tutorials, project walkthroughs, and coding content in Uzbek & Russian.",
    cta: "SUBSCRIBE",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-red-500">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Tuynuk Market",
    handle: "t.me/tuynuk_market",
    url: "https://t.me/tuynuk_market",
    description: "Official Telegram channel for Tuynuk Market — daily deals on electronics & appliances.",
    cta: "JOIN CHANNEL",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-emerald-400">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: "Threads",
    handle: "@vekin_verified",
    url: "https://www.threads.net/@vekin_verified",
    description: "Short thoughts, tech takes, and quick updates from VEKIN.",
    cta: "FOLLOW",
    color: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-gray-500/30",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-foreground">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.082-1.146 3.39-1.17.94-.018 1.792.135 2.548.395.02-.818-.035-1.564-.166-2.228l2.083-.238c.203 1.078.252 2.292.108 3.638 1.028.573 1.845 1.352 2.397 2.312.702 1.223.99 2.66.833 4.156-.2 1.906-1.032 3.627-2.406 4.98-1.578 1.553-3.737 2.403-6.435 2.533zM10.863 19.18c1.108-.06 1.858-.43 2.365-1.063.47-.588.79-1.479.952-2.654-.67-.206-1.378-.31-2.12-.295-.906.02-1.69.272-2.206.71-.454.384-.667.858-.636 1.408.031.54.322 1.003.819 1.304.545.33 1.234.464 2.02.419z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "vekinreacts@gmail.com",
    url: "mailto:vekinreacts@gmail.com",
    description: "For business inquiries, collaboration proposals, or just saying hello.",
    cta: "EMAIL ME",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    icon: <Mail className="w-6 h-6 text-yellow-400" />,
  },
]

export function SocialSection() {
  return (
    <section id="social" className="py-16 md:py-24 relative section-glow">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-neon text-sm font-mono mb-2">// 05. SOCIAL MEDIA</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Find me <span className="text-neon text-glow-neon">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm text-pretty">
            Connect with VEKIN across platforms — tech content, project updates, and direct contact.
          </p>
        </motion.div>

        {/* Social Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`group glass-card rounded-xl p-4 relative overflow-hidden ${social.borderColor} border`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{social.name}</h3>
                    <p className="text-neon text-xs font-mono">{social.handle}</p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-neon transition-colors" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                  {social.description}
                </p>

                {/* CTA Button */}
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-neon/10 text-neon text-xs font-medium rounded-lg border border-neon/20 group-hover:bg-neon/20 transition-colors">
                  {social.cta}
                  <ExternalLink size={10} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
