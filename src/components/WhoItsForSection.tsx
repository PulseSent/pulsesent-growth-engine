import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const greatFit = [
  "Service-based businesses looking to scale",
  "Growing teams that need smarter workflows",
  "Sales-driven companies losing leads to slow follow-up",
  "Founders tired of doing everything manually",
  "Businesses ready to invest in long-term growth",
];

const notYet = [
  "Not ready to commit to implementation",
  "Looking for the cheapest possible option",
  "Not open to changing current processes",
];

const WhoItsForSection = () => {
  return (
    <section id="who-its-for" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Not every business is the same.{" "}
            <span className="text-gradient-teal">That's the point.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-card p-8"
          >
            <h3 className="text-lg font-display font-bold text-primary mb-6">
              You're a great fit if…
            </h3>
            <ul className="space-y-4">
              {greatFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glow-card p-8 border-secondary/20"
          >
            <h3 className="text-lg font-display font-bold text-secondary mb-6">
              We might not be the right fit yet…
            </h3>
            <ul className="space-y-4">
              {notYet.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="h-5 w-5 text-secondary/60 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              We believe in honesty. If you're not ready today, that's okay — we'll be here when you are.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
