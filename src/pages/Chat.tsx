
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, SunMoon } from "lucide-react";
import { Link } from "react-router-dom";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your MindBloom companion. How are you feeling today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand how you feel. Would you like to talk more about it?",
        "Thank you for sharing. That's completely valid to feel that way.",
        "I'm here to listen. Is there anything specific that triggered this feeling?",
        "Taking time to recognize your emotions is a great step for well-being.",
        "It sounds like you're going through a lot. Remember to be kind to yourself."
      ];
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E5DEFF]">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/dashboard" className="mr-2">
            <ArrowLeft className="h-6 w-6 text-[#7E69AB]" />
          </Link>
          <SunMoon className="h-8 w-8 text-[#7E69AB] mr-2" />
          <h1 className="text-2xl font-bold text-[#1A1F2C]">MindBloom Chat</h1>
        </div>
      </header>

      {/* Chat Content */}
      <main className="flex-1 p-4 max-w-3xl mx-auto w-full flex flex-col">
        <Card className="flex-1 shadow-md mb-4">
          <CardContent className="pt-6 h-[60vh] overflow-y-auto flex flex-col">
            <div className="flex-1 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "user"
                        ? "bg-[#9b87f5] text-white"
                        : "bg-white text-[#1A1F2C]"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-[#1A1F2C]/60 text-sm">
        © {new Date().getFullYear()} MindBloom. All rights reserved.
      </footer>
    </div>
  );
};

export default Chat;
