// Moon calculation utilities with high-precision algorithms
// Based on Jean Meeus "Astronomical Algorithms"
import SunCalc from 'suncalc';

// Casablanca coordinates for reference timing
const CASABLANCA_LAT = 33.5731;
const CASABLANCA_LNG = -7.5898;

export interface MoonData {
  phase: string;
  phaseName: string;
  phaseEmoji: string;
  illumination: number;
  phaseExactTime: Date | null;
  phaseExactName: string;
  zodiacSign: string;
  zodiacEmoji: string;
  zodiacDegree: number;
  zodiacStart: Date;
  zodiacEnd: Date;
  mansion: number;
  mansionName: string;
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

// Moon mansion data with meanings - Updated with user-provided explanations
export const MOON_MANSIONS = [
  {
    number: 1,
    name: "Al-Sharatain",
    essence: "Movement, change, beginning. Burst of energy. Use of force.",
    goodFor: "Traveling, healing. Beginnings. Doing business. Gardening. Taking care of hair and nails.",
    badFor: "Love and friendship. Hiring employees."
  },
  {
    number: 2,
    name: "Al-Butain",
    essence: "Effort, courage, will and energy. Conflict.",
    goodFor: "Trade and finding treasures. Seeking favor from those in a position of authority. Sowing seeds. Traveling by land. Using fire, hunting.",
    badFor: "Love and friendship. Traveling by water. Being passive. Planting trees."
  },
  {
    number: 3,
    name: "Al-Thurayya",
    essence: "Abundance, prosperity, success, determination. Great capacity for work.",
    goodFor: "Art and creativity. Love. Using fire, hunting. Work and study. Business and commerce. Alchemy.",
    badFor: "Marriage, travel by water, friendship, gardening."
  },
  {
    number: 4,
    name: "Al-Dabaran",
    essence: "Enmity, struggle, conflict, argument, anger. Violent passion.",
    goodFor: "Work, craftsmanship, trade. Defeating enemies, removing obstacles.",
    badFor: "Marriage, friendship. Real estate, building. Wells and mines. Traveling by sea."
  },
  {
    number: 5,
    name: "Al-Haqa",
    essence: "Essentially benefic. Focus on mind and intellect.",
    goodFor: "Studies and other intellectual activities. Artistic activities. Seeking a favour from a superior. Traveling, especially by water. Return from a journey. Washing and cutting hair.",
    badFor: "Social activities, collective work."
  },
  {
    number: 6,
    name: "Al-Hana",
    essence: "Attraction, but also opposition.",
    goodFor: "Love and friendship, relationships. Business. Making alliances.",
    badFor: "Gardening. Healing."
  },
  {
    number: 7,
    name: "Al-Dhira",
    essence: "Success, abundance, trust.",
    goodFor: "Business and trade. Obtaining the favour of superiors. Love, friendship. Healing. Washing and cutting hair.",
    badFor: "Law and justice."
  },
  {
    number: 8,
    name: "Al-Nathrah",
    essence: "Love, power, victory.",
    goodFor: "Love and marriage. Family life, friendship. Achievement of a goal. Travel by land. Healing.",
    badFor: "Hiring employees."
  },
  {
    number: 9,
    name: "Al-Tarf",
    essence: "Disappointment, discord. Defence.",
    goodFor: "Defending yourself from attacks.",
    badFor: "Health. Travel. Love and friendship. Gardening."
  },
  {
    number: 10,
    name: "Al-Jabhah",
    essence: "Recovery. Benevolence. Help against enemies.",
    goodFor: "Love and friendship. Social activities. Studies. Health, spirituality. Building.",
    badFor: "Traveling. Abuse of drugs and medications."
  },
  {
    number: 11,
    name: "Al-Zubrah",
    essence: "Power, gain and respect.",
    goodFor: "Profit and gain. Marriage. Travel. Promotion, making a request to a person in authority. Gardening. Cutting hair. Building. Actions that require courage.",
    badFor: "Health of women."
  },
  {
    number: 12,
    name: "Al-Sarfah",
    essence: "Conflict and confrontation. Obstacles. Rich harvest.",
    goodFor: "Gardening, agriculture, building. Sending messages. Service and work for others.",
    badFor: "Marriage, personal relationships. Sea journeys."
  },
  {
    number: 13,
    name: "Al-Awwa",
    essence: "Achievement of desire. Increase. Benevolence.",
    goodFor: "Love, especially sexual love. Trade and finances. Beginning of creative projects. Traveling. Gardening. Healing. Building. Cutting and washing hair.",
    badFor: "Overeating."
  },
  {
    number: 14,
    name: "Al-Simak",
    essence: "Movement, improvement, transition.",
    goodFor: "Romantic love, friendship. Moving house, leaving a job or a relationship. Healing. Traveling by sea. Gardening.",
    badFor: "Marriage. Traveling by land."
  },
  {
    number: 15,
    name: "Al-Ghafr",
    essence: "Prosperity. Discord. Focus on the material.",
    goodFor: "Business, money, wealth. Treasure hunting.",
    badFor: "Love and romantic relationships. Family matters. Traveling."
  },
  {
    number: 16,
    name: "Al-Zubana",
    essence: "Wealth and prosperity, but no love.",
    goodFor: "Trade, business, wealth, prosperity.",
    badFor: "Love, relationships. Traveling. Healing. Gardening."
  },
  {
    number: 17,
    name: "Al-Iklil",
    essence: "Prevented loss. Friendship.",
    goodFor: "Financial security. Friendship. Love and marriage. Building. Promotion. Healing. Cutting hair.",
    badFor: "Traveling. Risky commercial operations."
  },
  {
    number: 18,
    name: "Al-Qalb",
    essence: "Impending danger. Defence.",
    goodFor: "Building, farming. Treatment of stomach. Exposing enemies.",
    badFor: "Almost anything. Family matters. Excessive eating, or eating an unknown food."
  },
  {
    number: 19,
    name: "Al-Shaulah",
    essence: "Battle and besiegement. Loss and sadness.",
    goodFor: "Farming and gardening. Aggressive actions. Hunting.",
    badFor: "Business and commerce. Friendship. Family matters. Traveling by sea."
  },
  {
    number: 20,
    name: "Al-Na'am",
    essence: "Concentrated and controlled energy. Passions.",
    goodFor: "Travelling by land, collective effort and work. Dealing with animals, hunting. Building.",
    badFor: "Marriage. Financial matters."
  },
  {
    number: 21,
    name: "Al-Baldah",
    essence: "Enmity, argument and conflict.",
    goodFor: "Farming and gardening, building. Healing. Travel. Earnings.",
    badFor: "Marriage and personal relationships. Hiring employees."
  },
  {
    number: 22,
    name: "Sa'd Al-Dhabih",
    essence: "Speed, escape. Personal power.",
    goodFor: "Healing. Traveling. Escaping from difficult situations.",
    badFor: "Marriage. Financial matters, trade. Hiring employees."
  },
  {
    number: 23,
    name: "Sa'd Bula",
    essence: "Conflict, separation, freedom, healing.",
    goodFor: "Healing. Divorce. Obtaining freedom.",
    badFor: "Marriage and personal relationships."
  },
  {
    number: 24,
    name: "Sa'ad Al-Su'ud",
    essence: "Nurture and nutrition. Fulfilment.",
    goodFor: "Starting a new project. Love and marriage. Increasing income, commerce and finances. Building.",
    badFor: "Those in power. Travel by water."
  },
  {
    number: 25,
    name: "Sa'd Al-Akhbiyah",
    essence: "Growth and protection. Revenge.",
    goodFor: "Farming and gardening, protection of plants and crops. Studies and intellectual activities.",
    badFor: "Friendship, marriage. Conception and pregnancy."
  },
  {
    number: 26,
    name: "Al Fargh Al-Awwal",
    essence: "Love and affection. Union.",
    goodFor: "Love and marriage, friendship. Health and healing. Traveling by land. Farming and gardening. Commerce.",
    badFor: "Sea journeys. Building."
  },
  {
    number: 27,
    name: "Al Fargh Al-Thani",
    essence: "Income, connection, mischief.",
    goodFor: "Business and commerce. Healing. Farming and gardening.",
    badFor: "Building. Travel by sea. Starting a new project."
  },
  {
    number: 28,
    name: "Batn Al-Hut",
    essence: "Guidance and completion. Fruition.",
    goodFor: "Marriage. Business and commerce. Farming and gardening. Traveling.",
    badFor: "Health."
  },
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
  
  // Longitude perturbations (main terms)
  let sumL = 0;
  
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

// Binary search to find exact time when moon crosses a specific longitude
function findLongitudeCrossing(targetLong: number, startDate: Date, direction: 'forward' | 'backward', maxHours: number = 72): Date {
  let dt = new Date(startDate);
  const step = direction === 'forward' ? 1 : -1; // hour step
  
  // Find approximate crossing with hourly steps
  let prevLong = getMoonLongitude(dt);
  for (let i = 0; i < maxHours; i++) {
    dt = new Date(dt.getTime() + step * 60 * 60 * 1000);
    const currLong = getMoonLongitude(dt);
    
    // Check if we crossed the target
    const crossed = direction === 'forward' 
      ? (prevLong < targetLong && currLong >= targetLong) || (prevLong > 300 && currLong < 60 && targetLong < 60)
      : (prevLong > targetLong && currLong <= targetLong) || (prevLong < 60 && currLong > 300 && targetLong > 300);
    
    if (crossed) {
      // Refine with binary search
      let low = new Date(dt.getTime() - step * 60 * 60 * 1000);
      let high = dt;
      if (direction === 'backward') [low, high] = [high, low];
      
      for (let j = 0; j < 10; j++) { // ~3 second precision
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        
        // Handle wraparound at 360°
        let adjustedMid = midLong;
        let adjustedTarget = targetLong;
        if (targetLong < 30 && midLong > 330) adjustedMid -= 360;
        if (targetLong > 330 && midLong < 30) adjustedTarget -= 360;
        
        if (adjustedMid < adjustedTarget) {
          low = mid;
        } else {
          high = mid;
        }
      }
      
      return new Date((low.getTime() + high.getTime()) / 2);
    }
    
    prevLong = currLong;
  }
  
  return dt;
}

// Get zodiac sign from ecliptic longitude
function getZodiacFromLongitude(longitude: number): { name: string; emoji: string; degree: number; signIndex: number } {
  const signIndex = Math.floor(longitude / 30);
  const degreeInSign = longitude % 30;
  const sign = ZODIAC_SIGNS[signIndex];
  return { 
    name: sign.name, 
    emoji: sign.emoji, 
    degree: degreeInSign,
    signIndex
  };
}

// Get moon mansion from ecliptic longitude (28 mansions, starting from 0° Aries)
function getMansionFromLongitude(longitude: number): number {
  const mansionSize = 360 / 28; // ~12.857 degrees each
  const mansion = Math.floor(longitude / mansionSize) + 1;
  return mansion > 28 ? 1 : mansion;
}

// Calculate exact mansion timing using binary search
function getMansionTiming(date: Date, mansion: number): { start: Date; end: Date } {
  const mansionSize = 360 / 28;
  const mansionStartDeg = (mansion - 1) * mansionSize;
  const mansionEndDeg = mansion * mansionSize;
  
  const start = findLongitudeCrossing(mansionStartDeg, date, 'backward');
  const end = findLongitudeCrossing(mansionEndDeg, date, 'forward');
  
  return { start, end };
}

// Calculate zodiac sign timing using binary search
function getZodiacTiming(date: Date, signIndex: number): { start: Date; end: Date } {
  const signStartDeg = signIndex * 30;
  const signEndDeg = (signIndex + 1) * 30;
  
  const start = findLongitudeCrossing(signStartDeg, date, 'backward');
  const end = findLongitudeCrossing(signEndDeg, date, 'forward');
  
  return { start, end };
}

// Get moon phase name and emoji from phase value (0-1)
function getPhaseDetails(phase: number): { name: string; emoji: string } {
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

// Find exact major phase times using Meeus lunar phase algorithm
function findExactPhaseTime(date: Date): { time: Date | null; name: string } {
  // Calculate the approximate lunation number (k)
  // k = 0 corresponds to the New Moon of January 6, 2000
  const year = date.getUTCFullYear() + (date.getUTCMonth() + date.getUTCDate() / 30) / 12;
  const k0 = (year - 2000) * 12.3685;
  
  // Check each phase around the current date
  const majorPhases = [
    { offset: 0, name: "New Moon" },
    { offset: 0.25, name: "First Quarter" },
    { offset: 0.5, name: "Full Moon" },
    { offset: 0.75, name: "Last Quarter" },
  ];
  
  let closestPhase: { time: Date; name: string } | null = null;
  let closestDiff = Infinity;
  
  // Check a range of lunations
  for (let kBase = Math.floor(k0) - 1; kBase <= Math.floor(k0) + 1; kBase++) {
    for (const phase of majorPhases) {
      const k = kBase + phase.offset;
      const phaseTime = calculatePhaseTime(k);
      
      const diff = Math.abs(phaseTime.getTime() - date.getTime());
      const dayDiff = diff / (24 * 60 * 60 * 1000);
      
      // Only consider phases within 1.5 days
      if (dayDiff <= 1.5 && diff < closestDiff) {
        closestDiff = diff;
        closestPhase = { time: phaseTime, name: phase.name };
      }
    }
  }
  
  return closestPhase || { time: null, name: "" };
}

// Calculate exact phase time using Meeus algorithm
function calculatePhaseTime(k: number): Date {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;
  
  // Mean phase time
  let JDE = 2451550.09766 + 29.530588861 * k
            + 0.00015437 * T2
            - 0.000000150 * T3
            + 0.00000000073 * T4;
  
  // Sun's mean anomaly
  const M = toRad(2.5534 + 29.10535670 * k - 0.0000014 * T2 - 0.00000011 * T3);
  
  // Moon's mean anomaly
  const Mp = toRad(201.5643 + 385.81693528 * k + 0.0107582 * T2 + 0.00001238 * T3 - 0.000000058 * T4);
  
  // Moon's argument of latitude
  const F = toRad(160.7108 + 390.67050284 * k - 0.0016118 * T2 - 0.00000227 * T3 + 0.000000011 * T4);
  
  // Longitude of ascending node
  const Om = toRad(124.7746 - 1.56375588 * k + 0.0020672 * T2 + 0.00000215 * T3);
  
  // Eccentricity correction
  const E = 1 - 0.002516 * T - 0.0000074 * T2;
  
  // Determine which phase (0 = new, 0.25 = first quarter, 0.5 = full, 0.75 = last quarter)
  const phaseType = (k % 1 + 1) % 1;
  
  let correction = 0;
  
  if (phaseType < 0.01 || phaseType > 0.99) {
    // New Moon corrections
    correction = -0.40720 * Math.sin(Mp)
                 + 0.17241 * E * Math.sin(M)
                 + 0.01608 * Math.sin(2 * Mp)
                 + 0.01039 * Math.sin(2 * F)
                 + 0.00739 * E * Math.sin(Mp - M)
                 - 0.00514 * E * Math.sin(Mp + M)
                 + 0.00208 * E * E * Math.sin(2 * M)
                 - 0.00111 * Math.sin(Mp - 2 * F)
                 - 0.00057 * Math.sin(Mp + 2 * F)
                 + 0.00056 * E * Math.sin(2 * Mp + M)
                 - 0.00042 * Math.sin(3 * Mp)
                 + 0.00042 * E * Math.sin(M + 2 * F)
                 + 0.00038 * E * Math.sin(M - 2 * F)
                 - 0.00024 * E * Math.sin(2 * Mp - M);
  } else if (Math.abs(phaseType - 0.5) < 0.01) {
    // Full Moon corrections
    correction = -0.40614 * Math.sin(Mp)
                 + 0.17302 * E * Math.sin(M)
                 + 0.01614 * Math.sin(2 * Mp)
                 + 0.01043 * Math.sin(2 * F)
                 + 0.00734 * E * Math.sin(Mp - M)
                 - 0.00515 * E * Math.sin(Mp + M)
                 + 0.00209 * E * E * Math.sin(2 * M)
                 - 0.00111 * Math.sin(Mp - 2 * F)
                 - 0.00057 * Math.sin(Mp + 2 * F)
                 + 0.00056 * E * Math.sin(2 * Mp + M)
                 - 0.00042 * Math.sin(3 * Mp)
                 + 0.00042 * E * Math.sin(M + 2 * F)
                 + 0.00038 * E * Math.sin(M - 2 * F)
                 - 0.00024 * E * Math.sin(2 * Mp - M);
  } else {
    // Quarter phase corrections
    correction = -0.62801 * Math.sin(Mp)
                 + 0.17172 * E * Math.sin(M)
                 - 0.01183 * E * Math.sin(Mp + M)
                 + 0.00862 * Math.sin(2 * Mp)
                 + 0.00804 * Math.sin(2 * F)
                 + 0.00454 * E * Math.sin(Mp - M)
                 + 0.00204 * E * E * Math.sin(2 * M)
                 - 0.00180 * Math.sin(Mp - 2 * F)
                 - 0.00070 * Math.sin(Mp + 2 * F)
                 - 0.00040 * Math.sin(3 * Mp)
                 - 0.00034 * E * Math.sin(2 * Mp - M)
                 + 0.00032 * E * Math.sin(M + 2 * F)
                 + 0.00032 * E * Math.sin(M - 2 * F);
    
    // Additional correction for quarters
    const W = 0.00306 - 0.00038 * E * Math.cos(M) + 0.00026 * Math.cos(Mp)
              - 0.00002 * Math.cos(Mp - M) + 0.00002 * Math.cos(Mp + M)
              + 0.00002 * Math.cos(2 * F);
    
    if (Math.abs(phaseType - 0.25) < 0.01) {
      correction += W;
    } else {
      correction -= W;
    }
  }
  
  JDE += correction;
  
  // Convert Julian Date to JavaScript Date
  const unixTime = (JDE - 2440587.5) * 86400000;
  return new Date(unixTime);
}

// Void of Course calculation - VOC starts when moon makes last major aspect 
// and ends when moon enters the next sign
function getVoidOfCourse(date: Date, signEndTime: Date): { isVoid: boolean; start: Date | null; end: Date | null } {
  const longitude = getMoonLongitude(date);
  const degreeInSign = longitude % 30;
  
  // Major aspects occur at specific degrees within a sign
  // When moon passes the last major aspect point before leaving the sign, VOC begins
  // Major aspect points in a sign: 0° (conjunction/opposition), ~4° (sextile/trine to next),
  // ~8° (square), ~10° (trine), etc.
  
  // Find VOC start based on when the moon made its last major aspect
  // This typically happens in the final degrees of a sign
  // We calculate backwards from the sign change to find the last aspect
  
  const signEndLong = Math.ceil(longitude / 30) * 30;
  const currentSign = Math.floor(longitude / 30);
  
  // Check if we're currently in VOC by examining degree in sign
  // VOC typically begins after 27-28° when moon has passed last aspects
  const vocStartDegreeInSign = 27 + (currentSign % 3); // Varies by sign somewhat
  
  if (degreeInSign >= vocStartDegreeInSign) {
    // Find exact VOC start time
    const vocStartLong = currentSign * 30 + vocStartDegreeInSign;
    const vocStart = findLongitudeCrossing(vocStartLong, date, 'backward');
    
    return {
      isVoid: true,
      start: vocStart,
      end: signEndTime,
    };
  }
  
  // Check if date falls within a VOC period that started earlier
  // Look back up to 24 hours for a VOC period
  const lookbackDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  const lookbackLong = getMoonLongitude(lookbackDate);
  const lookbackSign = Math.floor(lookbackLong / 30);
  
  if (lookbackSign !== currentSign) {
    // Sign changed within last 24 hours - check if we're still in VOC from previous sign
    const prevSignEnd = findLongitudeCrossing(currentSign * 30, date, 'backward');
    if (date.getTime() < signEndTime.getTime() && date.getTime() >= prevSignEnd.getTime()) {
      // Not in VOC - we're in a new sign
      return { isVoid: false, start: null, end: null };
    }
  }
  
  return { isVoid: false, start: null, end: null };
}

// Get retrograde planets for a given date
export function getRetrogradePlanets(date: Date): RetroPlanet[] {
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
  const phaseValue = illumination.phase;
  const fractionIlluminated = illumination.fraction * 100;
  
  const phaseDetails = getPhaseDetails(phaseValue);
  
  // Calculate moon longitude for zodiac and mansion
  const longitude = getMoonLongitude(date);
  const zodiac = getZodiacFromLongitude(longitude);
  const mansionNum = getMansionFromLongitude(longitude);
  const mansion = MOON_MANSIONS[mansionNum - 1];
  
  // Calculate exact timings
  const mansionTiming = getMansionTiming(date, mansionNum);
  const zodiacTiming = getZodiacTiming(date, zodiac.signIndex);
  const voc = getVoidOfCourse(date, zodiacTiming.end);
  
  // Get moon rise/set times for Casablanca
  const moonTimes = SunCalc.getMoonTimes(date, CASABLANCA_LAT, CASABLANCA_LNG);
  
  // Find exact major phase time if applicable
  const exactPhase = findExactPhaseTime(date);

  return {
    phase: (phaseValue * 100).toFixed(1) + "%",
    phaseName: phaseDetails.name,
    phaseEmoji: phaseDetails.emoji,
    illumination: Math.round(fractionIlluminated),
    phaseExactTime: exactPhase.time,
    phaseExactName: exactPhase.name,
    zodiacSign: zodiac.name,
    zodiacEmoji: zodiac.emoji,
    zodiacDegree: Math.round(zodiac.degree * 100) / 100,
    zodiacStart: zodiacTiming.start,
    zodiacEnd: zodiacTiming.end,
    mansion: mansionNum,
    mansionName: mansion.name,
    mansionStart: mansionTiming.start,
    mansionEnd: mansionTiming.end,
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

// Format date with short format for timing display
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
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
