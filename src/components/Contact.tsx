import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('customers')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Mesajınız alındı!",
        description: "En kısa sürede size dönüş yapacağız.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Hata!",
        description: "Mesajınız gönderilemedi. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projeleriniz İçin <span className="gradient-text">Bize Ulaşın</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fikirlerinizi gerçeğe dönüştürelim. Size en uygun çözümü birlikte bulalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <Card className="card-glass p-6 border-primary/20 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">erdemaga1939@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-6 border-primary/20 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+90 551 627 93 79</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-6 border-primary/20 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adres</h3>
                  <p className="text-muted-foreground">İstanbul, Türkiye</p>
                </div>
              </div>
            </Card>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <h3 className="text-2xl font-bold mb-2">Ücretsiz Danışmanlık</h3>
              <p className="text-muted-foreground">
                Projeleriniz hakkında 30 dakikalık ücretsiz danışmanlık için hemen iletişime geçin.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-glass p-8 border-primary/20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Adınız Soyadınız
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Adınız Soyadınız"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Adresiniz
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@email.com"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Projeniz hakkında detaylar..."
                  required
                  rows={6}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow group"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
