"use client"

import { useEffect, useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { getFeaturedVideo } from "@/controllers/getFeaturedVideo"

export default function FeaturedVideo() {
  const [video, setVideo] = useState(null)
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [userAction, setUserAction] = useState(null)

  useEffect(() => {
    async function fetchVideo() {
      const data = await getFeaturedVideo()
      setVideo(data)
      if (data) {
        setLikes(data.likes || 0)
        setDislikes(data.dislikes || 0)
      }
    }
    fetchVideo()
  }, [])

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

  if (!video) {
    return (
      <Card className="w-full max-w-3xl mx-auto overflow-hidden">
        <CardContent className="p-8 text-center">Loading featured video...</CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
          <iframe
            className="w-full h-full absolute"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{video.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            {video.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Posted on {new Date(video.date).toLocaleDateString()}
            </div>
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