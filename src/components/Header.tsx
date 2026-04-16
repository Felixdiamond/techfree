"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Search, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-2" 
          : "bg-white dark:bg-black shadow-sm py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
             <div className="relative w-32 h-10 md:w-40 md:h-12 transition-transform group-hover:scale-105">
                <Image 
                  src="/assets/images/logo-dark.png" 
                  alt="TechFree Logo" 
                  fill 
                  className="object-contain block dark:hidden" 
                  priority
                />
                <Image 
                  src="/assets/images/logo-light.png" 
                  alt="TechFree Logo" 
                  fill 
                  className="object-contain hidden dark:block" 
                  priority
                />
             </div>
             <div className="font-bold text-2xl tracking-tighter text-black dark:text-white group-hover:scale-105 transition-transform">
              Tech<span className="text-neutral-600 dark:text-neutral-400">Free</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-neutral-700 dark:text-neutral-200">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about-company" },
              { name: "Projects", href: "/project-grid" },
              { name: "Services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact-us" },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="relative hover:text-black dark:hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Phone size={20} className="text-black dark:text-white" />
              </motion.div>
              <span className="font-semibold">+236 (456) 896 22</span>
            </div>
            <ThemeToggle />
            <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
              <Search size={20} className="text-neutral-600 dark:text-neutral-300" />
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button 
              className="p-2 text-neutral-700 dark:text-neutral-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-800 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-company" },
                { name: "Projects", href: "/project-grid" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact-us" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-2" />
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
                <Phone size={20} className="text-black dark:text-white" />
                <span className="font-semibold">+236 (456) 896 22</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
