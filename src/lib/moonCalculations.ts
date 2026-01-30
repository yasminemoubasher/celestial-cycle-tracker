// Moon calculation utilities

export interface MoonData {
  phase: string;
  phaseName: string;
  phaseEmoji: string;
  illumination: number;
  phaseExactTime: Date;
  zodiacSign: string;
  zodiacEmoji: string;
  mansion: number;
  mansionName: string;
  mansionArabicName: string;
  mansionStart: Date;
  mansionEnd: Date;
  voidOfCourse: boolean;
  vocStart: Date | null;
  vocEnd: Date | null;
}

export interface RetroPlanet {
  planet: string;
  emoji: string;
  retroStart: Date;
  retroEnd: Date;
  isRetro: boolean;
}

// Moon mansion data with meanings
export const MOON_MANSIONS = [
  { number: 1, name: "Al Sharatain", arabicName: "الشرطين", meaning: "The Two Signs", nature: "Good for travel, buying animals, and taking medicine. Avoid marriage and partnerships.", element: "Fire", ruling: "Mars" },
  { number: 2, name: "Al Butain", arabicName: "البطين", meaning: "The Little Belly", nature: "Good for finding treasure, digging wells. Bad for marriage and sea travel.", element: "Earth", ruling: "Venus" },
  { number: 3, name: "Al Thurayya", arabicName: "الثريا", meaning: "The Many Little Ones (Pleiades)", nature: "Good for hunting, alchemy, love matters. Avoid sea voyages.", element: "Fire", ruling: "Mercury" },
  { number: 4, name: "Al Dabaran", arabicName: "الدبران", meaning: "The Follower", nature: "Good for buildings, hunting. Creates discord between partners.", element: "Earth", ruling: "Moon" },
  { number: 5, name: "Al Haqa", arabicName: "الهقعة", meaning: "The White Spot", nature: "Good for learning, building. Bad for marriage and partnerships.", element: "Water", ruling: "Saturn" },
  { number: 6, name: "Al Hana", arabicName: "الهنعة", meaning: "The Mark", nature: "Good for love, friendship, hunting. Avoid medicine.", element: "Air", ruling: "Jupiter" },
  { number: 7, name: "Al Dhira", arabicName: "الذراع", meaning: "The Forearm", nature: "Good for love, friendship, travel. Creates lasting bonds.", element: "Water", ruling: "Mars" },
  { number: 8, name: "Al Nathrah", arabicName: "النثرة", meaning: "The Gap/Crib", nature: "Good for love, friendship, travel by water. Creates harmony.", element: "Fire", ruling: "Sun" },
  { number: 9, name: "Al Tarf", arabicName: "الطرف", meaning: "The Glance", nature: "Bad for most things. Good only for causing harm to enemies.", element: "Earth", ruling: "Venus" },
  { number: 10, name: "Al Jabhah", arabicName: "الجبهة", meaning: "The Forehead", nature: "Good for building, love, friendship. Strengthens buildings.", element: "Fire", ruling: "Mercury" },
  { number: 11, name: "Al Zubrah", arabicName: "الزبرة", meaning: "The Mane", nature: "Good for travel, trade, crops. Creates fear in enemies.", element: "Air", ruling: "Moon" },
  { number: 12, name: "Al Sarfah", arabicName: "الصرفة", meaning: "The Changer", nature: "Good for harvest, trade, liberation. Bad for travel.", element: "Fire", ruling: "Saturn" },
  { number: 13, name: "Al Awwa", arabicName: "العواء", meaning: "The Barker", nature: "Good for trade, harvest, travel. Improves relationships.", element: "Air", ruling: "Jupiter" },
  { number: 14, name: "Al Simak", arabicName: "السماك", meaning: "The Unarmed", nature: "Good for love, healing, travel. Cures the sick.", element: "Water", ruling: "Mars" },
  { number: 15, name: "Al Ghafr", arabicName: "الغفر", meaning: "The Covering", nature: "Good for digging, treasure. Bad for travel and marriage.", element: "Earth", ruling: "Sun" },
  { number: 16, name: "Al Zubana", arabicName: "الزبانى", meaning: "The Claws", nature: "Bad for most things. Hinders trade and travel.", element: "Air", ruling: "Venus" },
  { number: 17, name: "Al Iklil", arabicName: "الإكليل", meaning: "The Crown", nature: "Good for building, love. Strengthens friendships.", element: "Water", ruling: "Mercury" },
  { number: 18, name: "Al Qalb", arabicName: "القلب", meaning: "The Heart", nature: "Good for building, strengthening. Creates discord.", element: "Fire", ruling: "Moon" },
  { number: 19, name: "Al Shaulah", arabicName: "الشولة", meaning: "The Sting", nature: "Good for war, hunting. Bad for marriage and partnerships.", element: "Water", ruling: "Saturn" },
  { number: 20, name: "Al Naaim", arabicName: "النعائم", meaning: "The Ostriches", nature: "Good for taming beasts, hunting. Strengthens prisons.", element: "Fire", ruling: "Jupiter" },
  { number: 21, name: "Al Baldah", arabicName: "البلدة", meaning: "The City", nature: "Good for harvest, buildings, marriage. Very auspicious.", element: "Earth", ruling: "Mars" },
  { number: 22, name: "Sad al Dhabih", arabicName: "سعد الذابح", meaning: "The Lucky Slaughterer", nature: "Good for healing, escape. Helps fugitives.", element: "Air", ruling: "Sun" },
  { number: 23, name: "Sad Bula", arabicName: "سعد بلع", meaning: "The Lucky Swallower", nature: "Good for healing, marriage, medicine. Strengthens buildings.", element: "Water", ruling: "Venus" },
  { number: 24, name: "Sad al Suud", arabicName: "سعد السعود", meaning: "The Luckiest of the Lucky", nature: "Very auspicious! Good for all things, especially marriage.", element: "Earth", ruling: "Mercury" },
  { number: 25, name: "Sad al Akhbiyah", arabicName: "سعد الأخبية", meaning: "The Lucky Tents", nature: "Good for marriage, buildings, travel. Strengthens love.", element: "Air", ruling: "Moon" },
  { number: 26, name: "Al Fargh al Awwal", arabicName: "الفرغ الأول", meaning: "The First Spout", nature: "Good for love, friendship. Creates union between people.", element: "Water", ruling: "Saturn" },
  { number: 27, name: "Al Fargh al Thani", arabicName: "الفرغ الثاني", meaning: "The Second Spout", nature: "Good for marriage, harvest, trade. Increases profits.", element: "Fire", ruling: "Jupiter" },
  { number: 28, name: "Batn al Hut", arabicName: "بطن الحوت", meaning: "The Belly of the Fish", nature: "Good for trade, marriage, harvest. Strengthens bonds.", element: "Water", ruling: "Mars" },
];

