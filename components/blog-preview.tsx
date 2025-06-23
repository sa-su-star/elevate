import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export default function BlogPreview() {
  const posts = [
    {
      title: "Saudi Arabia's Corporate Events Landscape: Vision 2030 Impact",
      excerpt:
        "Explore how Vision 2030 is transforming corporate events in Saudi Arabia, from mega-projects to cultural celebrations and business forums.",
      author: "Nadia Al-Harbi",
      date: "2024-01-15",
      readTime: "6 min read",
      category: "Vision 2030",
      image: "/images/blog-saudi-events-2024.jpg",
      slug: "saudi-corporate-events-vision-2030-impact",
    },
    {
      title: "Measuring ROI for Corporate Events in the Saudi Market",
      excerpt:
        "Learn culturally-aware strategies for demonstrating event value in Saudi Arabia's unique business environment and government sector.",
      author: "Khalid Al-Otaibi",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Business Strategy",
      image: "/images/blog-roi-measurement.jpg",
      slug: "measuring-roi-corporate-events-saudi-market",
    },
    {
      title: "Integrating Saudi Culture in Modern Corporate Events",
      excerpt:
        "Discover how to blend traditional Saudi hospitality with contemporary event experiences while respecting cultural values and protocols.",
      author: "Amira Al-Dosari",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Cultural Integration",
      image: "/images/blog-cultural-events.jpg",
      slug: "integrating-saudi-culture-modern-corporate-events",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Elevate Events Blog",
    description: "Expert insights and tips for corporate event planning and management",
    url: "https://elevateevents.com/blog",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.date,
      url: `https://elevateevents.com/blog/${post.slug}`,
      image: `https://elevateevents.com${post.image}`,
    })),
  }

  return (
    <section className="py-24 bg-white" id="blog">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and practical tips for planning successful
            corporate events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article key={index}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group animate-slide-up">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`${post.title} featured image`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button variant="ghost" size="sm" asChild className="text-purple-600 hover:text-purple-700">
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
