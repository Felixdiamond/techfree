"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-neutral-50 dark:bg-black overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-28 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-neutral-400/30 dark:bg-neutral-600/20 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-neutral-400/30 dark:bg-neutral-600/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/30 text-black dark:text-white font-medium text-sm border border-neutral-200 dark:border-neutral-800"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
              </span>
              Leading IT Solutions Provider
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white leading-[1.1]"
            >
              Empowering Change through <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-black dark:from-neutral-400 dark:to-white">AI & Technology</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl"
            >
              We deliver cutting-edge technology solutions that transform businesses. From AI integration to robust cybersecurity, we are your partner in digital evolution.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white dark:text-black transition-all duration-200 bg-black dark:bg-white rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:shadow-lg hover:-translate-y-1"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/about-company" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-neutral-700 dark:text-neutral-200 transition-all duration-200 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex gap-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-black dark:text-white" />
                <span className="text-neutral-600 dark:text-neutral-400 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-black dark:text-white" />
                <span className="text-neutral-600 dark:text-neutral-400 font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-black dark:text-white" />
                <span className="text-neutral-600 dark:text-neutral-400 font-medium">Global Reach</span>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 group">
              <img 
                src="/assets/images/slide/slider1lider1.jpg" 
                alt="TechFree Team" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-white/50 dark:border-neutral-700 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-black dark:text-white font-bold text-xl">
                    15+
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Years of Experience</p>
                    <p className="text-black dark:text-white font-bold">Delivering Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20 dark:opacity-10 dark:invert"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