export const ZODIAC_SIGNS = [
  { name: "Aries", emoji: "♈", element: "Fire" },
  { name: "Taurus", emoji: "♉", element: "Earth" },
  { name: "Gemini", emoji: "♊", element: "Air" },
  { name: "Cancer", emoji: "♋", element: "Water" },
  { name: "Leo", emoji: "♌", element: "Fire" },
  { name: "Virgo", emoji: "♍", element: "Earth" },
  { name: "Libra", emoji: "♎", element: "Air" },
  { name: "Scorpio", emoji: "♏", element: "Water" },
  { name: "Sagittarius", emoji: "♐", element: "Fire" },
  { name: "Capricorn", emoji: "♑", element: "Earth" },
  { name: "Aquarius", emoji: "♒", element: "Air" },
  { name: "Pisces", emoji: "♓", element: "Water" },
];

// Calculate Julian Day Number
function getJulianDay(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() + date.getHours() / 24 + date.getMinutes() / 1440;
  
  let y = year;
  let m = month;
  
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
}

// Calculate moon phase (0-1, where 0 = new moon, 0.5 = full moon)
function getMoonPhase(date: Date): number {
  const jd = getJulianDay(date);
  const daysSinceNew = jd - 2451550.1;
  const synodicMonth = 29.530588853;
  const phase = (daysSinceNew % synodicMonth) / synodicMonth;
  return phase < 0 ? phase + 1 : phase;
}

// Get moon phase name and emoji
function getPhaseDetails(phase: number): { name: string; emoji: string } {
  if (phase < 0.0625) return { name: "New Moon", emoji: "🌑" };
  if (phase < 0.1875) return { name: "Waxing Crescent", emoji: "🌒" };
  if (phase < 0.3125) return { name: "First Quarter", emoji: "🌓" };
  if (phase < 0.4375) return { name: "Waxing Gibbous", emoji: "🌔" };
  if (phase < 0.5625) return { name: "Full Moon", emoji: "🌕" };
  if (phase < 0.6875) return { name: "Waning Gibbous", emoji: "🌖" };
  if (phase < 0.8125) return { name: "Last Quarter", emoji: "🌗" };
  if (phase < 0.9375) return { name: "Waning Crescent", emoji: "🌘" };
  return { name: "New Moon", emoji: "🌑" };
}

