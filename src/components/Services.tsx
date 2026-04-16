"use client";

import Link from "next/link";
import { Monitor, Cpu, Database, Shield, Palette, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Digital Solutions",
    description: "Website Development, Front-End Development, and Graphic Design tailored to your business needs.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    link: "/services/digital-solutions"
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "AI-Powered Chatbots and Business Process Automation to optimize workflows and improve efficiency.",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    link: "/services/ai-automation"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Leverage data for actionable insights and seamless API Development & Integration.",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    link: "/services/data-analytics"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Cloud",
    description: "Robust security measures and scalable, secure cloud-based solutions for storage and operations.",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    link: "/services/cybersecurity-cloud"
  },
  {
    icon: Palette,
    title: "Creative & Marketing",
    description: "Content Creation, Social Media Marketing, and Cinematography to amplify your brand's reach.",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    link: "/services/creative-marketing"
  },
  {
    icon: Briefcase,
    title: "Project & Business Mgt",
    description: "End-to-end Project Management and Business Process Management to improve efficiency.",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    link: "/services/project-business-management"
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%" direction="up">
            <div className="flex flex-col items-center">
              <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
                Comprehensive IT Solutions for Your Business
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We offer a wide range of technology services designed to help your business grow, secure your data, and streamline your operations.
              </p>
            </div>
          </Reveal>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link} className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                Learn more <span className="ml-2 text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
