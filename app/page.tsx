import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import EventHighlights from "@/components/event-highlights"
import BlogPreview from "@/components/blog-preview"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Elevate Events - Premier Corporate Event Management in Saudi Arabia",
  description:
    "Transform your corporate events across Saudi Arabia with Elevate Events. Expert event planning, logistics, and technology integration for Vision 2030 initiatives and large-scale business gatherings in Riyadh, Jeddah, and beyond.",
  keywords:
    "Saudi Arabia corporate events, event management Riyadh, Vision 2030 events, NEOM conferences, corporate event planning KSA, business events Saudi Arabia, event logistics Middle East",
  openGraph: {
    title: "Elevate Events - Premier Corporate Event Management in Saudi Arabia",
    description:
      "Expert corporate event planning and management services for Saudi Arabia's Vision 2030 initiatives and business transformation.",
    type: "website",
    url: "https://elevateevents.sa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elevate Events - Corporate Event Management in Saudi Arabia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Events - Premier Corporate Event Management in Saudi Arabia",
    description: "Expert corporate event planning for Saudi Arabia's business transformation.",
    images: ["/og-image.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elevate Events Saudi Arabia",
  description: "Premier corporate event management and planning services in Saudi Arabia",
  url: "https://elevateevents.sa",
  logo: "https://elevateevents.sa/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-11-ELEVATE",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "King Fahd Road, Olaya District",
    addressLocality: "Riyadh",
    addressRegion: "Riyadh Province",
    postalCode: "11564",
    addressCountry: "SA",
  },
  sameAs: [
    "https://linkedin.com/company/elevate-events-saudi",
    "https://twitter.com/elevateevents_sa",
    "https://instagram.com/elevateevents.sa",
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero />
        <Services />
        <EventHighlights />
        <BlogPreview />
        <Testimonials />
        <ContactSection />
      </main>
    </>
  )
}
