import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ahmetAvatar from "@/assets/testimonial-ahmet.jpg";
import zeynepAvatar from "@/assets/testimonial-zeynep.jpg";
import mehmetAvatar from "@/assets/testimonial-mehmet.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "Tech Startup A.Ş.",
      role: "CEO",
      content: "apexiscode ile çalışmak harika bir deneyimdi. Mobil uygulamamızı zamanında ve beklentilerimizin üzerinde teslim ettiler.",
      rating: 5,
      avatar: ahmetAvatar
    },
    {
      name: "Zeynep Kaya",
      company: "E-Ticaret Pro",
      role: "Kurucu",
      content: "Web uygulamamız sayesinde satışlarımız %300 arttı. Profesyonel yaklaşımları ve teknik bilgileri mükemmel.",
      rating: 5,
      avatar: zeynepAvatar
    },
    {
      name: "Mehmet Demir",
      company: "Otomasyon Çözümleri",
      role: "İşletme Sahibi",
      content: "n8n otomasyon sistemleri sayesinde iş süreçlerimiz çok daha verimli hale geldi. Harika bir ekip!",
      rating: 5,
      avatar: mehmetAvatar
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/8 rounded-full blur-2xl animate-float-reverse"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Müşterilerimiz Ne Diyor?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projelerimizi tamamlayan mutlu müşterilerimizin görüşleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-glass border-primary/20 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full ring-2 ring-primary/20"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;