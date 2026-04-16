import PageHeader from "@/components/PageHeader";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const projectsData = {
  "techclean": {
    title: "TechClean",
    category: "Sustainability",
    objective: "Promoting environmental sustainability and mental well-being through technology.",
    image: "/assets/images/project/pj-grid1.jpg",
    features: [
      { name: "Solid Waste Management", desc: "Implementing AI-driven systems for efficient waste collection, recycling, and monetization of recyclable materials." },
      { name: "Substance Control Initiative", desc: "Using technology to educate and rehabilitate individuals affected by substance abuse, focusing on emotional, psychological, and intellectual well-being." }
    ]
  },
  "techedu": {
    title: "TechEdu",
    category: "Education",
    objective: "Transforming education through AI and technology.",
    image: "/assets/images/project/pj-grid2.jpg",
    features: [
      { name: "Digital Literacy Programs", desc: "Equipping students with the skills to navigate the digital world confidently and safely." },
      { name: "AI-Powered Learning Tools", desc: "Providing accessible, personalized learning experiences for students across Nigeria." }
    ]
  },
  "the-incarcerated-minds": {
    title: "The Incarcerated Minds",
    category: "Rehabilitation",
    objective: "Breaking the cycle of recidivism through technology education.",
    image: "/assets/images/project/pj-grid3.jpg",
    features: [
      { name: "Skills Development", desc: "Offering workshops, seminars, and training programs to equip incarcerated individuals with in-demand tech skills." },
      { name: "Reintegration Support", desc: "Preparing inmates for successful reintegration into society through technology-driven rehabilitation programs." }
    ]
  }
};

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <PageHeader title={project.title} breadcrumb="Project Details" />

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" 
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-blue-600 uppercase tracking-wide">
                {project.category}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                {project.title}
              </h2>
              <div className="p-6 bg-blue-50 dark:bg-slate-800/50 rounded-2xl border border-blue-100 dark:border-slate-700 mb-8 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                <strong>Objective:</strong> {project.objective}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                Key Features & Initiatives
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {feature.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a href="/project-grid" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                 ← Back to Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}