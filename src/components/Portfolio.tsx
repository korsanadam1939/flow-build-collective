import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Ticaret Mobil Uygulaması",
    category: "Mobil Uygulama",
    description: "React Native ile geliştirilmiş, 50K+ aktif kullanıcılı e-ticaret platformu",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Kurumsal CRM Sistemi",
    category: "Web Uygulama",
    description: "Full-stack CRM çözümü ile satış ve müşteri yönetimi",
    tags: ["React", "TypeScript", "Supabase"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Otomasyon Platformu",
    category: "n8n Automation",
    description: "100+ iş akışı ile entegre otomasyon sistemi",
    tags: ["n8n", "API Integration", "Webhooks"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "SaaS Dashboard",
    category: "Web Uygulama",
    description: "Analitik ve raporlama odaklı SaaS platformu",
    tags: ["Next.js", "Charts", "Real-time"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Fintech Mobil App",
    category: "Mobil Uygulama",
    description: "Güvenli ödeme sistemi entegreli fintech uygulaması",
    tags: ["Flutter", "Stripe", "Firebase"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Marketplace Platformu",
    category: "Full-Stack",
    description: "Alıcı-satıcı eşleştirme platformu",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-pink-500 to-rose-500"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Başarı <span className="gradient-text">Hikayelerimiz</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Müşterilerimiz için geliştirdiğimiz projelerden örnekler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-glass overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute top-4 right-4 bg-background/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>

                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
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
