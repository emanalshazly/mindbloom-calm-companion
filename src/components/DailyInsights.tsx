
import React from "react";
import { Award, Sun, Quote, Calendar } from "lucide-react";

const DailyInsights: React.FC = () => {
  // Get a random quote for the day
  const quotes = [
    "Your mental health is a priority. Your happiness is essential.",
    "Self-care is how you take your power back.",
    "You don't have to be positive all the time. It's okay to feel sad, angry, annoyed, or frustrated.",
    "Deep breathing is like a superpower: always available, and it resets your mindset.",
    "You are allowed to take up space. You are allowed to have a voice.",
    "Small steps are still progress.",
    "Be gentle with yourself, you're doing the best you can.",
  ];
  
  // Select a random quote using today's date as seed
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
  const quoteIndex = dayOfYear % quotes.length;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Daily Insights</h3>
      
      {/* Today's Date */}
      <div className="flex items-start">
        <Calendar className="h-6 w-6 text-[#7E69AB] mr-2" />
        <div>
          <p className="font-medium text-[#1A1F2C]">Today</p>
          <p className="text-[#1A1F2C]/70">
            {today.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
      
      {/* Inspirational Quote */}
      <div className="flex items-start">
        <Quote className="h-6 w-6 text-[#7E69AB] mr-2" />
        <div>
          <p className="font-medium text-[#1A1F2C]">Daily Quote</p>
          <p className="text-[#1A1F2C]/70 italic">"{quotes[quoteIndex]}"</p>
        </div>
      </div>
      
      {/* Wellness Tip */}
      <div className="flex items-start">
        <Sun className="h-6 w-6 text-[#7E69AB] mr-2" />
        <div>
          <p className="font-medium text-[#1A1F2C]">Wellness Tip</p>
          <p className="text-[#1A1F2C]/70">
            Take 5 minutes today for deep breathing. Find a quiet spot, close your eyes, 
            and focus on your breath moving in and out.
          </p>
        </div>
      </div>
      
      {/* Streak */}
      <div className="flex items-start">
        <Award className="h-6 w-6 text-[#7E69AB] mr-2" />
        <div>
          <p className="font-medium text-[#1A1F2C]">Mood Tracking</p>
          <p className="text-[#1A1F2C]/70">
            Start tracking your mood daily to see patterns and insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyInsights;
