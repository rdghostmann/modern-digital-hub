import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProduct } from "@/controllers/getProduct"

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | Modern Web App Store`,
    description: product.description
      ? product.description.substring(0, 160)
      : "",
  }
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id)

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
        <div className="relative aspect-square min-h-[300px]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-bold mb-4">${product.price?.toFixed(2)}</p>

          <p className="text-slate-500 dark:text-slate-400 mb-6">{product.description}</p>

          <AddToCartButton product={product} />

          {product.features && product.features.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {product.specs && Object.keys(product.specs).length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  )
}