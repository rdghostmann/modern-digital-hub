"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ArrowRight } from "lucide-react"
import FeaturedPostCard from "@/components/featured-post-card"
import PostCard from "@/components/post-card"
import CategorySection from "@/components/category-section"
import NewsletterSection from "@/components/newsletter-section"
import { useInView } from "framer-motion"
import ParallaxCTA from "@/components/parallax-cta"
import AnimatedHeading from "@/components/animated-heading"
import VideoOfTheWeek from "@/components/video-of-the-week"
import TrendingPosts from "@/components/trending-posts"
import CategoryButtons from "@/components/category-buttons"
import AdsBanner from "@/components/ads-banner"


// const featuredPosts = await getFeaturedBlogPosts()

// Sample data for featured posts
const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI in Everyday Technology",
    excerpt: "How artificial intelligence is transforming our daily lives and what to expect in the coming years.",
    category: "Technology",
    image: "/post-slide-1.jpg",
    author: {
      name: "Alex Johnson",
      avatar: "/team/team-1.jpg",
    },
    date: "May 28, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Summer Fashion Trends to Watch in 2023",
    excerpt: "The hottest styles, colors, and accessories that will dominate the fashion scene this summer.",
    category: "Fashion",
    image: "/post-slide-2.jpg",
    author: {
      name: "Emma Davis",
      avatar: "/team/team-2.jpg",
    },
    date: "May 25, 2023",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Hidden Gems: Unexplored Travel Destinations",
    excerpt: "Discover these lesser-known but breathtaking locations for your next adventure.",
    category: "Travel",
    image: "/post-slide-3.jpg",
    author: {
      name: "Michael Wong",
      avatar: "/team/team-3.jpg",
    },
    date: "May 22, 2023",
    readTime: "6 min read",
  },
]

