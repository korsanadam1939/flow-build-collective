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
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projelerimiz</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gerçek dünya çözümleriyle işletmeleri dijital dönüşüme taşıyoruz
          </p>
        </div>
        
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="card-glass border-primary/20 rounded-lg overflow-hidden hover-lift group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-contain max-w-[300px] relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-12 space-y-6 relative">
                <div>
                  <p className="text-sm text-primary mb-3 uppercase tracking-wider font-medium">
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
                      className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-primary pt-2 font-medium">
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
