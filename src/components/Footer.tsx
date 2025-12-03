"use client"

import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Heart, Sparkles, Star, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    services: [
      { name: "Web Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "License", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", gradient: "from-blue-600 to-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", gradient: "from-sky-500 to-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", gradient: "from-pink-600 to-rose-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", gradient: "from-blue-700 to-blue-600" },
    { icon: Github, href: "#", label: "GitHub", gradient: "from-gray-800 to-gray-700" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-gray-300 overflow-hidden">
      {/* Enhanced decorative elements with more layers */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-[float_12s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-[float_14s_ease-in-out_infinite_4s]" />
      </div>

      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Enhanced Brand Column */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                DevStudio
              </span>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-xs text-sm font-medium">
              Creating <span className="text-violet-400 font-semibold">innovative digital solutions</span> that help businesses thrive in the modern world.
            </p>
            
            {/* Enhanced Contact Info - Compact */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "hello@devstudio.com", gradient: "from-violet-500 to-purple-500" },
                { icon: Phone, text: "+1 (555) 123-4567", gradient: "from-blue-500 to-cyan-500" },
                { icon: MapPin, text: "San Francisco, CA", gradient: "from-indigo-500 to-blue-500" }
              ].map((item, index) => (
                <div key={index} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Link Columns with stagger animation */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <div key={category} className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${colIndex * 100}ms` }}>
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                {category}
                <div className="h-0.5 w-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm inline-flex items-center gap-2 group font-medium"
                    >
                      <ArrowRight className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-violet-400" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Social Links & Copyright */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Enhanced Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`relative w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:border-white/20 overflow-hidden animate-in fade-in duration-700`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                  </a>
                )
              })}
            </div>

            {/* Enhanced Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-right flex items-center gap-2 font-medium">
              © {currentYear} <span className="text-violet-400 font-bold">DevStudio</span>. Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse fill-red-500" /> 
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}