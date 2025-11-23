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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hizmetlerimiz</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern teknolojiler ve uzman ekibimizle işinizi dijital dünyada zirveye taşıyoruz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="p-6 card-glass border-primary/20 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-4 relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground relative">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 relative">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded"
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
