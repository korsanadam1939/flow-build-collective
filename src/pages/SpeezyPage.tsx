import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Gamepad2, Award } from "lucide-react";
import storyReadingImage from "@/assets/speezy-story-reading.png";
import roleplayGameImage from "@/assets/speezy-roleplay-game.png";
import wordGameImage from "@/assets/speezy-word-game.png";
import wordRepeatImage from "@/assets/speezy-word-repeat.png";
import logo from "@/assets/logo.png";

const SpeezyPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Hikaye Okuma",
      description: "Seviyene göre özel İngilizce hikayeler. Kelimelere basarak anlamlarını anında öğren.",
      image: storyReadingImage,
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Rol Oyunu",
      description: "Karakterini seç ve hikayenin içinde yeralarak İngilizce pratik yap.",
      image: roleplayGameImage,
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Kelime Oyunu",
      description: "Biliyorum/Bilmiyorum seçenekleriyle kelime çalış. Kelimeleri kaydet ve sonra tekrar et.",
      image: wordGameImage,
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Kelime Kurdu",
      description: "Ekran yarıya bölünür. Türkçe kelimenin İngilizce karşılığını bul ve seç.",
      image: wordRepeatImage,
    },
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden">
        {/* Animated code blocks background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {/* Falling code blocks - left side */}
          <div className="absolute top-0 left-[10%] w-1 h-20 bg-primary rounded animate-code-fall" style={{ animationDelay: "0s", animationDuration: "3s" }}></div>
          <div className="absolute top-0 left-[20%] w-1 h-16 bg-primary/70 rounded animate-code-fall" style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}></div>
          <div className="absolute top-0 left-[30%] w-1 h-24 bg-primary/80 rounded animate-code-fall" style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
          
          {/* Falling code blocks - center */}
          <div className="absolute top-0 left-[45%] w-1 h-18 bg-primary/60 rounded animate-code-fall" style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}></div>
          <div className="absolute top-0 left-[55%] w-1 h-22 bg-primary rounded animate-code-fall" style={{ animationDelay: "1.2s", animationDuration: "3.8s" }}></div>
          
          {/* Falling code blocks - right side */}
          <div className="absolute top-0 right-[10%] w-1 h-20 bg-primary/70 rounded animate-code-fall" style={{ animationDelay: "0.7s", animationDuration: "3.3s" }}></div>
          <div className="absolute top-0 right-[20%] w-1 h-16 bg-primary rounded animate-code-fall" style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}></div>
          <div className="absolute top-0 right-[30%] w-1 h-24 bg-primary/80 rounded animate-code-fall" style={{ animationDelay: "0.2s", animationDuration: "3.6s" }}></div>
          
          {/* Additional scattered blocks */}
          <div className="absolute top-0 left-[15%] w-1 h-14 bg-primary/50 rounded animate-code-fall" style={{ animationDelay: "2s", animationDuration: "3.9s" }}></div>
          <div className="absolute top-0 left-[65%] w-1 h-18 bg-primary/60 rounded animate-code-fall" style={{ animationDelay: "0.8s", animationDuration: "3.4s" }}></div>
          <div className="absolute top-0 left-[75%] w-1 h-20 bg-primary/70 rounded animate-code-fall" style={{ animationDelay: "1.8s", animationDuration: "4.1s" }}></div>
        </div>

        {/* Main content */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
        </div>
      </div>
    );
  }

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
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <img 
                src={logo} 
                alt="Speezy Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain hover-scale"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Speezy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            İngilizce öğrenmenin en eğlenceli yolu. Hikayeler, oyunlar ve daha fazlasıyla seviyeni yükselt.
          </p>
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
                  {/* Direct Image Display without Phone Frame */}
                  <div className="overflow-hidden rounded-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML += `<div class="flex flex-col items-center justify-center gap-4 p-8 text-center bg-card rounded-2xl">
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
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeezyPage;