// Calculate moon's ecliptic longitude
function getMoonLongitude(date: Date): number {
  const jd = getJulianDay(date);
  const T = (jd - 2451545.0) / 36525;
  
  // Mean longitude of the Moon
  let L = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T;
  
  // Mean anomaly of the Moon
  const M = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T;
  
  // Mean anomaly of the Sun
  const Ms = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
  
  // Moon's argument of latitude
  const F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T;
  
  // Mean elongation of the Moon
  const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T;
  
  // Add principal perturbations
  L += 6.289 * Math.sin((M * Math.PI) / 180);
  L += 1.274 * Math.sin(((2 * D - M) * Math.PI) / 180);
  L += 0.658 * Math.sin(((2 * D) * Math.PI) / 180);
  L += 0.214 * Math.sin(((2 * M) * Math.PI) / 180);
  L -= 0.186 * Math.sin((Ms * Math.PI) / 180);
  L -= 0.114 * Math.sin(((2 * F) * Math.PI) / 180);
  
  // Normalize to 0-360
  L = L % 360;
  if (L < 0) L += 360;
  
  return L;
}

// Get zodiac sign from ecliptic longitude
function getZodiacFromLongitude(longitude: number): { name: string; emoji: string } {
  const signIndex = Math.floor(longitude / 30);
  return ZODIAC_SIGNS[signIndex];
}

// Get moon mansion from ecliptic longitude
function getMansionFromLongitude(longitude: number): number {
  const mansionSize = 360 / 28;
  return Math.floor(longitude / mansionSize) + 1;
}

// Calculate when moon enters a mansion
function getMansionTiming(date: Date, mansion: number): { start: Date; end: Date } {
  const mansionSize = 360 / 28;
  const startLong = (mansion - 1) * mansionSize;
  const endLong = mansion * mansionSize;
  
  // Find when moon was at start longitude (approximate)
  const currentLong = getMoonLongitude(date);
  const moonSpeed = 13.2; // degrees per day average
  
  const degreesToStart = ((currentLong - startLong + 360) % 360);
  const degreesToEnd = ((endLong - currentLong + 360) % 360);
  
  const hoursAgo = (degreesToStart / moonSpeed) * 24;
  const hoursToEnd = (degreesToEnd / moonSpeed) * 24;
  
  const start = new Date(date.getTime() - hoursAgo * 60 * 60 * 1000);
  const end = new Date(date.getTime() + hoursToEnd * 60 * 60 * 1000);
  
  return { start, end };
}

// Find next phase exact time
function getNextPhaseTime(date: Date, targetPhase: number): Date {
  const synodicMonth = 29.530588853;
  const currentPhase = getMoonPhase(date);
  
  let daysToPhase = (targetPhase - currentPhase) * synodicMonth;
  if (daysToPhase < 0) daysToPhase += synodicMonth;
  
  return new Date(date.getTime() + daysToPhase * 24 * 60 * 60 * 1000);
}

// Check void of course (simplified - when moon makes no major aspects before leaving sign)
function getVoidOfCourse(date: Date): { isVoid: boolean; start: Date | null; end: Date | null } {
  const longitude = getMoonLongitude(date);
  const signDegree = longitude % 30;
  
  // Approximate: VOC in last 2-6 degrees of sign (varies)
  const vocThreshold = 28; // last 2 degrees
  
  if (signDegree >= vocThreshold) {
    const moonSpeed = 13.2 / 24; // degrees per hour
    const degreesLeft = 30 - signDegree;
    const hoursToEnd = degreesLeft / moonSpeed;
    const hoursStarted = (signDegree - vocThreshold) / moonSpeed;
    
    return {
      isVoid: true,
      start: new Date(date.getTime() - hoursStarted * 60 * 60 * 1000),
      end: new Date(date.getTime() + hoursToEnd * 60 * 60 * 1000),
    };
  }
  
  return { isVoid: false, start: null, end: null };
}

