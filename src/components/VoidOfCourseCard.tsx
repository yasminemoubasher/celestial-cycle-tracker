import { MoonData, formatTime12hr } from "@/lib/moonCalculations";

interface VoidOfCourseCardProps {
  moonData: MoonData;
}

export function VoidOfCourseCard({ moonData }: VoidOfCourseCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border shadow-card ${
        moonData.voidOfCourse
          ? "bg-void-red/10 border-void-red/30"
          : "bg-gradient-card border-border"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          Void of Course
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            moonData.voidOfCourse
              ? "bg-void-red/20 text-void-red"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {moonData.voidOfCourse ? "ACTIVE" : "INACTIVE"}
        </span>
      </div>

      {moonData.voidOfCourse ? (
        <div className="space-y-3">
          <p className="text-foreground font-body">
            The Moon is currently void of course. This is a time of pause —
            avoid starting new projects or making major decisions.
          </p>
          {moonData.vocStart && moonData.vocEnd && (
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="text-void-red font-medium">
                  {formatTime12hr(moonData.vocStart)}
                </span>{" "}
                –{" "}
                <span className="text-void-red font-medium">
                  {formatTime12hr(moonData.vocEnd)}
                </span>
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-muted-foreground font-body">
          The Moon is actively aspecting planets. This is a favorable time for
          initiating actions and making important decisions.
        </p>
      )}
    </div>
  );
}
