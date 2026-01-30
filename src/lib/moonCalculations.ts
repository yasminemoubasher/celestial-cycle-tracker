// Moon calculation utilities using SunCalc library for accurate calculations
import SunCalc from 'suncalc';

// Casablanca coordinates for reference timing
const CASABLANCA_LAT = 33.5731;
const CASABLANCA_LNG = -7.5898;

export interface MoonData {
  phase: string;
  phaseName: string;
  phaseEmoji: string;
  illumination: number;
  phaseExactTime: Date;
  zodiacSign: string;
  zodiacEmoji: string;
  zodiacDegree: number;
  mansion: number;
  mansionName: string;
  mansionArabicName: string;
  mansionStart: Date;
  mansionEnd: Date;
  voidOfCourse: boolean;
  vocStart: Date | null;
  vocEnd: Date | null;
  moonRise: Date | null;
  moonSet: Date | null;
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
  { name: "Aries", emoji: "♈", element: "Fire", startDegree: 0 },
  { name: "Taurus", emoji: "♉", element: "Earth", startDegree: 30 },
  { name: "Gemini", emoji: "♊", element: "Air", startDegree: 60 },
  { name: "Cancer", emoji: "♋", element: "Water", startDegree: 90 },
  { name: "Leo", emoji: "♌", element: "Fire", startDegree: 120 },
  { name: "Virgo", emoji: "♍", element: "Earth", startDegree: 150 },
  { name: "Libra", emoji: "♎", element: "Air", startDegree: 180 },
  { name: "Scorpio", emoji: "♏", element: "Water", startDegree: 210 },
  { name: "Sagittarius", emoji: "♐", element: "Fire", startDegree: 240 },
  { name: "Capricorn", emoji: "♑", element: "Earth", startDegree: 270 },
  { name: "Aquarius", emoji: "♒", element: "Air", startDegree: 300 },
  { name: "Pisces", emoji: "♓", element: "Water", startDegree: 330 },
];

// Convert degrees to radians
const toRad = (deg: number) => deg * Math.PI / 180;
// Convert radians to degrees
const toDeg = (rad: number) => rad * 180 / Math.PI;

