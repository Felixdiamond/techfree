"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Business", "Cyber Security", "Development", "Branding"];

const projects = [
  {
    id: 1,
    title: "Business Website Design",
    category: "Business",
    image: "/assets/images/project/pj-grid1.jpg",
    number: "01"
  },
  {
    id: 2,
    title: "Cyber Security Audit",
    category: "Cyber Security",
    image: "/assets/images/project/pj-grid2.jpg",
    number: "02"
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Development",
    image: "/assets/images/project/pj-grid3.jpg",
    number: "03"
  },
  {
    id: 4,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/assets/images/project/pj-grid4.jpg",
    number: "04"
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    category: "Business",
    image: "/assets/images/project/pj-grid5.jpg",
    number: "05"
  },
  {
    id: 6,
    title: "Data Protection System",
    category: "Cyber Security",
    image: "/assets/images/project/pj-grid6.jpg",
    number: "06"
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <PageHeader title="Our Projects" breadcrumb="Projects" />

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300 relative",
                  activeCategory === category
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-blue-400 font-mono text-sm">{project.number}</span>
                      <div className="h-px w-8 bg-blue-400"></div>
                      <span className="text-blue-200 text-sm uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.title}
                    </h3>
                    <a 
                      href="#" 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
