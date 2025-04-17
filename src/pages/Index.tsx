
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, SunMoon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E5DEFF]">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <SunMoon className="h-8 w-8 text-[#7E69AB] mr-2" />
          <h1 className="text-2xl font-bold text-[#1A1F2C]">MindBloom</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Track your mood, grow your calm</h2>
          <p className="text-xl mb-8 text-[#1A1F2C]/80">
            Your personal AI companion for mental well-being.
          </p>
          <div className="space-y-4">
            <Link to="/dashboard">
              <Button className="w-full py-6 text-lg bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-[#1A1F2C]/60 text-sm">
        © {new Date().getFullYear()} MindBloom. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
