import { Calendar, Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = 2024 // Fixed to show current year instead of 2025

  const footerLinks = {
    services: [
      { name: "Event Planning", href: "/services/planning" },
      { name: "Event Marketing", href: "/services/marketing" },
      { name: "Logistics & Operations", href: "/services/logistics" },
      { name: "Technology Integration", href: "/services/technology" },
      { name: "Attendee Experience", href: "/services/experience" },
      { name: "24/7 Support", href: "/services/support" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Press & Media", href: "/press" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Event Planning Guide", href: "/resources/planning-guide" },
      { name: "Industry Reports", href: "/resources/reports" },
      { name: "Event Templates", href: "/resources/templates" },
      { name: "Webinars", href: "/resources/webinars" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  }

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/elevate-events-saudi", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/elevateevents_sa", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/elevateevents.sa", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com/elevateevents.sa", icon: Facebook },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elevate Events",
    url: "https://elevateevents.com",
    logo: "https://elevateevents.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-ELEVATE",
      contactType: "customer service",
      email: "hello@elevateevents.com",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business District",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    sameAs: socialLinks.map((link) => link.href),
  }

  return (
    <footer className="bg-gray-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-8 w-8 text-purple-400" />
              <span className="font-playfair text-2xl font-bold">Elevate Events</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your corporate events across Saudi Arabia into extraordinary experiences that align with Vision
              2030. We specialize in large-scale business gatherings that drive the Kingdom's economic transformation
              and showcase Saudi Arabia's ambitious future.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <a href="tel:+966111111111" className="text-gray-300 hover:text-white transition-colors">
                  +966 11 ELEVATE
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a href="mailto:hello@elevateevents.sa" className="text-gray-300 hover:text-white transition-colors">
                  hello@elevateevents.sa
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <address className="text-gray-300 not-italic">
                  King Fahd Road, Olaya District
                  <br />
                  Riyadh 11564, Saudi Arabia
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-12">
          <p className="text-center text-gray-500">
            &copy; 2023-{currentYear} Elevate Events Saudi Arabia. All rights reserved. | Licensed since 2023
          </p>
        </div>
      </div>
    </footer>
  )
}
