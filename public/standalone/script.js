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

const MOON_PHASES = [
  { name: "New Moon", emoji: "🌑" },
  { name: "Waxing Crescent", emoji: "🌒" },
  { name: "First Quarter", emoji: "🌓" },
  { name: "Waxing Gibbous", emoji: "🌔" },
  { name: "Full Moon", emoji: "🌕" },
  { name: "Waning Gibbous", emoji: "🌖" },
  { name: "Last Quarter", emoji: "🌗" },
  { name: "Waning Crescent", emoji: "🌘" }
];

const RETROGRADE_PLANETS = [
  { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 2, 14), retroEnd: new Date(2025, 3, 7) },
  { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 6, 18), retroEnd: new Date(2025, 7, 11) },
  { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 10, 9), retroEnd: new Date(2025, 10, 29) },
  { planet: "Venus", emoji: "♀", retroStart: new Date(2025, 2, 1), retroEnd: new Date(2025, 3, 12) },
  { planet: "Mars", emoji: "♂", retroStart: new Date(2024, 11, 6), retroEnd: new Date(2025, 1, 23) },
  { planet: "Jupiter", emoji: "♃", retroStart: new Date(2024, 9, 9), retroEnd: new Date(2025, 1, 4) },
  { planet: "Saturn", emoji: "♄", retroStart: new Date(2025, 6, 13), retroEnd: new Date(2025, 10, 27) },
  { planet: "Uranus", emoji: "⛢", retroStart: new Date(2024, 8, 1), retroEnd: new Date(2025, 0, 30) },
  { planet: "Neptune", emoji: "♆", retroStart: new Date(2025, 6, 4), retroEnd: new Date(2025, 11, 10) },
  { planet: "Pluto", emoji: "♇", retroStart: new Date(2025, 4, 4), retroEnd: new Date(2025, 9, 13) }
];

// Casablanca coordinates
const LAT = 33.5731;
const LON = -7.5898;

// State
let selectedDate = new Date();
let currentMonth = new Date();

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

function getMoonLongitude(date) {
  const jd = toJulianDay(date);
  const T = (jd - 2451545.0) / 36525;
  
  // Mean elements
  const Lp = (218.3164477 + 481267.88123421 * T - 0.0015786 * T * T) % 360;
  const D = (297.8501921 + 445267.1114034 * T - 0.0018819 * T * T) % 360;
  const M = (357.5291092 + 35999.0502909 * T - 0.0001536 * T * T) % 360;
  const Mp = (134.9633964 + 477198.8675055 * T + 0.0087414 * T * T) % 360;
  const F = (93.2720950 + 483202.0175233 * T - 0.0036539 * T * T) % 360;
  
  const toRad = deg => deg * Math.PI / 180;
  
  // Main perturbations
  let longitude = Lp;
  longitude += 6.289 * Math.sin(toRad(Mp));
  longitude += 1.274 * Math.sin(toRad(2 * D - Mp));
  longitude += 0.658 * Math.sin(toRad(2 * D));
  longitude += 0.214 * Math.sin(toRad(2 * Mp));
  longitude -= 0.186 * Math.sin(toRad(M));
  longitude -= 0.114 * Math.sin(toRad(2 * F));
  longitude += 0.059 * Math.sin(toRad(2 * D - 2 * Mp));
  longitude += 0.057 * Math.sin(toRad(2 * D - M - Mp));
  longitude += 0.053 * Math.sin(toRad(2 * D + Mp));
  longitude += 0.046 * Math.sin(toRad(2 * D - M));
  longitude -= 0.041 * Math.sin(toRad(M - Mp));
  longitude -= 0.035 * Math.sin(toRad(D));
  longitude -= 0.030 * Math.sin(toRad(M + Mp));
  
  return ((longitude % 360) + 360) % 360;
}

function getSunLongitude(date) {
  const jd = toJulianDay(date);
  const T = (jd - 2451545.0) / 36525;
  const L0 = (280.46646 + 36000.76983 * T + 0.0003032 * T * T) % 360;
  const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) % 360;
  const toRad = deg => deg * Math.PI / 180;
  const C = (1.914602 - 0.004817 * T) * Math.sin(toRad(M)) + 0.019993 * Math.sin(toRad(2 * M));
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
  // Search within 15 days before and after
  const startSearch = new Date(date);
  startSearch.setDate(startSearch.getDate() - 15);
  
  let closestTime = null;
  let closestDiff = Infinity;
  
  // Coarse search: every 6 hours
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
  
  // Fine search: binary search for exact moment
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

