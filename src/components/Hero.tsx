import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, Zap, Code, Globe } from "lucide-react";
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
        
        {/* New floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-orbit opacity-70"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full animate-orbit opacity-60" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <p className="text-sm text-foreground uppercase tracking-wider font-medium">
            Yazılım Çözümlerinde Yeni Nesil
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-gradient animate-gradient-shift">Dijital Dönüşümde</span>
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
            className="text-base md:text-lg glow hover-lift px-8 py-6 animate-beat"
            asChild
          >
            <a
              href="https://wa.me/905516279379?text=Merhaba%20yazılım%20hizmetleriniz%20ile%20ilgili%20bilgi%20alabilir%20miyim%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hemen Başlayın
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 animate-tilt"
            asChild
          >
            <Link to="/hizmetler">
              Hizmetlerimiz
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto pt-12 border-t border-primary/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "100+", label: "Tamamlanan Proje", icon: <Code className="w-5 h-5" /> },
            { value: "50+", label: "Mutlu Müşteri", icon: <Globe className="w-5 h-5" /> },
            { value: "7/24", label: "Destek", icon: <Rocket className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover-lift"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:animate-pulse-glow-strong">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300 animate-count-up">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating action icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
          <ArrowRight className="w-5 h-5 text-primary rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;