import { MoonData, formatTime12hr, formatDateShort } from "@/lib/moonCalculations";

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

      <p className="text-lg text-star-gold font-medium mt-1">
        {moonData.zodiacDegree}° in {moonData.zodiacSign}
      </p>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Sign Timing</span>
        </div>
        <p className="text-sm text-foreground">
          <span className="text-star-gold font-medium">
            {formatDateShort(moonData.zodiacStart)} {formatTime12hr(moonData.zodiacStart)}
          </span>{" "}
          –{" "}
          <span className="text-star-gold font-medium">
            {formatDateShort(moonData.zodiacEnd)} {formatTime12hr(moonData.zodiacEnd)}
          </span>
        </p>
      </div>

      <p className="mt-3 text-muted-foreground font-body text-sm">
        The Moon is transiting through {moonData.zodiacSign}, influencing
        emotions with{" "}
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
