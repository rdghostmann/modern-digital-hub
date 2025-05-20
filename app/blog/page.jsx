import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "10 Mind-Blowing Movie Endings Explained",
    excerpt: "Dive into the most shocking movie endings and what they really mean.",
    date: "May 12, 2025",
    category: "Movies",
    image: "/placeholder-movie.png",
  },
  {
    id: "2",
    title: "The Evolution of Music Videos in 2025",
    excerpt: "Explore how music videos have transformed with new tech and trends.",
    date: "May 8, 2025",
    category: "Music",
    image: "/placeholder-music.png",
  },
  {
    id: "3",
    title: "Top 10 Must-Watch TV Shows This Year",
    excerpt: "From thrillers to comedies, check out the most binge-worthy shows of 2025.",
    date: "May 5, 2025",
    category: "TV Shows",
    image: "/placeholder-shows.png",
  },
  {
    id: "4",
    title: "Behind the Scenes: How Blockbusters Are Made",
    excerpt: "A look into the production secrets of your favorite blockbusters.",
    date: "May 1, 2025",
    category: "Film Industry",
    image: "/placeholder-scence.png",
  },
  {
    id: "5",
    title: "Gaming Trends to Watch in 2025",
    excerpt: "Discover what’s hot in the gaming world this year and what’s coming next.",
    date: "April 28, 2025",
    category: "Gaming",
    image: "/placeholder-games.png",
  },
  {
    id: "6",
    title: "A Beginner’s Guide to K-Pop Fandom",
    excerpt: "Everything you need to know to dive into the vibrant world of K-Pop.",
    date: "April 25, 2025",
    category: "Pop Culture",
    image: "/placeholder-pop.png",
  },
]

export const metadata = {
  title: "Blog | Modern Web App",
  description: "Read our latest articles and insights on web development, design, and technology.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
        <p className="mt-4 text-slate-500 md:text-xl dark:text-slate-400 max-w-[700px]">
          Stay updated with our latest articles and insights on web development, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{post.date}</span>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:underline">{post.title}</h3>
                </Link>
                <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
