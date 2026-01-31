import { useState } from "react";
import { MoonData, MOON_MANSIONS, formatTime12hr, formatDateShort } from "@/lib/moonCalculations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
          <h3 
            className="text-2xl font-display font-semibold text-foreground group-hover:moon-text-gradient transition-all cursor-pointer underline decoration-accent/30 hover:decoration-accent"
          >
            {moonData.mansion}. {moonData.mansionName}
          </h3>
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
              {formatDateShort(moonData.mansionStart)} {formatTime12hr(moonData.mansionStart)} –{" "}
              {formatDateShort(moonData.mansionEnd)} {formatTime12hr(moonData.mansionEnd)}
            </span>
          </div>
        </div>

        <p className="mt-3 text-xs text-accent">Click for details →</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-popover border-border max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-3">
              <span className="text-3xl">🌙</span>
              <span>
                Mansion {moonData.mansion}: {moonData.mansionName}
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Essence
              </h4>
              <p className="text-foreground font-body text-lg">
                {mansion.essence}
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
              <h4 className="text-sm uppercase tracking-wider text-accent mb-2">
                ✓ Good For
              </h4>
              <p className="text-foreground/90 font-body leading-relaxed">
                {mansion.goodFor}
              </p>
            </div>

            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/30">
              <h4 className="text-sm uppercase tracking-wider text-destructive mb-2">
                ✗ Not Good For
              </h4>
              <p className="text-foreground/90 font-body leading-relaxed">
                {mansion.notGoodFor}
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Active Period
              </h4>
              <p className="text-foreground font-body">
                From{" "}
                <span className="text-star-gold font-medium">
                  {formatDateShort(moonData.mansionStart)} {formatTime12hr(moonData.mansionStart)}
                </span>{" "}
                to{" "}
                <span className="text-star-gold font-medium">
                  {formatDateShort(moonData.mansionEnd)} {formatTime12hr(moonData.mansionEnd)}
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
