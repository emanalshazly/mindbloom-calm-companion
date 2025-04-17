
import React from "react";
import { 
  Smile, 
  Frown, 
  Meh, 
  Heart, 
  Activity, 
  Zap, 
  Cloud, 
  CloudRain
} from "lucide-react";

const moods = [
  { id: "happy", icon: Smile, label: "Happy", color: "#FFD56F" },
  { id: "loved", icon: Heart, label: "Loved", color: "#FF7285" },
  { id: "energetic", icon: Zap, label: "Energetic", color: "#7EB5FF" },
  { id: "calm", icon: Cloud, label: "Calm", color: "#A6D8D4" },
  { id: "neutral", icon: Meh, label: "Neutral", color: "#B5B5B5" },
  { id: "anxious", icon: Activity, label: "Anxious", color: "#C49BFF" },
  { id: "sad", icon: CloudRain, label: "Sad", color: "#8ECFFF" },
  { id: "angry", icon: Frown, label: "Angry", color: "#FF9F87" },
];

interface MoodTrackerProps {
  onMoodSelect: (mood: string) => void;
  selectedMood: string | null;
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ onMoodSelect, selectedMood }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">How are you feeling?</h3>
      <div className="grid grid-cols-4 gap-4">
        {moods.map((mood) => {
          const MoodIcon = mood.icon;
          const isSelected = selectedMood === mood.id;
          
          return (
            <button
              key={mood.id}
              onClick={() => onMoodSelect(mood.id)}
              className={`
                flex flex-col items-center justify-center p-2 rounded-lg 
                transition-all duration-200
                ${isSelected 
                  ? `bg-opacity-90 ring-2 ring-[#9b87f5] shadow-md scale-105` 
                  : `bg-opacity-50 hover:bg-opacity-70`}
              `}
              style={{ backgroundColor: `${mood.color}${isSelected ? '' : '20'}` }}
            >
              <MoodIcon
                className={`h-8 w-8 mb-1 ${isSelected ? 'text-[#1A1F2C]' : 'text-[#1A1F2C]/70'}`}
                style={{ color: isSelected ? mood.color : undefined }}
              />
              <span className="text-sm font-medium text-[#1A1F2C]">{mood.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodTracker;
