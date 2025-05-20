"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export default function FeaturedVideo() {
  const [likes, setLikes] = useState(124)
  const [dislikes, setDislikes] = useState(8)
  const [userAction, setUserAction] = useState(null)

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1)
      setUserAction(null)
    } else {
      setLikes(likes + 1)
      if (userAction === "dislike") {
        setDislikes(dislikes - 1)
      }
      setUserAction("like")
    }
  }

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1)
      setUserAction(null)
    } else {
      setDislikes(dislikes + 1)
      if (userAction === "like") {
        setLikes(likes - 1)
      }
      setUserAction("dislike")
    }
  }

  return (
    <Card className="w-full max-w-3xl  mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
          <iframe
            className="w-full h-full absolute"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video of the Week"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Amazing Web Development Techniques for 2025</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Learn the latest web development techniques that will revolutionize how you build applications.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-400">Posted on May 15, 2025</div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1 ${userAction === "like" ? "text-primary" : ""}`}
                onClick={handleLike}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1 ${userAction === "dislike" ? "text-primary" : ""}`}
                onClick={handleDislike}
              >
                <ThumbsDown className="h-4 w-4" />
                <span>{dislikes}</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
