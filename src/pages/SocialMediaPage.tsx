import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Youtube,
  Film,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Zap,
  Play,
  ArrowRight
} from "lucide-react";

const SocialMediaPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const services = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Sosyal Medya Yönetimi",
      description: "Instagram, TikTok, YouTube ve diğer platformlarda profesyonel içerik yönetimi ve strateji geliştirme."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Editing",
      description: "Reels, Shorts ve YouTube videoları için profesyonel kurgu, color grading ve efekt çalışmaları."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "İçerik Stratejisi",
      description: "Hedef kitlenize ulaşmak için veri odaklı içerik stratejisi ve trend analizi."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Grafik Tasarım",
      description: "Post tasarımları, story templateler ve marka kimliğine uygun görsel içerikler."
    }
  ];

  const videoPortfolio = [
    {
      id: 1,
      title: "Ürün Tanıtım Videosu",
      description: "Modern ve dinamik ürün tanıtımı",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop",
      videoUrl: "",
      category: "Reklam"
    },
    {
      id: 2,
      title: "Instagram Reels",
      description: "Viral potansiyeli yüksek içerik",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
      videoUrl: "",
      category: "Reels"
    },
    {
      id: 3,
      title: "YouTube Shorts",
      description: "Kısa format video kurgusu",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop",
      videoUrl: "",
      category: "Shorts"
    },
    {
      id: 4,
      title: "Marka Hikayesi",
      description: "Duygusal marka anlatımı",
      thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=450&fit=crop",
      videoUrl: "",
      category: "Kurumsal"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Toplam Reach" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "100+", label: "Tamamlanan Proje" },
    { icon: <Target className="w-6 h-6" />, value: "%85", label: "Engagement Artışı" },
    { icon: <Zap className="w-6 h-6" />, value: "24/7", label: "İçerik Desteği" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Film className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground font-medium uppercase tracking-wider">
              Sosyal Medya & Video Production
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Hikayenizi</span>
            <br />
            Görsel İçerikle Anlatın
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Profesyonel video kurgu ve sosyal medya yönetimi ile markanızı dijital dünyada öne çıkarın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="glow px-8 py-6 text-lg group">
              <a
                href="https://wa.me/905516279379?text=Merhaba%20sosyal%20medya%20yönetimi%20hakkında%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Hemen Başlayın
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 px-8 py-6 text-lg">
              Portföyü İncele
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="card-glass p-6 text-center hover-lift border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Hizmetlerimiz</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sosyal medya varlığınızı güçlendirmek için ihtiyacınız olan her şey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-glass p-6 hover-lift group border-primary/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Video Portföyü</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Editldiğimiz projelerden örnekler. Videolarınızı buraya ekleyebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videoPortfolio.map((video, index) => (
              <Card
                key={video.id}
                className="card-glass overflow-hidden hover-lift group border-primary/20 cursor-pointer"
                onClick={() => setSelectedVideo(video.videoUrl || null)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium border border-primary/30">
                      {video.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="card-glass p-8 max-w-2xl mx-auto border-primary/20">
              <Youtube className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Videolarınızı Ekleyin</h3>
              <p className="text-muted-foreground mb-6">
                YouTube, Vimeo veya direkt video dosyalarınızı buraya ekleyebilirsiniz.
                Her video için başlık, açıklama ve kategori belirleyebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="glow">
                  YouTube Video Ekle
                </Button>
                <Button variant="outline" className="border-primary/30">
                  Video Dosyası Yükle
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <Card className="card-glass p-12 text-center hover-lift border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-50" />

            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Projenizi Görüşelim
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sosyal medya stratejinizi birlikte oluşturalım.
                Markanızı dijital dünyada büyütmek için hemen iletişime geçin.
              </p>
              <Button size="lg" className="glow px-8 py-6 text-lg group">
                <a
                  href="https://wa.me/905516279379?text=Merhaba%20sosyal%20medya%20yönetimi%20ve%20video%20editing%20hakkında%20görüşmek%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  WhatsApp'tan Ulaşın
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaPage;
