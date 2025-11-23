import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
          Yazılım Çözümlerinde Yeni Nesil
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
          Dijital Dönüşümde
          <br />
          Güvenilir Ortağınız
        </h1>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mobil uygulamalar, web platformları ve akıllı otomasyon çözümleriyle
          işinizi bir üst seviyeye taşıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button 
            size="lg" 
            className="text-base"
            asChild
          >
            <a 
              href="https://wa.me/905516279379?text=Merhaba%20yazılım%20hizmetleriniz%20ile%20ilgili%20bilgi%20alabilir%20miyim%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hemen Başlayın
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base"
            asChild
          >
            <Link to="/services">
              Hizmetlerimiz
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border/50">
          {[
            { value: "100+", label: "Tamamlanan Proje" },
            { value: "50+", label: "Mutlu Müşteri" },
            { value: "7/24", label: "Destek" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
