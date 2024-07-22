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

const data = [
  { name: "Dar", uv: 3428 },
  { name: "Elegant", uv: 7120 },
  { name: "Enjaz", uv: 6650 },
  { name: "ESOM", uv: 5985 },
  { name: "FHM", uv: 2132 },
  { name: "FMCO", uv: 4300 },
  { name: "FSCL", uv: 6480 },
  { name: "GACS", uv: 5640 },
  { name: "GKI", uv: 3482 },
  { name: "HMA", uv: 2940 },
  { name: "ICAD", uv: 5200 },
  { name: "IFMI", uv: 4000 },
  { name: "KCC", uv: 2800 },
  { name: "MNO", uv: 4000 },
  { name: "HCF", uv: 2800 },
  { name: "KFT", uv: 1800 },
  { name: "POLM", uv: 6500 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        // width={100}
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
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06325B" />
            <stop offset="100%" stopColor="#0C6AC1" />
          </linearGradient>
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
