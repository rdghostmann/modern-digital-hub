import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// Mock data for recent blog posts
const recentPosts = [
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
]

export default function RecentPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {recentPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-0">
            <Link href={`/blog/${post.id}`} passHref legacyBehavior>
              <a>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </a>
            </Link>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400">{post.date}</span>
              </div>
              <Link href={`/blog/${post.id}`} passHref legacyBehavior>
                <a>
                  <h3 className="font-semibold text-lg mb-2 hover:underline">{post.title}</h3>
                </a>
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}