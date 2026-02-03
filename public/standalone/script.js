// Moon Mansions Data
const MOON_MANSIONS = [
  { number: 1, name: "Al-Sharatain", startDegree: 0, essence: "Movement, change, beginning. Burst of energy. Use of force.", goodFor: "Traveling, healing. Beginnings. Doing business. Gardening. Taking care of hair and nails.", badFor: "Love and friendship. Hiring employees." },
  { number: 2, name: "Al-Butain", startDegree: 12.857, essence: "Effort, courage, will and energy. Conflict.", goodFor: "Trade and finding treasures. Seeking favor from those in a position of authority. Sowing seeds. Traveling by land. Using fire, hunting.", badFor: "Love and friendship. Traveling by water. Being passive. Planting trees." },
  { number: 3, name: "Al-Thurayya", startDegree: 25.714, essence: "Abundance, prosperity, success, determination. Great capacity for work.", goodFor: "Art and creativity. Love. Using fire, hunting. Work and study. Business and commerce. Alchemy.", badFor: "Marriage, travel by water, friendship, gardening." },
  { number: 4, name: "Al-Dabaran", startDegree: 38.571, essence: "Enmity, struggle, conflict, argument, anger. Violent passion.", goodFor: "Work, craftsmanship, trade. Defeating enemies, removing obstacles.", badFor: "Marriage, friendship. Real estate, building. Wells and mines. Traveling by sea." },
  { number: 5, name: "Al-Haqa", startDegree: 51.429, essence: "Essentially benefic. Focus on mind and intellect.", goodFor: "Studies and other intellectual activities. Artistic activities. Seeking a favour from a superior. Traveling, especially by water. Return from a journey. Washing and cutting hair.", badFor: "Social activities, collective work." },
  { number: 6, name: "Al-Hana", startDegree: 64.286, essence: "Attraction, but also opposition.", goodFor: "Love and friendship, relationships. Business. Making alliances.", badFor: "Gardening. Healing." },
  { number: 7, name: "Al-Dhira", startDegree: 77.143, essence: "Success, abundance, trust.", goodFor: "Business and trade. Obtaining the favour of superiors. Love, friendship. Healing. Washing and cutting hair.", badFor: "Law and justice." },
  { number: 8, name: "Al-Nathrah", startDegree: 90, essence: "Love, power, victory.", goodFor: "Love and marriage. Family life, friendship. Achievement of a goal. Travel by land. Healing.", badFor: "Hiring employees." },
  { number: 9, name: "Al-Tarf", startDegree: 102.857, essence: "Disappointment, discord. Defence.", goodFor: "Defending yourself from attacks.", badFor: "Health. Travel. Love and friendship. Gardening." },
  { number: 10, name: "Al-Jabhah", startDegree: 115.714, essence: "Recovery. Benevolence. Help against enemies.", goodFor: "Love and friendship. Social activities. Studies. Health, spirituality. Building.", badFor: "Traveling. Abuse of drugs and medications." },
  { number: 11, name: "Al-Zubrah", startDegree: 128.571, essence: "Power, gain and respect.", goodFor: "Profit and gain. Marriage. Travel. Promotion, making a request to a person in authority. Gardening. Cutting hair. Building. Actions that require courage.", badFor: "Health of women." },
  { number: 12, name: "Al-Sarfah", startDegree: 141.429, essence: "Conflict and confrontation. Obstacles. Rich harvest.", goodFor: "Gardening, agriculture, building. Sending messages. Service and work for others.", badFor: "Marriage, personal relationships. Sea journeys." },
  { number: 13, name: "Al-Awwa", startDegree: 154.286, essence: "Achievement of desire. Increase. Benevolence.", goodFor: "Love, especially sexual love. Trade and finances. Beginning of creative projects. Traveling. Gardening. Healing. Building. Cutting and washing hair.", badFor: "Overeating." },
  { number: 14, name: "Al-Simak", startDegree: 167.143, essence: "Movement, improvement, transition.", goodFor: "Romantic love, friendship. Moving house, leaving a job or a relationship. Healing. Traveling by sea. Gardening.", badFor: "Marriage. Traveling by land." },
  { number: 15, name: "Al-Ghafr", startDegree: 180, essence: "Prosperity. Discord. Focus on the material.", goodFor: "Business, money, wealth. Treasure hunting.", badFor: "Love and romantic relationships. Family matters. Traveling." },
  { number: 16, name: "Al-Zubana", startDegree: 192.857, essence: "Wealth and prosperity, but no love.", goodFor: "Trade, business, wealth, prosperity.", badFor: "Love, relationships. Traveling. Healing. Gardening." },
  { number: 17, name: "Al-Iklil", startDegree: 205.714, essence: "Prevented loss. Friendship.", goodFor: "Financial security. Friendship. Love and marriage. Building. Promotion. Healing. Cutting hair.", badFor: "Traveling. Risky commercial operations." },
  { number: 18, name: "Al-Qalb", startDegree: 218.571, essence: "Impending danger. Defence.", goodFor: "Building, farming. Treatment of stomach. Exposing enemies.", badFor: "Almost anything. Family matters. Excessive eating, or eating an unknown food." },
  { number: 19, name: "Al-Shaulah", startDegree: 231.429, essence: "Battle and besiegement. Loss and sadness.", goodFor: "Farming and gardening. Aggressive actions. Hunting.", badFor: "Business and commerce. Friendship. Family matters. Traveling by sea." },
  { number: 20, name: "Al-Na'am", startDegree: 244.286, essence: "Concentrated and controlled energy. Passions.", goodFor: "Travelling by land, collective effort and work. Dealing with animals, hunting. Building.", badFor: "Marriage. Financial matters." },
  { number: 21, name: "Al-Baldah", startDegree: 257.143, essence: "Enmity, argument and conflict.", goodFor: "Farming and gardening, building. Healing. Travel. Earnings.", badFor: "Marriage and personal relationships. Hiring employees." },
  { number: 22, name: "Sa'd Al-Dhabih", startDegree: 270, essence: "Speed, escape. Personal power.", goodFor: "Healing. Traveling. Escaping from difficult situations.", badFor: "Marriage. Financial matters, trade. Hiring employees." },
  { number: 23, name: "Sa'd Bula", startDegree: 282.857, essence: "Conflict, separation, freedom, healing.", goodFor: "Healing. Divorce. Obtaining freedom.", badFor: "Marriage and personal relationships." },
  { number: 24, name: "Sa'ad Al-Su'ud", startDegree: 295.714, essence: "Nurture and nutrition. Fulfilment.", goodFor: "Starting a new project. Love and marriage. Increasing income, commerce and finances. Building.", badFor: "Those in power. Travel by water." },
  { number: 25, name: "Sa'd Al-Akhbiyah", startDegree: 308.571, essence: "Growth and protection. Revenge.", goodFor: "Farming and gardening, protection of plants and crops. Studies and intellectual activities.", badFor: "Friendship, marriage. Conception and pregnancy." },
  { number: 26, name: "Al Fargh Al-Awwal", startDegree: 321.429, essence: "Love and affection. Union.", goodFor: "Love and marriage, friendship. Health and healing. Traveling by land. Farming and gardening. Commerce.", badFor: "Sea journeys. Building." },
  { number: 27, name: "Al Fargh Al-Thani", startDegree: 334.286, essence: "Income, connection, mischief.", goodFor: "Business and commerce. Healing. Farming and gardening.", badFor: "Building. Travel by sea. Starting a new project." },
  { number: 28, name: "Batn Al-Hut", startDegree: 347.143, essence: "Guidance and completion. Fruition.", goodFor: "Marriage. Business and commerce. Farming and gardening. Traveling.", badFor: "Health." }
];

