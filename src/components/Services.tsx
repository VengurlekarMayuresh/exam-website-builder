"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Smartphone, Zap, Shield, TrendingUp, ArrowUpRight, Sparkles, Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    fullDescription: "Our web development services leverage cutting-edge technologies including React, Next.js, and TypeScript to build robust, scalable applications. We follow industry best practices, implement clean code architecture, and ensure your application is maintainable and future-proof. From e-commerce platforms to enterprise solutions, we deliver high-performance web applications that exceed expectations.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront.",
    fullDescription: "We create stunning user interfaces that are not just visually appealing but also highly functional. Our design process involves user research, wireframing, prototyping, and extensive testing to ensure every interaction is smooth and intuitive. We focus on creating memorable experiences that drive user engagement and conversion rates while maintaining brand consistency.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Seamless experiences across all devices with mobile-first design approaches.",
    fullDescription: "In today's multi-device world, responsive design is essential. We employ a mobile-first approach to ensure your application looks and performs flawlessly on smartphones, tablets, and desktops. Our responsive designs adapt intelligently to different screen sizes, providing optimal user experiences regardless of the device being used.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions through advanced optimization.",
    fullDescription: "Performance is critical to user satisfaction and SEO rankings. We implement advanced optimization techniques including code splitting, lazy loading, image optimization, and caching strategies. Our applications are built with performance in mind from the ground up, ensuring lightning-fast load times and smooth, responsive interactions that keep users engaged.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10"
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "Enterprise-grade security measures ensuring your application is safe and dependable.",
    fullDescription: "Security is paramount in today's digital landscape. We implement comprehensive security measures including encryption, secure authentication, regular security audits, and compliance with industry standards. Our robust architecture ensures your application is reliable, scalable, and protected against vulnerabilities, giving you and your users peace of mind.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    description: "Data-driven strategies to increase visibility, track performance, and grow your business.",
    fullDescription: "Maximize your online visibility with our comprehensive SEO and analytics services. We implement technical SEO best practices, create optimized content strategies, and integrate powerful analytics tools to track user behavior and measure success. Our data-driven approach helps you understand your audience better and make informed decisions to grow your business.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10"
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [open, setOpen] = useState(false)

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service)
    setOpen(true)
  }

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-violet-50/30 to-white overflow-hidden">
      {/* Enhanced background decorations with more layers */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-[float_12s_ease-in-out_infinite_4s]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full text-sm font-bold text-violet-700 mb-8 shadow-lg border-2 border-violet-200/50 hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-4 h-4" />
            What We Offer
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Digital Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Comprehensive solutions tailored to your needs. We combine <span className="text-violet-600 font-semibold">creativity, innovation,</span> 
            and technology to deliver exceptional results.
          </p>
        </div>

        {/* Enhanced Services Grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                onClick={() => handleServiceClick(service)}
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-violet-100/50 hover:border-violet-300 cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                </div>
                
                <CardContent className="relative p-8">
                  {/* Premium Icon with glow */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse`} />
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    {/* Floating sparkle */}
                    <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>

                  {/* Title with arrow */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-violet-600 transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-violet-600 transform translate-x-0 -translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Bottom accent line with animation */}
                  <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-700`} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Premium Centered Glassy Dialog Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-3xl border-2 border-violet-200/60 shadow-2xl p-0 rounded-3xl">
          {selectedService && (
            <div className="relative">
              {/* Header with gradient background */}
              <div className={`relative bg-gradient-to-br ${selectedService.gradient} p-8 sm:p-10 rounded-t-3xl overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                
                <DialogHeader className="relative space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-xl flex-shrink-0 border-2 border-white/30">
                      <selectedService.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                        {selectedService.title}
                      </DialogTitle>
                      <DialogDescription className="text-sm text-white/90 mt-2 font-medium">
                        ⭐ Premium Service • Trusted by 1000+ clients
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 space-y-6">
                {/* Short Description */}
                <div className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${selectedService.bgGradient} backdrop-blur-sm border-2 border-violet-100/60 shadow-lg hover:shadow-xl transition-shadow`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                    <h4 className="font-bold text-base text-foreground">Overview</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedService.description}
                  </p>
                </div>

                {/* Full Description */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-violet-100/60 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <h4 className="font-bold text-base text-foreground">What We Deliver</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Key Features with enhanced styling */}
                <div className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/80 to-violet-50/80 backdrop-blur-sm border-2 border-violet-100/60 shadow-lg`}>
                  <div className="flex items-center gap-2 mb-5">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-base text-foreground">Why Choose This Service</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { icon: Zap, text: "Industry-leading expertise and proven track record", color: "from-violet-500 to-purple-500" },
                      { icon: Shield, text: "Secure, scalable solutions built to last", color: "from-emerald-500 to-teal-500" },
                      { icon: TrendingUp, text: "Continuous optimization and support", color: "from-blue-500 to-cyan-500" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className={`mt-0.5 w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-muted-foreground text-sm pt-1 group-hover:text-foreground transition-colors">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA Button */}
                <button
                  onClick={() => {
                    setOpen(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`relative w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r ${selectedService.gradient} text-white font-bold shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg overflow-hidden group`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative flex items-center gap-3">
                    Get Started with {selectedService.title}
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}