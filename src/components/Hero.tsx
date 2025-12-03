"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2, Sparkles, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_8s_ease-in-out_infinite_2s]" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_7s_ease-in-out_infinite_4s]" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-violet-200/50 rounded-full text-sm font-medium text-violet-700 shadow-lg shadow-violet-500/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              Trusted by 10,000+ developers
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 leading-[1.1] text-balance">
              Craft Digital
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% auto' }}>
                  Masterpieces
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 150 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#7c3aed"/>
                      <stop offset="50%" stopColor="#9333ea"/>
                      <stop offset="100%" stopColor="#6366f1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance">
              Transform your vision into stunning digital experiences with cutting-edge technology. 
              <span className="text-foreground font-medium"> We build products that users love.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button size="lg" className="group h-12 px-7 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 text-base font-semibold shadow-2xl shadow-violet-500/40 hover:shadow-violet-500/60 hover:scale-105 transition-all duration-300">
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group h-12 px-7 border-2 border-foreground/10 hover:border-violet-600 hover:bg-violet-50 text-base font-semibold transition-all duration-300">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-2 animate-in fade-in duration-700 delay-400">
              {[
                { icon: CheckCircle2, text: "No credit card" },
                { icon: Zap, text: "5 min setup" },
                { icon: TrendingUp, text: "Cancel anytime" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-violet-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 animate-in fade-in duration-700 delay-500">
              {[
                { value: "500+", label: "Projects", icon: Sparkles },
                { value: "50+", label: "Clients", icon: CheckCircle2 },
                { value: "99.9%", label: "Uptime", icon: Zap },
                { value: "24/7", label: "Support", icon: TrendingUp }
              ].map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-violet-200/50 hover:border-violet-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <stat.icon className="w-5 h-5 text-violet-600 mb-2 mx-auto lg:mx-0" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Showcase Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200 lg:block hidden">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl backdrop-blur-sm">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8b6c63e2-d68a-4953-9c0d-760ba1137d8b/generated_images/premium-3d-digital-service-showcase-illu-f4fcd614-20251203055922.jpg"
                  alt="Premium Digital Services Showcase"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-2xl opacity-60 animate-[float_4s_ease-in-out_infinite]" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-2xl opacity-60 animate-[float_5s_ease-in-out_infinite_1s]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}