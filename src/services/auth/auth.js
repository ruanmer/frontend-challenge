export const signUp = async (data) => {
  const response = await fetch("http://localhost:3001/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 400) {
    throw new Error(response.statusText);
  }
};
