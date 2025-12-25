"use client";

import PageHeader from "@/components/PageHeader";
import { Calendar, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "IT Service Studies Accelerating Business Fly Success Tech",
    category: "Design",
    date: "October 25, 2023",
    author: "Admin",
    image: "/assets/images/blog/blog4.jpg",
    excerpt: "Sed perspiciatis unde omniste voluptateme accus antiume doloremque laudantie"
  },
  {
    id: 2,
    title: "The Future of Cloud Computing in Modern Business",
    category: "Software",
    date: "October 28, 2023",
    author: "Admin",
    image: "/assets/images/blog/blog5.jpg",
    excerpt: "Discover how cloud technologies are reshaping the way businesses operate and scale."
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Small Businesses",
    category: "Security",
    date: "November 01, 2023",
    author: "Admin",
    image: "/assets/images/blog/blog6.jpg",
    excerpt: "Essential security measures every small business needs to implement today."
  },
  {
    id: 4,
    title: "AI Integration: A Game Changer for Enterprise",
    category: "Technology",
    date: "November 05, 2023",
    author: "Admin",
    image: "/assets/images/blog/blog4.jpg", // Reusing image
    excerpt: "How artificial intelligence is automating workflows and driving efficiency."
  },
  {
    id: 5,
    title: "Remote Work Infrastructure: Building for Success",
    category: "Management",
    date: "November 10, 2023",
    author: "Admin",
    image: "/assets/images/blog/blog5.jpg", // Reusing image
    excerpt: "Setting up a robust IT infrastructure for distributed teams."
  },
  {
    id: 6,
    title: "Data Privacy Regulations: What You Need to Know",
    category: "Legal",
    date: "November 15, 2023",
    author: "Admin",
    image: "/assets/images/blog/blog6.jpg", // Reusing image
    excerpt: "Navigating the complex landscape of data privacy and compliance."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <PageHeader title="Our Blog" breadcrumb="Blog" />

      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id} 
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform duration-300">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-16 gap-2">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-lg shadow-blue-600/20">1</button>
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">2</button>
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">3</button>
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"><ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
    </div>
  );
}
