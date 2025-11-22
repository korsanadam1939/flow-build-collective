import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone } from "lucide-react";
import mobileAppMockup from "@/assets/mobile-app-mockup.png";

const projects = [
  {
    title: "Rol Oyunu Mobil Uygulaması",
    category: "Mobil Uygulama",
    description: "İnteraktif hikaye anlatımı ve karakter geliştirme özellikleri ile zengin bir rol yapma oyunu deneyimi. Kullanıcılar karakterlerini özelleştirebilir ve kendi maceralarını yaratabilir.",
    tags: ["React Native", "Firebase", "Game Design", "AI Integration"],
    image: mobileAppMockup,
    metrics: "iOS & Android"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="bg-card border border-border/50 rounded-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex items-center justify-center bg-muted/20 p-12">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-contain max-w-[300px]"
                />
              </div>

              <div className="flex flex-col justify-center p-12 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                    {project.category}
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted/50 text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-foreground pt-2">
                  <Smartphone className="w-4 h-4" />
                  <span>{project.metrics}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
