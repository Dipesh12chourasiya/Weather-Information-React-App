import React from "react";
import { useWeather } from "../context/Weather";
import Button from "./Button";
const Input = () => {
  const weather = useWeather();

  return (
    <div className="w-full flex items-center justify-center">
      <input
      className="w-80 mt-5 mb-3 border-2 border-blue-700 rounded-md py-2 px-4 block focus:outline-none focus:border-blue-900"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
      <span className="mt-[6px]"><Button onClick={weather.fetchData} value="Search" /></span>
    </div>
  );
};

export default Input;
