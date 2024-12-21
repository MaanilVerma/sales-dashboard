"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const dummaryMessage = [
  {
    id: 1,
    text: "Hello! I'm your AI assistant. How can I assist you today with general queries?",
    sender: "ai",
    timestamp: new Date(),
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(dummaryMessage as Message[]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string) => {
    const responses = {
      order: [
        "I can assist you with tracking your order. Could you provide your order number, please?",
        "Your order is in the processing stage and should be shipped in 2-3 business days.",
        "I've located your order details. Would you like to know the shipping status?",
      ],
      product: [
        "I'm happy to offer more information about our products. What specific details do you need?",
        "This product includes a 1-year warranty and offers free returns within 30 days.",
        "Let me retrieve the detailed specifications for you.",
      ],
      help: [
        "I'm here to assist! Could you specify the type of help you need?",
        "I can assist with orders, products, shipping, returns, or general inquiries.",
        "Feel free to ask any questions about our services.",
      ],
    };

    const message = userMessage.toLowerCase();
    if (message.includes("order") || message.includes("tracking")) {
      return responses.order[
        Math.floor(Math.random() * responses.order.length)
      ];
    } else if (message.includes("product") || message.includes("item")) {
      return responses.product[
        Math.floor(Math.random() * responses.product.length)
      ];
    } else {
      return responses.help[Math.floor(Math.random() * responses.help.length)];
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        sender: "ai",
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-48px)]">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Converstaions</h2>
        <p className="text-sm text-gray-500 mt-1">
          Monitor and manage your recent converstaions
        </p>
      </div>
      <div className="mx-6 h-full flex flex-col bg-white rounded-2xl shadow-sm">
        <div className="flex-1 overflow-y-auto mb-2 md:mb-4 space-y-2 md:space-y-4 p-4 md:p-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-3 md:p-4 ${
                  message.sender === "user"
                    ? "bg-[#15B79E] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 md:mt-2 opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl p-3 md:p-4 animate-pulse">
                <p className="text-gray-500">AI is typing...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t p-2 md:p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              placeholder="Type your message..."
              className="flex-1 border rounded-xl px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#15B79E] text-gray-700"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#15B79E] text-white px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-[#0EA389] transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
