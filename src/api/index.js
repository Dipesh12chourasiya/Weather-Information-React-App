// const baseURL =
//   "https://api.weatherapi.com/v1/current.json?key=58ae7813f1b2419b8b0123838222406";
const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=adeadbcbe04d47a385441628240204";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
