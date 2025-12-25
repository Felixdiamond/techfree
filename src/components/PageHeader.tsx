"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600/20 dark:bg-blue-500/10 blur-3xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 dark:from-slate-950 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 text-slate-400 font-medium"
        >
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-blue-500">{breadcrumb}</span>
        </motion.div>
      </div>
    </section>
  );
}
