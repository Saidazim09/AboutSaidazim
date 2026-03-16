import { ParticleBackground } from "@/components/particle-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FutureGoalsSection } from "@/components/future-goals-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { SocialSection } from "@/components/social-section"
import { VideosSection } from "@/components/videos-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Particle Background */}
      <ParticleBackground />
      
      {/* Fixed Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-neon/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-accent/10 to-transparent" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-neon/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FutureGoalsSection />
        <SkillsSection />
        <ProjectsSection />
        <SocialSection />
        <VideosSection />
        <ConnectSection />
        <Footer />
      </div>
    </main>
  )
}
