import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";

const projects = [
  { id: 1, title: "Projeto 1", description: "Descrição breve do projeto" },
  { id: 2, title: "Projeto 2", description: "Descrição breve do projeto" },
  { id: 3, title: "Projeto 3", description: "Descrição breve do projeto" },
  { id: 4, title: "Projeto 4", description: "Descrição breve do projeto" },
  { id: 5, title: "Projeto 5", description: "Descrição breve do projeto" },
  { id: 6, title: "Projeto 6", description: "Descrição breve do projeto" },
];

const ProjectsGrid = () => {
  return (
    <motion.section 
      className="w-full max-w-4xl mt-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <p className="text-muted-foreground">
          Uma seleção dos meus trabalhos e experimentos
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative glass-card rounded-2xl overflow-hidden border border-border/50 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Placeholder Image Area */}
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <Folder className="w-12 h-12 text-muted-foreground/50" />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold font-display text-lg mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-primary/10 blur-xl rounded-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsGrid;
