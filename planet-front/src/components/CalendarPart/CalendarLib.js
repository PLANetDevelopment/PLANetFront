import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
const CalendarStyle = styled.div`
  .highlight {
    background-color: #cfdce8;
    border-radius: 100px;
  }
`;
function CalendarLib() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendarPage">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarLib;
