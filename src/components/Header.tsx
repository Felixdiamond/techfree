"use client";

import Link from "next/link";
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
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-md py-2" 
          : "bg-white dark:bg-slate-900 shadow-sm py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Bar - Hide on scroll or keep it? Let's hide it on scroll for "peak" effect */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-slate-900 dark:bg-slate-950 text-white py-2 text-sm hidden md:block overflow-hidden"
          >
            <div className="container mx-auto px-4 flex justify-between items-center">
              <p className="opacity-90">Empowering Change through AI & Technology</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={16} /></a>
                  <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={16} /></a>
                  <a href="#" className="hover:text-yellow-400 transition-colors"><Linkedin size={16} /></a>
                  <a href="#" className="hover:text-yellow-400 transition-colors"><Youtube size={16} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="font-bold text-2xl tracking-tighter text-slate-900 dark:text-white group-hover:scale-105 transition-transform">
              Tech<span className="text-blue-600 dark:text-blue-400">Free</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700 dark:text-slate-200">
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
                className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Phone size={20} className="text-blue-600 dark:text-blue-400" />
              </motion.div>
              <span className="font-semibold">+236 (456) 896 22</span>
            </div>
            <ThemeToggle />
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Search size={20} className="text-slate-600 dark:text-slate-300" />
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button 
              className="p-2 text-slate-700 dark:text-slate-200"
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
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-lg overflow-hidden"
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
                    className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                <span className="font-semibold">+236 (456) 896 22</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
