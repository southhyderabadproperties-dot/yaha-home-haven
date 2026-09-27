import { motion } from "framer-motion";
import heroImg from "@/assets/investment-corridor2.jpg";

export function AnimatedPropertyHero() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <img
          src={heroImg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}