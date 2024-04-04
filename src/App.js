import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import { useWeather } from "./context/Weather";

import "./App.css";
import Header from "./components/Header";
import RefressBtn from "./components/RefressBtn";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Input />
      <Card />
      <RefressBtn />
    </div>
  );
}

export default App;
