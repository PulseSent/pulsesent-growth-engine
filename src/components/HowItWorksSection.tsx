import { motion } from "framer-motion";
import { Headphones, Wrench, TrendingUp } from "lucide-react";

const steps = [
  { icon: Headphones, title: "We Listen", desc: "Free discovery call to understand your business and goals.", num: "01" },
  { icon: Wrench, title: "We Build", desc: "Custom AI systems designed specifically for your workflow.", num: "02" },
  { icon: TrendingUp, title: "You Grow", desc: "Launch, monitor, and scale — we handle the tech, you handle the results.", num: "03" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            How It <span className="text-gradient-teal">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center flex flex-col items-center gap-4"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-display font-bold text-secondary bg-card border border-border rounded-full w-7 h-7 flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
