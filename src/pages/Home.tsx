import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Workflow, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mobileAppMockup from "@/assets/mobile-app-mockup.png";
import webAppMockup from "@/assets/web-app-mockup.png";
import automationMockup from "@/assets/automation-mockup.png";

const Home = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobil Uygulama",
      description: "iOS ve Android için native performans",
      image: mobileAppMockup
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Uygulamaları",
      description: "Modern ve responsive web çözümleri",
      image: webAppMockup
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "n8n Otomasyon",
      description: "İş süreçlerinizi otomatikleştirin",
      image: automationMockup
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Quick highlights section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Link to="/hizmetler" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text cursor-pointer">
                Hizmetlerimiz
              </h2>
            </Link>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Modern teknolojiler ve uzman ekibimizle projelerinizi hayata geçiriyoruz. 
              İnovatif çözümlerimizle işinizi geleceğe taşıyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="card-glass hover-scale group border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">{item.icon}</div>
                  <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                {item.image && (
                  <CardContent className="pt-0">
                    <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/hizmetler">
              <Button size="lg" className="group">
                Tüm Hizmetleri Görüntüle
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Additional Features Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Hızlı Teslimat", desc: "Zamanında teslim" },
              { title: "Modern Stack", desc: "Son teknolojiler" },
              { title: "SEO Optimize", desc: "Arama motorlarında üst sıralarda" },
              { title: "Mobil Uyumlu", desc: "Tüm cihazlarda mükemmel" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="text-2xl font-bold text-primary mb-2">✓</div>
                <div className="font-semibold mb-1">{feature.title}</div>
                <div className="text-sm text-muted-foreground">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Home;
