export const randomInt = (max) => {
  const myMax = max || Number.MAX_SAFE_INTEGER;
  return Math.floor(Math.random() * Math.floor(myMax));
}
