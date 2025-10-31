import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Portföyümüz
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Gerçekleştirdiğimiz başarılı projeler ve mutlu müşterilerimiz
          </p>
        </div>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
