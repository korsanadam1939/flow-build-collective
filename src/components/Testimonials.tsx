import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali K.",
      company: "Teknoloji Şirketi",
      role: "Yazılım Müdürü",
      content: "apexiscode ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizin üzerinde teslim ettiler.",
      rating: 5,
    },
    {
      name: "Ayşe T.",
      company: "E-Ticaret Platformu",
      role: "Kurucu Ortak",
      content: "Web uygulamamız sayesinde satışlarımız显著 olarak arttı. Profesyonel yaklaşımları ve teknik bilgileri mükemmel.",
      rating: 5,
    },
    {
      name: "Mehmet Ş.",
      company: "Otomasyon Sistemleri",
      role: "İşletme Sahibi",
      content: "n8n otomasyon sistemleri sayesinde iş süreçlerimiz çok daha verimli hale geldi. Harika bir ekip!",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/8 rounded-full blur-2xl animate-float-reverse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-orbit opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent/40 rounded-full animate-float-slow opacity-50"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto animate-pulse-glow">
            <Quote className="w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Müşterilerimiz Ne Diyor?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Projelerimizi tamamlayan mutlu müşterilerimizin görüşleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-glass border-primary/20 hover-lift group relative overflow-hidden animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-gradient-shift"></div>
              
              <CardContent className="pt-6 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary group-hover:animate-pulse" />
                  ))}
                </div>
                
                <p className="text-sm text-foreground mb-6 leading-relaxed animate-slide-up">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {/* Generic profile placeholder */}
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;