let COLORS_IN_MEMORY_CACHE;

export const fetchColors = async () => {
  if (COLORS_IN_MEMORY_CACHE) {
    return COLORS_IN_MEMORY_CACHE;
  }

  const response = await fetch("http://localhost:3001/api/colors");
  const data = await response.json();

  COLORS_IN_MEMORY_CACHE = data;

  return data;
};
