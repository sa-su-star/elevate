import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Star } from "lucide-react"

export default function EventHighlights() {
  const events = [
    {
      title: "NEOM Future Cities Summit 2024",
      client: "NEOM Development Authority",
      date: "March 20-22, 2024",
      location: "NEOM, Tabuk Province",
      attendees: "1,500+",
      rating: 4.9,
      category: "Future Cities Conference",
      image: "/images/event-neom-summit.jpg",
      description:
        "A groundbreaking summit showcasing NEOM's vision for the future of urban living and sustainable development.",
      highlights: ["Global tech leaders", "Sustainable innovation showcase", "Virtual reality city tours"],
    },
    {
      title: "Saudi Aramco Energy Forum",
      client: "Saudi Aramco",
      date: "January 15-17, 2024",
      location: "Dhahran, Eastern Province",
      attendees: "2,000+",
      rating: 5.0,
      category: "Energy Conference",
      image: "/images/event-aramco-conference.jpg",
      description: "Premier energy sector conference focusing on sustainable energy solutions and industry innovation.",
      highlights: ["International energy ministers", "Green hydrogen initiatives", "Carbon capture technology"],
    },
    {
      title: "Vision 2030 Progress Gala",
      client: "Saudi Vision 2030 Office",
      date: "November 10, 2023",
      location: "King Abdulaziz Conference Center, Riyadh",
      attendees: "800",
      rating: 4.8,
      category: "Government Gala",
      image: "/images/event-vision-2030.jpg",
      description: "Elegant celebration of Vision 2030 milestones and achievements in economic diversification.",
      highlights: ["Royal patronage", "Cultural performances", "Achievement showcases"],
    },
    {
      title: "Red Sea Global Investment Conference",
      client: "Red Sea Global",
      date: "September 25-27, 2023",
      location: "Red Sea Project, Tabuk",
      attendees: "1,200",
      rating: 4.9,
      category: "Investment Conference",
      image: "/images/event-red-sea-gala.jpg",
      description:
        "Exclusive investment conference showcasing the Red Sea Project's luxury tourism and sustainability initiatives.",
      highlights: ["International investors", "Sustainability focus", "Luxury hospitality showcase"],
    },
  ]

  return (
    <section className="py-24 bg-white animate-fade-in" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recent Event Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed corporate visions into unforgettable experiences for leading companies across
            various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={`${event.title} event photography`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center bg-white/90 rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold text-gray-900">{event.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">{event.client}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-purple-600" />
                    {event.attendees} attendees
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
