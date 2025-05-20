import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllBlogPosts } from "@/controllers/getAllBlogPost"


export const metadata = {
  title: "Blog | Modern Web App",
  description: "Read our latest articles and insights on web development, design, and technology.",
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

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
