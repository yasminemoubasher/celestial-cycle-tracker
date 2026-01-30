import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getMoonData,
  getMonthCalendarData,
  MOON_MANSIONS,
  formatTime12hr,
} from "@/lib/moonCalculations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MonthlyCalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate: Date;
}

export function MonthlyCalendar({ onDateSelect, selectedDate }: MonthlyCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dialogDate, setDialogDate] = useState<Date | null>(null);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const calendarData = getMonthCalendarData(year, month);

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  const dialogMoonData = dialogDate ? getMoonData(dialogDate) : null;
  const dialogMansion = dialogMoonData
    ? MOON_MANSIONS[dialogMoonData.mansion - 1]
    : null;

  return (
    <>
      <div className="p-6 bg-gradient-card rounded-xl border border-border shadow-card">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevMonth}
            className="hover:bg-secondary/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-display font-semibold moon-text-gradient">
            {monthName}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextMonth}
            className="hover:bg-secondary/50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-xs uppercase tracking-wider text-muted-foreground py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells before first day */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Day cells */}
          {calendarData.map(({ date, moonData }) => {
            const day = date.getDate();
            return (
              <button
                key={day}
                onClick={() => {
                  onDateSelect(date);
                  setDialogDate(date);
                }}
                className={`aspect-square p-1 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all hover:bg-secondary/50 ${
                  isToday(day)
                    ? "ring-2 ring-accent"
                    : ""
                } ${
                  isSelected(day)
                    ? "bg-secondary"
                    : ""
                } ${
                  moonData.voidOfCourse
                    ? "bg-void-red/10"
                    : ""
                }`}
              >
                <span className="text-sm font-medium">{day}</span>
                <span className="text-lg leading-none">{moonData.phaseEmoji}</span>
                <span className="text-[10px] text-muted-foreground">
                  M{moonData.mansion}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded ring-2 ring-accent" />
            <span>Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-void-red/30" />
            <span>Void of Course</span>
          </div>
          <div className="flex items-center gap-2">
            <span>M#</span>
            <span>= Mansion Number</span>
          </div>
        </div>
      </div>

      {/* Day detail dialog */}
      <Dialog open={dialogDate !== null} onOpenChange={() => setDialogDate(null)}>
        <DialogContent className="bg-popover border-border max-w-md">
          {dialogMoonData && dialogMansion && dialogDate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-display">
                  {dialogDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Phase */}
                <div className="flex items-center gap-4 p-3 bg-secondary/30 rounded-lg">
                  <span className="text-4xl">{dialogMoonData.phaseEmoji}</span>
                  <div>
                    <p className="font-display text-lg">{dialogMoonData.phaseName}</p>
                    <p className="text-sm text-muted-foreground">
                      {dialogMoonData.illumination.toFixed(1)}% illumination
                    </p>
                  </div>
                </div>

                {/* Zodiac */}
                <div className="flex items-center gap-4 p-3 bg-secondary/30 rounded-lg">
                  <span className="text-4xl">{dialogMoonData.zodiacEmoji}</span>
                  <div>
                    <p className="font-display text-lg">
                      Moon in {dialogMoonData.zodiacSign}
                    </p>
                  </div>
                </div>

                {/* Mansion */}
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground uppercase mb-1">
                    Mansion {dialogMoonData.mansion}
                  </p>
                  <p className="font-display text-lg">{dialogMoonData.mansionName}</p>
                  <p className="text-star-gold font-display" dir="rtl">
                    {dialogMoonData.mansionArabicName}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {formatTime12hr(dialogMoonData.mansionStart)} –{" "}
                    {formatTime12hr(dialogMoonData.mansionEnd)}
                  </p>
                  <p className="text-sm mt-2">{dialogMansion.nature}</p>
                </div>

                {/* Void of Course */}
                {dialogMoonData.voidOfCourse && (
                  <div className="p-3 bg-void-red/10 rounded-lg border border-void-red/30">
                    <p className="text-void-red font-medium">Void of Course</p>
                    {dialogMoonData.vocStart && dialogMoonData.vocEnd && (
                      <p className="text-sm text-muted-foreground">
                        {formatTime12hr(dialogMoonData.vocStart)} –{" "}
                        {formatTime12hr(dialogMoonData.vocEnd)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