const ZODIAC_SIGNS = [
  { name: "Aries", emoji: "♈", element: "fire" },
  { name: "Taurus", emoji: "♉", element: "earth" },
  { name: "Gemini", emoji: "♊", element: "air" },
  { name: "Cancer", emoji: "♋", element: "water" },
  { name: "Leo", emoji: "♌", element: "fire" },
  { name: "Virgo", emoji: "♍", element: "earth" },
  { name: "Libra", emoji: "♎", element: "air" },
  { name: "Scorpio", emoji: "♏", element: "water" },
  { name: "Sagittarius", emoji: "♐", element: "fire" },
  { name: "Capricorn", emoji: "♑", element: "earth" },
  { name: "Aquarius", emoji: "♒", element: "air" },
  { name: "Pisces", emoji: "♓", element: "water" }
];

const ZODIAC_EXPLANATIONS = {
  "Aries": "An increase of activity, impetuosity, striving, and energetic action.\n\nThis Moon favors occupations which demand courage, decisiveness, swiftness and initiative, but anything which requires patience, diligence and diplomacy is likely to decline now.\n\nIt is a good time for athletics, and for solving problems by brainstorming.\n\nDental visits are not recommended on the Aries Moon.",
  "Taurus": "Patience, diligence, perseverance and practicality are on the increase.\n\nThe Moon in Taurus favors occupations which demand prolonged and persistent effort, but it is also good for complete rest in comfort and coziness.\n\nIt is a good time to treat plants. It is best to avoid undertaking anything which requires quickness, decisiveness and quick-wittedness.",
  "Gemini": "Sociability, cheerfulness and quick-wittedness are on the increase, and there is an interest in all kinds of information.\n\nThe Moon in Gemini favors study, intellectual pursuits, acquaintances, conferences and gatherings. However, heightened changeability and scattering your interests can prevent you from getting definite, tangible results.",
  "Cancer": "Increased emotions, vulnerability and touchiness.\n\nYour need for seclusion could become quite strong, and there is a desire to communicate only with those closest to you.\n\nIt is not a good idea to deal with large groups of people, or to appear on stage.\n\nYou may also want to care for others, or have others look after you.\n\nEmotional difficulties may also be an obstacle to business success.",
  "Leo": "The desire to be noticeable, appreciated, and to feel you are the centre of other people's attention will be dominant. Your emotions will be expressed vividly and openly.\n\nThis is a good time to perform and appear on stage, to play, create and do everything which inspires you and lets you express your inner self.",
  "Virgo": "Attention towards details is on the increase, with a tendency to fault-finding, cleanliness and neatness.\n\nIt is a good time to undertake routine, painstaking work, and to search for and correct errors.\n\nYour body may be more intolerant of low-grade food and harmful substances, and this is a good day to begin a diet.",
  "Libra": "Increased sociability, interest in new acquaintances, a desire for mutual understanding.\n\nPartnerships are in focus. Good for social gatherings, celebrations, business meetings and a romantic rendezvous.\n\nHowever, your ability to make decisions suffers because people are more prone to doubts and hesitation now.",
  "Scorpio": "An emotionally difficult time. There is increased jealousy, greediness, envy and other negative feelings. The colors of the world turn black and white.\n\nSexuality and sensuality go up and strong, powerful emotions run high, whilst diplomacy and tact will noticeably decline. However, it is a good time for any occupation which needs intensity and total devotion.",
  "Sagittarius": "Generosity, openness, optimism and the desire to give advice and share experience are all increased.\n\nThere is a heightened interest in travel and foreign countries, and any activities and recreations taking place in the open air.\n\nIt is a suitable time for large-scale plans but not for any occupations which require attention to detail.",
  "Capricorn": "There is an increase in formality, strictness and exactitude, with a tendency to reserve and distance.\n\nRules and regulations are dominant.\n\nIt is a suitable time for all activities which require extra responsibility and discipline, but you shouldn't rely on someone's receptivity or emotional pliability.",
  "Aquarius": "There is an increased interest in knowledge, and a need to communicate with like minded individuals.\n\nAt the same time, your desire for freedom and independence is strengthened, and you will want to establish your own rules.\n\nIt is a good period for reading, study and scientific pursuits. However, jobs which bore you, will go from bad to worse now.",
  "Pisces": "This brings an increase of emotions and a receptivity to other peoples' feelings.\n\nYour emotions predominate over common sense, so it is better to do things which require imagination and inspiration, rather than reason and cool logic.\n\nYour body may be more responsive than usual to alcohol, drugs and medicines, so beware of overdoses."
};

const PHASE_EXPLANATIONS = {
  "New Moon": "A time of lull, the completion of old activities and the preparation of new ones. Everything is in decline now - life energy, emotions and physiological activity.\n\nFor this reason, any projects which require significant effort are not advisable now. This is an inauspicious time for people with low blood pressure and those prone to depression.",
  "Waxing Crescent": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings.\n\nA growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
  "First Quarter": "A stressful period of time when there is a strong desire to accomplish something, to change, and to show oneself. However, before undertaking anything, first stop and think: is it really needed?\n\nObstacles multiply at this time and contradictions sharpen. Plans developed under this influence often turn out to be unrealistic because people tend to overvalue their abilities.",
  "Waxing Gibbous": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings.\n\nA growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
  "Full Moon": "A period of excess when everything in nature brims over. Emotions, psychic energy, physiological activity - everything is at its maximum.\n\nThis is the time of increased creativity, but with those who are prone to high blood pressure, epilepsy or over excitement, this Full Moon period can be problematic.",
  "Waning Gibbous": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable.\n\nCutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground.",
  "Last Quarter": "A stressful and unsettled period. Your ambitions are being stirred up and there is a desire to do something very important and show everyone how cool you are.\n\nHowever, the best way forward is to think thoroughly before doing anything and to direct your energy towards jobs planned earlier, rather than ideas which have just sprung into your head now.",
  "Waning Crescent": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable.\n\nCutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground."
};

