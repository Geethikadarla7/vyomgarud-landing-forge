import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About VyomGarud
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              VyomGarud stands at the forefront of unmanned aerial vehicle technology, delivering cutting-edge solutions for defense and strategic operations. Our systems combine advanced autonomous capabilities with military-grade reliability.
            </p>
            <p>
              With a focus on precision engineering and innovative design, we develop UAV platforms that excel in the most demanding environments. Our commitment to excellence ensures superior performance, from reconnaissance missions to tactical operations.
            </p>
            <p>
              Powered by state-of-the-art artificial intelligence and robust flight control systems, VyomGarud drones redefine what's possible in aerial intelligence and autonomous navigation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
