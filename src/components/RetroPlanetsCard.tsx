import { RetroPlanet, formatTime12hr } from "@/lib/moonCalculations";

interface RetroPlanetsCardProps {
  retroPlanets: RetroPlanet[];
}

export function RetroPlanetsCard({ retroPlanets }: RetroPlanetsCardProps) {
  const formatDateShort = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-6 bg-gradient-card rounded-xl border border-border shadow-card">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          Retrograde Planets
        </span>
        <span className="text-2xl">℞</span>
      </div>

      {retroPlanets.length > 0 ? (
        <div className="space-y-3">
          {retroPlanets.map((planet) => (
            <div
              key={planet.planet}
              className="flex items-center justify-between p-3 bg-cosmic-purple/20 rounded-lg border border-cosmic-purple/30"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{planet.emoji}</span>
                <div>
                  <p className="font-display font-medium text-foreground">
                    {planet.planet} ℞
                  </p>
                  <p className="text-xs text-muted-foreground">Retrograde</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-cosmic-purple">
                  {formatDateShort(planet.retroStart)} –{" "}
                  {formatDateShort(planet.retroEnd)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground font-body">
          No planets are currently retrograde. Forward motion prevails — a time
          of clarity and progress.
        </p>
      )}
    </div>
  );
}