function findSignCrossing(date, direction) {
  const currentLong = getMoonLongitude(date);
  const currentSignIndex = Math.floor(currentLong / 30);
  
  let targetDegree;
  if (direction === 'start') {
    targetDegree = currentSignIndex * 30;
  } else {
    targetDegree = ((currentSignIndex + 1) * 30) % 360;
  }
  
  // Search direction
  const step = direction === 'start' ? -1 : 1;
  let searchDate = new Date(date);
  
  // Coarse search: every hour
  for (let i = 0; i < 72; i++) {
    searchDate = new Date(date.getTime() + step * i * 60 * 60 * 1000);
    const long = getMoonLongitude(searchDate);
    const signIdx = Math.floor(long / 30);
    
    if (direction === 'start' && signIdx !== currentSignIndex) {
      // Found previous sign, now fine search forward
      let low = searchDate;
      let high = new Date(searchDate.getTime() + 60 * 60 * 1000);
      
      for (let j = 0; j < 15; j++) {
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        const midSignIdx = Math.floor(midLong / 30);
        
        if (midSignIdx === currentSignIndex) {
          high = mid;
        } else {
          low = mid;
        }
      }
      return high;
    }
    
    if (direction === 'end' && signIdx !== currentSignIndex) {
      // Found next sign, fine search backward
      let low = new Date(searchDate.getTime() - 60 * 60 * 1000);
      let high = searchDate;
      
      for (let j = 0; j < 15; j++) {
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        const midSignIdx = Math.floor(midLong / 30);
        
        if (midSignIdx === currentSignIndex) {
          low = mid;
        } else {
          high = mid;
        }
      }
      return high;
    }
  }
  
  return null;
}

function getMansion(longitude) {
  const mansionSize = 360 / 28;
  for (let i = MOON_MANSIONS.length - 1; i >= 0; i--) {
    if (longitude >= MOON_MANSIONS[i].startDegree) {
      return MOON_MANSIONS[i];
    }
  }
  return MOON_MANSIONS[0];
}

function findMansionCrossing(date, direction) {
  const currentLong = getMoonLongitude(date);
  const currentMansion = getMansion(currentLong);
  
  const step = direction === 'start' ? -1 : 1;
  let searchDate = new Date(date);
  
  // Coarse search
  for (let i = 0; i < 48; i++) {
    searchDate = new Date(date.getTime() + step * i * 60 * 60 * 1000);
    const long = getMoonLongitude(searchDate);
    const mansion = getMansion(long);
    
    if (mansion.number !== currentMansion.number) {
      // Fine search
      let low, high;
      if (direction === 'start') {
        low = searchDate;
        high = new Date(searchDate.getTime() + 60 * 60 * 1000);
      } else {
        low = new Date(searchDate.getTime() - 60 * 60 * 1000);
        high = searchDate;
      }
      
      for (let j = 0; j < 15; j++) {
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        const midMansion = getMansion(midLong);
        
        if (midMansion.number === currentMansion.number) {
          if (direction === 'start') {
            high = mid;
          } else {
            low = mid;
          }
        } else {
          if (direction === 'start') {
            low = mid;
          } else {
            high = mid;
          }
        }
      }
      
      return direction === 'start' ? high : high;
    }
  }
  
  return null;
}

