import { motion } from "framer-motion";
import { Folder, ExternalLink, Github, X } from "lucide-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"; 
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import project1Img from "../assets/calc.png";
import project2Img from "../assets/sigma1.png";
import project3Img from "../assets/sigma2.png";
import project4Img from "../assets/sigma3.png";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  deployLink?: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Sigma Automóveis", 
    description: "Webpage de concessionária de veículos com catálogo.",
    images: [project4Img, project2Img, project3Img],
    githubLink: "https://github.com/JuniorCarvalho18/Projeto-SigmaAutomoveis",
    deployLink: "https://juniorcarvalho18.github.io/Projeto-SigmaAutomoveis/" 
  },
  { 
    id: 2, 
    title: "Growth Investimentos", 
    description: "Protótipo de plataforma Mobile de investimentos verdes.",
    images: ["/"],
    githubLink: "https://github.com/JuniorCarvalho18/GrowthInvestimentos",
    deployLink: "" 
  },
  { 
    id: 3, 
    title: "Calculadora Web", 
    description: "Clássico projeto de calculadora funcional na web.",
    images: [project1Img],
    githubLink: "https://github.com/JuniorCarvalho18/Projeto-Calculadora",
    deployLink: "https://juniorcarvalho18.github.io/Projeto-Calculadora/" 
  }
];

const ProjectsGrid = () => {
  return (
    <motion.section 
      className="w-full max-w-5xl mt-16 px-4"
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
            className="group relative glass-card rounded-2xl overflow-hidden border border-border/50 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {project.images && project.images.length > 0 && project.images[0] !== "/" ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden cursor-zoom-in">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md">
                        +{project.images.length - 1} fotos
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                
                <DialogContent className="[&>button]:hidden max-w-5xl w-full p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                  <DialogTitle className="sr-only">Galeria de {project.title}</DialogTitle>

                  <div className="relative w-full">
                    <Carousel 
                      opts={{
                        align: "center",
                        loop: project.images.length > 1,
                      }}
                      plugins={[WheelGesturesPlugin()]}
                      className="w-full"
                    >
                      <CarouselContent className={project.images.length > 1 ? "-ml-4" : "ml-0"}>
                        {project.images.map((img, imgIdx) => (
                          <CarouselItem 
                            key={imgIdx} 
                            className={`flex justify-center items-center ${
                              project.images.length > 1 
                                ? "pl-4 basis-[85%] md:basis-[80%]" 
                                : "pl-0 basis-full"
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`${project.title} ${imgIdx + 1}`} 
                              className="w-full h-auto max-h-[75vh] object-contain rounded-md shadow-2xl"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="bg-black/40 hover:bg-black/60 border-none text-white left-4 z-50 backdrop-blur-sm shadow-md" />
                          <CarouselNext className="bg-black/40 hover:bg-black/60 border-none text-white right-4 z-50 backdrop-blur-sm shadow-md" />
                        </>
                      )}
                    </Carousel>

                    <DialogClose className="absolute -top-12 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors z-50 backdrop-blur-sm shadow-md">
                      <X className="w-6 h-6" />
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                <Folder className="w-12 h-12 text-muted-foreground/50" />
              </div>
            )}
            
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold font-display text-lg mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> Rep
                </a>
                
                {project.deployLink && project.deployLink !== "" && (
                  <a 
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </div>

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