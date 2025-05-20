"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { registerUser } from '@/controllers/registerUser';
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
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

const RegisterForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      // Debugging: Log all form data
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');
      const phone = formData.get('phone');
      const role = formData.get('role');
      const isActive = formData.get('isActive');

      if (password !== confirmPassword) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Passwords do not match.",
        });
        return;
      }

      const response = await registerUser({ username, email, password, phone, role, isActive });

      if (response?.success) {
        toast({
          title: "Registration successful!",
          description: "You are now redirected to login.",
        });
        router.push('/login');
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An error occurred while registering.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed Internet Connection. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0e100f] flex items-center justify-center px-4">
      <div className="bg-[#1a1c1a] w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-white text-center mb-6">Create a DAC Manager Account</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Onboard a Daily Saving's Manager Account </p>

        <form
          action={handleSubmit}
          className="space-y-5"
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

          <div className="grid grid-cols-2 gap-4">
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
              <Select name="role" required>
                <SelectTrigger className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600 w-full rounded-lg">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="isActive" className="text-gray-300">Active Status</Label>
              <Select name="isActive" required>
                <SelectTrigger className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600 w-full rounded-lg">
                  <SelectValue placeholder="Select active status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
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

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;