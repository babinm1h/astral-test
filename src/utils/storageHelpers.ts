export const readLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item) as T;
};

export const writeLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
