import { motion } from "framer-motion";
import { Bot, Mail, Globe, Database, ArrowRight, Zap, MessageSquare, CalendarCheck } from "lucide-react";

interface AutomationNode {
  icon: React.ElementType;
  label: string;
  color: string;
}

interface AutomationFlow {
  title: string;
  description: string;
  nodes: AutomationNode[];
}

const flows: AutomationFlow[] = [
  {
    title: "Lead Capture → Qualification → Booking",
    description: "A visitor fills out your form. AI qualifies them instantly, sends a personalized follow-up, and books a call — all in under 60 seconds.",
    nodes: [
      { icon: Globe, label: "Website Form", color: "bg-primary/20 text-primary" },
      { icon: Bot, label: "AI Qualifier", color: "bg-secondary/20 text-secondary" },
      { icon: Mail, label: "Email Sequence", color: "bg-primary/20 text-primary" },
      { icon: CalendarCheck, label: "Auto-Book Call", color: "bg-secondary/20 text-secondary" },
    ],
  },
  {
    title: "Support Ticket → AI Response → Escalation",
    description: "Customer messages come in 24/7. AI handles the common ones, escalates the complex ones, and logs everything to your CRM.",
    nodes: [
      { icon: MessageSquare, label: "Incoming Chat", color: "bg-primary/20 text-primary" },
      { icon: Bot, label: "AI Agent", color: "bg-secondary/20 text-secondary" },
      { icon: Zap, label: "Auto-Resolve", color: "bg-primary/20 text-primary" },
      { icon: Database, label: "CRM Log", color: "bg-secondary/20 text-secondary" },
    ],
  },
];

const AutomationsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Automations in <span className="text-gradient-teal">Action</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Here's what real workflows look like — built on platforms like Make.com and n8n, tailored to your business.
          </p>
        </motion.div>

        <div className="space-y-12">
          {flows.map((flow, fi) => (
            <motion.div
              key={flow.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: fi * 0.15 }}
              className="glow-card p-6 md:p-8"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {flow.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
                {flow.description}
              </p>

              {/* Flow visualization */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between">
                {flow.nodes.map((node, ni) => (
                  <div key={node.label} className="flex items-center gap-3 sm:gap-0">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: fi * 0.15 + ni * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className={`w-14 h-14 rounded-xl ${node.color} flex items-center justify-center border border-border`}>
                        <node.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs text-muted-foreground text-center whitespace-nowrap">
                        {node.label}
                      </span>
                    </motion.div>
                    {ni < flow.nodes.length - 1 && (
                      <ArrowRight className="hidden sm:block h-4 w-4 text-primary/40 mx-4 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationsSection;
