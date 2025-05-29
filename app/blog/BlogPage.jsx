"use client"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | Modern Web App",
  description: "Read our latest articles and insights on web development, design, and technology.",
}

export default function BlogPage({blogPosts}) {

  return (
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
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {post.date ? new Date(post.date).toLocaleDateString() : ""}
                  </span>
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
  )
}