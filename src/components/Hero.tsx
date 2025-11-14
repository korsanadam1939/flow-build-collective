import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#d4ff00 1px, transparent 1px), linear-gradient(90deg, #d4ff00 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.1
          }} />
        </div>
        
        {/* Animated Code Blocks */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary/20 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-primary/25 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-2 border-primary/30 rounded-lg animate-float" style={{ animationDelay: '0.5s' }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Yazılım Çözümlerinde Yeni Nesil</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Dijital Dönüşümde
          <br />
          <span className="gradient-text">Güvenilir Ortağınız</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mobil uygulamalar, web platformları ve akıllı otomasyon çözümleriyle
          işinizi bir üst seviyeye taşıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 glow group"
            onClick={scrollToContact}
          >
            Hemen Başlayın
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary/50 hover:bg-primary/10"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hizmetlerimiz
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          {[
            { value: "100+", label: "Tamamlanan Proje" },
            { value: "50+", label: "Mutlu Müşteri" },
            { value: "7/24", label: "Destek" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
