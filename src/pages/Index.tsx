import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarBackground } from "@/components/StarBackground";
import { MoonPhaseDisplay } from "@/components/MoonPhaseDisplay";
import { MoonMansionCard } from "@/components/MoonMansionCard";
import { ZodiacCard } from "@/components/ZodiacCard";
import { VoidOfCourseCard } from "@/components/VoidOfCourseCard";
import { RetroPlanetsCard } from "@/components/RetroPlanetsCard";
import { MonthlyCalendar } from "@/components/MonthlyCalendar";
import {
  getMoonData,
  getRetrogradePlanets,
  formatDate,
  formatTime12hr,
  MoonData,
  RetroPlanet,
} from "@/lib/moonCalculations";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moonData, setMoonData] = useState<MoonData | null>(null);
  const [retroPlanets, setRetroPlanets] = useState<RetroPlanet[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMoonData(getMoonData(selectedDate));
    setRetroPlanets(getRetrogradePlanets(selectedDate));
  }, [selectedDate]);

  if (!moonData) return null;

  return (
    <div className="min-h-screen relative">
      <StarBackground />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-semibold moon-text-gradient mb-4">
            Luna Astrology
          </h1>
          <p className="text-xl text-muted-foreground font-body">
            Moon Mansions • Phases • Void of Course • Retrogrades
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{formatDate(currentTime)}</span>
            <span className="text-star-gold">{formatTime12hr(currentTime)}</span>
          </div>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-muted/50">
            <TabsTrigger
              value="daily"
              className="font-display text-lg data-[state=active]:bg-secondary data-[state=active]:text-foreground"
            >
              Daily View
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="font-display text-lg data-[state=active]:bg-secondary data-[state=active]:text-foreground"
            >
              Monthly Calendar
            </TabsTrigger>
          </TabsList>

          {/* Daily View */}
          <TabsContent value="daily" className="space-y-8">
            {/* Moon Phase Hero */}
            <div className="bg-gradient-card rounded-2xl border border-border shadow-card overflow-hidden">
              <MoonPhaseDisplay moonData={moonData} />
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <MoonMansionCard moonData={moonData} />
              <ZodiacCard moonData={moonData} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <VoidOfCourseCard moonData={moonData} />
              <RetroPlanetsCard retroPlanets={retroPlanets} />
            </div>

            {/* Quick Reference */}
            <div className="p-6 bg-gradient-card rounded-xl border border-border shadow-card">
              <h3 className="text-xl font-display font-semibold mb-4 moon-text-gradient">
                Today's Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <span className="text-3xl block mb-2">{moonData.phaseEmoji}</span>
                  <p className="text-sm text-muted-foreground">{moonData.phaseName}</p>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <span className="text-3xl block mb-2">{moonData.zodiacEmoji}</span>
                  <p className="text-sm text-muted-foreground">{moonData.zodiacSign}</p>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <span className="text-3xl block mb-2">🏛️</span>
                  <p className="text-sm text-muted-foreground">
                    Mansion {moonData.mansion}
                  </p>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <span className="text-3xl block mb-2">
                    {moonData.voidOfCourse ? "⚠️" : "✓"}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {moonData.voidOfCourse ? "Void Active" : "Not Void"}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Monthly View */}
          <TabsContent value="monthly">
            <MonthlyCalendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p className="font-display">
            ✦ All times displayed in 12-hour format with AM/PM ✦
          </p>
          <p className="mt-2 text-xs">
            Click on any moon mansion for detailed meanings and guidance
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
