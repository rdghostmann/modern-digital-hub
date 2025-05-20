import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "Top 10 Underrated Movies You Need to Watch",
    content: `
      <p>Not every great movie gets the attention it deserves. Here are ten hidden gems across genres that deserve your time and appreciation.</p>
      <ul>
        <li><strong>1. Coherence</strong> – A sci-fi thriller that bends your mind without special effects.</li>
        <li><strong>2. The Fall</strong> – Visually stunning and emotionally powerful.</li>
        <li><strong>3. Take Shelter</strong> – A psychological drama with a powerhouse performance.</li>
        <li><strong>4. The Invitation</strong> – A suspenseful slow burn worth the wait.</li>
        <li><strong>5. Sing Street</strong> – A heartwarming musical coming-of-age story.</li>
        <!-- Add the rest similarly -->
      </ul>
    `,
    date: "May 12, 2025",
    author: "Jane Smith",
    category: "Movies",
    image: "/placeholder-movie.png",
  },
  {
    id: "2",
    title: "The Rise of AI in Music Production",
    content: `
      <p>From beat-making to mastering, artificial intelligence is reshaping the music industry. Discover how artists are collaborating with algorithms.</p>
      <p>AI tools like Amper, AIVA, and Soundraw are allowing creators to compose full tracks or enhance their sound with minimal manual input.</p>
    `,
    date: "May 8, 2025",
    author: "Alex Johnson",
    category: "Music",
    image: "/placeholder-music.png",
  },
  {
    id: "3",
    title: "How Streaming Changed TV Forever",
    content: `
      <p>Streaming services have revolutionized how we consume television. Gone are the days of cable dominance.</p>
      <h2>On-Demand Culture</h2>
      <p>Binge-watching and personalized recommendations have redefined viewer habits.</p>
      <h2>Creative Freedom</h2>
      <p>Direct-to-streaming releases give creators more room for niche storytelling and experimentation.</p>
    `,
    date: "May 5, 2025",
    author: "Sam Taylor",
    category: "TV & Streaming",
    image: "/placeholder-shows.png",
  },
  {
    id: "4",
    title: "Inside the World of Fan Conventions",
    content: `<p>Comic-Con, Anime Expo, and more — explore the vibrant culture, cosplay, panels, and fan communities that make these events a global phenomenon.</p>`,
    date: "May 1, 2025",
    author: "Chris Davis",
    category: "Pop Culture",
    image: "/placeholder-scence.png",
  },
  {
    id: "5",
    title: "Behind the Scenes of Modern Blockbusters",
    content: `<p>From motion capture to CGI, we delve into the technologies and teams making today’s cinematic spectacles possible.</p>`,
    date: "April 28, 2025",
    author: "Pat Johnson",
    category: "Film",
    image: "/placeholder-games.png",
  },
  {
    id: "6",
    title: "The Evolution of Video Game Storytelling",
    content: `<p>Games like The Last of Us and God of War have blurred the lines between gaming and cinema. Explore how storytelling in games has matured over time.</p>`,
    date: "April 25, 2025",
    author: "Jamie Wilson",
    category: "Gaming",
    image: "/placeholder-pop.png",
  }
];


export function generateMetadata({ params }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Modern Web App Blog`,
    description: post.excerpt || post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <div className="relative w-full h-[300px] md:h-[400px] mb-6">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>

        <div className="flex items-center gap-2 mb-8">
          <span className="text-sm">By {post.author}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
