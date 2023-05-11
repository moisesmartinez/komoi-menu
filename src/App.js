import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './menu.json';

function App() {
  const [selectedDay, setSelectedDay] = useState('Lunes');

  useEffect(() => {
    const daysInSpanish = {
      Sunday: "Domingo",
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miércoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sábado"
    };
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    setSelectedDay(daysInSpanish[today]);
  }, []);

  const handleSelectDay = (event) => {
    setSelectedDay(event.target.value);
  }

  const mealKeys = Object.keys(Menu[selectedDay]);

  return (
    <div className="App">
      <select value={selectedDay} onChange={handleSelectDay}>
        {Object.keys(Menu).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <div className="meals-container">
        {mealKeys.map((mealKey) => (
          <div className="meal" key={mealKey}>
            <h2>{mealKey}</h2>
            {Menu[selectedDay][mealKey].split('\n').map((mealText, index) => (
  <p key={index}>{mealText}</p>
))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;