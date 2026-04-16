"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { MapPin, Phone, Mail, Share2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoSubject = encodeURIComponent(subject || 'Inquiry from Website');
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@techfree.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <PageHeader title="Contact Us" breadcrumb="Contact" />

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <Reveal>
                <div>
                  <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
                    Don't Hesitate To <br />Contact Us
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    We are here to help you with any questions or inquiries you may have. Reach out to us and let's start a conversation.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: "Location", lines: ["Block 476 & 66 Amuwo Odofin", "Mile 2 Estate, Lagos"] },
                  { icon: Phone, title: "Phone", lines: ["+236 (456) 896 22"] },
                  { icon: Mail, title: "Email", lines: ["info@techfree.com"] },
                  { icon: Share2, title: "Social", social: true }
                ].map((item, index) => (
                  <Reveal key={index} delay={0.2 + index * 0.1} direction="up">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                        {item.social ? (
                          <div className="flex gap-3">
                            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
                          </div>
                        ) : (
                          item.lines?.map((line, i) => (
                            <p key={i} className="text-slate-600 dark:text-slate-400 text-sm">{line}</p>
                          ))
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all bg-white dark:bg-slate-900 dark:text-white"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all bg-white dark:bg-slate-900 dark:text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-1 transform duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100 dark:bg-slate-800 relative mt-10">
        <iframe 
          src="https://maps.google.com/maps?q=Amuwo+Odofin+Mile+2+Estate,+Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          className="grayscale dark:invert dark:grayscale-0 transition-all duration-300"
        ></iframe>
      </section>
    </div>
  );
}
