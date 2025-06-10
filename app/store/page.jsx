"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"
import ProductCard from "@/components/product-card"
import FilterSidebar from "@/components/filter-sidebar"
import NewsletterSection from "@/components/newsletter-section"
import ParallaxCTA from "@/components/parallax-cta"
import AnimatedHeading from "@/components/animated-heading"
import AdsBanner from "@/components/ads-banner"

// Sample data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    discountPrice: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviewCount: 124,
    category: "Electronics",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 89.99,
    discountPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviewCount: 86,
    category: "Accessories",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    discountPrice: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviewCount: 215,
    category: "Clothing",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 129.99,
    discountPrice: 99.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviewCount: 178,
    category: "Electronics",
    isNew: false,
    isFeatured: true,
  },
]

// Sample data for all products
const products = [
  ...featuredProducts,
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    discountPrice: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.4,
    reviewCount: 92,
    category: "Electronics",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 6,
    name: "Handcrafted Ceramic Mug",
    price: 24.99,
    discountPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviewCount: 67,
    category: "Home",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 7,
    name: "Recycled Canvas Backpack",
    price: 59.99,
    discountPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviewCount: 103,
    category: "Accessories",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    discountPrice: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviewCount: 156,
    category: "Home",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 9,
    name: "Wireless Charging Pad",
    price: 39.99,
    discountPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviewCount: 88,
    category: "Electronics",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 10,
    name: "Linen Throw Pillow",
    price: 44.99,
    discountPrice: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviewCount: 72,
    category: "Home",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 11,
    name: "Sustainable Bamboo Toothbrush",
    price: 9.99,
    discountPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviewCount: 203,
    category: "Health",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 12,
    name: "Organic Lip Balm Set",
    price: 14.99,
    discountPrice: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviewCount: 118,
    category: "Health",
    isNew: true,
    isFeatured: false,
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
      staggerChildren: 0.1,
    },
  },
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroRef = useRef(null)
  const featuredRef = useRef(null)
  const productsRef = useRef(null)
  const newsletterRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 })
  const productsInView = useInView(productsRef, { once: true, amount: 0.3 })
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.3 })

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="pt-16">
      {/* Top Banner Ad */}
      <div className="bg-gray-50 dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <AdsBanner type="banner" size="medium" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-black bg-hero-pattern bg-cover bg-center opacity-20"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.1))",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-accent hover:bg-accent-600">New Collection</Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Discover Premium Quality Products
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Explore our curated collection of high-quality products designed for modern living.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#featured">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg">
                  View Collections
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 md:h-96"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/30 to-indigo-600/30 rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Featured product"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section id="featured" ref={featuredRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-10"
          >
            <AnimatedHeading title="Featured Products" subtitle="Our most popular and trending items" gradient={true} />
          </motion.div>

          <Splide
            options={{
              perPage: 4,
              gap: "1.5rem",
              arrows: true,
              pagination: false,
              breakpoints: {
                1024: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            {featuredProducts.map((product) => (
              <SplideSlide key={product.id}>
                <ProductCard product={product} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      {/* Inline Ad */}
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <AdsBanner type="inline" size="medium" />
        </div>
      </div>

      {/* Categories Banner */}
      <section className="py-10 bg-gradient-to-r from-blue-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Electronics", "Clothing", "Accessories", "Home"].map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-32 md:h-40 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setActiveCategory(category.toLowerCase())}
              >
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${category}`}
                  alt={category}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <ParallaxCTA
        title="Limited Time Offer"
        description="Get 20% off on all products with code SUMMER20. Hurry, offer ends soon!"
        buttonText="Shop Now"
        buttonLink="#featured"
        backgroundImage="/placeholder.svg?height=800&width=1600&text=Limited+Offer"
      />

      {/* All Products Section with Filters */}
      <section ref={productsRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-between mb-10"
          >
            <AnimatedHeading title="All Products" subtitle="Browse our complete collection" gradient={true} />
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar - Only shown on larger screens or when toggled */}
            {(showFilters || window.innerWidth >= 1024) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1 space-y-6"
              >
                <FilterSidebar
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  onClose={() => setShowFilters(false)}
                />
                <AdsBanner type="sidebar" size="large" />
              </motion.div>
            )}

            {/* Products Grid */}
            <motion.div
              initial="hidden"
              animate={productsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className={`${showFilters || window.innerWidth >= 1024 ? "lg:col-span-3" : "lg:col-span-4"}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">No products found in this category.</p>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Products
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        ref={newsletterRef}
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Newsletter')",
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
