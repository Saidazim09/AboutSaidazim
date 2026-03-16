"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: "jFT7XiOZkpY",
    thumbnail: `https://img.youtube.com/vi/jFT7XiOZkpY/maxresdefault.jpg`,
    url: "https://youtu.be/jFT7XiOZkpY",
  },
  {
    id: "fTRudGBreqE",
    thumbnail: `https://img.youtube.com/vi/fTRudGBreqE/maxresdefault.jpg`,
    url: "https://youtu.be/fTRudGBreqE",
  },
  {
    id: "qdbW2Bk4tCc",
    thumbnail: `https://img.youtube.com/vi/qdbW2Bk4tCc/maxresdefault.jpg`,
    url: "https://youtu.be/qdbW2Bk4tCc",
  },
]

export function VideosSection() {
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
          <p className="text-neon text-sm font-mono mb-2">// 06. VIDEOS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-neon text-glow-neon">Videos</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Watch my latest content on <a href="https://www.youtube.com/@vekin_official" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">@vekin_official</a>
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl overflow-hidden group border border-border/50"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-secondary/50">
                <Image
                  src={video.thumbnail}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg"
                  >
                    <Play className="text-white fill-white" size={24} />
                  </motion.div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Play className="text-red-500" size={10} />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">@vekin_official</span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-neon transition-colors">
                  Open <ExternalLink size={10} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Subscribe Button */}
        <div className="flex justify-center">
          <motion.a
            href="https://www.youtube.com/@vekin_official?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-red-500/50 text-red-500 text-sm font-medium rounded-lg hover:bg-red-500/10 transition-colors"
          >
            <Play size={16} className="fill-red-500" />
            SUBSCRIBE ON YOUTUBE
          </motion.a>
        </div>
      </div>
    </section>
  )
}
