export function getRandomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function getRandomDirection() {
  const angle = Math.random() * 2 * Math.PI;
  return { x: Math.cos(angle), y: Math.sin(angle) };
}
