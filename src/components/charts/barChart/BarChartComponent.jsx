import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const BarChartComponent = ({data, colors}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={1500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          {colors? (
            colors.map((color, index) => (
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0" key={index}>
              <stop offset="0%" stopColor={color.start} />
              <stop offset="100%" stopColor={color.end} />
            </linearGradient>
            ))
          ) : (
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06325B" />
              <stop offset="100%" stopColor="#0C6AC1" />
            </linearGradient>
          )}
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="url(#colorUv)">
          <LabelList dataKey='uv' position='top' />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
