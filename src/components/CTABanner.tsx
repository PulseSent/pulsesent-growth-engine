import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="max-w-3xl mx-auto relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to put your growth on{" "}
            <span className="text-gradient-teal">autopilot?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's talk about your business and find the smartest way to grow — no pressure, no pitch.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              <Zap className="mr-2 h-4 w-4" /> Book Your Free Strategy Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
