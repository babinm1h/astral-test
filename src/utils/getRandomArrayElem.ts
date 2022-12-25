export const getRandomArrayElem = <T>(arr: T[]) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};
