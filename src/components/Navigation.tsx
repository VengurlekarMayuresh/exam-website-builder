"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-2xl border-b border-violet-200/50 shadow-xl shadow-violet-500/5" 
        : "bg-white/50 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Brand Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                DevStudio
              </span>
              <Zap className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-semibold text-foreground/70 hover:text-foreground transition-all duration-300 group rounded-xl hover:bg-violet-50"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
            <Button size="sm" className="ml-4 group relative h-10 px-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 font-bold overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">Get Started</span>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2.5 text-foreground hover:text-violet-600 transition-colors rounded-xl hover:bg-violet-50 border-2 border-transparent hover:border-violet-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 animate-in spin-in duration-300" />
                ) : (
                  <Menu className="h-6 w-6 animate-in fade-in duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-2 animate-in slide-in-from-top duration-300 bg-white/95 backdrop-blur-2xl rounded-2xl my-4 px-4 border-2 border-violet-200/50 shadow-2xl">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-5 py-3.5 text-base font-semibold text-foreground/70 hover:text-foreground hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 rounded-xl transition-all duration-200 border-2 border-transparent hover:border-violet-200 animate-in slide-in-from-top duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 animate-in fade-in duration-500 delay-200">
              <Button className="w-full h-12 group relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-xl font-bold overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Get Started</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}