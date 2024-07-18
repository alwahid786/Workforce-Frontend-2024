import React from "react";
import profileImg from "../../assets/images/header/profilepic.webp";
import CircularProgressBar from "./CircularProgressBar";

const ProjectCard = () => {
  return (
    <>
      <div className="bg-white px-4 md:px-6 xl:px-8 pt-4 md:pt-[20px] pb-4 md:pb-6 xl:pb-8 shadow-md rounded-[12px] border-l-[12px] border-[#f76f2c]">
        <h4 className="text-base md:text-[20px] text-[#000] font-semibold">
          Project 1
        </h4>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div>
            <div className="flex items-center">
              <img
                src={profileImg}
                className="w-[40px] h-[40px] rounded-full object-cover"
                alt="profile-pic"
              />
              <img
                src={profileImg}
                className="w-[40px] h-[40px] rounded-full object-cover ml-[-0.5rem]"
                alt="profile-pic"
              />
              <img
                src={profileImg}
                className="w-[40px] h-[40px] rounded-full object-cover ml-[-0.5rem]"
                alt="profile-pic"
              />
              <img
                src={profileImg}
                className="w-[40px] h-[40px] rounded-full object-cover ml-[-0.5rem]"
                alt="profile-pic"
              />
              <div className="w-[40px] h-[40px] rounded-full bg-[#d3d3d3] ml-[-0.5rem] text-base font-semibold text-[#000] flex items-center justify-center">
                5+
              </div>
            </div>
            <div className="flex items-center gap-4 justify-between mt-4">
              <div className="flex flex-col">
                <p className="text-sm text-[#00000099]">Start Date:</p>
                <p className="text-[18px] font-semibold text-[#000]">
                  21 Feb 2023 - 12:00 PM
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-[#00000099]">expected Due Date:</p>
                <p className="text-[18px] font-semibold text-[#000]">
                  22 March 2023 - 12:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-items-center gap-1">
            <CircularProgressBar percentage={85} color="#22c55e" />
            <p className="text-[10px] text-[#407bff]">Workforce Count</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