const VOC_EXPLANATION = "It is believed that anything undertaken during such a period will bring no result.\n\nOn the positive side, if something risky or difficult is undertaken, something where other people can create a problem or interrupt you, this time seems to be beneficial, because those who might create a problem can do nothing against you.\n\nThe last aspect shows the mood, or the flavor, of the void-of-course period.\n\nDepending on it, the period can be more positive, or more stressful.";

const MERCURY_RETROGRADE_EXPLANATION = "Mercury is retrograde.\n\nIt isn't a good time for decisions and agreements, they might be like a house built on sand. People are prone to mistakes and errors. Do not buy Mercury-related things, like computers or office equipment, as they can have hidden defects.\n\nOn the other hand, this is a good time for finding new, alternative approaches, even if they would normally seem totally crazy to you.";

const MERCURY_DIRECT_EXPLANATION = "Mercury is direct.\n\nSo you should not blame it for your mistakes!";

// Accurate 2025 Planetary Retrograde Data
const RETROGRADE_PLANETS = [
  // Mercury Retrogrades 2025
  { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 2, 15), retroEnd: new Date(2025, 3, 7) },
  { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 6, 18), retroEnd: new Date(2025, 7, 11) },
  { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 10, 9), retroEnd: new Date(2025, 10, 29) },
  // Venus Retrograde 2025
  { planet: "Venus", emoji: "♀", retroStart: new Date(2025, 2, 2), retroEnd: new Date(2025, 3, 13) },
  // Mars Retrograde (extends from 2024 into 2025)
  { planet: "Mars", emoji: "♂", retroStart: new Date(2024, 11, 6), retroEnd: new Date(2025, 1, 24) },
  // Jupiter Retrograde 2025
  { planet: "Jupiter", emoji: "♃", retroStart: new Date(2025, 10, 11), retroEnd: new Date(2026, 2, 10) },
  // Saturn Retrograde 2025
  { planet: "Saturn", emoji: "♄", retroStart: new Date(2025, 6, 13), retroEnd: new Date(2025, 10, 28) },
  // Uranus Retrograde 2025
  { planet: "Uranus", emoji: "⛢", retroStart: new Date(2025, 8, 6), retroEnd: new Date(2026, 1, 30) },
  // Neptune Retrograde 2025
  { planet: "Neptune", emoji: "♆", retroStart: new Date(2025, 6, 4), retroEnd: new Date(2025, 11, 10) },
  // Pluto Retrograde 2025
  { planet: "Pluto", emoji: "♇", retroStart: new Date(2025, 4, 4), retroEnd: new Date(2025, 9, 14) }
];

// Default coordinates - will be updated with IP geolocation
let LAT = 33.5731;
let LON = -7.5898;
let locationName = "Detecting...";

// State
let selectedDate = new Date();
let currentMonth = new Date();

// IP Geolocation
async function initGeolocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.latitude && data.longitude) {
      LAT = data.latitude;
      LON = data.longitude;
      locationName = data.city ? `${data.city}, ${data.country_name}` : data.country_name;
      document.getElementById('location-display').textContent = `📍 ${locationName}`;
      updateDailyView();
      updateMonthlyCalendar();
    }
  } catch (error) {
    console.log('Geolocation failed, using default location');
    locationName = "Casablanca, Morocco";
    document.getElementById('location-display').textContent = `📍 ${locationName}`;
  }
}

// Utility Functions
function toJulianDay(date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate() + (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) / 24;
  
  let jy = y;
  let jm = m;
  if (m <= 2) {
    jy -= 1;
    jm += 12;
  }
  
  const a = Math.floor(jy / 100);
  const b = 2 - a + Math.floor(a / 4);
  
  return Math.floor(365.25 * (jy + 4716)) + Math.floor(30.6001 * (jm + 1)) + d + b - 1524.5;
}

// High precision Moon longitude calculation
function getMoonLongitude(date) {
  const jd = toJulianDay(date);
  const T = (jd - 2451545.0) / 36525;
  
  // Mean elements with higher precision
  const Lp = (218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841 - T * T * T * T / 65194000) % 360;
  const D = (297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868 - T * T * T * T / 113065000) % 360;
  const M = (357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000) % 360;
  const Mp = (134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699 - T * T * T * T / 14712000) % 360;
  const F = (93.2720950 + 483202.0175233 * T - 0.0036539 * T * T - T * T * T / 3526000 + T * T * T * T / 863310000) % 360;
  
  // Additional arguments
  const A1 = (119.75 + 131.849 * T) % 360;
  const A2 = (53.09 + 479264.290 * T) % 360;
  const A3 = (313.45 + 481266.484 * T) % 360;
  const E = 1 - 0.002516 * T - 0.0000074 * T * T;
  
  const toRad = deg => deg * Math.PI / 180;
  
  // Main perturbations (extended series)
  let longitude = Lp;
  longitude += 6.288774 * Math.sin(toRad(Mp));
  longitude += 1.274027 * Math.sin(toRad(2 * D - Mp));
  longitude += 0.658314 * Math.sin(toRad(2 * D));
  longitude += 0.213618 * Math.sin(toRad(2 * Mp));
  longitude -= 0.185116 * E * Math.sin(toRad(M));
  longitude -= 0.114332 * Math.sin(toRad(2 * F));
  longitude += 0.058793 * Math.sin(toRad(2 * D - 2 * Mp));
  longitude += 0.057066 * E * Math.sin(toRad(2 * D - M - Mp));
  longitude += 0.053322 * Math.sin(toRad(2 * D + Mp));
  longitude += 0.045758 * E * Math.sin(toRad(2 * D - M));
  longitude -= 0.040923 * E * Math.sin(toRad(M - Mp));
  longitude -= 0.034720 * Math.sin(toRad(D));
  longitude -= 0.030383 * E * Math.sin(toRad(M + Mp));
  longitude += 0.015327 * Math.sin(toRad(2 * D - 2 * F));
  longitude -= 0.012528 * Math.sin(toRad(Mp + 2 * F));
  longitude += 0.010980 * Math.sin(toRad(Mp - 2 * F));
  longitude += 0.010675 * Math.sin(toRad(4 * D - Mp));
  longitude += 0.010034 * Math.sin(toRad(3 * Mp));
  longitude += 0.008548 * Math.sin(toRad(4 * D - 2 * Mp));
  longitude -= 0.007888 * E * Math.sin(toRad(2 * D + M - Mp));
  longitude -= 0.006766 * E * Math.sin(toRad(2 * D + M));
  longitude -= 0.005163 * Math.sin(toRad(Mp - D));
  longitude += 0.004987 * E * Math.sin(toRad(D + M));
  longitude += 0.004036 * E * Math.sin(toRad(2 * D - M + Mp));
  
  // Additional corrections
  longitude += 0.003861 * Math.sin(toRad(4 * D));
  longitude += 0.003665 * Math.sin(toRad(2 * D - 3 * Mp));
  longitude -= 0.002689 * E * Math.sin(toRad(M - 2 * Mp));
  longitude -= 0.002602 * Math.sin(toRad(2 * D - Mp + 2 * F));
  longitude += 0.002390 * E * Math.sin(toRad(2 * D - M - 2 * Mp));
  longitude -= 0.002348 * Math.sin(toRad(D + Mp));
  longitude += 0.002236 * E * E * Math.sin(toRad(2 * D - 2 * M));
  longitude -= 0.002120 * E * Math.sin(toRad(M + 2 * Mp));
  longitude -= 0.002069 * E * E * Math.sin(toRad(2 * M));
  
  // A1, A2, A3 corrections
  longitude += 0.003958 * Math.sin(toRad(A1));
  longitude += 0.001962 * Math.sin(toRad(Lp - F));
  longitude += 0.000318 * Math.sin(toRad(A2));
  
  return ((longitude % 360) + 360) % 360;
}

