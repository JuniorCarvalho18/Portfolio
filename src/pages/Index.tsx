import { motion } from "framer-motion";
import ProfileCard from "@/components/ProfileCard";
import SocialLinks from "@/components/SocialLinks";
import ProjectsGrid from "@/components/ProjectsGrid";
import ThemeToggle from "@/components/ThemeToggle";
import SkyBackground from "@/components/SkyBackground";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Sky Background with Theme Switch */}
      <SkyBackground />
      
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.section 
          className="flex flex-col items-center gap-10 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileCard />
          <SocialLinks />
        </motion.section>

        {/* Projects Section */}
        <ProjectsGrid />

        {/* Footer */}
        <motion.footer 
          className="mt-20 pb-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p>
            Feito por Junior Carvalho
          </p>
          <p className="text-xs mt-1 opacity-60">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
