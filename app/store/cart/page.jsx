import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { redirect } from "next/navigation"

export default async function page() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }


  return <CartPage />
}
