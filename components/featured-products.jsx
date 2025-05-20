import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import { AddToCartButton } from "./add-to-cart-button"

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones",
    price: 199.99,
    image: "/placeholder-headphones.png",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness and stay connected",
    price: 249.99,
    image: "/placeholder-smartwatch.png",
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description: "Tactile typing experience with RGB lighting",
    price: 129.99,
    image: "/placeholder-mechanical.png",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-0">
            <Link href={`/store/${product.id}`}>
              <div className="relative h-48 w-full">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/store/${product.id}`}>
                <h3 className="font-semibold text-lg mb-1 hover:underline">{product.name}</h3>
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{product.description}</p>
              <p className="font-bold">${product.price.toFixed(2)}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <AddToCartButton product={product} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
