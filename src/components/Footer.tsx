"use client"

import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Heart, Sparkles } from "lucide-react"

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
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-800" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 text-gray-300 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-violet-600 to-indigo-600 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                DevStudio
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-xs text-sm">
              Creating innovative digital solutions that help businesses thrive in the modern world.
            </p>
            
            {/* Contact Info - Compact */}
            <div className="space-y-2">
              {[
                { icon: Mail, text: "hello@devstudio.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-300 group backdrop-blur-sm border border-white/10`}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-right flex items-center gap-2">
              © {currentYear} DevStudio. Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}