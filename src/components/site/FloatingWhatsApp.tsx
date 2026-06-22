/* eslint-disable prettier/prettier */
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappNumber = "+918600418168";
  const message = "Hello! I'm interested in learning more about TEKSYS services.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 inline-flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
