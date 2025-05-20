import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { getFeaturedBlogPosts } from "@/controllers/getRecentBlogPost"

export default async function RecentPosts() {
  const recentPosts = await getFeaturedBlogPosts()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {recentPosts.map((post) => (
        <Card key={post._id} className="overflow-hidden">
          <CardContent className="p-0">
            <Link href={`/blog/${post._id}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <Link href={`/blog/${post._id}`}>
                <h3 className="font-semibold text-lg mb-2 hover:underline">{post.title}</h3>
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}