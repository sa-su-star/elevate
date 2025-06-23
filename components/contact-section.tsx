"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, Users, DollarSign } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    eventType: "",
    attendees: "",
    budget: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+966 11 ELEVATE",
      link: "tel:+966111111111",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@elevateevents.sa",
      link: "mailto:hello@elevateevents.sa",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "King Fahd Road, Olaya District, Riyadh 11564, Saudi Arabia",
      link: "https://maps.google.com/?q=King+Fahd+Road+Olaya+District+Riyadh+Saudi+Arabia",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Sun-Thu: 9AM-6PM AST",
      link: null,
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Elevate Events Saudi Arabia",
    telephone: "+966-11-ELEVATE",
    email: "hello@elevateevents.sa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "King Fahd Road, Olaya District",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      postalCode: "11564",
      addressCountry: "SA",
    },
    openingHours: "Su-Th 09:00-18:00",
    url: "https://elevateevents.sa",
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100" id="contact">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600 animate-float" />
              </div>
            </div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your consultation request and will get back to you within 24 hours to discuss your event
              planning needs.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg">
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100" id="contact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Next Event?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and discover how we can transform your corporate event into an extraordinary
            experience that exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <info.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                            {...(info.link.startsWith("tel:") || info.link.startsWith("mailto:")
                              ? {}
                              : { target: "_blank", rel: "noopener noreferrer" })}
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl animate-slide-in-right">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl font-bold text-gray-900">
                  Get Your Free Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Event Type
                      </label>
                      <Input
                        id="eventType"
                        name="eventType"
                        type="text"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Conference, Gala, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="attendees" className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline h-4 w-4 mr-1" />
                        Expected Attendees
                      </label>
                      <Input
                        id="attendees"
                        name="attendees"
                        type="text"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="100-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        <DollarSign className="inline h-4 w-4 mr-1" />
                        Budget Range
                      </label>
                      <Input
                        id="budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="$50K - $100K"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Event Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Event *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full"
                      placeholder="Please describe your event vision, goals, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Get Free Consultation
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours with a customized proposal for your event.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
