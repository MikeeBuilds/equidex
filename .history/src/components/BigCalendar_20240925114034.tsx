"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.MONTH);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  useEffect(() => {
    console.log("Calendar Events:", calendarEvents);
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["month", "week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      defaultDate={new Date(2024, 9, 1)} // October 1, 2024
      min={new Date(2024, 0, 1, 0, 0, 0)} // January 1, 2024, 12:00 AM
      max={new Date(2025, 11, 31, 23, 59, 59)} // December 31, 2025, 11:59 PM
    />
  );
};

export default BigCalendar;