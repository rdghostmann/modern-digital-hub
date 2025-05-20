import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"
import Link from "next/link"
import Image from "next/image"
import { getAllProducts } from "@/controllers/getAllProduct"


export const metadata = {
  title: "Store | Modern Web App",
  description: "Shop our curated selection of tech products.",
}

export default async function StorePage() {
  const products = await getAllProducts();

  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Store</h1>
        <p className="mt-4 text-slate-500 md:text-xl dark:text-slate-400 max-w-[700px]">
          Shop our curated selection of high-quality tech products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product._id} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/store/${product._id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />               
                   </div>
              </Link>
              <div className="p-4">
                <Link href={`/store/${product._id}`}>
                  <h3 className="font-semibold text-lg mb-1 hover:underline">{product.name}</h3>
                </Link>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 line-clamp-3">{product.description}</p>
                <p className="font-bold">₦{product.price.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <AddToCartButton product={product} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
