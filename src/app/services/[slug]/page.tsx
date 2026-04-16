import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  Database,
  Monitor,
  Palette,
  Shield,
} from "lucide-react";
import Image from "next/image";

type ServiceFeature = {
  name: string;
  desc: string;
};

type ServiceEntry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
  features: ServiceFeature[];
};

const servicesData: ServiceEntry[] = [
  {
    slug: "digital-solutions",
    title: "Digital Solutions",
    icon: Monitor,
    description: "Designing and developing tailored digital experiences across the web to empower your brand.",
    image: "/assets/images/image-box/os-h31.jpg",
    features: [
      { name: "Website Development", desc: "Designing and developing user-friendly, responsive websites tailored to your business needs." },
      { name: "Front-End Development", desc: "Creating visually appealing and functional interfaces for web and mobile applications." },
      { name: "Graphic Design", desc: "Crafting compelling visuals that communicate your brand's message effectively." }
    ]
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    icon: Cpu,
    description: "Building intelligent systems and automating processes to optimize workflows.",
    image: "/assets/images/image-box/os-h32.jpg",
    features: [
      { name: "AI-Powered Chatbots", desc: "Building intelligent chatbots to enhance customer engagement and streamline communication." },
      { name: "Business Process Automation", desc: "Implementing AI-driven solutions to optimize workflows and improve efficiency." }
    ]
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    icon: Database,
    description: "Leverage data-driven approaches for clear insights and robust integrations.",
    image: "/assets/images/image-box/os-h33.jpg",
    features: [
      { name: "Data Analytics", desc: "Leveraging data to provide actionable insights and drive informed decision-making." },
      { name: "API Development & Integration", desc: "Creating seamless integrations between systems to enhance functionality and data flow." }
    ]
  },
  {
    slug: "cybersecurity-cloud",
    title: "Cybersecurity & Cloud Services",
    icon: Shield,
    description: "Securing your operations while providing scalable cloud infrastructure options.",
    image: "/assets/images/image-box/os-h31.jpg",
    features: [
      { name: "Cybersecurity Solutions", desc: "Protecting your digital assets with robust security measures and protocols." },
      { name: "Cloud Services", desc: "Offering scalable, secure, and reliable cloud-based solutions for storage and operations." }
    ]
  },
  {
    slug: "creative-marketing",
    title: "Creative & Marketing Services",
    icon: Palette,
    description: "Engaging creatively with your audience through data-driven marketing approaches.",
    image: "/assets/images/image-box/os-h32.jpg",
    features: [
      { name: "Content Creation", desc: "Producing high-quality, engaging content—from articles and blogs to videos and graphics." },
      { name: "Social Media Marketing", desc: "Developing data-driven strategies to grow your audience and amplify your brand's reach." },
      { name: "Cinematography", desc: "Crafting compelling visual stories to amplify your brand's message." }
    ]
  },
  {
    slug: "project-business-management",
    title: "Project & Business Management",
    icon: Briefcase,
    description: "Delivering end-to-end guidance and streamlining your critical operations.",
    image: "/assets/images/image-box/os-h33.jpg",
    features: [
      { name: "Project Management", desc: "Providing end-to-end project management services to ensure timely and successful delivery." },
      { name: "Business Process Management", desc: "Streamlining operations and improving organizational efficiency." }
    ]
  }
];

const servicesBySlug = Object.fromEntries(
  servicesData.map((service) => [service.slug, service])
) as Record<string, ServiceEntry>;

const workflow = [
  {
    title: "Discovery",
    desc: "We audit your current state, clarify constraints, and set measurable outcomes.",
  },
  {
    title: "Execution",
    desc: "Our team delivers in focused iterations with visible checkpoints and feedback loops.",
  },
  {
    title: "Optimization",
    desc: "After launch, we monitor performance and refine continuously for long-term impact.",
  },
];

export function generateStaticParams() {
  return servicesData.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  const HeroIcon = service.icon;

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-slate-950">
      <PageHeader title={service.title} breadcrumb="Service Details" />

      <main className="relative overflow-hidden">
        <section className="relative isolate border-b border-slate-200/80 py-12 md:py-16 dark:border-slate-800/80">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.2),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.2),transparent_70%)]" />
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                  <HeroIcon className="h-4 w-4" />
                  Service Focus
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                    {service.title}
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:text-white"
                  >
                    View all services
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Capabilities</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{service.features.length}+</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Delivery</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">End-to-end</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Support</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Ongoing</p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-2xl">
                <div className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl" />
                <div className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative aspect-4/3 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" priority />
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                      <HeroIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Built for measurable impact</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Clear outcomes, fast execution, and sustainable growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
              <article className="space-y-12">
                <section>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Core Capabilities</h2>
                    <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                      Every engagement is structured to move from strategy to implementation with practical, business-ready outputs.
                    </p>
                  </div>

                  <ul className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={feature.name}
                        className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{feature.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{feature.desc}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/70">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How We Deliver</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {workflow.map((step) => (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950"
                      >
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-300">
                          <CheckCircle2 className="h-4 w-4" />
                          <p className="text-sm font-semibold uppercase tracking-[0.14em]">{step.title}</p>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
                <nav
                  aria-label="Other services"
                  className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Other Services</h2>
                  <ul className="mt-4 space-y-2">
                    {servicesData.map((item) => {
                      const ItemIcon = item.icon;
                      const isActive = item.slug === slug;

                      return (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                              isActive
                                ? "border-blue-500 bg-blue-600 text-white"
                                : "border-slate-200 text-slate-700 hover:border-blue-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500/50 dark:hover:text-white"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <ItemIcon className="h-4 w-4" />
                              {item.title}
                            </span>
                            <ArrowRight
                              className={`h-4 w-4 transition-transform ${isActive ? "" : "group-hover:translate-x-0.5"}`}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="rounded-3xl bg-slate-900 p-6 text-white dark:bg-slate-800">
                  <h3 className="text-xl font-bold">Need a tailored plan?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    Tell us your goals and constraints. We will recommend the right service mix and execution roadmap.
                  </p>
                  <Link
                    href="/contact-us"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    Request consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}