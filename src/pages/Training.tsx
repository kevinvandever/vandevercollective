import {
  GraduationCap,
  BookOpen,
  BrainCircuit,
  Wrench,
  Users,
  CheckCircle2,
  Handshake,
} from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'MindStudio Fundamentals',
    description:
      'Get up and running with MindStudio from day one. This program covers the platform basics, prompt engineering essentials, and how to build your first AI agent.',
    topics: [
      'Platform navigation and core concepts',
      'Prompt design and iteration techniques',
      'Publishing and sharing your first agent',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Advanced AI Workflow Design',
    description:
      'Take your skills to the next level with multi-step workflows, conditional logic, and integrations that turn simple agents into real automation.',
    topics: [
      'Multi-step workflow architecture',
      'Conditional branching and error handling',
      'API integrations and data pipelines',
    ],
  },
  {
    icon: Wrench,
    title: 'Custom Tool Building Workshop',
    description:
      'A hands-on workshop focused on building production-ready custom tools. Learn to scope, design, test, and deploy AI tools tailored to real business needs.',
    topics: [
      'Scoping and requirements gathering',
      'Iterative prototyping and testing',
      'Deployment, monitoring, and maintenance',
    ],
  },
];

export default function Training() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy to-teal text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-accent" size={28} />
              <span className="text-background/80 font-medium uppercase tracking-wider text-sm">
                Training &amp; Mentorship
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Learn to Build with AI — Hands On
            </h1>
            <p className="text-lg sm:text-xl text-background/90 leading-relaxed">
              Our training programs and mentorship offerings are designed to take
              you from curious beginner to confident builder. Whether you're
              learning MindStudio basics or architecting complex workflows,
              we'll meet you where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Training Program Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Training Programs
            </h2>
            <p className="text-lg text-teal leading-relaxed">
              Structured programs that blend theory with practice. Each course
              includes live sessions, hands-on projects, and ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <program.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {program.title}
                </h3>
                <p className="text-teal leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="mt-auto space-y-3">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <CheckCircle2
                        className="text-accent mt-0.5 shrink-0"
                        size={18}
                      />
                      <span className="text-sm text-navy/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Handshake className="text-accent" size={28} />
                <span className="text-teal font-medium uppercase tracking-wider text-sm">
                  Mentorship
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                1-on-1 and Team Mentorship
              </h2>
              <p className="text-lg text-teal leading-relaxed">
                Not every team learns the same way. Our mentorship programs
                offer personalized guidance — whether you need a dedicated
                advisor for your AI initiative or hands-on coaching for your
                entire team.
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated mentor matched to your goals and skill level',
                  'Flexible scheduling — weekly or bi-weekly sessions',
                  'Real-project focus: build what matters to your business',
                  'Slack or email support between sessions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Users className="text-accent mt-0.5 shrink-0" size={20} />
                    <span className="text-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-navy to-teal rounded-xl p-10 text-white flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Ready to get started?</h3>
              <p className="text-background/90 leading-relaxed">
                Whether you're an individual looking to level up or a team
                preparing to go all-in on AI, we'll build a mentorship plan
                that fits. Reach out and let's talk about your goals.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