function getVoidOfCourse(date) {
  // VOC starts when moon makes last major aspect before leaving sign
  // VOC ends when moon enters new sign
  
  const signEnd = findSignCrossing(date, 'end');
  if (!signEnd) return { isVoid: false };
  
  // Check if we're within 24 hours of sign change
  const hoursToSignChange = (signEnd.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  if (hoursToSignChange > 0 && hoursToSignChange < 24) {
    // Simplified: VOC starts ~2-4 hours before sign change
    const vocHours = Math.min(4, hoursToSignChange);
    const vocStart = new Date(signEnd.getTime() - vocHours * 60 * 60 * 1000);
    
    const isCurrentlyVoid = date >= vocStart && date < signEnd;
    
    return {
      isVoid: isCurrentlyVoid,
      vocStart: vocStart,
      vocEnd: signEnd
    };
  }
  
  // Check previous sign change for ongoing VOC
  const signStart = findSignCrossing(date, 'start');
  if (signStart) {
    const hoursSinceSignChange = (date.getTime() - signStart.getTime()) / (1000 * 60 * 60);
    if (hoursSinceSignChange < 2) {
      // Just entered new sign, may still show previous VOC info
      const prevVocStart = new Date(signStart.getTime() - 4 * 60 * 60 * 1000);
      return {
        isVoid: false,
        vocStart: prevVocStart,
        vocEnd: signStart
      };
    }
  }
  
  return { isVoid: false };
}

function getMoonRiseSet(date) {
  // Simplified calculation for Casablanca
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const phase = getMoonPhase(date) / 360;
  
  // Base times adjusted by phase
  const riseHour = (6 + phase * 24 + Math.sin(dayOfYear * 0.0172) * 2) % 24;
  const setHour = (riseHour + 12 + Math.random() * 2) % 24;
  
  const rise = new Date(date);
  rise.setHours(Math.floor(riseHour), Math.floor((riseHour % 1) * 60), 0);
  
  const set = new Date(date);
  set.setHours(Math.floor(setHour), Math.floor((setHour % 1) * 60), 0);
  
  return { rise, set };
}

function getRetrogradePlanets(date) {
  return RETROGRADE_PLANETS.filter(p => date >= p.retroStart && date <= p.retroEnd);
}

// Formatting Functions
function formatTime12hr(date) {
  if (!date) return "—";
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

function formatDateShort(date) {
  if (!date) return "";
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}`;
}

function formatDateLong(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

function isSameDay(d1, d2) {
  return d1.getDate() === d2.getDate() && 
         d1.getMonth() === d2.getMonth() && 
         d1.getFullYear() === d2.getFullYear();
}

// Star Background
function createStars() {
  const container = document.getElementById('star-background');
  container.innerHTML = '';
  
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.setProperty('--move-x', `${(Math.random() - 0.5) * 30}px`);
    star.style.setProperty('--move-y', `${(Math.random() - 0.5) * 20}px`);
    container.appendChild(star);
  }
  
  // Shooting stars
  for (let i = 0; i < 3; i++) {
    const shooting = document.createElement('div');
    shooting.className = 'shooting-star';
    shooting.style.top = `${10 + i * 25}%`;
    shooting.style.animationDelay = `${i * 5}s`;
    container.appendChild(shooting);
  }
}

// Update Functions
function updateCurrentTime() {
  const now = new Date();
  document.getElementById('current-date').textContent = formatDateLong(now);
  document.getElementById('current-time').textContent = formatTime12hr(now);
}

function updateDailyView() {
  const longitude = getMoonLongitude(selectedDate);
  const zodiacInfo = getZodiacSign(longitude);
  const phaseInfo = getPhaseInfo(selectedDate);
  const mansion = getMansion(longitude);
  const illumination = getIllumination(selectedDate);
  const voc = getVoidOfCourse(selectedDate);
  const riseSet = getMoonRiseSet(selectedDate);
  const retroPlanets = getRetrogradePlanets(selectedDate);
  
  // Selected date
  document.getElementById('selected-date').textContent = formatDateLong(selectedDate);
  document.getElementById('return-today').style.display = isSameDay(selectedDate, new Date()) ? 'none' : 'block';
  
  // Moon Phase
  document.getElementById('phase-emoji').textContent = phaseInfo.emoji;
  document.getElementById('phase-name').textContent = phaseInfo.name;
  document.getElementById('illumination').textContent = `${illumination}%`;
  
  // Exact phase time
  const exactPhaseBox = document.getElementById('exact-phase-box');
  if (phaseInfo.index === 0 || phaseInfo.index === 4 || phaseInfo.index === 2 || phaseInfo.index === 6) {
    const targetPhase = phaseInfo.index === 0 ? 0 : phaseInfo.index === 4 ? 180 : phaseInfo.index === 2 ? 90 : 270;
    const exactTime = findExactPhaseTime(selectedDate, targetPhase);
    
    if (exactTime && Math.abs(exactTime.getTime() - selectedDate.getTime()) < 3 * 24 * 60 * 60 * 1000) {
      exactPhaseBox.style.display = 'block';
      document.getElementById('exact-phase-label').textContent = `${phaseInfo.name} Exact Time`;
      document.getElementById('exact-phase-time').textContent = `${formatDateShort(exactTime)} at ${formatTime12hr(exactTime)}`;
    } else {
      exactPhaseBox.style.display = 'none';
    }
  } else {
    exactPhaseBox.style.display = 'none';
  }
  
  // Rise/Set
  document.getElementById('moon-rise').textContent = formatTime12hr(riseSet.rise);
  document.getElementById('moon-set').textContent = formatTime12hr(riseSet.set);
  
  // Mansion
  document.getElementById('mansion-number').textContent = mansion.number;
  document.getElementById('mansion-name').textContent = mansion.name;
  
  const mansionStart = findMansionCrossing(selectedDate, 'start');
  const mansionEnd = findMansionCrossing(selectedDate, 'end');
  document.getElementById('mansion-timing').textContent = 
    `${formatDateShort(mansionStart)} ${formatTime12hr(mansionStart)} – ${formatDateShort(mansionEnd)} ${formatTime12hr(mansionEnd)}`;
  
  // Zodiac
  document.getElementById('zodiac-emoji').textContent = zodiacInfo.sign.emoji;
  document.getElementById('zodiac-sign').textContent = zodiacInfo.sign.name;
  document.getElementById('zodiac-degree').textContent = `${zodiacInfo.degree}° in ${zodiacInfo.sign.name}`;
  
  const signStart = findSignCrossing(selectedDate, 'start');
  const signEnd = findSignCrossing(selectedDate, 'end');
  document.getElementById('zodiac-timing').textContent = 
    `${formatDateShort(signStart)} ${formatTime12hr(signStart)} – ${formatDateShort(signEnd)} ${formatTime12hr(signEnd)}`;
  
  const elementDescriptions = {
    fire: "fiery passion and initiative",
    earth: "grounded stability and practicality",
    air: "intellectual curiosity and social connection",
    water: "deep sensitivity and intuitive awareness"
  };
  document.getElementById('zodiac-desc').textContent = 
    `The Moon is transiting through ${zodiacInfo.sign.name}, influencing emotions with ${elementDescriptions[zodiacInfo.sign.element]}.`;
  
  // Void of Course
  const vocCard = document.getElementById('voc-card');
  const vocStatus = document.getElementById('voc-status');
  const vocText = document.getElementById('voc-text');
  const vocTiming = document.getElementById('voc-timing');
  
  if (voc.isVoid) {
    vocCard.classList.add('active');
    vocStatus.textContent = 'ACTIVE';
    vocStatus.className = 'voc-status active';
    vocText.textContent = 'The Moon is currently void of course. This is a time of pause — avoid starting new projects or making major decisions.';
    if (voc.vocStart && voc.vocEnd) {
      vocTiming.style.display = 'block';
      document.getElementById('voc-times').textContent = 
        `${formatDateShort(voc.vocStart)} ${formatTime12hr(voc.vocStart)} – ${formatDateShort(voc.vocEnd)} ${formatTime12hr(voc.vocEnd)}`;
    }
  } else {
    vocCard.classList.remove('active');
    vocStatus.textContent = 'INACTIVE';
    vocStatus.className = 'voc-status inactive';
    vocText.textContent = 'The Moon is actively aspecting planets. This is a favorable time for initiating actions and making important decisions.';
    vocTiming.style.display = 'none';
  }
  
  // Retrograde Planets
  const retroContainer = document.getElementById('retro-planets');
  if (retroPlanets.length > 0) {
    retroContainer.innerHTML = retroPlanets.map(p => `
      <div class="retro-planet">
        <div class="retro-planet-info">
          <span class="retro-planet-emoji">${p.emoji}</span>
          <div>
            <p class="retro-planet-name">${p.planet} ℞</p>
            <p class="retro-planet-label">Retrograde</p>
          </div>
        </div>
        <span class="retro-planet-dates">${formatDateShort(p.retroStart)} – ${formatDateShort(p.retroEnd)}</span>
      </div>
    `).join('');
  } else {
    retroContainer.innerHTML = '<p class="no-retro">No planets are currently retrograde. Forward motion prevails — a time of clarity and progress.</p>';
  }
  
  // Summary
  document.getElementById('summary-phase').textContent = phaseInfo.emoji;
  document.getElementById('summary-phase-name').textContent = phaseInfo.name;
  document.getElementById('summary-zodiac').textContent = zodiacInfo.sign.emoji;
  document.getElementById('summary-zodiac-name').textContent = zodiacInfo.sign.name;
  document.getElementById('summary-mansion').textContent = `Mansion ${mansion.number}`;
  document.getElementById('summary-voc-emoji').textContent = voc.isVoid ? '⚠️' : '✓';
  document.getElementById('summary-voc').textContent = voc.isVoid ? 'Void Active' : 'Not Void';
}

function updateMonthlyCalendar() {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  document.getElementById('month-title').textContent = `${months[month]} ${year}`;
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startPadding = firstDay.getDay();
  
  const container = document.getElementById('calendar-days');
  container.innerHTML = '';
  
  // Previous month padding
  const prevMonth = new Date(year, month, 0);
  for (let i = startPadding - 1; i >= 0; i--) {
    const day = prevMonth.getDate() - i;
    const date = new Date(year, month - 1, day);
    container.appendChild(createDayElement(date, true));
  }
  
  // Current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    container.appendChild(createDayElement(date, false));
  }
  
  // Next month padding
  const remaining = 42 - (startPadding + lastDay.getDate());
  for (let i = 1; i <= remaining; i++) {
    const date = new Date(year, month + 1, i);
    container.appendChild(createDayElement(date, true));
  }
}

function createDayElement(date, isOtherMonth) {
  const div = document.createElement('div');
  div.className = 'calendar-day';
  if (isOtherMonth) div.classList.add('other-month');
  if (isSameDay(date, new Date())) div.classList.add('today');
  if (isSameDay(date, selectedDate)) div.classList.add('selected');
  
  const voc = getVoidOfCourse(date);
  if (voc.isVoid) div.classList.add('voc-day');
  
  const phaseInfo = getPhaseInfo(date);
  
  div.innerHTML = `
    <span class="day-number">${date.getDate()}</span>
    <span class="day-phase">${phaseInfo.emoji}</span>
  `;
  
  div.addEventListener('click', () => openDayDialog(date));
  
  return div;
}

function openDayDialog(date) {
  const longitude = getMoonLongitude(date);
  const zodiacInfo = getZodiacSign(longitude);
  const phaseInfo = getPhaseInfo(date);
  const mansion = getMansion(longitude);
  
  document.getElementById('day-dialog-title').textContent = formatDateLong(date);
  document.getElementById('day-dialog-phase').innerHTML = `<span>${phaseInfo.emoji}</span><span>${phaseInfo.name}</span>`;
  document.getElementById('day-dialog-zodiac').innerHTML = `<span>${zodiacInfo.sign.emoji}</span><span>Moon in ${zodiacInfo.sign.name}</span>`;
  document.getElementById('day-dialog-mansion').innerHTML = `<span>🏛️</span><span>Mansion ${mansion.number}: ${mansion.name}</span>`;
  document.getElementById('day-dialog-essence').textContent = mansion.essence;
  document.getElementById('day-dialog-good').textContent = mansion.goodFor;
  document.getElementById('day-dialog-bad').textContent = mansion.badFor;
  
  document.getElementById('day-dialog').style.display = 'flex';
}

function openMansionDialog() {
  const longitude = getMoonLongitude(selectedDate);
  const mansion = getMansion(longitude);
  
  document.getElementById('dialog-mansion-name').textContent = `Mansion ${mansion.number}: ${mansion.name}`;
  document.getElementById('dialog-essence').textContent = mansion.essence;
  document.getElementById('dialog-good').textContent = mansion.goodFor;
  document.getElementById('dialog-bad').textContent = mansion.badFor;
  
  document.getElementById('mansion-dialog').style.display = 'flex';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  updateCurrentTime();
  updateDailyView();
  updateMonthlyCalendar();
  
  setInterval(updateCurrentTime, 60000);
  
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(`${btn.dataset.tab}-view`).classList.add('active');
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
  
  // Month navigation
  document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    updateMonthlyCalendar();
  });
  
  document.getElementById('next-month').addEventListener('click', () => {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    updateMonthlyCalendar();
  });
  
  // Mansion dialog
  document.getElementById('mansion-name').addEventListener('click', openMansionDialog);
  
  document.getElementById('close-mansion-dialog').addEventListener('click', () => {
    document.getElementById('mansion-dialog').style.display = 'none';
  });
  
  document.getElementById('close-day-dialog').addEventListener('click', () => {
    document.getElementById('day-dialog').style.display = 'none';
  });
  
  // Close dialogs on overlay click
  document.getElementById('mansion-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'mansion-dialog') {
      document.getElementById('mansion-dialog').style.display = 'none';
    }
  });
  
  document.getElementById('day-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'day-dialog') {
      document.getElementById('day-dialog').style.display = 'none';
    }
  });
});
