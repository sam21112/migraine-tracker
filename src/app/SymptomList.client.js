import React from 'react';
import SymptomGraphs from './SymptomGraphs';

export default function SymptomList({ symptoms, weatherData, airQualityData }) {
  const MBAR_TO_INHG = 0.02953;

  return (
    <div>
      {weatherData && (
        <div className="weather-info">
          <p>Temperature: {weatherData.main.temp} °F</p>
          <p>Pressure: {weatherData.main.pressure * MBAR_TO_INHG} inHg</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          {/* Add more weather details here as needed */}
        </div>
      )}
      {airQualityData && (
        <div className="air-quality-info">
          <h2>Air Quality Information</h2>
          <p>Air Quality Index (AQI): {airQualityData.list[0].main.aqi}</p>
          <p>PM2.5: {airQualityData.list[0].components.pm2_5} μg/m³</p>
          <p>PM10: {airQualityData.list[0].components.pm10} μg/m³</p>
          <p>Nitrogen Dioxide (NO2): {airQualityData.list[0].components.no2} μg/m³</p>
          {/* Add more air quality details here as needed */}
        </div>
      )}

      <SymptomGraphs symptoms={symptoms} weatherData={weatherData} />

      <ul className="symptom-list">
        {symptoms.map((symptom, index) => (
          <li key={index}>
            <div>Symptom: {symptom.symptom}</div>
            <div>Start Time: {symptom.startTime}</div>
            <div>End Time: {symptom.endTime}</div>
            <div>Severity: {symptom.severity}</div>
            <div>New Symptom: {symptom.isNew ? 'Yes' : 'No'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