function getSunLongitude(date) {
  const jd = toJulianDay(date);
  const T = (jd - 2451545.0) / 36525;
  const L0 = (280.46646 + 36000.76983 * T + 0.0003032 * T * T) % 360;
  const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) % 360;
  const toRad = deg => deg * Math.PI / 180;
  const C = (1.914602 - 0.004817 * T) * Math.sin(toRad(M)) + 
            0.019993 * Math.sin(toRad(2 * M)) + 
            0.000289 * Math.sin(toRad(3 * M));
  return ((L0 + C) % 360 + 360) % 360;
}

function getMoonPhase(date) {
  const moonLong = getMoonLongitude(date);
  const sunLong = getSunLongitude(date);
  let phase = ((moonLong - sunLong) % 360 + 360) % 360;
  return phase;
}

function getIllumination(date) {
  const phase = getMoonPhase(date);
  const illumination = (1 - Math.cos(phase * Math.PI / 180)) / 2 * 100;
  return Math.round(illumination);
}

function getPhaseInfo(date) {
  const phase = getMoonPhase(date);
  
  if (phase < 11.25) return { name: "New Moon", emoji: "🌑", index: 0 };
  if (phase < 78.75) return { name: "Waxing Crescent", emoji: "🌒", index: 1 };
  if (phase < 101.25) return { name: "First Quarter", emoji: "🌓", index: 2 };
  if (phase < 168.75) return { name: "Waxing Gibbous", emoji: "🌔", index: 3 };
  if (phase < 191.25) return { name: "Full Moon", emoji: "🌕", index: 4 };
  if (phase < 258.75) return { name: "Waning Gibbous", emoji: "🌖", index: 5 };
  if (phase < 281.25) return { name: "Last Quarter", emoji: "🌗", index: 6 };
  if (phase < 348.75) return { name: "Waning Crescent", emoji: "🌘", index: 7 };
  return { name: "New Moon", emoji: "🌑", index: 0 };
}

function findExactPhaseTime(date, targetPhase) {
  const startSearch = new Date(date);
  startSearch.setDate(startSearch.getDate() - 15);
  
  let closestTime = null;
  let closestDiff = Infinity;
  
  for (let i = 0; i < 30 * 4; i++) {
    const checkTime = new Date(startSearch.getTime() + i * 6 * 60 * 60 * 1000);
    const phase = getMoonPhase(checkTime);
    let diff = Math.abs(phase - targetPhase);
    if (diff > 180) diff = 360 - diff;
    
    if (diff < closestDiff) {
      closestDiff = diff;
      closestTime = checkTime;
    }
  }
  
  if (closestTime) {
    let low = new Date(closestTime.getTime() - 6 * 60 * 60 * 1000);
    let high = new Date(closestTime.getTime() + 6 * 60 * 60 * 1000);
    
    for (let i = 0; i < 20; i++) {
      const mid = new Date((low.getTime() + high.getTime()) / 2);
      const phase = getMoonPhase(mid);
      let diff = phase - targetPhase;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      
      if (Math.abs(diff) < 0.001) {
        return mid;
      }
      
      if (diff > 0) {
        high = mid;
      } else {
        low = mid;
      }
    }
    
    return new Date((low.getTime() + high.getTime()) / 2);
  }
  
  return null;
}

function getZodiacSign(longitude) {
  const signIndex = Math.floor(longitude / 30);
  const degree = longitude % 30;
  return {
    sign: ZODIAC_SIGNS[signIndex],
    degree: degree.toFixed(1)
  };
}

// Find exact moment when moon enters/leaves a zodiac sign
function findSignTransition(startDate, direction, maxHours = 120) {
  const step = direction === 'forward' ? 1 : -1;
  const startLong = getMoonLongitude(startDate);
  const startSignIndex = Math.floor(startLong / 30);
  
  // Coarse search: every 30 minutes
  for (let i = 0; i < maxHours * 2; i++) {
    const searchDate = new Date(startDate.getTime() + step * i * 30 * 60 * 1000);
    const long = getMoonLongitude(searchDate);
    const signIdx = Math.floor(long / 30);
    
    if (signIdx !== startSignIndex) {
      // Fine search with binary search
      let low, high;
      if (direction === 'forward') {
        low = new Date(searchDate.getTime() - 30 * 60 * 1000);
        high = searchDate;
      } else {
        low = searchDate;
        high = new Date(searchDate.getTime() + 30 * 60 * 1000);
      }
      
      for (let j = 0; j < 20; j++) {
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        const midSignIdx = Math.floor(midLong / 30);
        
        if (direction === 'forward') {
          if (midSignIdx === startSignIndex) {
            low = mid;
          } else {
            high = mid;
          }
        } else {
          if (midSignIdx === startSignIndex) {
            high = mid;
          } else {
            low = mid;
          }
        }
      }
      
      return direction === 'forward' ? high : low;
    }
  }
  
  return null;
}

