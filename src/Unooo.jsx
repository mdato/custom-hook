import React, { useState } from "react";
import useWeather from "./useWeather"; // importo hook personalizzato
// se usa de esta forma : useWeather('Barieeeeloche');
// no se usa de esta forma : <useWeather />

const Unooo = () => {
  const [city, setCity] = useState("Bariloche");

  const [data, isloading, error] = useWeather(city);

  console.log(data);
  console.log(isloading);
  console.log(error);
  return (
    <div>
      <input
        type="text"
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

      {/* {error && (
        <div>
          {error.message}
          <p>NO data found !!</p>
        </div>
      )} */}
    </div>
  );
};

export default Unooo;
