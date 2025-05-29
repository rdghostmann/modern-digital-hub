// app/checkout/page.jsx
import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { redirect } from "next/navigation"
import CheckoutPage from "./CheckoutPage"

export default async function Checkout() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  const { username, email, role } = session.user

  return <CheckoutPage username={username} email={email} role={role} />
}
