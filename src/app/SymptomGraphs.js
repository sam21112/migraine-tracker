// SymptomGraphs.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const SymptomGraphs = ({ symptoms, weatherData }) => {
  // Extract symptom severity values
  const severityValues = symptoms.map((symptom) => symptom.severity);

  // Extract weather data values
  const pressureValues = weatherData ? weatherData.main.pressure : [];
  const temperatureValues = weatherData ? weatherData.main.temp : [];

  // Create data for the graphs
  const severityPressureData = {
    labels: ['Symptom 1', 'Symptom 2', 'Symptom 3'], // Replace with your symptom names
    datasets: [
      {
        label: 'Severity vs Pressure',
        data: severityValues, // Replace with your severity values
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Pressure (hPa)',
        data: pressureValues, // Replace with your pressure values
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const severityTempData = {
    labels: ['Symptom 1', 'Symptom 2', 'Symptom 3'], // Replace with your symptom names
    datasets: [
      {
        label: 'Severity vs Temperature',
        data: severityValues, // Replace with your severity values
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Temperature (°C)',
        data: temperatureValues, // Replace with your temperature values
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Severity vs Pressure</h2>
      <Bar data={severityPressureData} />
      <h2>Severity vs Temperature</h2>
      <Bar data={severityTempData} />
    </div>
  );
};

export default SymptomGraphs;
