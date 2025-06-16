import React from "react"
import ParallaxCTA from "@/components/parallax-cta"
import VideoOfTheWeek from "@/components/video-of-the-week"
import AdsBanner from "@/components/ads-banner"
import HeroSection from "@/components/HeroSection/HeroSection"
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost"
import Newsletter from "@/components/Newsletter/Newsletter"
import SidebarPost from "@/components/SidebarPost/SidebarPost"
import CategoriesSection from "@/components/CategoriesSection/CategoriesSection"



export default function Home() {


  return (
    // <div className="pt-16">
    <div className="pt-3">
      {/* Top Banner Ad */}
      {/* <div className="bg-gray-50 dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <AdsBanner type="banner" size="medium" />
        </div>
      </div> */}

      {/* Hero Section with Featured Posts Carousel */}
      <HeroSection />

      {/* Featured Posts Section */}
      <FeaturedPost />

      {/* Inline Ad */}
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AdsBanner type="inline" size="medium" />
        </div>
      </div>

      {/* Latest Posts Section with Sidebar */}
      <SidebarPost />

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
     <CategoriesSection />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}
