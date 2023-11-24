/** @jsxRuntime classic */
/** @jsxImportSource react */
"use client";
import React, { useEffect, useState } from "react";
import InputForm from './InputForm.client';
import SymptomList from './SymptomList.client';

export default function Home() {
  const [symptoms, setSymptoms] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const url = `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

      console.log("URL:", url); // Log the full URL

      try {
        const response = await fetch(url);
        console.log("Response:", response); // Log the response object

        const data = await response.json();
        console.log("Data:", data); // Log the actual JSON data

        setWeatherData(data);
      } catch (error) {
        console.error("Error:", error); // Log any error that occurred during the fetch
      }
    });
  }, []);
  

  const addSymptom = (symptomDetails) => {
    setSymptoms((prevSymptoms) => [...prevSymptoms, symptomDetails]);
  };

  return (
    <>
      <InputForm addSymptom={addSymptom} />
      <SymptomList symptoms={symptoms} weatherData={weatherData} />
    </>
  );
}
