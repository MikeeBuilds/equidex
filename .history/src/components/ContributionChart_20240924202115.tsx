"use client";

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Alice",
    hoursWorked: 160,
    milestonesMet: 3,
    valueCreated: 5000,
  },
  {
    name: "Bob",
    hoursWorked: 140,
    milestonesMet: 2,
    valueCreated: 4000,
  },
  {
    name: "Charlie",
    hoursWorked: 180,
    milestonesMet: 4,
    valueCreated: 7000,
  },
  {
    name: "Diana",
    hoursWorked: 120,
    milestonesMet: 2,
    valueCreated: 3000,
  },
  {
    name: "Ethan",
    hoursWorked: 200,
    milestonesMet: 5,
    valueCreated: 8000,
  },
];

const ContributionChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <h1 className="text-lg font-semibold mb-4">Equity Contributions</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="hoursWorked" fill="#8884d8" name="Hours Worked" />
          <Bar yAxisId="left" dataKey="milestonesMet" fill="#82ca9d" name="Milestones Met" />
          <Bar yAxisId="right" dataKey="valueCreated" fill="#ffc658" name="Value Created ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContributionChart;