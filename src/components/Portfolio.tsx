import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "FinanceFlow - Fintech Platformu",
    category: "Web & Mobil Uygulama",
    description: "Kripto para takibi, portföy yönetimi ve gerçek zamanlı piyasa analizi sunan kapsamlı fintech çözümü. 200K+ aktif kullanıcı.",
    tags: ["React Native", "Next.js", "Real-time API"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    metrics: "200K+ Kullanıcı"
  },
  {
    title: "ShopMate - AI E-Ticaret",
    category: "Full-Stack Platform",
    description: "Yapay zeka destekli ürün önerileri ve akıllı arama sistemi ile entegre modern e-ticaret platformu. Aylık 5M+ işlem.",
    tags: ["Next.js", "AI Integration", "Stripe"],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    metrics: "5M+ İşlem/Ay"
  },
  {
    title: "AutoFlow Pro - İş Otomasyonu",
    category: "n8n Automation",
    description: "500+ iş akışı, 50+ API entegrasyonu ile kurumsal düzeyde otomasyon platformu. Manuel süreçlerde %85 verimlilik artışı.",
    tags: ["n8n", "Webhooks", "Multi-API"],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    metrics: "%85 Verimlilik"
  },
  {
    title: "HealthTrack - Sağlık Yönetimi",
    category: "Mobil Uygulama",
    description: "Randevu yönetimi, hasta takibi ve elektronik reçete sistemi ile entegre hastane yönetim uygulaması.",
    tags: ["Flutter", "Firebase", "HIPAA Compliant"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    metrics: "50+ Hastane"
  },
  {
    title: "DataViz - Analytics Dashboard",
    category: "SaaS Platform",
    description: "Gerçek zamanlı veri görselleştirme, özel raporlama ve tahminsel analitik özellikleri ile enterprise dashboard.",
    tags: ["React", "D3.js", "WebSocket"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    metrics: "Real-time Data"
  },
  {
    title: "EduSpace - Eğitim Platformu",
    category: "Web Uygulama",
    description: "Canlı ders, interaktif quiz sistemi ve öğrenci takibi ile kapsamlı online eğitim platformu. 100K+ öğrenci.",
    tags: ["Next.js", "WebRTC", "LMS"],
    gradient: "from-red-500 via-pink-500 to-purple-500",
    metrics: "100K+ Öğrenci"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-glass overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-full">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold">{project.metrics}</span>
                </div>
              </div>

              <div className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>

                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
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
