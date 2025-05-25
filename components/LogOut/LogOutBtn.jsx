"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function LogoutBtn({ className = "w-fit mx-auto" }) {
  return (
    <Button
      variant="ghost"
      className={className}
      onClick={() => signOut({ redirect: false })}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  )
}