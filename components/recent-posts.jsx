import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// Mock data for recent blog posts
const recentPosts = [
  {
    id: "1",
    title: "10 JavaScript Tricks You Didn't Know",
    excerpt: "Discover advanced JavaScript techniques that will level up your coding skills.",
    date: "May 12, 2025",
    category: "Development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "The Future of Web Design in 2025",
    excerpt: "Explore the latest trends and technologies shaping the future of web design.",
    date: "May 8, 2025",
    category: "Design",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to create web applications that are accessible to everyone.",
    date: "May 5, 2025",
    category: "Accessibility",
    image: "/placeholder.svg?height=200&width=400",
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