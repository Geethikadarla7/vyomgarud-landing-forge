import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import autonomousNav from "@/assets/autonomous-nav.jpg";
import surveillanceDrone from "@/assets/surveillance-drone.jpg";
import tacticalDrone from "@/assets/tactical-drone.jpg";

const capabilities = [
  {
    title: "Autonomous Navigation",
    description: "Advanced AI-powered flight control systems with GPS-denied navigation, obstacle avoidance, and mission planning capabilities for fully autonomous operations.",
    image: autonomousNav,
  },
  {
    title: "Surveillance & Reconnaissance",
    description: "High-resolution imaging systems with thermal and multispectral sensors for comprehensive situational awareness and intelligence gathering in any environment.",
    image: surveillanceDrone,
  },
  {
    title: "Tactical Operations",
    description: "Rugged, mission-ready platforms designed for tactical deployment with advanced communication systems and precision payload delivery capabilities.",
    image: tacticalDrone,
  },
];

const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--card-glass)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge UAV systems engineered for mission-critical operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
