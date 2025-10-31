import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Globe, Workflow } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobil Uygulama",
      description: "iOS ve Android için native performans"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Uygulamaları",
      description: "Modern ve responsive web çözümleri"
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "n8n Otomasyon",
      description: "İş süreçlerinizi otomatikleştirin"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Quick highlights section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dijital Çözümlerinizde Yanınızdayız
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern teknolojiler ve uzman ekibimizle projelerinizi hayata geçiriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-glass hover-scale">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
