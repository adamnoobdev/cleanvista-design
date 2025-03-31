
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Improved ScrollToTop component using React Router's useLocation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen pt-20">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tjanster" element={<Services />} />
            <Route path="/tjanster/:serviceId" element={<Services />} />
            <Route path="/offert" element={<Quote />} />
            <Route path="/priser" element={<Pricing />} />
            
            {/* Redirects for English routes to Swedish ones */}
            <Route path="/services" element={<Navigate to="/tjanster" replace />} />
            <Route path="/services/:serviceId" element={<Navigate to="/tjanster/:serviceId" replace />} />
            <Route path="/quote" element={<Navigate to="/offert" replace />} />
            <Route path="/pricing" element={<Navigate to="/priser" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
