import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
