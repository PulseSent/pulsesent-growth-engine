import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Building2, ShoppingCart, Stethoscope } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import RadarPulse from "./RadarPulse";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const words = ["Your", "Business,", "Running", "Smarter", "—", "24/7"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <RadarPulse />
      <ParticleNetwork />

      <div className="max-w-4xl mx-auto relative z-10 px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight tracking-tight mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i, ease }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-10"
        >
          AI-powered systems for lead generation, follow-up, customer support, and more.
          Built for businesses ready to grow without burning out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="outline" size="lg" asChild className="border-foreground/20 text-foreground hover:bg-foreground/5">
            <a href="#services">
              See What We Do <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="mailto:ryan.pulsesent@gmail.com">
              <Zap className="mr-2 h-4 w-4" /> Book a Free Call
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Trusted by businesses in
          </p>
          <div className="flex items-center gap-6 text-muted-foreground/60">
            <div className="flex items-center gap-2 text-sm"><Building2 className="h-4 w-4" /> Agencies</div>
            <div className="flex items-center gap-2 text-sm"><ShoppingCart className="h-4 w-4" /> E-Commerce</div>
            <div className="flex items-center gap-2 text-sm"><Stethoscope className="h-4 w-4" /> Healthcare</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
