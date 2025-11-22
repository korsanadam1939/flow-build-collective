import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-3">apexiscode</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Modern teknolojiler ile işinizi dijital dünyada zirveye taşıyoruz. 
              Mobil, web ve otomasyon çözümlerinde uzman ekip.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-foreground transition-colors">
                  Projelerimiz
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
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
                className="w-8 h-8 flex items-center justify-center border border-border/50 rounded hover:border-border transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center border border-border/50 rounded hover:border-border transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center border border-border/50 rounded hover:border-border transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} apexiscode. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
