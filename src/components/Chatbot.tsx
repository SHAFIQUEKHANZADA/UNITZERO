"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import Image from "next/image";

type Message = { from: "user" | "bot"; text: string };

function generateUUID() {
  return "web_" + crypto.randomUUID();
}

// Typing indicator component
function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2 p-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 max-w-[75%] shadow-sm">
      <div className="flex space-x-1">
        <motion.div
          className="w-2 h-2 bg-blue-400 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-2 h-2 bg-blue-500 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-blue-600 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let id = sessionStorage.getItem("chatbot_session_id");
    if (!id) {
      id = generateUUID();
      sessionStorage.setItem("chatbot_session_id", id);
    }
    setSessionId(id);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !sessionId) return;

    const userMsg: Message = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId }),
      });

      const data = await res.json();
      setIsTyping(false);
      const botMsg: Message = {
        from: "bot",
        text: data.reply || "Sorry, I didn't catch that.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
        console.log(error)
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Unable to connect to chatbot." },
      ]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!sessionId) return null;

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-shadow group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="
            fixed z-50 
            left-1/2 -translate-x-1/2 
            bottom-24 md:left-auto md:right-6 md:translate-x-0 
            w-[95%] md:w-96 
            h-[65vh] md:h-[450px] 
            bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100
          "
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white p-4 pb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <span className="font-semibold text-lg">Hi there 👋</span>
                    <p className="text-xs text-white/80">Always here to help</p>
                  </div>
                </div>
        
              </div>
            </div>

            {/* Messages Container */}
            <div className="p-4 overflow-y-auto space-y-5 bg-gradient-to-b from-gray-50 to-white h-96">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-gray-400 text-sm mt-8"
                >
                  <div className="mb-4">
                    <Sparkles className="w-12 h-12 mx-auto text-blue-300" />
                  </div>
                  <p>Start a conversation!</p>
                  <p className="text-xs mt-1">Ask me anything...</p>
                </motion.div>
              )}
              
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-gradient-to-br from-blue-500 to-purple-500 text-white mr-2">
                      <Image src="/images/3.jpg" alt="Bot" width={32} height={32} className="rounded-full"/>
                    </div>
                  )}
                  
                  <div
                    className={`p-3 rounded-2xl max-w-[75%] shadow-sm ${
                      msg.from === "bot"
                        ? "bg-gradient-to-br from-gray-100 to-gray-50 text-gray-800 rounded-tl-sm"
                        : "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-tr-sm"
                    }`}
                  >
                    <p className="text-[11px] tracking-tight">{msg.text}</p>
                  </div>

                  {msg.from === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-gray-300 text-white ml-2">
                      👤
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-end justify-start"
                >
                  {/* Bot Avatar for typing indicator */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-gradient-to-br from-blue-500 to-purple-500 text-white mr-2">
                  <Image src="/images/3.jpg" alt="Bot" width={32} height={32} className="rounded-full"/>
                  </div>
                  <TypingIndicator />
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-2 bg-gray-50 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <input
                  className="flex-1 bg-transparent px-3 py-2 text-[11px] tracking-tight outline-none placeholder-gray-400 text-gray-800"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <motion.button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-2.5 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/50 transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Footer */}
              <div className="text-[10px] text-center text-gray-400 mt-3 flex items-center justify-center space-x-1">
                <span>Powered by</span>
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  UnitZero AI Agent
                </strong>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}