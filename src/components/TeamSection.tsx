"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const teamMembers = [
  {
    name: "George C. Anderson",
    role: "Senior Manager",
    image: "/assets/images/team/teamh1.jpg",
    delay: 0.1
  },
  {
    name: "Brandon D. Garcia",
    role: "IT Consultant",
    image: "/assets/images/team/teamh11.jpg",
    delay: 0.2
  },
  {
    name: "William A. Rogers",
    role: "Product Designer",
    image: "/assets/images/team/teamh12.jpg",
    delay: 0.3
  },
  {
    name: "Matthew R. Howard",
    role: "IT Manager",
    image: "/assets/images/team/teamh13.jpg",
    delay: 0.4
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%" direction="up">
            <div className="flex flex-col items-center">
              <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Meet Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
                We’ve Exclusive Team member Meet our Professionals
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4 justify-center mb-4">
                      <a href="#" className="text-white hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
                      <a href="#" className="text-white hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                      <a href="#" className="text-white hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
                      <a href="#" className="text-white hover:text-blue-400 transition-colors"><Youtube size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
