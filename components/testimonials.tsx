import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      title: "Director of Strategic Initiatives",
      company: "Saudi Aramco",
      image: "/images/testimonial-ahmed.jpg",
      rating: 5,
      content:
        "Elevate Events delivered an exceptional energy forum that perfectly balanced international standards with Saudi cultural values. Their understanding of our Vision 2030 objectives and ability to execute at scale was remarkable.",
      event: "Saudi Aramco Energy Forum",
    },
    {
      name: "Fatima Al-Zahra",
      title: "Chief Marketing Officer",
      company: "NEOM Development Authority",
      image: "/images/testimonial-fatima.jpg",
      rating: 5,
      content:
        "Working with Elevate Events for our NEOM summit was transformative. They understood our futuristic vision and created an event that truly showcased the possibilities of tomorrow's cities. Outstanding professionalism and innovation.",
      event: "NEOM Future Cities Summit 2024",
    },
    {
      name: "Omar Al-Mansouri",
      title: "Deputy Minister",
      company: "Ministry of Investment",
      image: "/images/testimonial-omar.jpg",
      rating: 5,
      content:
        "The team at Elevate Events managed our international investment conference with exceptional attention to protocol and cultural sensitivity. They seamlessly blended Saudi hospitality with world-class event management.",
      event: "Red Sea Global Investment Conference",
    },
    {
      name: "Layla Al-Faisal",
      title: "Program Director",
      company: "Saudi Vision 2030 Office",
      image: "/images/testimonial-layla.jpg",
      rating: 5,
      content:
        "Our Vision 2030 progress gala was flawlessly executed by Elevate Events. They captured the essence of our national transformation while maintaining the highest standards of elegance and cultural authenticity.",
      event: "Vision 2030 Progress Gala",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elevate Events",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: testimonials.length,
      bestRating: "5",
      worstRating: "4",
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: "5",
      },
      reviewBody: testimonial.content,
    })),
  }

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about their experience working with
            Elevate Events.
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="ml-2 text-gray-600">({testimonials.length} reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-purple-600 mr-4" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <div className="relative h-12 w-12 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} profile photo`}
                      fill
                      className="rounded-full object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    <div className="text-xs text-gray-500 mt-1">Event: {testimonial.event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