// Calculate Julian Day Number with high precision
function getJulianDay(date: Date): number {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate() + 
    date.getUTCHours() / 24 + 
    date.getUTCMinutes() / 1440 + 
    date.getUTCSeconds() / 86400;
  
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

// Calculate moon's ecliptic longitude using high-precision algorithm
// Based on Jean Meeus "Astronomical Algorithms"
function getMoonLongitude(date: Date): number {
  const JD = getJulianDay(date);
  const T = (JD - 2451545.0) / 36525; // Julian centuries from J2000.0
  
  // Mean longitude of the Moon (degrees)
  let Lp = 218.3164477 + 481267.88123421 * T 
           - 0.0015786 * T * T 
           + T * T * T / 538841 
           - T * T * T * T / 65194000;
  
  // Mean elongation of the Moon (degrees)
  let D = 297.8501921 + 445267.1114034 * T 
          - 0.0018819 * T * T 
          + T * T * T / 545868 
          - T * T * T * T / 113065000;
  
  // Sun's mean anomaly (degrees)
  let M = 357.5291092 + 35999.0502909 * T 
          - 0.0001536 * T * T 
          + T * T * T / 24490000;
  
  // Moon's mean anomaly (degrees)
  let Mp = 134.9633964 + 477198.8675055 * T 
           + 0.0087414 * T * T 
           + T * T * T / 69699 
           - T * T * T * T / 14712000;
  
  // Moon's argument of latitude (degrees)
  let F = 93.2720950 + 483202.0175233 * T 
          - 0.0036539 * T * T 
          - T * T * T / 3526000 
          + T * T * T * T / 863310000;
  
  // Additional arguments
  const A1 = 119.75 + 131.849 * T;
  const A2 = 53.09 + 479264.290 * T;
  const A3 = 313.45 + 481266.484 * T;
  
  // Eccentricity of Earth's orbit
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;
  const E2 = E * E;
  
  // Convert to radians for trig functions
  D = toRad(D % 360);
  M = toRad(M % 360);
  Mp = toRad(Mp % 360);
  F = toRad(F % 360);
  const A1r = toRad(A1 % 360);
  const A2r = toRad(A2 % 360);
  
  // Longitude perturbations (simplified main terms)
  let sumL = 0;
  
  // Main periodic terms for longitude
  sumL += 6288774 * Math.sin(Mp);
  sumL += 1274027 * Math.sin(2 * D - Mp);
  sumL += 658314 * Math.sin(2 * D);
  sumL += 213618 * Math.sin(2 * Mp);
  sumL += -185116 * E * Math.sin(M);
  sumL += -114332 * Math.sin(2 * F);
  sumL += 58793 * Math.sin(2 * D - 2 * Mp);
  sumL += 57066 * E * Math.sin(2 * D - M - Mp);
  sumL += 53322 * Math.sin(2 * D + Mp);
  sumL += 45758 * E * Math.sin(2 * D - M);
  sumL += -40923 * E * Math.sin(M - Mp);
  sumL += -34720 * Math.sin(D);
  sumL += -30383 * E * Math.sin(M + Mp);
  sumL += 15327 * Math.sin(2 * D - 2 * F);
  sumL += -12528 * Math.sin(Mp + 2 * F);
  sumL += 10980 * Math.sin(Mp - 2 * F);
  sumL += 10675 * Math.sin(4 * D - Mp);
  sumL += 10034 * Math.sin(3 * Mp);
  sumL += 8548 * Math.sin(4 * D - 2 * Mp);
  sumL += -7888 * E * Math.sin(2 * D + M - Mp);
  sumL += -6766 * E * Math.sin(2 * D + M);
  sumL += -5163 * Math.sin(D - Mp);
  sumL += 4987 * E * Math.sin(D + M);
  sumL += 4036 * E * Math.sin(2 * D - M + Mp);
  sumL += 3994 * Math.sin(2 * D + 2 * Mp);
  sumL += 3861 * Math.sin(4 * D);
  sumL += 3665 * Math.sin(2 * D - 3 * Mp);
  sumL += -2689 * E * Math.sin(M - 2 * Mp);
  sumL += -2602 * Math.sin(2 * D - Mp + 2 * F);
  sumL += 2390 * E * Math.sin(2 * D - M - 2 * Mp);
  sumL += -2348 * Math.sin(D + Mp);
  sumL += 2236 * E2 * Math.sin(2 * D - 2 * M);
  sumL += -2120 * E * Math.sin(M + 2 * Mp);
  sumL += -2069 * E2 * Math.sin(2 * M);
  sumL += 2048 * E2 * Math.sin(2 * D - 2 * M - Mp);
  sumL += -1773 * Math.sin(2 * D + Mp - 2 * F);
  sumL += -1595 * Math.sin(2 * D + 2 * F);
  sumL += 1215 * E * Math.sin(4 * D - M - Mp);
  sumL += -1110 * Math.sin(2 * Mp + 2 * F);
  sumL += -892 * Math.sin(3 * D - Mp);
  sumL += -810 * E * Math.sin(2 * D + M + Mp);
  sumL += 759 * E * Math.sin(4 * D - M - 2 * Mp);
  sumL += -713 * E2 * Math.sin(2 * M - Mp);
  sumL += -700 * E2 * Math.sin(2 * D + 2 * M - Mp);
  sumL += 691 * E * Math.sin(2 * D + M - 2 * Mp);
  sumL += 596 * E * Math.sin(2 * D - M - 2 * F);
  sumL += 549 * Math.sin(4 * D + Mp);
  sumL += 537 * Math.sin(4 * Mp);
  sumL += 520 * E * Math.sin(4 * D - M);
  sumL += -487 * Math.sin(D - 2 * Mp);
  sumL += -399 * E * Math.sin(2 * D + M - 2 * F);
  sumL += -381 * Math.sin(2 * Mp - 2 * F);
  sumL += 351 * E * Math.sin(D + M + Mp);
  sumL += -340 * Math.sin(3 * D - 2 * Mp);
  sumL += 330 * Math.sin(4 * D - 3 * Mp);
  sumL += 327 * E * Math.sin(2 * D - M + 2 * Mp);
  sumL += -323 * E2 * Math.sin(2 * M + Mp);
  sumL += 299 * E * Math.sin(D + M - Mp);
  sumL += 294 * Math.sin(2 * D + 3 * Mp);
  
  // Additional corrections
  sumL += 3958 * Math.sin(A1r);
  sumL += 1962 * Math.sin(toRad(Lp % 360) - F);
  sumL += 318 * Math.sin(A2r);
  
  // Final longitude
  let longitude = (Lp + sumL / 1000000) % 360;
  if (longitude < 0) longitude += 360;
  
  return longitude;
}

// Get zodiac sign from ecliptic longitude
function getZodiacFromLongitude(longitude: number): { name: string; emoji: string; degree: number } {
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;
  const sign = ZODIAC_SIGNS[signIndex];
  return { 
    name: sign.name, 
    emoji: sign.emoji, 
    degree: degreeInSign 
  };
}

// Get moon mansion from ecliptic longitude (28 mansions, starting from 0° Aries)
function getMansionFromLongitude(longitude: number): number {
  const mansionSize = 360 / 28; // ~12.857 degrees each
  const mansion = Math.floor(longitude / mansionSize) + 1;
  return mansion > 28 ? 1 : mansion;
}

// Calculate mansion timing with precision
function getMansionTiming(date: Date, mansion: number): { start: Date; end: Date } {
  const mansionSize = 360 / 28;
  const mansionStartDeg = (mansion - 1) * mansionSize;
  const mansionEndDeg = mansion * mansionSize;
  
  // Average moon speed: ~13.176 degrees per day
  const avgMoonSpeed = 13.176; // degrees per day
  
  const currentLong = getMoonLongitude(date);
  
  // Calculate degrees traveled since mansion start
  let degreesSinceStart = currentLong - mansionStartDeg;
  if (degreesSinceStart < 0) degreesSinceStart += 360;
  if (degreesSinceStart > mansionSize) degreesSinceStart = degreesSinceStart % mansionSize;
  
  // Calculate degrees until mansion end
  let degreesToEnd = mansionEndDeg - currentLong;
  if (degreesToEnd < 0) degreesToEnd += 360;
  if (degreesToEnd > mansionSize) degreesToEnd = mansionSize - degreesSinceStart;
  
  // Convert to hours
  const hoursSinceStart = (degreesSinceStart / avgMoonSpeed) * 24;
  const hoursToEnd = (degreesToEnd / avgMoonSpeed) * 24;
  
  const start = new Date(date.getTime() - hoursSinceStart * 60 * 60 * 1000);
  const end = new Date(date.getTime() + hoursToEnd * 60 * 60 * 1000);
  
  return { start, end };
}

// Get moon phase name and emoji from phase value (0-1)
function getPhaseDetails(phase: number): { name: string; emoji: string } {
  // phase: 0 = new moon, 0.25 = first quarter, 0.5 = full moon, 0.75 = last quarter
  if (phase < 0.0335) return { name: "New Moon", emoji: "🌑" };
  if (phase < 0.2165) return { name: "Waxing Crescent", emoji: "🌒" };
  if (phase < 0.2835) return { name: "First Quarter", emoji: "🌓" };
  if (phase < 0.4665) return { name: "Waxing Gibbous", emoji: "🌔" };
  if (phase < 0.5335) return { name: "Full Moon", emoji: "🌕" };
  if (phase < 0.7165) return { name: "Waning Gibbous", emoji: "🌖" };
  if (phase < 0.7835) return { name: "Last Quarter", emoji: "🌗" };
  if (phase < 0.9665) return { name: "Waning Crescent", emoji: "🌘" };
  return { name: "New Moon", emoji: "🌑" };
}

// Find next major phase time
function getNextPhaseTime(date: Date, currentPhase: number): Date {
  const synodicMonth = 29.530588853; // days
  
  // Determine which major phase is next
  let targetPhase: number;
  if (currentPhase < 0.25) targetPhase = 0.25; // First Quarter
  else if (currentPhase < 0.5) targetPhase = 0.5; // Full Moon
  else if (currentPhase < 0.75) targetPhase = 0.75; // Last Quarter
  else targetPhase = 1.0; // New Moon
  
  // Calculate days until target phase
  let daysToPhase = (targetPhase - currentPhase) * synodicMonth;
  if (daysToPhase < 0) daysToPhase += synodicMonth;
  
  return new Date(date.getTime() + daysToPhase * 24 * 60 * 60 * 1000);
}

// Void of Course calculation
// VOC occurs when moon makes its last major aspect before leaving a sign
function getVoidOfCourse(date: Date): { isVoid: boolean; start: Date | null; end: Date | null } {
  const longitude = getMoonLongitude(date);
  const degreeInSign = longitude % 30;
  
  // Simplified: VOC typically in last 2-3 degrees of sign before entering new sign
  // More accurate would require calculating aspects to planets
  const vocThreshold = 27; // VOC starts at 27° of sign (last 3 degrees)
  
  if (degreeInSign >= vocThreshold) {
    const avgMoonSpeed = 13.176 / 24; // degrees per hour
    const degreesLeft = 30 - degreeInSign;
    const hoursToEnd = degreesLeft / avgMoonSpeed;
    const hoursStarted = (degreeInSign - vocThreshold) / avgMoonSpeed;
    
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
  // Retrograde periods for 2024-2027 (accurate data)
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
  // Use SunCalc for accurate moon illumination and phase
  const illumination = SunCalc.getMoonIllumination(date);
  const phaseValue = illumination.phase; // 0-1 where 0 = new moon, 0.5 = full moon
  const fractionIlluminated = illumination.fraction * 100;
  
  const phaseDetails = getPhaseDetails(phaseValue);
  
  // Calculate moon longitude for zodiac and mansion
  const longitude = getMoonLongitude(date);
  const zodiac = getZodiacFromLongitude(longitude);
  const mansionNum = getMansionFromLongitude(longitude);
  const mansion = MOON_MANSIONS[mansionNum - 1];
  const timing = getMansionTiming(date, mansionNum);
  const voc = getVoidOfCourse(date);
  
  // Get moon rise/set times for Casablanca
  const moonTimes = SunCalc.getMoonTimes(date, CASABLANCA_LAT, CASABLANCA_LNG);
  
  // Calculate next major phase time
  const phaseExactTime = getNextPhaseTime(date, phaseValue);

  return {
    phase: (phaseValue * 100).toFixed(1) + "%",
    phaseName: phaseDetails.name,
    phaseEmoji: phaseDetails.emoji,
    illumination: Math.round(fractionIlluminated),
    phaseExactTime,
    zodiacSign: zodiac.name,
    zodiacEmoji: zodiac.emoji,
    zodiacDegree: Math.round(zodiac.degree * 100) / 100,
    mansion: mansionNum,
    mansionName: mansion.name,
    mansionArabicName: mansion.arabicName,
    mansionStart: timing.start,
    mansionEnd: timing.end,
    voidOfCourse: voc.isVoid,
    vocStart: voc.start,
    vocEnd: voc.end,
    moonRise: moonTimes.rise || null,
    moonSet: moonTimes.set || null,
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
