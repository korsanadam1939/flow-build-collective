import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-12 bg-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-3">
              <span className="text-gradient">apexiscode</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Modern teknolojiler ile işinizi dijital dünyada zirveye taşıyoruz. 
              Mobil, web ve otomasyon çözümlerinde uzman ekip.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Projelerimiz
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Sosyal Medya</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center border border-primary/30 rounded hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-primary/20 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} apexiscode. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
