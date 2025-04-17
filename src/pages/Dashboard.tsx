
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MoodTracker from "@/components/MoodTracker";
import DailyInsights from "@/components/DailyInsights";
import { SunMoon, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSubmit = () => {
    if (selectedMood) {
      toast({
        title: "Mood logged successfully",
        description: `You're feeling ${selectedMood} today. Thanks for sharing!`,
      });
    } else {
      toast({
        title: "Please select a mood",
        description: "Select how you're feeling today before submitting.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E5DEFF]">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <SunMoon className="h-8 w-8 text-[#7E69AB] mr-2" />
          <h1 className="text-2xl font-bold text-[#1A1F2C]">MindBloom</h1>
        </div>
        <Link to="/chat">
          <Button variant="outline" className="bg-white">
            <MessageCircle className="mr-2" /> Chat
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-[#1A1F2C]">How are you feeling today?</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mood Tracking Card */}
          <Card className="col-span-2 md:col-span-1 shadow-md">
            <CardContent className="pt-6">
              <MoodTracker onMoodSelect={setSelectedMood} selectedMood={selectedMood} />
              <Button 
                onClick={handleMoodSubmit} 
                className="w-full mt-4 bg-[#9b87f5] hover:bg-[#7E69AB]"
              >
                Log My Mood
              </Button>
            </CardContent>
          </Card>

          {/* Daily Insights */}
          <Card className="col-span-2 md:col-span-1 shadow-md">
            <CardContent className="pt-6">
              <DailyInsights />
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-[#1A1F2C]/60 text-sm">
        © {new Date().getFullYear()} MindBloom. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
