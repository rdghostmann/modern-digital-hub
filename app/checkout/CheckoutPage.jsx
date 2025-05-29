"use client"

import React, { useEffect, useState } from "react"
import { useCartStore } from "@/store/cart-store"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createOrder } from "@/controllers/createOrder"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"

const CheckoutPage = ({ username, email, role }) => {
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)
  const clearCart = useCartStore((state) => state.clearCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const router = useRouter()

  const [shippingAddress, setShippingAddress] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (items.length === 0) {
      router.push("/store")
    }
  }, [items, router])

  const handleCheckout = async () => {
    if (!shippingAddress.trim()) {
      alert("Please enter a shipping address.")
      return
    }

    try {
      setLoading(true)
      const res = await createOrder({
        userId: email,
        username,
        items,
        total: getTotal(),
        shippingAddress,
      })
      clearCart()
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      })

      if(role === "admin") {
        router.push("/admin/orders")
      }
      else if(role === "user") {
        router.push("/dashboard/orders")
      }
      else if(role === "writer") {
        router.push("/writer/orders")
      } else {
        router.push("/store")
      }
      
      
    } catch (err) {
      console.error(err)
      alert("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/store" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Button asChild>
            <Link href="/store">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="md:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4">Price</th>
                    <th className="text-right p-4">Total</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {item.description?.substring(0, 60)}...
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value, 10))
                          }
                          className="text-center w-20"
                        />
                      </td>
                      <td className="p-4 text-right">₦{item.price.toFixed(2)}</td>
                      <td className="p-4 text-right">
                        ₦{(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="p-4 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary and Address Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₦{(getTotal() * 0.1).toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₦{(getTotal() * 1.1).toFixed(2)}</span>
                </div>

                <Separator />

                {/* User Details */}
                <div className="space-y-2">
                  <Label htmlFor="username">Name</Label>
                  <Input id="username" value={username} disabled />

                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} disabled />

                  <Label htmlFor="address">Delivery Address</Label>
                  <Textarea
                    id="address"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    rows={3}
                    placeholder="Enter your delivery address..."
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Place Order"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
