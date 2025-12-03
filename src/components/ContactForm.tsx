"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, User, MessageSquare, Send, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react"

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
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtext: "Mon-Fri from 9am to 6pm",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      subtext: "123 Market Street, Suite 100",
      gradient: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-sm font-semibold text-violet-700 mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index}
                  className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-transparent hover:border-violet-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 text-base">{item.title}</h3>
                      <p className="text-foreground font-semibold mb-1 text-sm">{item.content}</p>
                      <p className="text-xs text-muted-foreground">{item.subtext}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Working hours */}
            <div className="p-6 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base">Working Hours</h3>
              </div>
              <div className="space-y-2 text-white/90 text-sm">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-2 border-violet-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    className="h-12 text-base border-2 border-gray-200 focus:border-violet-500 rounded-xl transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    className="h-12 text-base border-2 border-gray-200 focus:border-violet-500 rounded-xl transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    rows={5}
                    className="resize-none text-base border-2 border-gray-200 focus:border-violet-500 rounded-xl transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 text-base font-semibold shadow-2xl shadow-violet-500/40 hover:shadow-violet-500/60 hover:scale-[1.02] transition-all duration-300 rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl animate-in fade-in duration-300">
                    <div className="flex items-center gap-3 text-emerald-800">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-sm">Thank you for reaching out!</p>
                        <p className="text-xs text-emerald-700">We'll get back to you within 24 hours.</p>
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