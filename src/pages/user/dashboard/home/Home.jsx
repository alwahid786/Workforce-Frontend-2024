import React from "react";
import HomeCard from "../../../../components/home/HomeCard";
import workforceGrad from "../../../../assets/images/home/workforce-grad.png";
import projectGrad from "../../../../assets/images/home/project-grad.png";
import placementGrad from "../../../../assets/images/home/placement-grad.png";
import averagedaysGrad from "../../../../assets/images/home/averagedays-grad.png";
import ProjectCard from "../../../../components/home/ProjectCard";
import { projects } from "../../../../data/data";
import PieChartComponent from "../../../../components/charts/pieChart/PieChartComponentPieChart";
import MapComponent from "../../../../components/map/MapComponent";
import MapSensorsData from "../../../../components/home/MapSensorsData";
import BarChartComponent from "../../../../components/charts/barChart/BarChartComponent";
import DonutChart from "../../../../components/charts/donutChart/DonutChart";

const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6 mt-12 lg:mt-[30px]">
        <HomeCard
          title="WORKFORCE HIRE"
          value="60"
          valuePercentage="1.3"
          bgImg={workforceGrad}
        />
        <HomeCard
          title="PROJECT STAFFED"
          value="82"
          valuePercentage="3.3"
          bgImg={projectGrad}
        />
        <HomeCard
          title="AVERAGE DAYS TO PLACEMENT"
          value="12"
          valuePercentage="0.3"
          bgImg={placementGrad}
        />
        <HomeCard
          title="AVERAGE DAYS IDLE"
          value="234"
          valuePercentage="4.3"
          bgImg={averagedaysGrad}
        />
      </div>
      <h4 className="mt-4 md:mt-[40px] text[#111111] text-lg md:text-[24px] font-semibold">
        Todays Tasks
      </h4>
      {/* diver */}
      <div className="w-[104px] h-[4px] bg-[#111111] rounded-xl mt-1"></div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-[40px]">
        <div className="bg-white rounded-[12px] p-4 lg:p-6 xl:p-8 h-[450px] xl:h-[600px] overflow-y-scroll no-scrollbar drop-shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base text-[rgba(0, 0, 0, 0.6)] font-semibold">
              All Projects
            </h3>
            {/* <p className="text-sm text-[rgba(0, 0, 0, 0.6)]">View all</p> */}
          </div>
          {/* Projects cards */}
          {projects.map((project, i) => (
            <ProjectCard
              title={project.title}
              images={project.images}
              startDate={project.startDate}
              endDate={project.endDate}
              percentage={project.percentage}
            />
          ))}
        </div>
        <div className="bg-white rounded-[12px] p-4 lg:p-6 xl:p-8 drop-shadow-xl">
          <h3 className="text-[#000] text-lg md:text-[24px] font-semibold">
            Vehicles
          </h3>
          <PieChartComponent />
        </div>
      </div>
      <h4 className="mt-4 md:mt-[40px] text[#111111] text-lg md:text-[24px] font-semibold">
        Sensor
      </h4>
      {/* diver */}
      <div className="w-[104px] h-[4px] bg-[#111111] rounded-xl mt-1"></div>
      {/* map section */}
      <div className="grid md:grid-cols-12 gap-4 mt-4 md:mt-[40px] bg-white p-4 md:p-6 rounded-[12px] drop-shadow-xl">
        <div className="col-span-12 md:col-span-9 drop-shadow-md rounded-lg">
          <MapComponent position={[51.505, - 0.09]} />
        </div>
        <div className="col-span-12 md:col-span-3 drop-shadow-md">
          <MapSensorsData />
        </div>
      </div>
      {/* bar chart */}
      <h4 className="mt-4 md:mt-[40px] text[#111111] text-lg md:text-[24px] font-semibold">
        Workers Hire
      </h4>
      {/* diver */}
      <div className="w-[104px] h-[4px] bg-[#111111] rounded-xl mt-1"></div>
      <div className="bg-white p-4 md:p-6 rounded-[12px] mt-4 md:mt-[40px] drop-shadow-xl">
        <BarChartComponent />
      </div>
      {/* Charts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-4 md:mt-8 gap-4">
        <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md">
          <DonutChart />
        </div>
        <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md">2</div>
        <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md">3</div>
        <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md">4</div>
      </div>
    </>
  );
};

export default Home;