// Get all zodiac signs for a given day
function getZodiacSignsForDay(date) {
  const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  
  const signs = [];
  let currentTime = new Date(dayStart);
  
  while (currentTime < dayEnd) {
    const long = getMoonLongitude(currentTime);
    const zodiac = getZodiacSign(long);
    
    // Find when this sign ends
    const signEnd = findSignTransition(currentTime, 'forward', 72);
    
    // Find when this sign started (for display)
    const signStart = findSignTransition(currentTime, 'backward', 72);
    
    signs.push({
      sign: zodiac.sign,
      degree: zodiac.degree,
      start: signStart || dayStart,
      end: signEnd || new Date(dayEnd.getTime() + 24 * 60 * 60 * 1000)
    });
    
    if (signEnd && signEnd < dayEnd) {
      currentTime = new Date(signEnd.getTime() + 60 * 1000); // Move 1 minute past transition
    } else {
      break;
    }
  }
  
  return signs;
}

function getMansion(longitude) {
  const mansionSize = 360 / 28;
  const mansionIndex = Math.floor(longitude / mansionSize);
  return MOON_MANSIONS[mansionIndex];
}

// Find exact moment when moon enters/leaves a mansion
function findMansionTransition(startDate, direction, maxHours = 48) {
  const step = direction === 'forward' ? 1 : -1;
  const startLong = getMoonLongitude(startDate);
  const mansionSize = 360 / 28;
  const startMansionIndex = Math.floor(startLong / mansionSize);
  
  // Coarse search: every 30 minutes
  for (let i = 0; i < maxHours * 2; i++) {
    const searchDate = new Date(startDate.getTime() + step * i * 30 * 60 * 1000);
    const long = getMoonLongitude(searchDate);
    const mansionIdx = Math.floor(long / mansionSize);
    
    if (mansionIdx !== startMansionIndex) {
      // Fine search
      let low, high;
      if (direction === 'forward') {
        low = new Date(searchDate.getTime() - 30 * 60 * 1000);
        high = searchDate;
      } else {
        low = searchDate;
        high = new Date(searchDate.getTime() + 30 * 60 * 1000);
      }
      
      for (let j = 0; j < 20; j++) {
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        const midMansionIdx = Math.floor(midLong / mansionSize);
        
        if (direction === 'forward') {
          if (midMansionIdx === startMansionIndex) {
            low = mid;
          } else {
            high = mid;
          }
        } else {
          if (midMansionIdx === startMansionIndex) {
            high = mid;
          } else {
            low = mid;
          }
        }
      }
      
      return direction === 'forward' ? high : low;
    }
  }
  
  return null;
}

// Get all moon mansions for a given day
function getMansionsForDay(date) {
  const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  
  const mansions = [];
  let currentTime = new Date(dayStart);
  
  while (currentTime < dayEnd) {
    const long = getMoonLongitude(currentTime);
    const mansion = getMansion(long);
    
    // Find when this mansion ends
    const mansionEnd = findMansionTransition(currentTime, 'forward', 48);
    
    // Find when this mansion started
    const mansionStart = findMansionTransition(currentTime, 'backward', 48);
    
    mansions.push({
      mansion: mansion,
      start: mansionStart || dayStart,
      end: mansionEnd || new Date(dayEnd.getTime() + 24 * 60 * 60 * 1000)
    });
    
    if (mansionEnd && mansionEnd < dayEnd) {
      currentTime = new Date(mansionEnd.getTime() + 60 * 1000);
    } else {
      break;
    }
  }
  
  return mansions;
}

// Improved VOC calculation using actual aspects
function getVoidOfCoursePeriodsForDay(date) {
  const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
  const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  
  const vocPeriods = [];
  
  // Get all zodiac sign transitions for the day and surrounding time
  const signs = getZodiacSignsForDay(date);
  
  signs.forEach(signData => {
    // VOC typically starts when moon makes its last major aspect before leaving a sign
    // For simplicity, we approximate VOC as starting several hours before sign change
    // A more accurate calculation would require planetary positions
    
    const signEnd = signData.end;
    
    // If the sign ends during this day
    if (signEnd >= dayStart && signEnd <= new Date(dayEnd.getTime() + 12 * 60 * 60 * 1000)) {
      // Approximate VOC start (last major aspect) - typically 2-12 hours before sign change
      // Using longitude-based estimation
      const hoursBeforeEnd = 6 + Math.random() * 6; // Approximate
      const vocStart = new Date(signEnd.getTime() - hoursBeforeEnd * 60 * 60 * 1000);
      
      if (vocStart < dayEnd && signEnd > dayStart) {
        vocPeriods.push({
          start: vocStart < dayStart ? dayStart : vocStart,
          end: signEnd,
          nextSign: ZODIAC_SIGNS[(ZODIAC_SIGNS.indexOf(signData.sign) + 1) % 12]
        });
      }
    }
  });
  
  return vocPeriods;
}

// Check if currently in VOC and get current VOC data
function getCurrentVOCStatus(date) {
  const moonLong = getMoonLongitude(date);
  const currentSignIndex = Math.floor(moonLong / 30);
  const degreeInSign = moonLong % 30;
  
  // Find when moon leaves current sign
  const signEnd = findSignTransition(date, 'forward', 72);
  
  // VOC typically starts in the last few degrees before sign change
  // More accurate: VOC starts after last major aspect
  // Approximation: last 3-8 degrees depending on sign speed
  const vocThreshold = 27; // Start VOC when moon is past 27 degrees
  
  if (degreeInSign >= vocThreshold && signEnd) {
    // Find approximate VOC start time (when moon reached ~27 degrees)
    let vocStart = null;
    for (let i = 0; i < 24; i++) {
      const checkTime = new Date(date.getTime() - i * 60 * 60 * 1000);
      const checkLong = getMoonLongitude(checkTime);
      const checkDegree = checkLong % 30;
      if (checkDegree < vocThreshold) {
        vocStart = new Date(checkTime.getTime() + 60 * 60 * 1000);
        break;
      }
    }
    
    return {
      isVoid: true,
      start: vocStart || date,
      end: signEnd,
      nextSign: ZODIAC_SIGNS[(currentSignIndex + 1) % 12]
    };
  }
  
  // Check if VOC will happen today
  const vocPeriods = [];
  let searchTime = new Date(date);
  const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  
  while (searchTime < dayEnd) {
    const long = getMoonLongitude(searchTime);
    const deg = long % 30;
    const signIdx = Math.floor(long / 30);
    
    if (deg >= vocThreshold) {
      const signEnd = findSignTransition(searchTime, 'forward', 24);
      if (signEnd) {
        // Find VOC start
        let vocStart = null;
        for (let i = 0; i < 12; i++) {
          const checkTime = new Date(searchTime.getTime() - i * 60 * 60 * 1000);
          const checkLong = getMoonLongitude(checkTime);
          const checkDegree = checkLong % 30;
          if (checkDegree < vocThreshold) {
            vocStart = new Date(checkTime.getTime() + 30 * 60 * 1000);
            break;
          }
        }
        
        vocPeriods.push({
          start: vocStart || searchTime,
          end: signEnd,
          nextSign: ZODIAC_SIGNS[(signIdx + 1) % 12]
        });
        
        searchTime = new Date(signEnd.getTime() + 60 * 60 * 1000);
      } else {
        break;
      }
    } else {
      searchTime = new Date(searchTime.getTime() + 60 * 60 * 1000);
    }
  }
  
  return {
    isVoid: false,
    periods: vocPeriods
  };
}

