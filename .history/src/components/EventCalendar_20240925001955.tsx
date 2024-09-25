"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Pitch Deck Review",
    time: "10:00 AM - 11:30 AM",
    description: "Review and finalize pitch deck with design team for upcoming investor meeting.",
  },
  {
    id: 2,
    title: "Product Launch Meeting",
    time: "2:00 PM - 3:30 PM",
    description: "Discuss final steps for MVP launch with development and marketing teams.",
  },
  {
    id: 3,
    title: "Equity Distribution Call",
    time: "4:00 PM - 5:00 PM",
    description: "Monthly call to review completed tasks and allocate sweat equity to contributors.",
  },
  {
    id: 4,
    title: "Investor Pitch Deadline",
    time: "11:59 PM",
    description: "Final deadline to submit pitch materials for seed funding round.",
  },
  {
    id: 5,
    title: "UI/UX Feedback Session",
    time: "1:00 PM - 2:30 PM",
    description: "Gather feedback from beta users on new interface design with UX specialist.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-dexSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;