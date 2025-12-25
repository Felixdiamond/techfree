import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-20 pb-10 overflow-hidden transition-colors duration-300">
      {/* Marquee Section - Simplified for modern look */}
      <div className="w-full overflow-hidden bg-blue-600/5 dark:bg-blue-600/10 py-4 mb-16 transform -skew-y-1 transition-colors duration-300">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-blue-600 dark:text-blue-400 font-bold text-lg tracking-wider uppercase">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              IT Services <span className="text-slate-400 dark:text-slate-600">•</span> Cyber Security <span className="text-slate-400 dark:text-slate-600">•</span> Data Security <span className="text-slate-400 dark:text-slate-600">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="font-bold text-3xl tracking-tighter text-slate-900 dark:text-white transition-colors duration-300">
              Tech<span className="text-blue-600 dark:text-blue-500">Free</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering businesses through innovative AI solutions and cutting-edge technology services.
            </p>
            <div className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 mt-1" />
              <span>Block 476 & 66 Amuwo Odofin Mile 2 Estate, Lagos</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-6 transition-colors duration-300">IT Services</h4>
            <ul className="space-y-4">
              {['IT Consultancy', 'IT Management', 'IT Supports', 'Cloud Computing', 'Cyber Security'].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-500 transition-colors group">
                    <ArrowRight size={16} className="text-blue-600 dark:text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-6 transition-colors duration-300">Support</h4>
            <ul className="space-y-4">
              {['Forum Support', 'Help & FAQ', 'Contact Us', 'Pricing and plans', 'Cookies Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-500 transition-colors group">
                    <ArrowRight size={16} className="text-blue-600 dark:text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-6 transition-colors duration-300">Newsletter</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Subscribe our newsletter to get more updates</p>
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                Sign Up <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
          <p className="text-slate-500 text-sm">
            © 2025 TechFree - IT Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
