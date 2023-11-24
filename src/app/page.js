/** @jsxRuntime classic */
/** @jsxImportSource react */
"use client";
import React, { useEffect, useState } from "react";
import InputForm from './InputForm.client';
import SymptomList from './SymptomList.client';

export default function Home() {
  const [symptoms, setSymptoms] = useState([]);
  const [airQualityData, setAirQualityData] = useState(null); // New state for air quality data

  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const currentLat = position.coords.latitude;
      const currentLong = position.coords.longitude;
      setLat(currentLat);
      setLong(currentLong);
      console.log("Latitude is:", currentLat);
      console.log("Longitude is:", currentLong);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather/?lat=${currentLat}&lon=${currentLong}&units=imperial&APPID=ce61565a479499d03b3d6992c488f134`
        );
        if (!response.ok) {
          throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const result = await response.json();
        setWeatherData(result);
        console.log("Weather Data:", result);
        const airQualityResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${currentLat}&lon=${currentLong}&appid=ce61565a479499d03b3d6992c488f134`
          );
          const airQualityResult = await airQualityResponse.json();
          setAirQualityData(airQualityResult);
          console.log("air quality", airQualityResult);

      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    });
  }, []);

  const addSymptom = (symptomDetails) => {
    setSymptoms((prevSymptoms) => [...prevSymptoms, symptomDetails]);
  };

  return (
    <>
      <InputForm addSymptom={addSymptom} lat={lat} long={long} />
      <SymptomList symptoms={symptoms} weatherData={weatherData} airQualityData={airQualityData} />
    </>
  );
}
