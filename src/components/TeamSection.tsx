"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const teamMembers = [
  {
    name: "Emmanuel Adedeji Adeagbo",
    phone: "+2349021230278",
    email: "Emmanuel@thetechfree.com",
    delay: 0.1
  },
  {
    name: "Olajuwon Sultan Balogun",
    phone: "+230 5476 6430",
    email: "Olajuwon@thetechfree.com",
    delay: 0.2
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%" direction="up">
            <div className="flex flex-col items-center">
              <span className="text-neutral-600 dark:text-neutral-400 font-semibold tracking-wider uppercase text-sm">Meet Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-3 mb-4">
                We’ve Exclusive Team member Meet our Professionals
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                {member.name}
              </h3>
              <div className="flex flex-col items-center gap-2 mt-4">
                <a href={`tel:${member.phone.replace(/\\s/g, '')}`} className="text-neutral-600 dark:text-neutral-400 font-medium hover:underline flex items-center justify-center">
                  {member.phone}
                </a>
                <a href={`mailto:${member.email}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center justify-center">
                  {member.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
