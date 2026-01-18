import { motion } from "framer-motion";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const ProfileCard = () => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="relative mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse-glow" />
        <img
          src={profilePlaceholder}
          alt="Junior Carvalho"
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary/50 glow-effect"
        />
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold font-display mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Junior <span className="gradient-text">Carvalho</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Estudante de Engenharia de Computação
      </motion.p>
      
      <motion.span 
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm text-primary font-medium"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        5° Período
      </motion.span>
    </motion.div>
  );
};

export default ProfileCard;
