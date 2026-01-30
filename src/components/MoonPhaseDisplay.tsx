import { MoonData, formatTime12hr } from "@/lib/moonCalculations";

interface MoonPhaseDisplayProps {
  moonData: MoonData;
}

export function MoonPhaseDisplay({ moonData }: MoonPhaseDisplayProps) {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="relative">
        {/* Moon glow effect */}
        <div className="absolute inset-0 blur-2xl bg-moon-glow/30 rounded-full scale-150" />
        
        {/* Moon emoji */}
        <div className="relative text-9xl animate-float drop-shadow-2xl">
          {moonData.phaseEmoji}
        </div>
      </div>
      
      <h2 className="mt-6 text-3xl font-display font-semibold moon-text-gradient">
        {moonData.phaseName}
      </h2>
      
      <p className="mt-2 text-muted-foreground font-body">
        {moonData.illumination}% Illumination
      </p>
      
      <div className="mt-4 px-4 py-2 bg-secondary/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          Next major phase at{" "}
          <span className="text-star-gold font-medium">
            {formatTime12hr(moonData.phaseExactTime)}
          </span>
        </p>
      </div>

      {/* Moon rise/set times */}
      <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
        {moonData.moonRise && (
          <div className="flex items-center gap-2">
            <span>🌅</span>
            <span>Rise: <span className="text-star-gold">{formatTime12hr(moonData.moonRise)}</span></span>
          </div>
        )}
        {moonData.moonSet && (
          <div className="flex items-center gap-2">
            <span>🌇</span>
            <span>Set: <span className="text-star-gold">{formatTime12hr(moonData.moonSet)}</span></span>
          </div>
        )}
      </div>
    </div>
  );
}
