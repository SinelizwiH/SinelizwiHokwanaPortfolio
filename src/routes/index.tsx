import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Wrench,
  Briefcase,
  Sparkles,
  ArrowRight,
  MapPin,
  GraduationCap,
  Menu,
  X,
  Send,
} from "lucide-react";
import {
  profile,
  links,
  skills,
  projects,
  certificates,
  approach,
  navItems,
} from "@/lib/portfolio-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sinelizwi Hokwana — Software Developer, Business Analyst & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Sinelizwi Hokwana, a Business IT graduate specialising in software development, business analysis and AI-enabled digital solutions.",
      },
      { property: "og:title", content: "Sinelizwi Hokwana — Portfolio" },
      {
        property: "og:description",
        content:
          "Business IT Graduate | Software Developer | Business Analyst | AI Enthusiast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Software Development": Code2,
  "Databases & Cloud": Database,
  "Tools & Technologies": Wrench,
  "Business & Analysis": Briefcase,
  "AI & Digital Skills": Sparkles,
};

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Approach />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">Sinelizwi.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={links.cv}
            download
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <button
            className="rounded-md p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.cv}
              download
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for graduate & junior opportunities
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Building Digital Solutions with{" "}
            <span className="text-gradient">Technology, Business Insight</span> and{" "}
            <span className="text-gradient">AI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#certificates"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              View My Certificates
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <SocialIcon href={links.github} label="GitHub"><Github className="h-5 w-5" /></SocialIcon>
            <SocialIcon href={links.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></SocialIcon>
            <SocialIcon href={`mailto:${links.email}`} label="Email"><Mail className="h-5 w-5" /></SocialIcon>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/30 via-cyan/20 to-purple/30 blur-3xl" />
            <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-white/10 glow-ring md:w-80 lg:w-96">
              {profile.profileImage ? (
                <img src={profile.profileImage} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary via-card to-background">
                  <span className="font-display text-6xl font-bold text-gradient">
                    {profile.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl glass-card px-4 py-3 text-xs md:-left-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </div>
            </div>
            <div className="absolute -top-2 -right-2 rounded-2xl glass-card px-4 py-3 text-xs md:-right-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-3.5 w-3.5" /> BIT · UJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="About Me" title="Curious, capable, continuously learning." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-6 md:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              Sinelizwi Hokwana is a Business Information Technology graduate from the{" "}
              <span className="text-foreground">University of Johannesburg</span>, with a focus on Software Development.
              She has developed experience through academic and personal projects involving web development,
              mobile application development, databases, cloud technologies, APIs and business analysis.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              She enjoys understanding real-world problems and transforming them into practical digital solutions.
              She is also interested in Artificial Intelligence and recently completed{" "}
              <span className="text-foreground">six Google AI Essentials certificates</span> through Coursera,
              demonstrating her commitment to continuously learning and understanding how AI can be applied
              responsibly and effectively in modern workplaces and technology solutions.
            </p>
          </div>
          <div className="glass-card flex flex-col justify-between rounded-2xl p-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <blockquote className="mt-4 font-display text-lg leading-snug text-foreground">
              &ldquo;{profile.personalStatement}&rdquo;
            </blockquote>
            <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— Sinelizwi</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="A toolbox that spans code, data and business."
          description="From front-end and mobile to databases, AI awareness and business analysis."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = skillIcons[category] ?? Code2;
            return (
              <div key={category} className="glass-card group rounded-2xl p-6 transition hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition group-hover:border-primary/20 group-hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Turning ideas into working products."
          description="A selection of academic and personal projects across web, mobile and cloud."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition hover:border-primary/40 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {p.role.split("/")[0].trim()}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              {p.features && (
                <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                    </li>
                  ))}
                </ul>
              )}
              {p.highlight && (
                <p className="mt-4 border-l-2 border-primary/50 pl-3 text-xs italic text-muted-foreground">
                  {p.highlight}
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs text-muted-foreground">Role · {p.role}</span>
                <div className="flex gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:border-primary/40 hover:text-foreground">
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90">
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const featured = certificates.filter((c) => c.featured);
  const other = certificates.filter((c) => !c.featured);
  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Certifications & Continuous Learning"
          title="Learning the future, one certificate at a time."
          description="Actively growing an understanding of AI, technology and modern digital workflows."
        />

        <div className="mt-14 glass-card rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Featured collection</div>
              <h3 className="mt-1 font-display text-2xl font-bold">Google AI Essentials — Coursera</h3>
              <p className="mt-1 text-sm text-muted-foreground">Six certificates covering AI fundamentals, prompting, productivity and responsible AI.</p>
            </div>
            <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
              6 Certificates Completed
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CertificateCard key={c.name} c={c} />
            ))}
          </div>
        </div>

        {other.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {other.map((c) => (
              <CertificateCard key={c.name} c={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CertificateCard({ c }: { c: (typeof certificates)[number] }) {
  return (
    <div className="glass-card group flex flex-col rounded-xl p-5 transition hover:border-primary/40">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Sparkles className="h-4 w-4" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.date}</span>
      </div>
      <h4 className="mt-4 font-display text-base font-semibold leading-tight">{c.name}</h4>
      <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
      <a
        href={c.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition group-hover:gap-2.5"
      >
        View Certificate <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function Approach() {
  return (
    <section id="approach" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="My Approach"
          title="How I approach problems."
          description="I combine business analysis with software development to understand not only how to build technology, but why it matters and who it is for."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {approach.map((a) => (
            <div key={a.step} className="glass-card rounded-2xl p-5 transition hover:border-primary/40">
              <div className="font-display text-3xl font-bold text-gradient">{a.step}</div>
              <h4 className="mt-3 font-display text-base font-semibold">{a.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerGoals() {
  const roles = [
    "Graduate Programmes",
    "Internships",
    "Junior Software Developer",
    "Business Analyst",
    "Systems Analyst",
    "Digital Transformation",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Career Goals</div>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Ready to grow. Ready to contribute.</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              I am looking for opportunities where I can continue growing as a technology professional,
              contribute to meaningful projects, and develop my skills in software development, business
              analysis, AI-enabled solutions and digital transformation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something meaningful."
          description="Reach out about opportunities, collaborations or just to say hello."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <ContactLink href={`mailto:${links.email}`} icon={<Mail className="h-4 w-4" />} label="Email" value={links.email} />
            <ContactLink href={links.github} icon={<Github className="h-4 w-4" />} label="GitHub" value="View profile" />
            <ContactLink href={links.linkedin} icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="Connect with me" />
            <ContactLink href={links.cv} icon={<Download className="h-4 w-4" />} label="Curriculum Vitae" value="Download CV" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              // TODO: Connect to an email service (e.g. Resend, Formspree, EmailJS) or a server function.
            }}
            className="glass-card space-y-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name">
                <input required type="text" className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none focus:border-primary/50" />
              </Field>
              <Field label="Email">
                <input required type="email" className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none focus:border-primary/50" />
              </Field>
            </div>
            <Field label="Message">
              <textarea required rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm outline-none focus:border-primary/50" />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Send className="h-4 w-4" /> {sent ? "Message ready — configure email service" : "Send Message"}
            </button>
            {sent && (
              <p className="text-xs text-muted-foreground">
                Front-end form submitted. Connect this to an email service (e.g. Resend, Formspree or a server function) to deliver messages.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function ContactLink({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass-card group flex items-center justify-between rounded-xl p-4 transition hover:border-primary/40"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} {profile.name}. Crafted with care.</div>
        <div className="flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${links.email}`} className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
