import { motion } from "framer-motion";
import heroImg from "@/assets/south-hyderabad-hero.jpg";

export function AnimatedPropertyHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
    </div>
  );
}