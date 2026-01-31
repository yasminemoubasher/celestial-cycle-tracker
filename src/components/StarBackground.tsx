import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  moveX: number;
  moveY: number;
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    for (let i = 0; i < 80; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 30, // 30-50 seconds for slow drift
        moveX: (Math.random() - 0.5) * 20, // -10 to 10 percent movement
        moveY: (Math.random() - 0.5) * 10, // -5 to 5 percent movement
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animation: `twinkle 3s ease-in-out infinite ${star.delay}s, drift ${star.duration}s ease-in-out infinite alternate`,
            ["--move-x" as string]: `${star.moveX}%`,
            ["--move-y" as string]: `${star.moveY}%`,
          }}
        />
      ))}
      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: "10%", animationDelay: "0s" }} />
      <div className="shooting-star" style={{ top: "30%", animationDelay: "5s" }} />
      <div className="shooting-star" style={{ top: "60%", animationDelay: "10s" }} />
    </div>
  );
}
