import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Sunduğumuz Hizmetler
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            İşletmenizin dijital dönüşümü için kapsamlı yazılım çözümleri sunuyoruz
          </p>
        </div>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
