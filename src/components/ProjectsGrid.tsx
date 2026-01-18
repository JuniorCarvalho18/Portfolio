import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";

// ADICIONEI: Interface para tipar melhor os projetos (opcional, mas boa prática)
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; // Opcional: Se não tiver, mostra o ícone de pasta
  link: string;   // Obrigatório: Link para o GitHub ou Demo
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Sigma Automóveis", 
    description: "Webpage de concessionária de veículos com catálogo.",
    image: "/.jpg", // Exemplo: Coloque uma imagem com esse nome na pasta 'public'
    link: "https://github.com/JuniorCarvalho18/Projeto-SigmaAutomoveis" 
  },
  { 
    id: 2, 
    title: "Growth Investimentos", 
    description: "Protótipo de plataforma de investimentos verdes.",
    image: "/.jpg", // Exemplo: Coloque uma imagem com esse nome na pasta 'public'
    link: "https://github.com/JuniorCarvalho18/GrowthInvestimentos" 
  },
  { 
    id: 3, 
    title: "Calculadora Web", 
    description: "Clássico projeto de calculadora funcional na web.",
    image: "/public/calc.png", // Exemplo: Coloque uma imagem com esse nome na pasta 'public'
    link: "https://juniorcarvalho18.github.io/Projeto-Calculadora/" 
  }
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
          <motion.a // MUDEI: De motion.div para motion.a para ser clicável
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative glass-card rounded-2xl overflow-hidden border border-border/50 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Image Area */}
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
              
              {/* LÓGICA: Se tem imagem, mostra ela. Se não, mostra o ícone */}
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <Folder className="w-12 h-12 text-muted-foreground/50" />
              )}

              {/* Overlay Escuro (ajuda a ler o texto se a imagem for clara) */}
              {project.image && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              )}
            </div>
            
            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold font-display text-lg mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                {project.title}
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-primary/10 blur-xl rounded-2xl" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsGrid;