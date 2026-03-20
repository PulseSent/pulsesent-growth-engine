import { motion } from "framer-motion";
import { Target, RefreshCcw, MessageSquare, Settings, BarChart3, Rocket } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Automated pipelines that find and capture your ideal customers.",
    bestFor: "Agencies, coaches, B2B services",
  },
  {
    icon: RefreshCcw,
    title: "Follow-Up Automation",
    desc: "Never lose a lead again. Smart sequences that nurture and convert.",
    bestFor: "Sales teams, service businesses",
  },
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    desc: "24/7 AI that answers questions, handles objections, and books appointments.",
    bestFor: "E-commerce, clinics, local businesses",
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    desc: "Connect your tools and eliminate repetitive tasks.",
    bestFor: "Operations-heavy businesses",
  },
  {
    icon: BarChart3,
    title: "CRM Integration",
    desc: "Get your data working for you across every platform.",
    bestFor: "Businesses with messy or manual tracking",
  },
  {
    icon: Rocket,
    title: "Custom AI Solutions",
    desc: "Have a unique problem? We'll build the solution.",
    bestFor: "Everyone",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What We <span className="text-gradient-teal">Build For You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every system is custom-built for your business. No templates, no cookie-cutter solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">{s.desc}</p>
              <span className="text-xs font-medium text-secondary border border-secondary/30 rounded-full px-3 py-1 w-fit">
                Best for: {s.bestFor}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
