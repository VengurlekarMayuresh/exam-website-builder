"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2, Sparkles, Zap, TrendingUp, Star } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced animated gradient background with more layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-[float_8s_ease-in-out_infinite_2s]" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-[float_7s_ease-in-out_infinite_4s]" />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_9s_ease-in-out_infinite_3s]" />
        </div>
      </div>

      {/* Enhanced grid pattern with glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.8)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-5 text-center lg:text-left">
            {/* Premium Badge with animation */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md border-2 border-violet-200/60 rounded-full text-sm font-semibold text-violet-700 shadow-xl shadow-violet-500/20 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
              </span>
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              Trusted by 10,000+ developers worldwide
            </div>

            {/* Main Headline with enhanced styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 leading-[1.1] text-balance">
              Craft Digital
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-shimmer drop-shadow-2xl" style={{ backgroundSize: '200% auto' }}>
                  Masterpieces
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none">
                  <path d="M2 11C50 3 150 3 298 11" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#7c3aed"/>
                      <stop offset="50%" stopColor="#9333ea"/>
                      <stop offset="100%" stopColor="#6366f1"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Sparkle effects */}
                <Sparkles className="absolute -top-6 -right-6 w-6 h-6 text-yellow-400 animate-pulse" />
                <Sparkles className="absolute -bottom-4 -left-4 w-5 h-5 text-violet-400 animate-pulse delay-300" />
              </span>
            </h1>

            {/* Enhanced Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance max-w-xl mx-auto lg:mx-0">
              Transform your vision into <span className="text-violet-600 font-semibold">stunning digital experiences</span> with cutting-edge technology. 
              <span className="block mt-2 text-foreground font-medium">We build products that users love.</span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button size="lg" className="group relative h-14 px-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 text-base font-bold shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Start Building Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="group h-14 px-8 border-2 border-violet-300 hover:border-violet-600 bg-white/80 backdrop-blur-sm hover:bg-violet-50 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-2 animate-in fade-in duration-700 delay-400">
              {[
                { icon: CheckCircle2, text: "No credit card", color: "text-emerald-600" },
                { icon: Zap, text: "5 min setup", color: "text-amber-600" },
                { icon: TrendingUp, text: "Cancel anytime", color: "text-blue-600" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group cursor-default">
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced Stats with premium design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 animate-in fade-in duration-700 delay-500">
              {[
                { value: "500+", label: "Projects", icon: Sparkles, gradient: "from-violet-500 to-purple-500" },
                { value: "50+", label: "Clients", icon: CheckCircle2, gradient: "from-blue-500 to-cyan-500" },
                { value: "99.9%", label: "Uptime", icon: Zap, gradient: "from-amber-500 to-orange-500" },
                { value: "24/7", label: "Support", icon: TrendingUp, gradient: "from-emerald-500 to-teal-500" }
              ].map((stat, index) => (
                <div key={index} className="group relative hover:z-10">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />
                  <div className="relative p-4 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-white/60 hover:border-violet-300 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg">
                    <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 mx-auto lg:mx-0`} />
                    <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-semibold tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced 3D Showcase Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200 lg:block hidden">
            <div className="relative group">
              {/* Multiple glow layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-[2rem] blur-3xl opacity-30 animate-pulse group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-[2rem] blur-2xl opacity-20 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Main image container with premium styling */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/60 shadow-2xl backdrop-blur-sm group-hover:border-white/80 transition-all duration-500 hover:scale-[1.02]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8b6c63e2-d68a-4953-9c0d-760ba1137d8b/generated_images/premium-3d-digital-service-showcase-illu-f4fcd614-20251203055922.jpg"
                  alt="Premium Digital Services Showcase"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Enhanced floating accent elements with more variety */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl blur-2xl opacity-70 animate-[float_4s_ease-in-out_infinite]" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-70 animate-[float_5s_ease-in-out_infinite_1s]" />
              <div className="absolute top-1/2 -right-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl blur-xl opacity-60 animate-[float_6s_ease-in-out_infinite_2s]" />
              
              {/* Floating sparkle decorations */}
              <div className="absolute -top-4 left-1/4 animate-[float_3s_ease-in-out_infinite]">
                <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-6 right-1/4 animate-[float_4s_ease-in-out_infinite_1.5s]">
                <Zap className="w-7 h-7 text-violet-500 drop-shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom fade with subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  )
}