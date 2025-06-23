import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Megaphone, Truck, Laptop, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: "Strategic Event Planning",
      description:
        "Comprehensive event strategy tailored to Saudi Arabia's business culture, Vision 2030 objectives, and Islamic values.",
      features: ["Vision 2030 alignment", "Cultural sensitivity", "Regulatory compliance", "Stakeholder engagement"],
      image: "/images/service-strategic-planning.jpg",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing & Outreach",
      description:
        "Culturally-aware marketing campaigns that resonate with Saudi audiences and drive meaningful engagement.",
      features: [
        "Arabic & English campaigns",
        "Social media management",
        "Influencer partnerships",
        "Government relations",
      ],
      image: "/images/service-digital-marketing.jpg",
    },
    {
      icon: Truck,
      title: "Logistics & Operations",
      description:
        "Seamless coordination across Saudi Arabia's major cities with deep understanding of local requirements.",
      features: ["Multi-city coordination", "Vendor network KSA", "Transportation logistics", "Permit management"],
      image: "/images/service-event-logistics.jpg",
    },
    {
      icon: Laptop,
      title: "Technology Integration",
      description:
        "Advanced event technology solutions that showcase Saudi Arabia's digital transformation leadership.",
      features: [
        "Smart city integration",
        "AI-powered experiences",
        "Virtual reality showcases",
        "Digital twin venues",
      ],
      image: "/images/service-tech-integration.jpg",
    },
    {
      icon: Users,
      title: "Guest Experience Excellence",
      description:
        "Create memorable experiences that honor Saudi hospitality traditions while embracing modern innovation.",
      features: [
        "Cultural protocol management",
        "VIP guest services",
        "Traditional & modern catering",
        "Accessibility compliance",
      ],
      image: "/images/service-guest-experience.jpg",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Dedicated Support",
      description:
        "Round-the-clock support with bilingual teams understanding Saudi business practices and time zones.",
      features: ["Arabic/English support", "Local time coverage", "Emergency protocols", "Post-event analysis"],
      image: "/images/service-24-7-support.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gray-50 animate-fade-in" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Event Management Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to final execution, we provide end-to-end event management services that transform your
            corporate vision into extraordinary experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg animate-slide-up delay-${index * 100}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} service illustration`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
