import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card bg-white rounded-lg shadow-lg p-6">
      <img
        src={weather?.data?.current?.condition?.icon}
        className="w-16 h-16 mx-auto mb-4"
        alt="Weather Icon"
      />
      <p className="mb-3 font-semibold text-lg">{weather?.data?.current?.condition?.text}</p>
      <h2 className="text-3xl font-bold mb-2">
        {weather.data?.current?.temp_c}°C
        / {weather.data?.current?.temp_f}°F
      </h2>
      <p></p>
      <h5 className="text-lg mb-2">
        {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
        {weather.data?.location?.country}
      </h5>
      <p>Last Update: {weather.data?.current?.last_updated}</p>
    </div>
  );
};

export default Card;
