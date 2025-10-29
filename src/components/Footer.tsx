import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">ngn digital</h3>
            <p className="text-muted-foreground max-w-md">
              Modern teknolojiler ile işinizi dijital dünyada zirveye taşıyoruz. 
              Mobil, web ve otomasyon çözümlerinde uzman ekip.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-muted-foreground">
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
            <h4 className="font-semibold mb-4">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <p>&copy; {currentYear} ngn digital. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
