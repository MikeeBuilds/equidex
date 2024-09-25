"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const eventStyleGetter = (event: any) => {
    if (event && event.colorClass) {
      const colorClass = `event-${event.colorClass.toLowerCase()}`;
      return {
        className: colorClass
      };
    }
    return {}; // Return an empty object if colorClass is not available
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents || []} // Provide an empty array if calendarEvents is undefined
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day", "month"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2024, 0, 1, 8, 0, 0)} // January 1, 2024, 8:00 AM
      max={new Date(2025, 11, 31, 17, 0, 0)} // December 31, 2025, 5:00 PM
      eventPropGetter={eventStyleGetter}
    />
  );
};

export default BigCalendar;