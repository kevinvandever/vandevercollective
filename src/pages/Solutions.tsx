import { Workflow, Cpu, Plug, CheckCircle2, Lightbulb } from 'lucide-react';

const solutions = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Streamline your operations with intelligent automation pipelines that connect your tools, eliminate repetitive tasks, and let your team focus on what matters.',
    benefits: [
      'End-to-end process automation with Make and Zapier',
      'Custom triggers and conditional logic',
      'Real-time monitoring and error handling',
    ],
  },
  {
    icon: Cpu,
    title: 'Custom AI Tools',
    description:
      'Purpose-built AI agents and tools designed around your unique business needs — from content generation to data analysis and customer support.',
    benefits: [
      'Tailored MindStudio agents for your use case',
      'Fine-tuned prompts and model selection',
      'Scalable deployment and maintenance',
    ],
  },
  {
    icon: Plug,
    title: 'Integration Services',
    description:
      'Connect AI capabilities to your existing tech stack seamlessly. We bridge the gap between your current systems and the AI tools that supercharge them.',
    benefits: [
      'API design and third-party integrations',
      'Data pipeline setup and orchestration',
      'Legacy system modernization with AI layers',
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy to-teal text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Lightbulb className="text-accent" size={28} />
              <span className="text-background/80 font-medium uppercase tracking-wider text-sm">
                Our Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              AI Solutions That Work for You
            </h1>
            <p className="text-lg sm:text-xl text-background/90 leading-relaxed">
              We help businesses harness the power of AI through practical,
              results-driven solutions. Whether you need to automate workflows,
              build custom tools, or integrate AI into your existing systems —
              we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Offering Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <solution.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {solution.title}
                </h3>
                <p className="text-teal leading-relaxed mb-6">
                  {solution.description}
                </p>
                <ul className="mt-auto space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2
                        className="text-accent mt-0.5 shrink-0"
                        size={18}
                      />
                      <span className="text-sm text-navy/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
