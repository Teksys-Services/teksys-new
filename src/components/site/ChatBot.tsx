/* eslint-disable prettier/prettier */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const QUICK_REPLIES = [
  "What courses do you offer?",
  "How to enroll?",
  "Contact information",
  "About TEKSYS",
];

const BOT_RESPONSES: Record<string, string> = {
  "what courses": "We offer 8 semiconductor skill training programs:\n\n1. Semiconductor Foundations\n2. GaN Technology\n3. SiC Technology\n4. RF & Microwave\n5. Sensors & IoT\n6. Power Electronics\n7. Materials Science & Process Technology\n8. Advanced Semiconductor Systems\n\nEach course includes hands-on labs, projects, and global certification. Visit our Training Academy page for more details!",
  
  "how to enroll": "To enroll in any of our courses:\n\n1. Visit our Training Academy page\n2. Click 'ENROLL NOW' on your chosen course\n3. Fill out the enrollment form\n4. Our team will contact you shortly\n\nFor direct assistance, call us at +91 86004 18168 or email admin@teksys-services.com",
  
  "contact": "You can reach us at:\n📞 Phone: +91 86004 18168\n📧 Email: admin@teksys-services.com\n📍 Locations: India, Singapore, USA\n\nFor WhatsApp support, click the green WhatsApp icon in the bottom right corner.",
  
  "about": "TEKSYS is a semiconductor deep-tech company providing:\n• GaN device consulting\n• MMIC design & development\n• Fabless & OSAT partnerships\n• Semiconductor workforce training\n\nWe partner with industry leaders to deliver advanced technology solutions and training programs for engineering teams globally.",
  
  "default": "Hello! 👋 I'm the TEKSYS assistant. I can help you with:\n\n• Course information\n• Enrollment process\n• Contact details\n• Company information\n\nFeel free to ask me anything about TEKSYS services and training programs!",
};

function getBotResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes("course") || lowerMessage.includes("training") || lowerMessage.includes("program")) {
    return BOT_RESPONSES["what courses"];
  }
  if (lowerMessage.includes("enroll")) {
    return BOT_RESPONSES["how to enroll"];
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
    return BOT_RESPONSES["contact"];
  }
  if (lowerMessage.includes("about") || lowerMessage.includes("company") || lowerMessage.includes("who")) {
    return BOT_RESPONSES["about"];
  }
  
  return BOT_RESPONSES["default"];
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: BOT_RESPONSES["default"],
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-40 inline-flex items-center justify-center rounded-full bg-indigo-600 p-4 text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-40 right-8 z-40 w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-white">
              <h3 className="font-semibold">TEKSYS Assistant</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>

            {/* Messages */}
            <div className="flex h-96 flex-col overflow-y-auto bg-white p-4">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs rounded-lg px-4 py-2 text-sm ${
                        message.sender === "user"
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-foreground"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-lg bg-gray-100 px-4 py-2">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-100" />
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="border-t border-border bg-gray-50 px-4 py-3">
                <p className="mb-2 text-xs font-semibold text-foreground/70">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSendMessage(reply)}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs hover:bg-gray-100 transition"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border bg-white p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask a question..."
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
