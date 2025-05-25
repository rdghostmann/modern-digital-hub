"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "“The art of writing is the art of discovering what you believe.”",
    author: "Gustave Flaubert",
  },
  {
    text: "“Blogging is not rocket science. It’s about being yourself, and putting what you have into it.”",
    author: "Anonymous",
  },
  {
    text: "“Start writing, no matter what. The water does not flow until the faucet is turned on.”",
    author: "Louis L’Amour",
  },
];

function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-48 flex flex-col justify-center items-center px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full"
        >
          <blockquote className="text-xl md:text-2xl font-semibold text-white text-center drop-shadow-lg">
            {quotes[index].text}
          </blockquote>
          <div className="mt-4 text-yellow-300 text-center font-medium">
            — {quotes[index].author}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setLoading(false);
      return toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Email and Password are required",
      });
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: result.error || "Invalid email or password",
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Redirecting to your dashboard...",
        });
        router.push("/admin");
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error occurred.",
        description: "An error occurred while processing your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      {/* <div className="w-full max-w-2xl md:max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-background"> */}
      <div className="w-full h-full flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-background">
        {/* Left: Carousel & Image (hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col justify-between items-center bg-gradient-to-br from-yellow-700 via-yellow-900 to-gray-900 md:w-1/2 relative"
        >
          <div className="absolute inset-0">
            <img
              src="/login-bg.jpg"
              alt="Writer background"
              className="w-full h-full object-cover opacity-40"
              style={{ filter: "blur(2px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <QuoteCarousel />
          </div>
          <div className="relative z-10 mb-8 text-center text-gray-300 text-xs">
            &copy; {new Date().getFullYear()} BlogStore. Write. Share. Inspire.
          </div>
        </motion.div>

        {/* Right: Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center items-center bg-[#1a1c1a] p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">Sign in</h2>
          <p className="text-lg text-gray-400 text-center mb-8">
            Enter your email and password to access your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                disabled={loading}
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                disabled={loading}
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg"
            >
              {loading ? (
                <Loader className="animate-spin mr-2 h-4 w-4" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="text-yellow-500 hover:underline">
              Sign up
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginForm;