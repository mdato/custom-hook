import React, { useState, useEffect, useRef } from "react";
import useWeather from "./hooks/useWeather"; // importo hook personalizzato
// se usa de esta forma : useWeather('Bariloche');
// no se usa de esta forma : <useWeather />

import "./App.css";

const App = () => {
  const [city, setCity] = useState("Bariloche");

  const searchInput = useRef(null);

  const [data, isloading, error] = useWeather(city);

  useEffect(() => {
    // current property is refered to input element
    searchInput.current.focus();
  }, []);

  return (
    <div>

<h2>Vite + React Custom Hook + Fetch</h2>
      <input
        type="text"
        ref={searchInput}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />

      {isloading && !error ? (
        <p>NO data found !!</p>
      ) : (
        <>
          {data ? (
            <div>
              <p>
                ciudad: {data.city}, {data.country}
              </p>
              <p>temperatura: {data.temp}º</p>
              <p>temperatura minima: {data.temp_min}º</p>
              <p>temperatura maxima: {data.temp_max}º</p>
            </div>
          ) : (
            <p>Loading</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
