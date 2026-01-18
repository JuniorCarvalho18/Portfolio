import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const links = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/laércio-c-de-carvalho-junior-8b27a1195",
    icon: Linkedin,
    color: "hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50",
  },
  {
    name: "GitHub",
    url: "https://github.com/JuniorCarvalho18",
    icon: Github,
    color: "hover:bg-muted hover:border-foreground/30",
  },
  {
    name: "Email",
    url: "laerciojrcarvalho18@outlook.com",
    icon: Mail,
    color: "hover:bg-primary/20 hover:border-primary/50",
  },
];

const SocialLinks = () => {
  const { toast } = useToast();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
    if (link.name === "Email") {
      e.preventDefault();
      navigator.clipboard.writeText(link.url);
      toast({
        title: "Email copiado!",
        description: "O endereço foi salvo na área de transferência.",
      });
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-3 w-full max-w-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center mb-2">
        Conecte-se
      </h3>
      
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.name === "Email" ? "#" : link.url}
          target={link.name === "Email" ? undefined : "_blank"}
          rel={link.name === "Email" ? undefined : "noopener noreferrer"}
          onClick={(e) => handleLinkClick(e, link)}
          className={`flex items-center gap-4 px-5 py-3.5 rounded-xl glass-card border border-border/50 transition-all duration-300 ${link.color} cursor-pointer`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <link.icon className="w-5 h-5 text-primary" />
          <span className="font-medium">{link.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;