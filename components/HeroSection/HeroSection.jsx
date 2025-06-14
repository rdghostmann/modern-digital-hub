"use client";
import React, { useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { motion } from "framer-motion"
import FeaturedPostCard from "@/components/featured-post-card"
import AnimatedHeading from "@/components/animated-heading"
import { ArrowRight, Badge, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';



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


const HeroSection = () => {
    useEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <section className="relative bg-gradient-to-r from-primary-700 to-secondary-700 text-white py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-hero-pattern bg-cover bg-center opacity-20"
                style={{ transform: "translateY(calc(var(--scroll) * 0.1))", }} />
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        // className="text-3xl md:text-5xl font-bold mb-4 relative z-10 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-gray-900 dark:text-gray-100 text-transparent"
                        className="text-3xl md:text-5xl font-bold mb-4 relative z-10 text-gray-700 dark:text-gray-100 "
                    >
                        Modern Blog & Store
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl max-w-2xl text-gray-300 "
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
                                            sizes="(max-width: 768px) 100vw, 50vw"
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
    )
}

export default HeroSection
