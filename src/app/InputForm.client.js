import React, { useState } from 'react';

export default function InputForm({ addSymptom }) {
  const [symptom, setSymptom] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [severity, setSeverity] = useState(1);
  const [isNew, setIsNew] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptom.trim()) {
      addSymptom({
        symptom: symptom.trim(),
        startTime,
        endTime,
        severity,
        isNew,
      }); 

      
      setSymptom('');
      setStartTime('');
      setEndTime('');
      setSeverity(1);
      setIsNew(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="symptom-input-form">
      <input
        type="text"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="Enter your symptom"
        style={{ color: 'black' }} // Setting text color to black
      />

      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        placeholder="Start time"
        style={{ color: 'black' }} // Setting text color to black
      />

      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        placeholder="End time"
        style={{ color: 'black' }} // Setting text color to black
      />

      <input
        type="number"
        min="1"
        max="10"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        placeholder="Severity (1-10)"
        style={{ color: 'black' }} // Setting text color to black
      />

      <label style={{ color: 'white' }}> {/* Setting text color to black */}
        <input
          type="checkbox"
          checked={isNew}
          onChange={(e) => setIsNew(e.target.checked)}
        />
        New Symptom
      </label>

      <button type="submit">Add Symptom</button>
    </form>
  );
}