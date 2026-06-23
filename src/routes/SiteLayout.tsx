import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { TopBar } from "@/components/site/TopBar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ChatBot } from "@/components/site/ChatBot";

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
}

export default SiteLayout;
