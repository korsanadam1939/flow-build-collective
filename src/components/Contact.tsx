import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/8 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projeleriniz İçin Bize Ulaşın</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fikirlerinizi gerçeğe dönüştürelim. Size en uygun çözümü birlikte bulalım.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 card-glass border-primary/20 hover-lift group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">erdemaga1939@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 card-glass border-primary/20 hover-lift group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 text-foreground">Telefon</h3>
                  <p className="text-sm text-muted-foreground">+90 551 627 93 79</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 card-glass border-primary/20 hover-lift group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 text-foreground">Adres</h3>
                  <p className="text-sm text-muted-foreground">İstanbul, Türkiye</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glass border-primary/20 bg-gradient-to-br from-primary/10 to-transparent md:col-span-2">
              <h3 className="text-base font-bold mb-2 text-foreground">Ücretsiz Danışmanlık</h3>
              <p className="text-sm text-muted-foreground">
                Projeleriniz hakkında 30 dakikalık ücretsiz danışmanlık için hemen iletişime geçin.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
