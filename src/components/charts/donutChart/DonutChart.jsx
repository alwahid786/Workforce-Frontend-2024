import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const DonutChart = ({data}) => {
  const assignedData = data.filter((entry) => entry.name === 'Assigned')
  const unAssignedData = data.filter((entry) => entry.name === 'Unassigned')

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={assignedData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={85}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          startAngle={90}
          endAngle={-95}
        >
          {assignedData.map((entry, index) => (
            <>
              <Cell key={`cell-${index}`} fill={entry.color} />
              <Label
                value={`${entry.value}%`}
                position={"insideTopRight"}
                color="#000"
                fontWeight={700}
                fontSize={'10px'}
              />
            </>
          ))}
        </Pie>
        <Pie
          data={unAssignedData}
          cx="50%"
          cy="50%"
          innerRadius={35}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          labelLine={false}
          startAngle={90}
          endAngle={-170}
        >
          {unAssignedData.map((entry, index) => (
            <>
              <Cell key={`cell-${index}`} fill={entry.color} />
              <Label
                value={`${entry.value}%`}
                position={"insideTopRight"}
                color="#000"
                fontWeight={700}
                fontSize={'10px'}
              />
            </>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
        <div className="flex items-center justify-between gap-3">
        {unAssignedData.map((entry, i) => (
          <div className="flex items-center gap-1" key={i}>
            <div
              className="w-[15px] h-[15px] rounded-[5px]"
              style={{ background: entry.color }}
            ></div>
            <p className="text-sm text-[#030229]">
              {entry.name}{" "}
              <span className="text-base font-semibold">
                {entry.value}%
              </span>
            </p>
          </div>
        ))}
        {assignedData.map((entry, i) => (
          <div className="flex items-center gap-1" key={i}>
            <div
              className="w-[15px] h-[15px] rounded-[5px]"
              style={{ background: entry.color }}
            ></div>
            <p className="text-sm text-[#030229]">
              {entry.name}{" "}
              <span className="text-base font-semibold">
                {entry.value}%
              </span>
            </p>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  );
};

export default DonutChart;
