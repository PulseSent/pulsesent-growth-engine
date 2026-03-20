import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Building2, ShoppingCart, Stethoscope } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-secondary/8 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold leading-tight tracking-tight mb-6">
            We Build <span className="text-gradient-teal">AI Systems</span>
            <br />
            That Run Your Business
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-10"
        >
          Done-for-you automations for lead gen, follow-up, support, and operations.
          So you can focus on growth, not grunt work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="outline" size="lg" asChild className="border-primary/50 text-primary hover:bg-primary/10">
            <a href="#services">
              See What We Do <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="#contact">
              <Zap className="mr-2 h-4 w-4" /> Book a Free Call
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Trusted by businesses in
          </p>
          <div className="flex items-center gap-6 text-muted-foreground/60">
            <div className="flex items-center gap-2 text-sm">
              <Building2 className="h-4 w-4" /> Agencies
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShoppingCart className="h-4 w-4" /> E-Commerce
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Stethoscope className="h-4 w-4" /> Healthcare
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
