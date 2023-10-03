export const fetchColors = async () => {
  const response = await fetch("http://localhost:3001/api/colors");

  return response.json();
};
