import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeScreen from "./pages/HomeScreen";
import SendMoneyScreen from "./pages/SendMoneyScreen";
import ProfileScreen from "./pages/ProfileScreen";
import AnalyticsScreen from "./pages/AnalyticsScreen";
import WalletScreen from "./pages/WalletScreen";
import MessagesScreen from "./pages/MessagesScreen";
import NotFound from "./pages/NotFound";
import DesignSystemDocs from "./pages/DesignSystemDocs";
import DesignSystemCatalogOverview from "./pages/DesignSystemCatalogOverview";
import DesignSystemCatalogAll from "./pages/DesignSystemCatalogAll";
import DesignTokens from "./pages/DesignTokens";
import CatalogIndex from "./pages/CatalogIndex";
import ExportGenerator from "./pages/ExportGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/send-money" element={<SendMoneyScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/analytics" element={<AnalyticsScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/messages" element={<MessagesScreen />} />
          <Route path="/design-system" element={<DesignSystemDocs />} />
          <Route path="/design-system/catalog" element={<DesignSystemCatalogOverview />} />
          <Route path="/design-system/catalog-all" element={<DesignSystemCatalogAll />} />
          <Route path="/design-system/tokens" element={<DesignTokens />} />
          <Route path="/design-system/catalog-index" element={<CatalogIndex />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
