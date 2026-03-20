import { motion } from "framer-motion";
import { Target, RefreshCcw, MessageSquare, Settings, BarChart3, Rocket } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const services = [
  { icon: Target, title: "Lead Generation", desc: "Automated pipelines that find and capture your ideal customers.", bestFor: "Agencies, coaches, B2B services" },
  { icon: RefreshCcw, title: "Follow-Up Automation", desc: "Never lose a lead again. Smart sequences that nurture and convert.", bestFor: "Sales teams, service businesses" },
  { icon: MessageSquare, title: "AI Customer Support", desc: "24/7 AI that answers questions, handles objections, and books appointments.", bestFor: "E-commerce, clinics, local businesses" },
  { icon: Settings, title: "Workflow Automation", desc: "Connect your tools and eliminate repetitive tasks.", bestFor: "Operations-heavy businesses" },
  { icon: BarChart3, title: "CRM Integration", desc: "Get your data working for you across every platform.", bestFor: "Businesses with messy or manual tracking" },
  { icon: Rocket, title: "Custom AI Solutions", desc: "Have a unique problem? We'll build the solution.", bestFor: "Everyone" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What We Build For You</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every system is custom-built for your business. No templates, no cookie-cutter solutions.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="glow-card p-6 flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-6 w-6 text-foreground/70" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">{s.desc}</p>
              <span className="text-xs font-medium text-muted-foreground border border-foreground/10 rounded-full px-3 py-1 w-fit">
                Best for: {s.bestFor}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
