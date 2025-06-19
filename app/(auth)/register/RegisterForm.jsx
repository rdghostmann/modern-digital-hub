"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from 'sonner';
import CopyrightYear from '@/components/CopyrightYear/CopyrightYear';

// Quotes for the carousel
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
    }, 6000); // every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-32 md:h-40 flex flex-col justify-center items-center px-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="absolute w-full text-center"
        >
          <blockquote className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg">
            {quotes[index].text}
          </blockquote>
          <div className="mt-2 text-yellow-300 font-medium">
            — {quotes[index].author}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // Default values for role and isActive
  const [role, setRole] = useState("user");
  const [isActive, setIsActive] = useState("true");

  const handleSubmit = async (formData) => {
    setLoading(true);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const phone = formData.get('phone');
    // Use state values for role and isActive
    const selectedRole = role;
    const selectedIsActive = isActive;

    if (password !== confirmPassword) {
      toast("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
          role: selectedRole,
          isActive: selectedIsActive
        }),
      });
      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        toast(data.error || "An error occurred while registering.");
        return;
      }

      toast("Registration successful! You can now log in.");
      setTimeout(() => router.push("/login"), 1500);
    } catch (error) {
      toast("Failed Internet Connection. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full h-full flex flex-col md:flex-row shadow-2xl overflow-hidden bg-background">
        {/* Left: Carousel & Image (hidden on small screens) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex flex-col justify-between items-center bg-gradient-to-br from-yellow-700 via-yellow-900 to-gray-900 md:w-1/2 relative"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/login-bg.jpg"
              alt="Writer background"
              className="w-full h-full object-cover opacity-40"
              style={{ filter: "blur(2px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-center w-full">
            <QuoteCarousel />
          </div>
          {/* <div className="relative z-10 mb-8 text-center text-gray-300 text-xs">
            &copy; {new Date().getFullYear()} BlogStore. Write. Share. Inspire.
          </div> */}
          <div className="relative z-10 mb-8 text-center text-gray-300 text-xs">
            <CopyrightYear />
          </div>
        </motion.div>

        {/* Right: Register Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center items-center bg-[#1a1c1a] p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">Sign up</h2>
          <p className="text-lg text-gray-400 text-center mb-8">
            Fill in your details to get started
          </p>
          <form
            className="space-y-5 w-full max-w-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleSubmit(formData);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                required
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-gray-300">Role</Label>
              <Select
                name="role"
                required
                value={role}
                onValueChange={setRole}
              >
                <SelectTrigger className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600 w-full rounded-lg">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="writer">Writer</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="isActive" className="text-gray-300">Active Status</Label>
              <Select
                name="isActive"
                required
                value={isActive}
                onValueChange={setIsActive}
              >
                <SelectTrigger className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600 w-full rounded-lg">
                  <SelectValue placeholder="Select active status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg transition duration-300"
            >
              {loading ? (
                <Loader className="animate-spin mr-2" size={20} />
              ) : "Register"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-500 hover:underline">
              Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};