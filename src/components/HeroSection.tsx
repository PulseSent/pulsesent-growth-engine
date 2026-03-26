import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Play } from "lucide-react";
import ParticleNetwork from "./ParticleNetwork";
import RadarPulse from "./RadarPulse";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const phrases = [
  "We help law firms capture",
  "and convert more clients",
  "using AI",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <RadarPulse />
      <ParticleNetwork />

      <div className="max-w-5xl mx-auto relative z-10 px-6 pt-24 pb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight mb-8">
          {phrases.map((phrase, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * i, ease }}
              className="block"
            >
              {phrase}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10"
        >
          Most law firms lose potential clients due to slow response times and missed responses. We build AI systems that instantly respond, qualify prospects, and help you book more consultations automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button variant="outline" size="lg" asChild className="border-foreground/20 text-foreground hover:bg-foreground/5">
            <a href="#demo">
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="https://calendly.com/ryan-pulsesent/pulsesent-ai-strategy-call" target="_blank" rel="noopener noreferrer">
              <Zap className="mr-2 h-4 w-4" /> Book a Free Consultation
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease }}
          className="mb-10 mx-auto max-w-2xl aspect-video rounded-lg border border-foreground/10 bg-foreground/5 flex items-center justify-center cursor-pointer hover:bg-foreground/10 transition-colors"
          id="demo"
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <div className="w-16 h-16 rounded-full border-2 border-muted-foreground/40 flex items-center justify-center">
              <Play className="h-7 w-7 ml-1" />
            </div>
            <span className="text-sm">Demo Video Coming Soon</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3, ease }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest px-4 text-center leading-relaxed">
            Built specifically for law firms looking to grow without hiring more staff
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
