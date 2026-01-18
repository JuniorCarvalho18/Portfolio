import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import skyNight from "@/assets/sky-night.jpg";
import skyDay from "@/assets/sky-day.jpg";

const SkyBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={theme === "dark" ? skyNight : skyDay}
            alt="Sky background"
            className="w-full h-full object-cover"
          />
          {/* Blur overlay for readability */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-background/30" />
        </motion.div>
      </AnimatePresence>
      
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
};

export default SkyBackground;
