"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, User, MessageSquare, Send, MapPin, Phone, Clock, CheckCircle2, Sparkles, Star } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@devstudio.com",
      subtext: "We'll respond within 24 hours",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtext: "Mon-Fri from 9am to 6pm",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      subtext: "123 Market Street, Suite 100",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    }
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_12s_ease-in-out_infinite_4s]" />
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full text-sm font-bold text-violet-700 mb-8 shadow-lg border-2 border-violet-200/50 hover:scale-105 transition-transform cursor-default">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Work <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Have a project in mind? <span className="text-violet-600 font-semibold">We'd love to hear from you.</span> Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Enhanced Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="group relative p-6 sm:p-7 bg-white/90 backdrop-blur-md rounded-2xl border-2 border-violet-100/50 hover:border-violet-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in slide-in-from-left duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1.5 text-base group-hover:text-violet-600 transition-colors">{item.title}</h3>
                      <p className="text-foreground font-semibold mb-1 text-sm">{item.content}</p>
                      <p className="text-xs text-muted-foreground">{item.subtext}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Enhanced working hours */}
            <div className="relative p-7 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl text-white shadow-2xl overflow-hidden group animate-in slide-in-from-left duration-700 delay-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Working Hours</h3>
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 ml-auto animate-pulse" />
                </div>
                <div className="space-y-3 text-white/95 text-sm font-medium">
                  <p className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span>Monday - Friday</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span>Saturday</span>
                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span>Sunday</span>
                    <span className="font-bold">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Form */}
          <div className="lg:col-span-3 animate-in slide-in-from-right duration-700">
            <div className="relative bg-white/95 rounded-3xl shadow-2xl p-8 lg:p-10 border-2 border-violet-100 backdrop-blur-sm overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />
              
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Name Field */}
                <div className="space-y-2.5">
                  <Label htmlFor="name" className="text-sm font-bold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-violet-600" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-violet-500 rounded-xl transition-all hover:border-violet-300 bg-white/50"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2.5">
                  <Label htmlFor="email" className="text-sm font-bold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-violet-600" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-violet-500 rounded-xl transition-all hover:border-violet-300 bg-white/50"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2.5">
                  <Label htmlFor="message" className="text-sm font-bold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-violet-600" />
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none text-base border-2 border-gray-200 focus:border-violet-500 rounded-xl transition-all hover:border-violet-300 bg-white/50"
                  />
                </div>

                {/* Enhanced Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 group relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 text-base font-bold shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 hover:scale-[1.02] transition-all duration-300 rounded-xl overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  {isSubmitting ? (
                    <span className="relative flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="relative flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>

                {/* Enhanced Success Message */}
                {isSubmitted && (
                  <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl animate-in fade-in slide-in-from-bottom duration-500 shadow-lg">
                    <div className="flex items-center gap-3 text-emerald-800">
                      <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 animate-bounce">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Thank you for reaching out!</p>
                        <p className="text-xs text-emerald-700 mt-0.5">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}