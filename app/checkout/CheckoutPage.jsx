"use client"
import React, { useEffect } from 'react'
import { useCartStore } from "@/store/cart-store"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const CheckoutPage = () => {
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)
  const clearCart = useCartStore((state) => state.clearCart)
  const router = useRouter()

  useEffect(() => {
    if (items.length === 0) {
      router.push("/store")
    }
  }, [items, router])

  const handleCheckout = () => {
    // Simulate checkout process
    clearCart()
    alert("Thank you for your purchase!")
    router.push("/store")
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₦{getTotal().toFixed(2)}</span>
            </div>
            <Button className="w-full mt-4" onClick={handleCheckout}>
              Complete Purchase
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CheckoutPage
