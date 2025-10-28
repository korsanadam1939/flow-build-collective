import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Workflow, Code, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar. Kullanıcı deneyimi odaklı, performanslı çözümler.",
    features: ["React Native", "Flutter", "Native iOS/Android"]
  },
  {
    icon: Globe,
    title: "Web Uygulama Geliştirme",
    description: "Modern, responsive ve hızlı web uygulamaları. SEO uyumlu, ölçeklenebilir ve güvenli çözümler.",
    features: ["React/Next.js", "Full-Stack", "E-Ticaret"]
  },
  {
    icon: Workflow,
    title: "n8n Otomasyon Çözümleri",
    description: "İş süreçlerinizi otomatikleştirin, verimliliği artırın. API entegrasyonları ve akıllı iş akışları.",
    features: ["Workflow Automation", "API Integration", "Custom Workflows"]
  },
  {
    icon: Code,
    title: "Özel Yazılım Geliştirme",
    description: "İşinize özel, sıfırdan tasarlanmış yazılım çözümleri. Tüm ihtiyaçlarınıza uygun, esnek yapı.",
    features: ["Custom Solutions", "Legacy Modernization", "MVP Development"]
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı deneyimini ön planda tutan, modern ve şık arayüz tasarımları. Brand kimliğinize uygun çözümler.",
    features: ["User Research", "Prototyping", "Design Systems"]
  },
  {
    icon: Zap,
    title: "Danışmanlık & Destek",
    description: "Teknoloji danışmanlığı ve 7/24 teknik destek. Projelerinizin her aşamasında yanınızdayız.",
    features: ["Tech Consulting", "24/7 Support", "Training"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sunduğumuz <span className="gradient-text">Hizmetler</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Her ölçekte işletme için kapsamlı yazılım çözümleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-glass p-8 hover:scale-105 transition-all duration-300 cursor-pointer group animate-slide-up border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