// Get retrograde planets for a given date
export function getRetrogradePlanets(date: Date): RetroPlanet[] {
  const year = date.getFullYear();
  
  // Retrograde periods for 2024-2026 (approximate)
  const retroPeriods: { planet: string; emoji: string; periods: { start: string; end: string }[] }[] = [
    {
      planet: "Mercury",
      emoji: "☿",
      periods: [
        { start: "2024-04-01", end: "2024-04-25" },
        { start: "2024-08-05", end: "2024-08-28" },
        { start: "2024-11-25", end: "2024-12-15" },
        { start: "2025-03-15", end: "2025-04-07" },
        { start: "2025-07-18", end: "2025-08-11" },
        { start: "2025-11-09", end: "2025-11-29" },
        { start: "2026-02-26", end: "2026-03-20" },
        { start: "2026-06-30", end: "2026-07-24" },
        { start: "2026-10-24", end: "2026-11-13" },
      ],
    },
    {
      planet: "Venus",
      emoji: "♀",
      periods: [
        { start: "2025-03-02", end: "2025-04-13" },
        { start: "2026-10-03", end: "2026-11-14" },
      ],
    },
    {
      planet: "Mars",
      emoji: "♂",
      periods: [
        { start: "2024-12-06", end: "2025-02-24" },
        { start: "2027-01-10", end: "2027-04-01" },
      ],
    },
    {
      planet: "Jupiter",
      emoji: "♃",
      periods: [
        { start: "2024-10-09", end: "2025-02-04" },
        { start: "2025-11-11", end: "2026-03-11" },
      ],
    },
    {
      planet: "Saturn",
      emoji: "♄",
      periods: [
        { start: "2024-06-29", end: "2024-11-15" },
        { start: "2025-07-13", end: "2025-11-28" },
        { start: "2026-07-27", end: "2026-12-11" },
      ],
    },
    {
      planet: "Uranus",
      emoji: "⛢",
      periods: [
        { start: "2024-09-01", end: "2025-01-30" },
        { start: "2025-09-06", end: "2026-02-04" },
        { start: "2026-09-11", end: "2027-02-08" },
      ],
    },
    {
      planet: "Neptune",
      emoji: "♆",
      periods: [
        { start: "2024-07-02", end: "2024-12-07" },
        { start: "2025-07-04", end: "2025-12-10" },
        { start: "2026-07-08", end: "2026-12-13" },
      ],
    },
    {
      planet: "Pluto",
      emoji: "♇",
      periods: [
        { start: "2024-05-02", end: "2024-10-12" },
        { start: "2025-05-04", end: "2025-10-14" },
        { start: "2026-05-07", end: "2026-10-17" },
      ],
    },
  ];

  const result: RetroPlanet[] = [];
  const dateStr = date.toISOString().split("T")[0];

  for (const planet of retroPeriods) {
    for (const period of planet.periods) {
      if (dateStr >= period.start && dateStr <= period.end) {
        result.push({
          planet: planet.planet,
          emoji: planet.emoji,
          retroStart: new Date(period.start),
          retroEnd: new Date(period.end),
          isRetro: true,
        });
        break;
      }
    }
  }

  return result;
}

// Main function to get all moon data for a date
export function getMoonData(date: Date): MoonData {
  const phase = getMoonPhase(date);
  const phaseDetails = getPhaseDetails(phase);
  const longitude = getMoonLongitude(date);
  const zodiac = getZodiacFromLongitude(longitude);
  const mansionNum = getMansionFromLongitude(longitude);
  const mansion = MOON_MANSIONS[mansionNum - 1];
  const timing = getMansionTiming(date, mansionNum);
  const voc = getVoidOfCourse(date);
  
  // Find next major phase for exact time
  const currentPhaseValue = phase;
  let nextMajorPhase: number;
  if (currentPhaseValue < 0.25) nextMajorPhase = 0.25;
  else if (currentPhaseValue < 0.5) nextMajorPhase = 0.5;
  else if (currentPhaseValue < 0.75) nextMajorPhase = 0.75;
  else nextMajorPhase = 0;
  
  const phaseExactTime = getNextPhaseTime(date, nextMajorPhase);

  return {
    phase: (phase * 100).toFixed(1) + "%",
    phaseName: phaseDetails.name,
    phaseEmoji: phaseDetails.emoji,
    illumination: Math.abs(Math.cos(phase * 2 * Math.PI)) * 100,
    phaseExactTime,
    zodiacSign: zodiac.name,
    zodiacEmoji: zodiac.emoji,
    mansion: mansionNum,
    mansionName: mansion.name,
    mansionArabicName: mansion.arabicName,
    mansionStart: timing.start,
    mansionEnd: timing.end,
    voidOfCourse: voc.isVoid,
    vocStart: voc.start,
    vocEnd: voc.end,
  };
}

// Format time to 12-hour format
export function formatTime12hr(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

// Format date
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Get month calendar data
export function getMonthCalendarData(year: number, month: number): { date: Date; moonData: MoonData }[] {
  const result: { date: Date; moonData: MoonData }[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day, 12, 0, 0);
    result.push({
      date,
      moonData: getMoonData(date),
    });
  }
  
  return result;
}
