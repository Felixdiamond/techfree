import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PartnerInitiatives from "@/components/PartnerInitiatives";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <PartnerInitiatives />
      <TeamSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Join hundreds of companies that trust TechFree for their IT infrastructure and security needs. Let's build the future together.
          </p>
          <a 
            href="/contact-us" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-600 dark:text-blue-900 transition-all duration-200 bg-white dark:bg-blue-100 rounded-full hover:bg-blue-50 dark:hover:bg-blue-200 hover:shadow-lg hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
