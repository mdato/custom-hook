import React, { useEffect, useState } from 'react'

const useWeather = (city = 'Bariloche') => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_KEY}
`)
      .then(res => res.json())
      .then(json => {
        setIsLoading(false)
        setError(null)
        //setData(json)
        setData({
          temp: json.main.temp,
          city,
          country: json.sys.country,
          temp_min: json.main.temp_min,
          temp_max: json.main.temp_max,
        })
      })
      .catch(err => {
        //setIsLoading(true)
        setData(null) // ya que no estoy recuperando nada en caso de error
        setError(err)
        setIsLoading(false)

      })
  }, [city])

  return [data, error, isLoading]

}

export default useWeather