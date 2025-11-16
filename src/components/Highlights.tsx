import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Cpu, Target } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Military-Grade Engineering",
    description: "Built to withstand the harshest operational environments with uncompromising reliability and durability.",
  },
  {
    icon: Cpu,
    title: "Autonomous Navigation Systems",
    description: "State-of-the-art AI algorithms enable fully autonomous flight operations with advanced decision-making capabilities.",
  },
  {
    icon: Target,
    title: "High-Precision Aerial Intelligence",
    description: "Advanced sensor fusion and real-time data processing deliver unparalleled situational awareness and targeting accuracy.",
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Why Choose VyomGarud
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unmatched excellence in unmanned aerial systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-glow">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
