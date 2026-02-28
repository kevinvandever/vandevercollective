import { Target, Cpu, Workflow, GraduationCap } from 'lucide-react';

const expertise = [
  {
    icon: Cpu,
    title: 'MindStudio Development',
    description:
      'Certified experts building custom AI agents and tools on the MindStudio platform to solve real business challenges.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Designing intelligent automation pipelines that integrate AI into your existing systems using Make, Zapier, and custom solutions.',
  },
  {
    icon: GraduationCap,
    title: 'Technical Training',
    description:
      'Hands-on mentorship and training programs that empower your team to build, deploy, and maintain AI solutions independently.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Mission Statement Section */}
      <section className="bg-gradient-to-br from-navy to-teal text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Target className="text-accent" size={28} />
              <span className="text-background/80 font-medium uppercase tracking-wider text-sm">
                Our Mission
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Making AI Accessible and Actionable
            </h1>
            <p className="text-lg sm:text-xl text-background/90 leading-relaxed">
              At Vandever Collective, we believe AI should be a practical tool —
              not a buzzword. Our mission is to bridge the gap between
              cutting-edge AI technology and the businesses that need it most. We
              partner with organizations to build custom AI solutions, automate
              complex workflows, and train teams to thrive in an AI-driven
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Team & Expertise Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What We Bring to the Table
            </h2>
            <p className="text-lg text-teal leading-relaxed">
              Our team combines deep technical expertise with a passion for
              teaching. We don't just build — we empower you to own your AI
              journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-teal leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
