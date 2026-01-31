import { MoonData, formatTime12hr, formatDateShort } from "@/lib/moonCalculations";

interface MoonPhaseDisplayProps {
  moonData: MoonData;
}

export function MoonPhaseDisplay({ moonData }: MoonPhaseDisplayProps) {
  return (
    <div className="p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Moon Phase Visual */}
      <div className="relative">
        <div className="absolute inset-0 blur-2xl bg-moon-glow/30 rounded-full scale-150" />
        <div className="relative text-9xl animate-float drop-shadow-2xl">
          {moonData.phaseEmoji}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary/80 px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-foreground">
            {moonData.illumination}%
          </span>
        </div>
      </div>

      {/* Phase Info */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <div>
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
            Current Phase
          </p>
          <h2 className="text-4xl font-display font-semibold moon-text-gradient">
            {moonData.phaseName}
          </h2>
        </div>

        {/* Exact Phase Time */}
        {moonData.phaseExactTime && moonData.phaseExactName && (
          <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
              {moonData.phaseExactName} Exact Time
            </p>
            <p className="text-xl font-display text-star-gold">
              {formatDateShort(moonData.phaseExactTime)} at {formatTime12hr(moonData.phaseExactTime)}
            </p>
          </div>
        )}

        {/* Rise/Set Times */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-secondary/30 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase">Moon Rise</p>
            <p className="text-lg font-display text-foreground">
              {moonData.moonRise ? formatTime12hr(moonData.moonRise) : "—"}
            </p>
          </div>
          <div className="p-3 bg-secondary/30 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase">Moon Set</p>
            <p className="text-lg font-display text-foreground">
              {moonData.moonSet ? formatTime12hr(moonData.moonSet) : "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
