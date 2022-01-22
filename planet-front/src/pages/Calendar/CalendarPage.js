import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Calendar from "../../components/CalendarPart/CalendarLib";

function CalendarPage() {
  return (
    <div className="calendarPage">
      <Calendar />
      <Footer activeMenu="calendar">
        <div>달력</div>
      </Footer>
    </div>
  );
}

export default CalendarPage;
