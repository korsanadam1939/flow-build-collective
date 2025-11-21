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
    <section id="portfolio" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-glass overflow-hidden max-w-4xl w-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500 rounded-2xl p-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-contain max-w-[600px]"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                    
                    <h3 className="text-3xl font-bold mb-4 gradient-text">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold pt-4">
                    <Smartphone className="w-5 h-5" />
                    <span>{project.metrics}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