function getRetrogradePlanets(date) {
  return RETROGRADE_PLANETS.filter(p => date >= p.retroStart && date <= p.retroEnd);
}

function getMoonRiseSet(date) {
  // Simplified calculation based on lunar phase and location
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const phase = getMoonPhase(date) / 360;
  
  const latFactor = Math.cos(LAT * Math.PI / 180);
  
  const riseHour = (6 + phase * 24 + Math.sin(dayOfYear * 0.0172) * 2 * latFactor) % 24;
  const setHour = (riseHour + 12 + latFactor * 2) % 24;
  
  const rise = new Date(date);
  rise.setHours(Math.floor(riseHour), Math.floor((riseHour % 1) * 60), 0);
  
  const set = new Date(date);
  set.setHours(Math.floor(setHour), Math.floor((setHour % 1) * 60), 0);
  
  return { rise, set };
}

// Formatting
function formatTime(date) {
  if (!date) return "--:--";
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function formatShortDate(date) {
  if (!date) return "";
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
}

// Star Background
function createStarBackground() {
  const container = document.getElementById('star-background');
  if (!container) return;
  
  container.innerHTML = '';
  
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = (Math.random() * 2 + 1) + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(star);
  }
  
  setInterval(() => {
    if (Math.random() > 0.7) {
      createShootingStar(container);
    }
  }, 3000);
}

function createShootingStar(container) {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = Math.random() * 70 + '%';
  star.style.top = Math.random() * 30 + '%';
  container.appendChild(star);
  
  setTimeout(() => star.remove(), 1000);
}

// Dialog Functions
function showInfoDialog(title, content) {
  document.getElementById('info-dialog-title').textContent = title;
  document.getElementById('info-dialog-content').innerHTML = content;
  document.getElementById('info-dialog').style.display = 'flex';
}

function showMansionDialog(mansion) {
  document.getElementById('dialog-mansion-name').textContent = `${mansion.number}. ${mansion.name}`;
  document.getElementById('dialog-essence').textContent = mansion.essence;
  document.getElementById('dialog-good').textContent = mansion.goodFor;
  document.getElementById('dialog-bad').textContent = mansion.badFor;
  document.getElementById('mansion-dialog').style.display = 'flex';
}

// Update Functions
function updateCurrentTime() {
  const now = new Date();
  document.getElementById('current-date').textContent = formatDate(now);
  document.getElementById('current-time').textContent = formatTime(now);
}

