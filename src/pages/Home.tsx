import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Workflow, ArrowRight, Zap, Shield, Rocket, Clock, CheckCircle2, Code2, Palette, Target } from "lucide-react";
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

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float-reverse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-float-reverse" style={{ animationDuration: '6s' }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Rocket className="w-4 h-4 text-primary animate-bounce" style={{ animationDuration: '1s' }} />
              <span className="text-sm text-primary font-medium">ÖZEL ÇÖZÜMLER</span>
            </div>
            <Link to="/hizmetler" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient cursor-pointer animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Hizmetlerimiz
              </h2>
            </Link>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Modern teknolojiler ve uzman ekibimizle projelerinizi hayata geçiriyoruz.
              İnovatif çözümlerimizle işinizi geleceğe taşıyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="card-glass hover-lift group border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden relative animate-bounce-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardHeader className="relative z-10">
                  <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
                {item.image && (
                  <CardContent className="pt-0 relative z-10">
                    <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4 group-hover:border-primary/40 transition-colors">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 relative z-10"
                      />
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Link to="/hizmetler">
              <Button size="lg" className="group glow px-8 py-6 text-lg">
                Tüm Hizmetleri Görüntüle
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Additional Features Grid */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "Hızlı Teslimat", desc: "Zamanında teslim" },
              { icon: <Code2 className="w-6 h-6" />, title: "Modern Stack", desc: "Son teknolojiler" },
              { icon: <Target className="w-6 h-6" />, title: "SEO Optimize", desc: "Arama motorlarında üst sıralarda" },
              { icon: <Palette className="w-6 h-6" />, title: "Mobil Uyumlu", desc: "Tüm cihazlarda mükemmel" }
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-card/30 border border-primary/10 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 hover-lift animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:animate-spin-slow">
                  {feature.icon}
                </div>
                <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors group-hover:animate-pulse">{feature.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</div>
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
