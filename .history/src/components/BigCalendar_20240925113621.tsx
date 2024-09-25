"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.MONTH);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["month", "week", "work_week", "day", "agenda"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      defaultDate={new Date(2023, 9, 1)} // October 1, 2023
      min={new Date(2023, 0, 1, 7, 0, 0)} // January 1, 2023, 7:00 AM
      max={new Date(2023, 11, 31, 22, 0, 0)} // December 31, 2023, 10:00 PM
    />
  );
};

export default BigCalendar;