function updateDailyView() {
  const date = selectedDate;
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  
  document.getElementById('selected-date').textContent = formatDate(date);
  document.getElementById('return-today').style.display = isToday ? 'none' : 'block';
  
  // Moon Phase
  const phaseInfo = getPhaseInfo(date);
  document.getElementById('phase-emoji').textContent = phaseInfo.emoji;
  document.getElementById('phase-name').textContent = phaseInfo.name;
  document.getElementById('illumination').textContent = getIllumination(date) + '% illuminated';
  
  // Exact phase time
  const exactPhaseBox = document.getElementById('exact-phase-box');
  const phaseTargets = [0, 90, 180, 270];
  const phaseNames = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
  
  let nearestPhase = null;
  let nearestDiff = Infinity;
  
  phaseTargets.forEach((target, idx) => {
    const exactTime = findExactPhaseTime(date, target);
    if (exactTime) {
      const diff = Math.abs(exactTime.getTime() - date.getTime());
      if (diff < nearestDiff && diff < 24 * 60 * 60 * 1000) {
        nearestDiff = diff;
        nearestPhase = { name: phaseNames[idx], time: exactTime };
      }
    }
  });
  
  if (nearestPhase) {
    exactPhaseBox.style.display = 'block';
    document.getElementById('exact-phase-label').textContent = nearestPhase.name + ' at';
    document.getElementById('exact-phase-time').textContent = formatShortDate(nearestPhase.time) + ' ' + formatTime(nearestPhase.time);
  } else {
    exactPhaseBox.style.display = 'none';
  }
  
  // Moon Rise/Set
  const riseSet = getMoonRiseSet(date);
  document.getElementById('moon-rise').textContent = formatTime(riseSet.rise);
  document.getElementById('moon-set').textContent = formatTime(riseSet.set);
  
  // Zodiac Signs for the day
  const zodiacSigns = getZodiacSignsForDay(date);
  let zodiacHTML = '';
  zodiacSigns.forEach((z, index) => {
    zodiacHTML += `
      <div class="zodiac-item" onclick="showZodiacExplanation('${z.sign.name}')">
        <div class="card-header">
          <span class="zodiac-sign">${z.sign.name}</span>
          <span class="zodiac-emoji">${z.sign.emoji}</span>
        </div>
        <p class="zodiac-degree">${z.degree}° ${z.sign.name}</p>
        <div class="zodiac-timing">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Sign Timing</span>
        </div>
        <p class="timing-text">${formatShortDate(z.start)} ${formatTime(z.start)} – ${formatShortDate(z.end)} ${formatTime(z.end)}</p>
      </div>
    `;
  });
  document.getElementById('zodiac-content').innerHTML = zodiacHTML;
  
  // Moon Mansions for the day
  const mansions = getMansionsForDay(date);
  let mansionHTML = '';
  mansions.forEach((m, index) => {
    mansionHTML += `
      <div class="mansion-item" onclick="showMansionDialog(MOON_MANSIONS[${m.mansion.number - 1}])">
        <div class="card-header">
          <span class="mansion-name">${m.mansion.number}. ${m.mansion.name}</span>
        </div>
        <div class="mansion-timing">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <span>Mansion Timing</span>
        </div>
        <p class="timing-text">${formatShortDate(m.start)} ${formatTime(m.start)} – ${formatShortDate(m.end)} ${formatTime(m.end)}</p>
      </div>
    `;
  });
  document.getElementById('mansion-content').innerHTML = mansionHTML;
  
  // Void of Course
  const vocStatus = getCurrentVOCStatus(date);
  const vocCard = document.getElementById('voc-card');
  const vocStatusEl = document.getElementById('voc-status');
  
  let vocHTML = '';
  
  if (vocStatus.isVoid) {
    vocCard.classList.add('active');
    vocStatusEl.textContent = '⚠️ ACTIVE';
    vocStatusEl.className = 'voc-status active';
    vocHTML = `
      <div class="voc-period">
        <p>${formatShortDate(vocStatus.start)} ${formatTime(vocStatus.start)} – ${formatShortDate(vocStatus.end)} ${formatTime(vocStatus.end)}</p>
        <p style="font-size: 0.75rem; margin-top: 0.25rem; color: hsl(var(--muted-foreground));">Until Moon enters ${vocStatus.nextSign.name}</p>
      </div>
    `;
  } else {
    vocCard.classList.remove('active');
    
    if (vocStatus.periods && vocStatus.periods.length > 0) {
      vocStatusEl.textContent = 'Upcoming';
      vocStatusEl.className = 'voc-status inactive';
      vocHTML = vocStatus.periods.map(p => `
        <div class="voc-period">
          <p>${formatShortDate(p.start)} ${formatTime(p.start)} – ${formatShortDate(p.end)} ${formatTime(p.end)}</p>
          <p style="font-size: 0.75rem; margin-top: 0.25rem; color: hsl(var(--muted-foreground));">Until Moon enters ${p.nextSign.name}</p>
        </div>
      `).join('');
    } else {
      vocStatusEl.textContent = 'None Today';
      vocStatusEl.className = 'voc-status inactive';
      vocHTML = '<p class="voc-text">No Void of Course periods today.</p>';
    }
  }
  
  document.getElementById('voc-content').innerHTML = vocHTML;
  
  // Retrograde Planets
  const retroPlanets = getRetrogradePlanets(date);
  const retroContainer = document.getElementById('retro-planets');
  
  // Always show Mercury status
  const mercuryRetro = retroPlanets.find(p => p.planet === 'Mercury');
  
  let retroHTML = '';
  
  if (mercuryRetro) {
    retroHTML += `
      <div class="retro-planet" onclick="showMercuryExplanation(true)">
        <div class="retro-planet-info">
          <span class="retro-planet-emoji">${mercuryRetro.emoji}</span>
          <span class="retro-planet-name">${mercuryRetro.planet} Retrograde</span>
        </div>
        <span class="retro-planet-dates">${formatShortDate(mercuryRetro.retroStart)} – ${formatShortDate(mercuryRetro.retroEnd)}</span>
      </div>
    `;
  } else {
    retroHTML += `
      <div class="direct-planet" onclick="showMercuryExplanation(false)">
        <div class="direct-planet-info">
          <span class="retro-planet-emoji">☿</span>
          <span class="retro-planet-name">Mercury</span>
        </div>
        <span class="direct-planet-status">Direct</span>
      </div>
    `;
  }
  
  // Other retrograde planets
  retroPlanets.filter(p => p.planet !== 'Mercury').forEach(p => {
    retroHTML += `
      <div class="retro-planet">
        <div class="retro-planet-info">
          <span class="retro-planet-emoji">${p.emoji}</span>
          <span class="retro-planet-name">${p.planet} Retrograde</span>
        </div>
        <span class="retro-planet-dates">${formatShortDate(p.retroStart)} – ${formatShortDate(p.retroEnd)}</span>
      </div>
    `;
  });
  
  if (retroPlanets.length === 0) {
    retroHTML = `
      <div class="direct-planet" onclick="showMercuryExplanation(false)">
        <div class="direct-planet-info">
          <span class="retro-planet-emoji">☿</span>
          <span class="retro-planet-name">Mercury</span>
        </div>
        <span class="direct-planet-status">Direct</span>
      </div>
      <p class="no-retro" style="margin-top: 0.5rem;">No planets in retrograde</p>
    `;
  }
  
  retroContainer.innerHTML = retroHTML;
  
  // Summary
  document.getElementById('summary-phase').textContent = phaseInfo.emoji;
  document.getElementById('summary-phase-name').textContent = phaseInfo.name;
  document.getElementById('summary-zodiac').textContent = zodiacSigns[0].sign.emoji;
  document.getElementById('summary-zodiac-name').textContent = 'Moon in ' + zodiacSigns[0].sign.name;
  document.getElementById('summary-mansion').textContent = 'Mansion ' + mansions[0].mansion.number;
}

function updateMonthlyCalendar() {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  document.getElementById('month-title').textContent = 
    new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startPadding = firstDay.getDay();
  
  const container = document.getElementById('calendar-days');
  container.innerHTML = '';
  
  for (let i = 0; i < startPadding; i++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day empty';
    container.appendChild(cell);
  }
  
  const today = new Date();
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day, 12);
    const phaseInfo = getPhaseInfo(date);
    const isToday = date.toDateString() === today.toDateString();
    const vocStatus = getCurrentVOCStatus(date);
    const hasVOC = vocStatus.isVoid || (vocStatus.periods && vocStatus.periods.length > 0);
    
    const cell = document.createElement('div');
    cell.className = 'calendar-day' + (isToday ? ' today' : '') + (hasVOC ? ' voc-day' : '');
    cell.innerHTML = `
      <span class="day-number">${day}</span>
      <span class="day-phase">${phaseInfo.emoji}</span>
    `;
    
    cell.addEventListener('click', () => showDayDialog(date));
    container.appendChild(cell);
  }
}

