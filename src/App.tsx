import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import SpeezyPage from "./pages/SpeezyPage";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  return (
    <ThemeProvider>
      <div className="animate-fade-in-smooth">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hizmetler" element={<ServicesPage />} />
                <Route path="/portfoy" element={<PortfolioPage />} />
                <Route path="/iletisim" element={<ContactPage />} />
                <Route path="/speezy" element={<SpeezyPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;