// Sample data for regular posts
const posts = [
  {
    id: 4,
    title: "How to Build a Smart Home on a Budget",
    excerpt: "Transform your living space with these affordable smart home solutions.",
    category: "Technology",
    image: "/blog/blog-recent-1.jpg",
    author: {
      name: "David Chen",
      avatar: "/blog/comments-2.jpg",
    },
    date: "May 20, 2023",
    readTime: "7 min read",
    comments: 12,
    views: 1543,
  },
  {
    id: 5,
    title: "Sustainable Fashion: Eco-Friendly Brands to Support",
    excerpt: "These fashion brands are leading the way in environmental responsibility.",
    category: "Fashion",
    image: "/blog/blog-recent-3.jpg",
    author: {
      name: "Sophia Martinez",
      avatar: "/blog/comments-1.jpg",
    },
    date: "May 18, 2023",
    readTime: "5 min read",
    comments: 8,
    views: 982,
  },
  {
    id: 6,
    title: "Digital Nomad Essentials: Work From Anywhere",
    excerpt: "The tools and tips you need to successfully work while traveling the world.",
    category: "Travel",
    image: "/blog/blog-recent-2.jpg",
    author: {
      name: "James Wilson",
      avatar: "/blog/comments-5.jpg",
    },
    date: "May 15, 2023",
    readTime: "8 min read",
    comments: 15,
    views: 2134,
  },
  {
    id: 7,
    title: "The Rise of Foldable Smartphones",
    excerpt: "Are foldable phones the future? We examine the pros and cons of this emerging technology.",
    category: "Technology",
    image: "/blog/blog-recent-4.jpg",
    author: {
      name: "Lisa Park",
      avatar: "/blog/comments-3.jpg",
    },
    date: "May 12, 2023",
    readTime: "6 min read",
    comments: 23,
    views: 3201,
  },
  {
    id: 8,
    title: "Minimalist Wardrobe: Less is More",
    excerpt: "How to build a versatile wardrobe with fewer, high-quality pieces.",
    category: "Fashion",
    image: "/blog/blog-recent-5.jpg",
    author: {
      name: "Robert Brown",
      avatar: "/blog/comments-6.jpg",
    },
    date: "May 10, 2023",
    readTime: "4 min read",
    comments: 7,
    views: 1245,
  },
  {
    id: 9,
    title: "Budget Travel Tips for Europe",
    excerpt: "See the best of Europe without breaking the bank with these insider tips.",
    category: "Travel",
    image: "/blog/blog-recent-5.jpg",
    author: {
      name: "Anna Schmidt",
      avatar: "/blog/comments-4.jpg",
    },
    date: "May 8, 2023",
    readTime: "9 min read",
    comments: 19,
    views: 2876,
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featuredRef = useRef(null)
  const latestRef = useRef(null)
  const categoriesRef = useRef(null)
  const newsletterRef = useRef(null)

  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 })
  const latestInView = useInView(latestRef, { once: true, amount: 0.3 })
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.3 })
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.3 })

  // Filter posts based on active tab
  const filteredPosts = activeTab === "all" ? posts : posts.filter((post) => post.category.toLowerCase() === activeTab)

  return (
    // <div className="pt-16">
    <div className="pt-3">
      {/* Top Banner Ad */}
      <div className="bg-gray-50 dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <AdsBanner type="banner" size="medium" />
        </div>
      </div>

      {/* Hero Section with Featured Posts Carousel */}
      <section className="relative bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-hero-pattern bg-cover bg-center opacity-20"
          style={{ transform: "translateY(calc(var(--scroll) * 0.1))", }} />
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 relative z-10 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              Modern Blog & Store
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
            >
              Discover the latest trends in technology, fashion, and travel with our curated content and premium
              products.
            </motion.p>
          </div>

          <Splide
            options={{
              type: "fade",
              rewind: true,
              gap: "1rem",
              arrows: true,
              pagination: true,
              autoplay: true,
              interval: 5000,
              speed: 1000,
            }}
            className="splide-custom "
          >
            {featuredPosts.map((post) => (
              <SplideSlide key={post.id}>
                <div className="pb-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    {/* <Badge className="mb-4">{post.category}</Badge> */}
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center mb-6">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{post.author.name}</p>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/post/${post.id}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section
        ref={featuredRef}
        className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-10"
          >
            <AnimatedHeading title="Featured Posts" subtitle="Discover our most popular articles" gradient={true} />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inline Ad */}
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AdsBanner type="inline" size="medium" />
        </div>
      </div>

      {/* Latest Posts Section with Sidebar */}
      <section ref={latestRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={latestInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-10"
          >
            <AnimatedHeading title="Latest Articles" subtitle="Stay updated with our newest content" gradient={true} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="all" className="mb-10">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                    All
                  </TabsTrigger>
                  <TabsTrigger value="technology" onClick={() => setActiveTab("technology")}>
                    Technology
                  </TabsTrigger>
                  <TabsTrigger value="fashion" onClick={() => setActiveTab("fashion")}>
                    Fashion
                  </TabsTrigger>
                  <TabsTrigger value="travel" onClick={() => setActiveTab("travel")}>
                    Travel
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <motion.div
                initial="hidden"
                animate={latestInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </motion.div>

              <div className="flex justify-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <TrendingPosts />
              {/* <CategoryButtons activeCategory={activeTab} /> */}
              <AdsBanner type="sidebar" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Video of the Week Section */}
      <VideoOfTheWeek />

      {/* Parallax CTA Section */}
      <ParallaxCTA
        title="Discover Our Premium Content"
        description="Unlock exclusive articles, guides, and resources to enhance your knowledge and skills."
        buttonText="Become a Member"
        buttonLink="/membership"
        backgroundImage="/post-slide-1.jpg"
      />

      {/* Categories Section */}
      <section
        ref={categoriesRef}
        className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-10"
          >
            <AnimatedHeading
              title="Explore Categories"
              subtitle="Find content that matches your interests"
              gradient={true}
            />
          </motion.div>

          <CategorySection />
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        ref={newsletterRef}
        className="py-16 relative overflow-hidden"
        style={{
          // backgroundImage: "url('/news_letter.png')",
          backgroundImage: "url('/blog/blog-2.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-primary-600/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate={newsletterInView ? "visible" : "hidden"} variants={fadeInUp}>
            <NewsletterSection />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
