"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Smartphone, Zap, Shield, TrendingUp, ArrowUpRight, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    fullDescription: "Our web development services leverage cutting-edge technologies including React, Next.js, and TypeScript to build robust, scalable applications. We follow industry best practices, implement clean code architecture, and ensure your application is maintainable and future-proof. From e-commerce platforms to enterprise solutions, we deliver high-performance web applications that exceed expectations.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront.",
    fullDescription: "We create stunning user interfaces that are not just visually appealing but also highly functional. Our design process involves user research, wireframing, prototyping, and extensive testing to ensure every interaction is smooth and intuitive. We focus on creating memorable experiences that drive user engagement and conversion rates while maintaining brand consistency.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Seamless experiences across all devices with mobile-first design approaches.",
    fullDescription: "In today's multi-device world, responsive design is essential. We employ a mobile-first approach to ensure your application looks and performs flawlessly on smartphones, tablets, and desktops. Our responsive designs adapt intelligently to different screen sizes, providing optimal user experiences regardless of the device being used.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions through advanced optimization.",
    fullDescription: "Performance is critical to user satisfaction and SEO rankings. We implement advanced optimization techniques including code splitting, lazy loading, image optimization, and caching strategies. Our applications are built with performance in mind from the ground up, ensuring lightning-fast load times and smooth, responsive interactions that keep users engaged.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "Enterprise-grade security measures ensuring your application is safe and dependable.",
    fullDescription: "Security is paramount in today's digital landscape. We implement comprehensive security measures including encryption, secure authentication, regular security audits, and compliance with industry standards. Our robust architecture ensures your application is reliable, scalable, and protected against vulnerabilities, giving you and your users peace of mind.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    description: "Data-driven strategies to increase visibility, track performance, and grow your business.",
    fullDescription: "Maximize your online visibility with our comprehensive SEO and analytics services. We implement technical SEO best practices, create optimized content strategies, and integrate powerful analytics tools to track user behavior and measure success. Our data-driven approach helps you understand your audience better and make informed decisions to grow your business.",
    gradient: "from-pink-500 to-rose-500"
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
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-sm font-semibold text-violet-700 mb-6">
            <Zap className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium Digital Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Comprehensive solutions tailored to your needs. We combine creativity, innovation, 
            and technology to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                onClick={() => handleServiceClick(service)}
                className="group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-violet-200 cursor-pointer"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="relative p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-violet-600 transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 -translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Centered Glassy Dialog Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-[95vw] sm:w-[90vw] max-h-[85vh] overflow-y-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-2 border-white/40 shadow-2xl p-6 sm:p-8 md:p-10 rounded-3xl">
          {selectedService && (
            <>
              <DialogHeader className="space-y-4 pb-6 border-b border-white/30">
                <div className="flex items-start gap-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${selectedService.gradient} text-white shadow-lg flex-shrink-0`}>
                    <selectedService.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      {selectedService.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-1">
                      Premium Service
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Short Description */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-violet-50/90 to-indigo-50/90 backdrop-blur-sm border border-violet-100/60">
                  <h4 className="font-semibold text-base text-foreground mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedService.description}
                  </p>
                </div>

                {/* Full Description */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-violet-100/60">
                  <h4 className="font-semibold text-base text-foreground mb-2">What We Deliver</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/60 to-violet-50/60 backdrop-blur-sm border border-violet-100/60">
                  <h4 className="font-semibold text-base text-foreground mb-4">Why Choose This Service</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm">Industry-leading expertise and proven track record</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Shield className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm">Secure, scalable solutions built to last</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center flex-shrink-0`}>
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm">Continuous optimization and support</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setOpen(false)
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`w-full py-3 sm:py-4 px-6 rounded-xl bg-gradient-to-r ${selectedService.gradient} text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base`}
                >
                  Get Started with {selectedService.title}
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}