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

// Popular cities with coordinates
const CITIES = [
  { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
  { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437 },
  { name: "Chicago, USA", lat: 41.8781, lon: -87.6298 },
  { name: "London, UK", lat: 51.5074, lon: -0.1278 },
  { name: "Paris, France", lat: 48.8566, lon: 2.3522 },
  { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050 },
  { name: "Rome, Italy", lat: 41.9028, lon: 12.4964 },
  { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038 },
  { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041 },
  { name: "Dubai, UAE", lat: 25.2048, lon: 55.2708 },
  { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503 },
  { name: "Beijing, China", lat: 39.9042, lon: 116.4074 },
  { name: "Shanghai, China", lat: 31.2304, lon: 121.4737 },
  { name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093 },
  { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631 },
  { name: "Mumbai, India", lat: 19.0760, lon: 72.8777 },
  { name: "Delhi, India", lat: 28.7041, lon: 77.1025 },
  { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357 },
  { name: "Casablanca, Morocco", lat: 33.5731, lon: -7.5898 },
  { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473 },
  { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792 },
  { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333 },
  { name: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729 },
  { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332 },
  { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816 },
  { name: "Toronto, Canada", lat: 43.6532, lon: -79.3832 },
  { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207 },
  { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173 },
  { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784 },
  { name: "Bangkok, Thailand", lat: 13.7563, lon: 100.5018 },
  { name: "Jakarta, Indonesia", lat: -6.2088, lon: 106.8456 },
  { name: "Manila, Philippines", lat: 14.5995, lon: 120.9842 },
  { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780 },
  { name: "Riyadh, Saudi Arabia", lat: 24.7136, lon: 46.6753 },
  { name: "Tehran, Iran", lat: 35.6892, lon: 51.3890 },
  { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lon: 101.6869 },
  { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738 },
  { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417 }
];

// Default coordinates (Casablanca) - will be updated with location selection
let LAT = 33.5731;
let LON = -7.5898;
let locationName = "Casablanca, Morocco";

// State
let selectedDate = new Date();
let currentMonth = new Date();

// Location Selection
function initLocationSelector() {
  const locationSelect = document.getElementById('location-select');
  if (!locationSelect) return;
  
  // Populate dropdown with cities
  CITIES.forEach((city, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = city.name;
    if (city.name === "Casablanca, Morocco") {
      option.selected = true;
    }
    locationSelect.appendChild(option);
  });
  
  // Load saved location from localStorage
  const savedLocation = localStorage.getItem('selectedLocation');
  if (savedLocation) {
    const savedIndex = parseInt(savedLocation);
    if (savedIndex >= 0 && savedIndex < CITIES.length) {
      locationSelect.value = savedIndex;
      updateLocation(savedIndex);
    }
  }
  
  // Handle location change
  locationSelect.addEventListener('change', (e) => {
    const index = parseInt(e.target.value);
    updateLocation(index);
    localStorage.setItem('selectedLocation', index);
  });
}

function updateLocation(cityIndex) {
  const city = CITIES[cityIndex];
  if (city) {
    LAT = city.lat;
    LON = city.lon;
    locationName = city.name;
    
    // Update the display with new location data
    updateDailyView();
    updateMonthlyCalendar();
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
  const mansionIndex = Math.floor(longitude / mansionSize);
  return MOON_MANSIONS[mansionIndex];
}

function findMansionCrossing(date, direction) {
  const currentLong = getMoonLongitude(date);
  const mansionSize = 360 / 28;
  const currentMansionIndex = Math.floor(currentLong / mansionSize);
  
  const step = direction === 'start' ? -1 : 1;
  
  // Coarse search
  for (let i = 0; i < 48; i++) {
    const searchDate = new Date(date.getTime() + step * i * 60 * 60 * 1000);
    const long = getMoonLongitude(searchDate);
    const mansionIdx = Math.floor(long / mansionSize);
    
    if (mansionIdx !== currentMansionIndex) {
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
        const midMansionIdx = Math.floor(midLong / mansionSize);
        
        if (direction === 'start') {
          if (midMansionIdx === currentMansionIndex) {
            high = mid;
          } else {
            low = mid;
          }
        } else {
          if (midMansionIdx === currentMansionIndex) {
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
  // Find when the Moon leaves the current sign
  const signEnd = findSignCrossing(date, 'end');
  
  if (!signEnd) {
    return { isVoid: false, text: "Moon active in sign" };
  }
  
  // Check if VOC has already started (find last major aspect)
  const currentLong = getMoonLongitude(date);
  const currentSignIndex = Math.floor(currentLong / 30);
  
  // Simplified: VOC starts when moon is in last 2 degrees of sign
  const degreeInSign = currentLong % 30;
  
  if (degreeInSign >= 28) {
    // Currently void of course
    return {
      isVoid: true,
      start: date,
      end: signEnd,
      text: `Void of Course until ${formatTime(signEnd)}`
    };
  }
  
  // Find when VOC will start (when moon reaches 28 degrees of current sign)
  const vocStartDegree = currentSignIndex * 30 + 28;
  let vocStart = null;
  
  // Search for when moon reaches 28 degrees
  for (let i = 0; i < 72; i++) {
    const searchDate = new Date(date.getTime() + i * 60 * 60 * 1000);
    const long = getMoonLongitude(searchDate);
    const searchSignIdx = Math.floor(long / 30);
    
    if (searchSignIdx !== currentSignIndex) break;
    
    if (long % 30 >= 28) {
      // Fine search
      let low = new Date(searchDate.getTime() - 60 * 60 * 1000);
      let high = searchDate;
      
      for (let j = 0; j < 15; j++) {
        const mid = new Date((low.getTime() + high.getTime()) / 2);
        const midLong = getMoonLongitude(mid);
        
        if (midLong % 30 >= 28) {
          high = mid;
        } else {
          low = mid;
        }
      }
      vocStart = high;
      break;
    }
  }
  
  if (vocStart && signEnd) {
    return {
      isVoid: false,
      start: vocStart,
      end: signEnd,
      text: `VOC: ${formatTime(vocStart)} - ${formatTime(signEnd)}`
    };
  }
  
  return { isVoid: false, text: "Moon active in sign" };
}

function getRetrogradePlanets(date) {
  return RETROGRADE_PLANETS.filter(p => date >= p.retroStart && date <= p.retroEnd);
}

function getMoonRiseSet(date) {
  // More accurate calculation using location
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const phase = getMoonPhase(date) / 360;
  
  // Adjust for latitude
  const latFactor = Math.cos(LAT * Math.PI / 180);
  
  // Base times adjusted by phase and location
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
  
  // Create stars
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
  
  // Create shooting stars periodically
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
  
  // Update selected date display
  document.getElementById('selected-date').textContent = formatDate(date);
  document.getElementById('return-today').style.display = isToday ? 'none' : 'block';
  
  // Moon Phase
  const phaseInfo = getPhaseInfo(date);
  document.getElementById('phase-emoji').textContent = phaseInfo.emoji;
  document.getElementById('phase-name').textContent = phaseInfo.name;
  document.getElementById('illumination').textContent = getIllumination(date) + '% illuminated';
  
  // Exact phase time
  const exactPhaseBox = document.getElementById('exact-phase-box');
  const phaseTargets = [0, 90, 180, 270]; // New, First Quarter, Full, Last Quarter
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
    document.getElementById('exact-phase-time').textContent = formatTime(nearestPhase.time);
  } else {
    exactPhaseBox.style.display = 'none';
  }
  
  // Moon Rise/Set
  const riseSet = getMoonRiseSet(date);
  document.getElementById('moon-rise').textContent = formatTime(riseSet.rise);
  document.getElementById('moon-set').textContent = formatTime(riseSet.set);
  
  // Zodiac
  const moonLong = getMoonLongitude(date);
  const zodiac = getZodiacSign(moonLong);
  document.getElementById('zodiac-emoji').textContent = zodiac.sign.emoji;
  document.getElementById('zodiac-sign').textContent = zodiac.sign.name;
  document.getElementById('zodiac-degree').textContent = zodiac.degree + '° ' + zodiac.sign.name;
  
  const signStart = findSignCrossing(date, 'start');
  const signEnd = findSignCrossing(date, 'end');
  document.getElementById('zodiac-timing').textContent = 
    `${formatShortDate(signStart)} ${formatTime(signStart)} - ${formatShortDate(signEnd)} ${formatTime(signEnd)}`;
  
  const elementDescriptions = {
    fire: "Fiery, passionate, and action-oriented energy",
    earth: "Grounded, practical, and stable energy",
    air: "Intellectual, communicative, and social energy",
    water: "Emotional, intuitive, and nurturing energy"
  };
  document.getElementById('zodiac-desc').textContent = elementDescriptions[zodiac.sign.element];
  
  // Mansion
  const mansion = getMansion(moonLong);
  document.getElementById('mansion-number').textContent = mansion.number;
  document.getElementById('mansion-name').textContent = mansion.name;
  
  const mansionStart = findMansionCrossing(date, 'start');
  const mansionEnd = findMansionCrossing(date, 'end');
  document.getElementById('mansion-timing').textContent = 
    `${formatShortDate(mansionStart)} ${formatTime(mansionStart)} - ${formatShortDate(mansionEnd)} ${formatTime(mansionEnd)}`;
  
  // Void of Course
  const voc = getVoidOfCourse(date);
  const vocCard = document.getElementById('voc-card');
  const vocStatus = document.getElementById('voc-status');
  const vocText = document.getElementById('voc-text');
  const vocTiming = document.getElementById('voc-timing');
  
  if (voc.isVoid) {
    vocCard.classList.add('voc-active');
    vocStatus.textContent = '⚠️ Active';
    vocText.textContent = voc.text;
    vocTiming.style.display = 'block';
    document.getElementById('voc-times').textContent = `Until ${formatTime(voc.end)}`;
  } else if (voc.start) {
    vocCard.classList.remove('voc-active');
    vocStatus.textContent = '✓ Clear';
    vocText.textContent = 'Moon making aspects';
    vocTiming.style.display = 'block';
    document.getElementById('voc-times').textContent = voc.text;
  } else {
    vocCard.classList.remove('voc-active');
    vocStatus.textContent = '✓ Clear';
    vocText.textContent = 'Moon active in sign';
    vocTiming.style.display = 'none';
  }
  
  // Retrograde Planets
  const retroPlanets = getRetrogradePlanets(date);
  const retroContainer = document.getElementById('retro-planets');
  
  if (retroPlanets.length === 0) {
    retroContainer.innerHTML = '<p class="no-retro">No planets in retrograde</p>';
  } else {
    retroContainer.innerHTML = retroPlanets.map(p => `
      <div class="retro-planet">
        <span class="retro-emoji">${p.emoji}</span>
        <span class="retro-name">${p.planet}</span>
        <span class="retro-dates">${formatShortDate(p.retroStart)} - ${formatShortDate(p.retroEnd)}</span>
      </div>
    `).join('');
  }
  
  // Summary
  document.getElementById('summary-phase').textContent = phaseInfo.emoji;
  document.getElementById('summary-phase-name').textContent = phaseInfo.name;
  document.getElementById('summary-zodiac').textContent = zodiac.sign.emoji;
  document.getElementById('summary-zodiac-name').textContent = 'Moon in ' + zodiac.sign.name;
  document.getElementById('summary-mansion').textContent = 'Mansion ' + mansion.number;
  document.getElementById('summary-voc-emoji').textContent = voc.isVoid ? '⚠️' : '✓';
  document.getElementById('summary-voc').textContent = voc.isVoid ? 'Void of Course' : 'Moon Active';
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
  
  // Empty cells for padding
  for (let i = 0; i < startPadding; i++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day empty';
    container.appendChild(cell);
  }
  
  // Days of the month
  const today = new Date();
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day, 12);
    const phaseInfo = getPhaseInfo(date);
    const isToday = date.toDateString() === today.toDateString();
    
    const cell = document.createElement('div');
    cell.className = 'calendar-day' + (isToday ? ' today' : '');
    cell.innerHTML = `
      <span class="day-number">${day}</span>
      <span class="day-phase">${phaseInfo.emoji}</span>
    `;
    
    cell.addEventListener('click', () => showDayDialog(date));
    container.appendChild(cell);
  }
}

function showMansionDialog(mansion) {
  document.getElementById('dialog-mansion-name').textContent = `${mansion.number}. ${mansion.name}`;
  document.getElementById('dialog-essence').textContent = mansion.essence;
  document.getElementById('dialog-good').textContent = mansion.goodFor;
  document.getElementById('dialog-bad').textContent = mansion.badFor;
  document.getElementById('mansion-dialog').style.display = 'flex';
}

function showDayDialog(date) {
  const phaseInfo = getPhaseInfo(date);
  const moonLong = getMoonLongitude(date);
  const zodiac = getZodiacSign(moonLong);
  const mansion = getMansion(moonLong);
  
  document.getElementById('day-dialog-title').textContent = formatDate(date);
  document.getElementById('day-dialog-phase').innerHTML = `
    <span class="day-dialog-emoji">${phaseInfo.emoji}</span>
    <span>${phaseInfo.name} - ${getIllumination(date)}% illuminated</span>
  `;
  document.getElementById('day-dialog-zodiac').innerHTML = `
    <span class="day-dialog-emoji">${zodiac.sign.emoji}</span>
    <span>Moon in ${zodiac.sign.name} at ${zodiac.degree}°</span>
  `;
  document.getElementById('day-dialog-mansion').innerHTML = `
    <span class="day-dialog-emoji">🏛️</span>
    <span>Mansion ${mansion.number}: ${mansion.name}</span>
  `;
  document.getElementById('day-dialog-essence').textContent = mansion.essence;
  document.getElementById('day-dialog-good').textContent = mansion.goodFor;
  document.getElementById('day-dialog-bad').textContent = mansion.badFor;
  
  document.getElementById('day-dialog').style.display = 'flex';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  createStarBackground();
  updateCurrentTime();
  updateDailyView();
  updateMonthlyCalendar();
  
  // Initialize location selector
  initLocationSelector();
  
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
  document.getElementById('mansion-name').addEventListener('click', () => {
    const moonLong = getMoonLongitude(selectedDate);
    const mansion = getMansion(moonLong);
    showMansionDialog(mansion);
  });
  
  document.getElementById('close-mansion-dialog').addEventListener('click', () => {
    document.getElementById('mansion-dialog').style.display = 'none';
  });
  
  document.getElementById('mansion-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'mansion-dialog') {
      document.getElementById('mansion-dialog').style.display = 'none';
    }
  });
  
  // Day dialog
  document.getElementById('close-day-dialog').addEventListener('click', () => {
    document.getElementById('day-dialog').style.display = 'none';
  });
  
  document.getElementById('day-dialog').addEventListener('click', (e) => {
    if (e.target.id === 'day-dialog') {
      document.getElementById('day-dialog').style.display = 'none';
    }
  });
});
