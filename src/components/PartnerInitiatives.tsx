"use client";

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, GraduationCap, Brain } from "lucide-react";

const partners = [
  {
    name: "Tech-Clean",
    icon: Sprout,
    description: "TechFree is dedicated to bridging the digital divide by providing technology access and education to underserved communities.",
    delay: 0.2
  },
  {
    name: "Tech Edu",
    icon: GraduationCap,
    description: "Transforming education with AI-powered digital literacy programs that equip students with essential skills to navigate the digital world.",
    delay: 0.4
  },
  {
    name: "Incarcerated Minds",
    icon: Brain,
    description: "Breaking the cycle of recidivism through technology training and mentorship, empowering incarcerated individuals with marketable skills for a fresh start.",
    delay: 0.6
  }
];

export default function PartnerInitiatives() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%" direction="up">
            <div className="flex flex-col items-center">
              <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Our Partners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
                Collaborative Initiatives
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Working together with our partners to create lasting impact and drive positive change in our communities.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: partner.delay }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
            >
              <div className="relative w-20 h-20 mb-6 mx-auto bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <partner.icon size={40} className="text-blue-600 dark:text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {partner.name}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-center mb-6 leading-relaxed">
                {partner.description}
              </p>
              
              <div className="text-center">
                <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
