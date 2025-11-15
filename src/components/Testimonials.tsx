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
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projelerimizi tamamlayan mutlu müşterilerimizin görüşleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-glass hover-scale">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
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