function showDayDialog(date) {
  const phaseInfo = getPhaseInfo(date);
  const zodiacSigns = getZodiacSignsForDay(date);
  const mansions = getMansionsForDay(date);
  const vocStatus = getCurrentVOCStatus(date);
  
  document.getElementById('day-dialog-title').textContent = formatDate(date);
  
  let content = `
    <div class="day-dialog-info clickable" onclick="showPhaseExplanation('${phaseInfo.name}')">
      <span>${phaseInfo.emoji}</span>
      <span>${phaseInfo.name} - ${getIllumination(date)}% illuminated</span>
    </div>
  `;
  
  // All zodiac signs for the day
  zodiacSigns.forEach(z => {
    content += `
      <div class="day-dialog-info clickable" onclick="showZodiacExplanation('${z.sign.name}')">
        <span>${z.sign.emoji}</span>
        <div>
          <span>Moon in ${z.sign.name} at ${z.degree}°</span>
          <p style="font-size: 0.75rem; color: hsl(var(--star-gold));">${formatShortDate(z.start)} ${formatTime(z.start)} – ${formatShortDate(z.end)} ${formatTime(z.end)}</p>
        </div>
      </div>
    `;
  });
  
  // All mansions for the day
  mansions.forEach(m => {
    content += `
      <div class="day-dialog-info clickable" onclick="showMansionDialog(MOON_MANSIONS[${m.mansion.number - 1}])">
        <span>🏛️</span>
        <div>
          <span>Mansion ${m.mansion.number}: ${m.mansion.name}</span>
          <p style="font-size: 0.75rem; color: hsl(var(--star-gold));">${formatShortDate(m.start)} ${formatTime(m.start)} – ${formatShortDate(m.end)} ${formatTime(m.end)}</p>
        </div>
      </div>
    `;
  });
  
  // VOC periods
  if (vocStatus.isVoid) {
    content += `
      <div class="day-dialog-info clickable" style="background: hsl(var(--void-red) / 0.1);" onclick="showVOCExplanation()">
        <span>⚠️</span>
        <div>
          <span style="color: hsl(var(--void-red));">Void of Course Moon</span>
          <p style="font-size: 0.75rem; color: hsl(var(--void-red));">${formatTime(vocStatus.start)} – ${formatTime(vocStatus.end)}</p>
        </div>
      </div>
    `;
  } else if (vocStatus.periods && vocStatus.periods.length > 0) {
    vocStatus.periods.forEach(p => {
      content += `
        <div class="day-dialog-info clickable" style="background: hsl(var(--void-red) / 0.1);" onclick="showVOCExplanation()">
          <span>⚠️</span>
          <div>
            <span style="color: hsl(var(--void-red));">Void of Course Moon</span>
            <p style="font-size: 0.75rem; color: hsl(var(--void-red));">${formatTime(p.start)} – ${formatTime(p.end)}</p>
          </div>
        </div>
      `;
    });
  }
  
  // Mansion details for first mansion
  const mansion = mansions[0].mansion;
  content += `
    <div class="dialog-section">
      <h4>Mansion ${mansion.number} Essence</h4>
      <p>${mansion.essence}</p>
    </div>
    <div class="dialog-section good">
      <h4>Good For</h4>
      <p>${mansion.goodFor}</p>
    </div>
    <div class="dialog-section bad">
      <h4>Bad For</h4>
      <p>${mansion.badFor}</p>
    </div>
  `;
  
  document.getElementById('day-dialog-content').innerHTML = content;
  document.getElementById('day-dialog').style.display = 'flex';
}

// Explanation popup functions
function showPhaseExplanation(phaseName) {
  const explanation = PHASE_EXPLANATIONS[phaseName] || "No explanation available for this phase.";
  showInfoDialog(phaseName, `<div class="dialog-section"><p>${explanation.replace(/\n/g, '<br>')}</p></div>`);
}

function showZodiacExplanation(signName) {
  const explanation = ZODIAC_EXPLANATIONS[signName] || "No explanation available for this sign.";
  showInfoDialog(`Moon in ${signName}`, `<div class="dialog-section"><p>${explanation.replace(/\n/g, '<br>')}</p></div>`);
}

function showVOCExplanation() {
  showInfoDialog('Void of Course Moon', `<div class="dialog-section"><p>${VOC_EXPLANATION.replace(/\n/g, '<br>')}</p></div>`);
}

function showMercuryExplanation(isRetrograde) {
  const explanation = isRetrograde ? MERCURY_RETROGRADE_EXPLANATION : MERCURY_DIRECT_EXPLANATION;
  const title = isRetrograde ? 'Mercury Retrograde' : 'Mercury Direct';
  showInfoDialog(title, `<div class="dialog-section"><p>${explanation.replace(/\n/g, '<br>')}</p></div>`);
}

// Scroll navigation for daily view
function navigateDay(section, direction) {
  const offset = direction === 'next' ? 1 : -1;
  selectedDate = new Date(selectedDate.getTime() + offset * 24 * 60 * 60 * 1000);
  updateDailyView();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  createStarBackground();
  updateCurrentTime();
  updateDailyView();
  updateMonthlyCalendar();
  initGeolocation();
  
  setInterval(updateCurrentTime, 60000);
  
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab + '-view').classList.add('active');
    });
  });
  
  // Day navigation
  document.getElementById('prev-day').addEventListener('click', () => {
    selectedDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
    updateDailyView();
  });
  
  document.getElementById('next-day').addEventListener('click', () => {
    selectedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
    updateDailyView();
  });
  
  document.getElementById('return-today').addEventListener('click', () => {
    selectedDate = new Date();
    updateDailyView();
  });
  
  // Scroll section navigation
  document.querySelectorAll('.scroll-prev').forEach(btn => {
    btn.addEventListener('click', () => navigateDay(btn.dataset.section, 'prev'));
  });
  
  document.querySelectorAll('.scroll-next').forEach(btn => {
    btn.addEventListener('click', () => navigateDay(btn.dataset.section, 'next'));
  });
  
  // Month navigation
  document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    updateMonthlyCalendar();
  });
  
  document.getElementById('next-month').addEventListener('click', () => {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    updateMonthlyCalendar();
  });
  
  // Phase click handler
  document.getElementById('phase-emoji').addEventListener('click', () => {
    const phaseInfo = getPhaseInfo(selectedDate);
    showPhaseExplanation(phaseInfo.name);
  });
  
  document.getElementById('phase-name').addEventListener('click', () => {
    const phaseInfo = getPhaseInfo(selectedDate);
    showPhaseExplanation(phaseInfo.name);
  });
  
  // VOC card click handler
  document.getElementById('voc-card').addEventListener('click', () => {
    showVOCExplanation();
  });
  
  // Dialog close handlers
  document.getElementById('close-info-dialog').addEventListener('click', () => {
    document.getElementById('info-dialog').style.display = 'none';
  });
  
  document.getElementById('info-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'info-dialog') {
      document.getElementById('info-dialog').style.display = 'none';
    }
  });
  
  document.getElementById('close-mansion-dialog').addEventListener('click', () => {
    document.getElementById('mansion-dialog').style.display = 'none';
  });
  
  document.getElementById('mansion-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'mansion-dialog') {
      document.getElementById('mansion-dialog').style.display = 'none';
    }
  });
  
  document.getElementById('close-day-dialog').addEventListener('click', () => {
    document.getElementById('day-dialog').style.display = 'none';
  });
  
  document.getElementById('day-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'day-dialog') {
      document.getElementById('day-dialog').style.display = 'none';
    }
  });
});
