import { Slider } from './ui/slider';

interface ScaleSliderProps {
  value: number;
  onChange: (value: number) => void;
  question: string;
  description?: string;
}

const qualityLabels = [
  'Critical Gap',      // 0-10
  'Major Weakness',    // 11-20
  'Significant Gap',   // 21-30
  'Below Average',     // 31-40
  'Developing',        // 41-50
  'Moderate',          // 51-60
  'Good',              // 61-70
  'Strong',            // 71-80
  'Very Strong',       // 81-90
  'Excellent',         // 91-100
];

const getLabelColor = (value: number) => {
  if (value <= 30) return 'bg-red-100 text-red-700 border-red-200';
  if (value <= 50) return 'bg-orange-100 text-orange-700 border-orange-200';
  if (value <= 70) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
  if (value <= 90) return 'bg-[var(--sage)] bg-opacity-20 text-[var(--caribbean)] border-[var(--sage)]';
  return 'bg-[var(--caribbean)] bg-opacity-10 text-[var(--caribbean)] border-[var(--caribbean)]';
};

export function ScaleSlider({ value, onChange, question, description }: ScaleSliderProps) {
  const currentLabel = qualityLabels[Math.floor(value / 10)];
  const colorClass = getLabelColor(value);

  return (
    <div className="space-y-6 p-6 bg-white rounded-xl border-2 border-[var(--gray-200)] hover:border-[var(--caribbean)] transition-all">
      <div>
        <label className="text-[var(--licorice)] block mb-2 text-xl">{question}</label>
        {description && (
          <p className="text-[var(--gray-600)] text-base leading-relaxed">{description}</p>
        )}
      </div>
      
      <div className="pt-6 pb-4">
        <Slider
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          min={0}
          max={100}
          step={10}
          className="w-full"
        />
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-sm text-[var(--gray-500)]">
          <span>Critical Gap</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Developing</span>
          <span className="hidden md:inline">•</span>
          <span>Excellent</span>
        </div>
        <span className={`px-4 py-2 rounded-lg border-2 font-medium ${colorClass}`}>
          {currentLabel}
        </span>
      </div>
    </div>
  );
}
