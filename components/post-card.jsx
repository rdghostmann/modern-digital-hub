"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MessageSquare, Eye, Bookmark } from "lucide-react"

interface Author {
  name: string
  avatar: string
}

interface Post {
  id: number
  title: string
  excerpt: string
  category: string
  image: string
  author: Author
  date: string
  readTime: string
  comments?: number
  views?: number
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary-600 hover:bg-primary-700">{post.category}</Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-accent-500"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-5">
          <Link href={`/post/${post.id}`} className="block">
            <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
              {post.comments !== undefined && (
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>{post.comments}</span>
                </div>
              )}
              {post.views !== undefined && (
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{post.views}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span>{post.date}</span>
            <span className="mx-1">•</span>
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
