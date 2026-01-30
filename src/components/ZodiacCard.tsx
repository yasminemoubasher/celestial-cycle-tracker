import { MoonData } from "@/lib/moonCalculations";

interface ZodiacCardProps {
  moonData: MoonData;
}

export function ZodiacCard({ moonData }: ZodiacCardProps) {
  return (
    <div className="p-6 bg-gradient-card rounded-xl border border-border shadow-card">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          Moon in Zodiac
        </span>
        <span className="text-3xl animate-pulse-glow rounded-full">
          {moonData.zodiacEmoji}
        </span>
      </div>

      <h3 className="text-3xl font-display font-semibold moon-text-gradient">
        {moonData.zodiacSign}
      </h3>

      <p className="mt-2 text-muted-foreground font-body">
        The Moon is currently transiting through {moonData.zodiacSign}, influencing
        emotions and intuition with{" "}
        {moonData.zodiacSign === "Aries" ||
        moonData.zodiacSign === "Leo" ||
        moonData.zodiacSign === "Sagittarius"
          ? "fiery passion and initiative"
          : moonData.zodiacSign === "Taurus" ||
            moonData.zodiacSign === "Virgo" ||
            moonData.zodiacSign === "Capricorn"
          ? "grounded stability and practicality"
          : moonData.zodiacSign === "Gemini" ||
            moonData.zodiacSign === "Libra" ||
            moonData.zodiacSign === "Aquarius"
          ? "intellectual curiosity and social connection"
          : "deep sensitivity and intuitive awareness"}
        .
      </p>
    </div>
  );
}
