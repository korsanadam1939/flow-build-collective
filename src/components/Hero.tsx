import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary-glow/15 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '1s' }}></div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/20 animate-pulse"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-sm text-primary uppercase tracking-wider font-medium">
            Yazılım Çözümlerinde Yeni Nesil
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient">Dijital Dönüşümde</span>
          <br />
          <span className="text-foreground">Güvenilir Ortağınız</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Mobil uygulamalar, web platformları ve akıllı otomasyon çözümleriyle
          işinizi bir üst seviyeye taşıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            className="text-base md:text-lg glow hover-lift px-8 py-6"
            asChild
          >
            <a
              href="https://wa.me/905516279379?text=Merhaba%20yazılım%20hizmetleriniz%20ile%20ilgili%20bilgi%20alabilir%20miyim%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hemen Başlayın
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6"
            asChild
          >
            <Link to="/hizmetler">
              Hizmetlerimiz
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto pt-12 border-t border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "100+", label: "Tamamlanan Proje" },
            { value: "50+", label: "Mutlu Müşteri" },
            { value: "7/24", label: "Destek" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover-lift"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
