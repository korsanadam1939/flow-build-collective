import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Workflow, Code, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformları için enterprise düzeyinde mobil çözümler. Kullanıcı deneyimi odaklı, yüksek performanslı ve güvenli uygulamalar geliştiriyoruz.",
    features: ["React Native", "Flutter", "Swift & Kotlin", "Cross-Platform", "Native Performance"]
  },
  {
    icon: Globe,
    title: "Web Uygulama Geliştirme",
    description: "Modern teknolojiler kullanarak responsive, hızlı ve SEO optimize web uygulamaları. Ölçeklenebilir mimari ve güvenli altyapı ile işinizi dijital dünyada öne çıkarıyoruz.",
    features: ["React & Next.js", "TypeScript", "Full-Stack Development", "E-Commerce", "Progressive Web Apps"]
  },
  {
    icon: Workflow,
    title: "İş Süreçleri Otomasyonu",
    description: "n8n ve özel otomasyon çözümleriyle iş süreçlerinizi dijitalleştirin. Tekrarlayan görevleri otomatikleştirerek ekibinizin verimliliğini artırın ve maliyetleri düşürün.",
    features: ["Workflow Automation", "API Entegrasyonu", "Veri Senkronizasyonu", "Özel İş Akışları", "CRM Entegrasyonu"]
  },
  {
    icon: Code,
    title: "Özel Yazılım Geliştirme",
    description: "İşinizin benzersiz ihtiyaçlarına özel, sıfırdan tasarlanmış yazılım çözümleri. Esnek mimari ve modern teknolojiler ile geleceğe hazır sistemler kuruyoruz.",
    features: ["Özel Çözümler", "Legacy Modernizasyonu", "MVP Geliştirme", "API Development", "Mikroservis Mimarisi"]
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı araştırması ve veri odaklı tasarım yaklaşımı ile markanıza özel, modern ve kullanıcı dostu arayüzler tasarlıyoruz. Dönüşüm odaklı deneyimler yaratıyoruz.",
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing", "Brand Identity"]
  },
  {
    icon: Zap,
    title: "Teknoloji Danışmanlığı",
    description: "Dijital dönüşüm yolculuğunuzda stratejik teknoloji danışmanlığı ve 7/24 teknik destek. Projelerinizin her aşamasında yanınızdayız.",
    features: ["Tech Consulting", "Mimari Tasarım", "24/7 Support", "Eğitim & Workshop", "Performans Optimizasyonu"]
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
                className="card-glass p-8 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group animate-slide-up border-primary/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
