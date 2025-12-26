import PageHeader from "@/components/PageHeader";
import { Shield, Cloud, Server, Code, Headphones, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Protect your digital assets with our advanced security protocols and real-time monitoring systems.",
    image: "/assets/images/image-box/os-h31.jpg",
    category: "Security"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud solutions that enhance collaboration, flexibility, and data accessibility for your team.",
    image: "/assets/images/image-box/os-h32.jpg",
    category: "Infrastructure"
  },
  {
    icon: Server,
    title: "IT Management",
    description: "Comprehensive IT infrastructure management to ensure your business operations run smoothly 24/7.",
    image: "/assets/images/image-box/os-h33.jpg",
    category: "Management"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business needs and workflow requirements.",
    image: "/assets/images/image-box/os-h31.jpg", // Reusing image for demo if unique one not found
    category: "Development"
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "Dedicated technical support team ready to resolve issues and minimize downtime for your business.",
    image: "/assets/images/image-box/os-h32.jpg",
    category: "Support"
  },
  {
    icon: BarChart,
    title: "IT Consultancy",
    description: "Strategic technology consulting to help you make informed decisions and drive digital transformation.",
    image: "/assets/images/image-box/os-h33.jpg",
    category: "Consulting"
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
                  <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform duration-300">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
