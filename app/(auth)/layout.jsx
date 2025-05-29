import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Store App",
  description: "A modern Blog - Store e-commerce web application with blog, e-commerce, and video features",
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} cz-shortcut-listen="true">
            <div className="flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
              <Toaster />
            </div>
      </body>
    </html>
  )
}