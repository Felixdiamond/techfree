import PageHeader from "@/components/PageHeader";
import { Monitor, Cpu, Database, Shield, Palette, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Digital Solutions",
    description: "Website Development, Front-End Development, and Graphic Design tailored to your business needs.",
    image: "/assets/images/image-box/os-h31.jpg",
    category: "Development",
    link: "/services/digital-solutions"
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "AI-Powered Chatbots and Business Process Automation to optimize workflows and improve efficiency.",
    image: "/assets/images/image-box/os-h32.jpg",
    category: "AI",
    link: "/services/ai-automation"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Leverage data for actionable insights and seamless API Development & Integration.",
    image: "/assets/images/image-box/os-h33.jpg",
    category: "Data",
    link: "/services/data-analytics"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Cloud",
    description: "Robust security measures and scalable, secure cloud-based solutions for storage and operations.",
    image: "/assets/images/image-box/os-h31.jpg",
    category: "Security",
    link: "/services/cybersecurity-cloud"
  },
  {
    icon: Palette,
    title: "Creative & Marketing",
    description: "Content Creation, Social Media Marketing, and Cinematography to amplify your brand's reach.",
    image: "/assets/images/image-box/os-h32.jpg",
    category: "Creative",
    link: "/services/creative-marketing"
  },
  {
    icon: Briefcase,
    title: "Project & Business Mgt",
    description: "End-to-end Project Management and Business Process Management to improve efficiency.",
    image: "/assets/images/image-box/os-h33.jpg",
    category: "Management",
    link: "/services/project-business-management"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <PageHeader title="Our Services" breadcrumb="Services" />

      {/* Intro Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Optimize Security Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6 leading-tight">
                Comprehensive Protection for your <span className="text-blue-600">Business</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                We provide end-to-end technology solutions designed to secure, optimize, and grow your business. From cybersecurity to cloud infrastructure, our expert team delivers results that matter.
              </p>
            </div>
            <div className="lg:w-1/3 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle size={18} className="text-blue-600" />
                  <span>Professional Team Members</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle size={18} className="text-blue-600" />
                  <span>Award Winning Solutions</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle size={18} className="text-blue-600" />
                  <span>24/7 Dedicated Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wide">
                    {service.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform duration-300">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
