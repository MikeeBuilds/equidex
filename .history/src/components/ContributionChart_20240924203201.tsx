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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Equity Contributions</h1>
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300} className="pb-20">
        <BarChart data={data} barSize={30}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)' ,
            }} 
          />
          <Legend 
            wrapperStyle={{
              paddingTop: '20px',
              
            }}
          />
          <Bar dataKey="hoursWorked" fill="#FAE27C" radius={[10, 10, 0, 0]} name="Hours Worked" />
          <Bar dataKey="valueCreated" fill="#C3EBFA" radius={[10, 10, 0, 0]} name="Value Created ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContributionChart;