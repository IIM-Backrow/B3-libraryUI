import React, { useEffect, useRef, useState } from "react";
import "./avatar-rolling.css";

export interface AvatarRollingProps {
  minSpeed: number; // tours/seconde
  maxSpeed: number; // tours/seconde
  avatar: string;   // url de l'image
  size?: number;    // px
}

function getRandomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function getRandomDirection() {
  const angle = Math.random() * 2 * Math.PI;
  return { x: Math.cos(angle), y: Math.sin(angle) };
}

export function AvatarRolling({ minSpeed, maxSpeed, avatar, size = 80 }: AvatarRollingProps) {
  const [spinSpeed, setSpinSpeed] = useState(() => getRandomBetween(minSpeed, maxSpeed));
  const [direction, setDirection] = useState(() => getRandomDirection());
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Change spin speed aléatoirement toutes les 1-3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setSpinSpeed(getRandomBetween(minSpeed, maxSpeed));
      setDirection(getRandomDirection());
    }, getRandomBetween(1000, 3000));
    return () => clearInterval(interval);
  }, [minSpeed, maxSpeed]);

  // Animation frame pour spin et déplacement
  useEffect(() => {
    let lastTime = performance.now();
    let raf: number;
    function animate(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      // Spin
      setAngle(a => a + 360 * spinSpeed * dt);
      // Déplacement (proportionnel à la vitesse de spin)
      setPosition(pos => {
        const speed = spinSpeed * 40; // px/sec
        let nx = pos.x + direction.x * speed * dt;
        let ny = pos.y + direction.y * speed * dt;
        // Rebond sur les bords du conteneur
        const parent = containerRef.current?.parentElement;
        if (parent) {
          const maxX = parent.clientWidth - size;
          const maxY = parent.clientHeight - size;
          if (nx < 0 || nx > maxX) {
            nx = Math.max(0, Math.min(maxX, nx));
            setDirection(d => ({ ...d, x: -d.x }));
          }
          if (ny < 0 || ny > maxY) {
            ny = Math.max(0, Math.min(maxY, ny));
            setDirection(d => ({ ...d, y: -d.y }));
          }
        }
        return { x: nx, y: ny };
      });
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [spinSpeed, direction, size]);

  return (
    <div
      ref={containerRef}
      className="avatar-rolling"
      style={{
        width: size,
        height: size,
        transform: `translate(${position.x}px, ${position.y}px) rotate(${angle}deg)`
      }}
    >
      <img
        src={avatar}
        alt="avatar"
        className="avatar-rolling-img"
        style={{ width: size, height: size, borderRadius: "50%" }}
        draggable={false}
      />
    </div>
  );
}

export default AvatarRolling;
