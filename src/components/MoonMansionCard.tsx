import { useState } from "react";
import { MoonData, MOON_MANSIONS, formatTime12hr } from "@/lib/moonCalculations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface MoonMansionCardProps {
  moonData: MoonData;
}

export function MoonMansionCard({ moonData }: MoonMansionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mansion = MOON_MANSIONS[moonData.mansion - 1];

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-6 bg-gradient-card rounded-xl border border-border shadow-card hover:border-accent/50 transition-all duration-300 group"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Moon Mansion
          </span>
          <span className="text-2xl">{moonData.zodiacEmoji}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-display font-semibold text-foreground group-hover:moon-text-gradient transition-all">
            {moonData.mansion}. {moonData.mansionName}
          </h3>
          <p className="text-xl font-display text-star-gold" dir="rtl">
            {moonData.mansionArabicName}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <span>
              {formatTime12hr(moonData.mansionStart)} -{" "}
              {formatTime12hr(moonData.mansionEnd)}
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs text-accent">Click for details →</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-popover border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-3">
              <span className="text-3xl">🌙</span>
              <span>
                Mansion {moonData.mansion}: {moonData.mansionName}
              </span>
            </DialogTitle>
            <DialogDescription className="text-xl font-display text-star-gold pt-2" dir="rtl">
              {moonData.mansionArabicName}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Meaning
              </h4>
              <p className="text-foreground font-body text-lg">
                "{mansion.meaning}"
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Nature & Guidance
              </h4>
              <p className="text-foreground/90 font-body leading-relaxed">
                {mansion.nature}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="text-xs text-muted-foreground uppercase">Element</p>
                <p className="text-lg font-display text-foreground">{mansion.element}</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="text-xs text-muted-foreground uppercase">Ruling Planet</p>
                <p className="text-lg font-display text-foreground">{mansion.ruling}</p>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Active Period
              </h4>
              <p className="text-foreground font-body">
                From{" "}
                <span className="text-star-gold font-medium">
                  {formatTime12hr(moonData.mansionStart)}
                </span>{" "}
                to{" "}
                <span className="text-star-gold font-medium">
                  {formatTime12hr(moonData.mansionEnd)}
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
