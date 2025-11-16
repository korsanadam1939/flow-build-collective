import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Workflow, Database, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android için native performanslı, kullanıcı dostu mobil uygulamalar. Modern teknolojiler ve en iyi pratiklerle geliştirilen, her cihazda mükemmel çalışan çözümler.",
    features: ["React Native", "Flutter", "Native Development", "App Store Yayınlama", "Push Notification"]
  },
  {
    icon: Globe,
    title: "Web Uygulama & E-Ticaret",
    description: "Hızlı, güvenli ve SEO optimize modern web uygulamaları. E-ticaret platformları, kurumsal web siteleri ve SaaS çözümleri ile dijital varlığınızı güçlendiriyoruz.",
    features: ["React & Next.js", "E-Commerce Platform", "CMS Entegrasyonu", "SEO Optimizasyonu", "Responsive Design"]
  },
  {
    icon: Workflow,
    title: "İş Süreçleri Otomasyonu",
    description: "Manuel iş akışlarınızı otomatikleştirerek zamandan ve maliyetten tasarruf edin. n8n, Zapier ve özel entegrasyonlar ile verimliliği maksimize ediyoruz.",
    features: ["n8n Workflow", "API Entegrasyonu", "Otomatik Raporlama", "CRM & ERP Bağlantısı", "Email Otomasyonu"]
  },
  {
    icon: Database,
    title: "Veri Yönetimi & Analitik",
    description: "Büyük veri setlerini yönetin, analiz edin ve işlem yapılabilir içgörüler elde edin. Güvenli veri depolama, ETL süreçleri ve özel dashboard çözümleri.",
    features: ["Database Design", "Data Analytics", "Dashboard & BI", "Real-time Monitoring", "Data Migration"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Çözümleri",
    description: "Bulut altyapınızı optimize edin, ölçeklenebilir sistemler kurun. AWS, Azure ve Google Cloud üzerinde güvenli, yüksek performanslı altyapılar oluşturuyoruz.",
    features: ["Cloud Migration", "CI/CD Pipeline", "Container Orchestration", "Monitoring & Logging", "Auto Scaling"]
  },
  {
    icon: Shield,
    title: "Güvenlik & Bakım",
    description: "Uygulamalarınızın güvenliğini sağlayın, düzenli güncellemeler ve proaktif bakım ile sistemlerinizi 7/24 ayakta tutun. Siber güvenlik danışmanlığı ve penetrasyon testleri.",
    features: ["Security Audit", "24/7 Monitoring", "Backup & Recovery", "Performance Tuning", "Technical Support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
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
