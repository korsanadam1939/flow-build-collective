import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Gamepad2, Award } from "lucide-react";

const SpeezyPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Hikaye Okuma",
      description: "Seviyene göre özel İngilizce hikayeler. Kelimelere basarak anlamlarını anında öğren.",
      image: "/placeholder-story.jpg",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Rol Oyunu",
      description: "Karakterini seç ve hikayenin içinde yeralarak İngilizce pratik yap.",
      image: "/placeholder-roleplay.jpg",
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Kelime Oyunu",
      description: "Biliyorum/Bilmiyorum seçenekleriyle kelime çalış. Kelimeleri kaydet ve sonra tekrar et.",
      image: "/placeholder-words.jpg",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Kelime Kurdu",
      description: "Ekran yarıya bölünür. Türkçe kelimenin İngilizce karşılığını bul ve seç.",
      image: "/placeholder-match.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #b1d402 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #b1d402 0%, transparent 70%)',
            animation: 'float-reverse 10s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient">
            Speezy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            İngilizce öğrenmenin en eğlenceli yolu. Hikayeler, oyunlar ve daha fazlasıyla seviyeni yükselt.
          </p>
          <Button size="lg" className="glow">
            Hemen İndir
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 mb-32 last:mb-0`}
            >
              {/* Phone Mockup */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative w-[280px] h-[570px] bg-card border-8 border-border rounded-[3rem] shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-background rounded-b-3xl z-10" />
                    
                    {/* Screen Content - Placeholder for user's image */}
                    <div className="absolute inset-4 top-10 bg-muted rounded-3xl flex items-center justify-center overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML += `<div class="flex flex-col items-center justify-center gap-4 p-8 text-center">
                              ${feature.icon.props.children ? 
                                `<div class="text-primary">${feature.icon.props.children}</div>` : 
                                ''
                              }
                              <p class="text-muted-foreground text-sm">Ekran görüntüsü buraya gelecek</p>
                            </div>`;
                          }
                        }}
                      />
                    </div>
                    
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-muted-foreground/30 rounded-full" />
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-[3rem] blur-2xl opacity-30 -z-10"
                    style={{ background: '#b1d402' }}
                  />
                </div>
              </div>

              {/* Feature Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <Card className="card-glass p-12 text-center hover-lift">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hemen Başla
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Speezy ile İngilizce öğrenmeye bugün başla. Eğlenceli ve etkili yöntemlerle seviyeni yükselt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow">
                App Store'dan İndir
              </Button>
              <Button size="lg" variant="outline">
                Google Play'den İndir
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeezyPage;
