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
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 origin-top"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />
              
              {/* Circle on the line */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border border-foreground/20 flex items-center justify-center z-10">
                <step.icon className="h-5 w-5 text-foreground/60" />
              </div>

              <div className="flex-1 pl-20 md:pl-0">
                <span className="text-5xl font-display font-extrabold text-foreground/5 leading-none">
                  {step.num}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
