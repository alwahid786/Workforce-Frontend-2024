import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const PieChartComponent = ({
  data,
  layout,
  centerIcon,
  innerRadius,
  outerRadius,
  paddingAngle = 4
}) => {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="relative w-[257px]" style={{height: layout === 'layout-one' ? '257px' : '180px'}}>
          <ResponsiveContainer width="100%" height={"100%"}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                cornerRadius={7}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                paddingAngle={paddingAngle}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {centerIcon}
          </div>
        </div>
        <div className="mt-6">
          {layout === "layout-one" ? (
            data.map((entry, index) => (
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
            ))
          ) : (
            <div className="flex items-center justify-between gap-3">
              {data.map((entry, i) => (
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
          )}
        </div>
      </div>
    </>
  );
};

export default PieChartComponent;
