import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AddToCartButton } from "@/components/add-to-cart-button"

// Mock data for products
const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with exceptional sound quality and comfort. Perfect for long listening sessions, these headphones feature active noise cancellation technology that blocks out ambient noise, allowing you to focus on your music, podcasts, or calls.",
    price: 199.99,
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Bluetooth 5.2 connectivity",
      "Comfortable over-ear design",
      "Built-in microphone for calls",
      "Touch controls",
    ],
    specs: {
      "Frequency Response": "20Hz - 20kHz",
      "Driver Size": "40mm",
      Weight: "250g",
      Charging: "USB-C",
      "Colors Available": "Black, Silver, Blue",
    },
    image: "/placeholder-headphones.png",
  },
  {
    id: "2",
    name: "Smart Watch",
    description:
      "Track your fitness and stay connected with this feature-packed smart watch. Monitor your health metrics, receive notifications, and more with this stylish and functional wearable device.",
    price: 249.99,
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "GPS",
      "Water resistant (50m)",
      "7-day battery life",
      "Customizable watch faces",
    ],
    specs: {
      Display: '1.4" AMOLED',
      Resolution: "454 x 454 pixels",
      Weight: "32g",
      Sensors: "Accelerometer, Gyroscope, Heart Rate, SpO2",
      Connectivity: "Bluetooth 5.0, Wi-Fi",
    },
    image: "/placeholder-smartwatch.png",
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description:
      "Enhance your typing experience with this premium mechanical keyboard featuring tactile switches and customizable RGB lighting.",
    price: 129.99,
    features: [
      "Mechanical switches",
      "RGB backlighting",
      "Programmable keys",
      "N-key rollover",
      "Durable aluminum frame",
      "Detachable USB-C cable",
    ],
    specs: {
      "Switch Type": "Cherry MX Brown",
      Layout: "Full-size (104 keys)",
      Dimensions: "440 x 130 x 40mm",
      Weight: "1.1kg",
      Keycaps: "Double-shot PBT",
    },
    image: "/placeholder-mechanical.png",
  },
  {
    id: "4",
    name: "Wireless Mouse",
    description: "Ergonomic design with precision tracking for comfortable and accurate use.",
    price: 79.99,
    features: [
      "16,000 DPI optical sensor",
      "Ergonomic design",
      "6 programmable buttons",
      "Up to 70 hours battery life",
      "Wireless and wired modes",
      "Lightweight design",
    ],
    specs: {
      Sensor: "Optical",
      "DPI Range": "400-16,000",
      Weight: "85g",
      Battery: "Rechargeable Li-ion",
      Connectivity: "2.4GHz wireless, Bluetooth, USB-C",
    },
    image: "/placeholder-mouse.png",
  },
  {
    id: "5",
    name: "4K Monitor",
    description: "Ultra-high definition display for professionals with accurate color reproduction.",
    price: 349.99,
    features: [
      "4K UHD resolution (3840 x 2160)",
      "IPS panel",
      "99% sRGB color accuracy",
      "HDR10 support",
      "Adjustable stand",
      "Multiple input ports",
    ],
    specs: {
      "Screen Size": '27"',
      "Panel Type": "IPS",
      "Refresh Rate": "60Hz",
      "Response Time": "5ms",
      Ports: "HDMI 2.0 x2, DisplayPort 1.4, USB-C",
    },
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "6",
    name: "Laptop Stand",
    description: "Adjustable height for ergonomic viewing and improved posture while working.",
    price: 49.99,
    features: [
      "Adjustable height",
      "Foldable design",
      "Heat dissipation",
      "Anti-slip silicone pads",
      'Compatible with laptops up to 17"',
      "Lightweight aluminum construction",
    ],
    specs: {
      Material: "Aluminum alloy",
      Weight: "250g",
      Dimensions: "25 x 20 x 3cm (folded)",
      "Max Load": "5kg",
      "Angle Adjustment": "15° to 45°",
    },
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "7",
    name: "Wireless Charger",
    description: "Fast charging for compatible devices with sleek and minimalist design.",
    price: 39.99,
    features: [
      "15W fast charging",
      "Qi-certified",
      "LED charging indicator",
      "Foreign object detection",
      "Slim profile",
      "Anti-slip surface",
    ],
    specs: {
      Input: "QC 3.0 / PD",
      Output: "5W/7.5W/10W/15W",
      Dimensions: "100 x 100 x 10mm",
      "Cable Length": "1.5m",
      Compatibility: "Qi-enabled devices",
    },
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "8",
    name: "External SSD",
    description: "1TB high-speed portable storage with durable design for data on the go.",
    price: 159.99,
    features: [
      "1TB storage capacity",
      "Read speeds up to 1050MB/s",
      "Write speeds up to 1000MB/s",
      "Shock-resistant design",
      "Compact and portable",
      "Password protection",
    ],
    specs: {
      Capacity: "1TB",
      Interface: "USB 3.2 Gen 2",
      Dimensions: "95 x 55 x 8mm",
      Weight: "58g",
      Compatibility: "Windows, macOS, Android",
    },
    image: "/placeholder.svg?height=500&width=500",
  },
]

export function generateMetadata({ params }) {
  const product = products.find((product) => product.id === params.id)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | Modern Web App Store`,
    description: product.description.substring(0, 160),
  }
}

export default function ProductPage({ params }) {
  const product = products.find((product) => product.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/store" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Store
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>

          <p className="text-slate-500 dark:text-slate-400 mb-6">{product.description}</p>

          <AddToCartButton product={product} />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
