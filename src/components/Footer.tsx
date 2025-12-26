import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-black text-neutral-600 dark:text-neutral-400 pt-20 pb-10 overflow-hidden transition-colors duration-300">
      {/* Marquee Section - Simplified for modern look */}
      <div className="w-full overflow-hidden bg-neutral-900/5 dark:bg-white/5 py-4 mb-16 transform -skew-y-1 transition-colors duration-300">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-black dark:text-white font-bold text-lg tracking-wider uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              IT Services <span className="text-neutral-400 dark:text-neutral-600">•</span> Cyber Security <span className="text-neutral-400 dark:text-neutral-600">•</span> Data Security <span className="text-neutral-400 dark:text-neutral-600">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-10 h-10">
                    <Image 
                      src="/assets/images/dark.png" 
                      alt="TechFree Logo" 
                      fill 
                      className="object-contain" 
                    />
                </div>
                <div className="font-bold text-3xl tracking-tighter text-black dark:text-white transition-colors duration-300">
                  Tech<span className="text-neutral-600 dark:text-neutral-400">Free</span>
                </div>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Empowering businesses through innovative AI solutions and cutting-edge technology services.
            </p>
            <div className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-5 h-5 text-black dark:text-white shrink-0 mt-1" />
              <span>Block 476 & 66 Amuwo Odofin Mile 2 Estate, Lagos</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-neutral-600 dark:text-neutral-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-neutral-600 dark:text-neutral-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-neutral-600 dark:text-neutral-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-neutral-600 dark:text-neutral-400">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-black dark:text-white font-bold text-xl mb-6 transition-colors duration-300">IT Services</h4>
            <ul className="space-y-4">
              {['IT Consultancy', 'IT Management', 'IT Supports', 'Cloud Computing', 'Cyber Security'].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors group">
                    <ArrowRight size={16} className="text-black dark:text-white opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-black dark:text-white font-bold text-xl mb-6 transition-colors duration-300">Support</h4>
            <ul className="space-y-4">
              {['Forum Support', 'Help & FAQ', 'Contact Us', 'Pricing and plans', 'Cookies Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors group">
                    <ArrowRight size={16} className="text-black dark:text-white opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-black dark:text-white font-bold text-xl mb-6 transition-colors duration-300">Newsletter</h4>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Subscribe our newsletter to get more updates</p>
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all"
                />
              </div>
              <button className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/20 dark:shadow-white/20">
                Sign Up <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
          <p className="text-neutral-500 text-sm">
            © 2025 TechFree - IT Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
