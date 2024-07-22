import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import CarIcon from "../../../assets/svgs/home/TruckIcon";

const PieChartComponent = ({}) => {
  const data = [
    {
      name: "In Use",
      value: 65,
      color: "rgba(225, 52, 30, 1)",
    },
    { name: "Not In Use", value: 55, color: "rgba(43, 193, 85, 1)" },
    { name: "Total Vehicles", value: 250, color: "rgba(64, 123, 255, 1)" },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="relative w-[257px] h-[257px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={120}
                cornerRadius={7}
                dataKey="value"
                startAngle={90}
                endAngle={-270} 
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CarIcon />
          </div>
        </div>
        <div className="mt-6">
          {data.map((entry, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#0b60ae12] p-3 rounded-lg mb-2 w-64"
            >
              <div className="flex items-center">
                <div
                  className="w-[32px] h-[32px] rounded-[5px] mr-2"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-base font-semibold">{entry.name}</span>
              </div>
              <span className="font-semibold text-[20px]">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PieChartComponent;
