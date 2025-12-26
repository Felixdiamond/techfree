"use client";

import PageHeader from "@/components/PageHeader";
import { CheckCircle, Users, Award, Clock, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, FadeIn, SlideUp } from "@/components/Reveal";
import Image from "next/image";

export default function AboutCompany() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <PageHeader title="About Company" breadcrumb="About Us" />

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[500px]">
                <Image 
                  src="/assets/images/page/about-1.jpg" 
                  alt="About TechFree" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <Reveal>
                <div>
                  <span className="text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider uppercase text-sm">About Company</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-3 leading-tight">
                    Make your life easier with help from <span className="text-neutral-600 dark:text-neutral-400">TechFree</span>
                  </h2>
                </div>
              </Reveal>
              
              <ul className="space-y-4">
                {[
                  "Professional Team Member",
                  "Awards Winning IT Solutions Company",
                  "Dedicated Tech Services"
                ].map((item, index) => (
                  <Reveal key={index} delay={0.3 + index * 0.1} direction="left">
                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <CheckCircle size={14} />
                      </div>
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.4}>
                <div className="pt-6">
                  <a href="#" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                    Read More
                  </a>
                </div>
              </Reveal>

              {/* Counter Section */}
              <Reveal delay={0.6}>
                <div className="mt-10 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    We’ve 25+ Years Of Experience <br /> In Tech Services
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque epsa inventore
                  </p>
                  
                  <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Users size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">56</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Satisfied Customers</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <CheckCircle size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">8</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Project Complete</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
