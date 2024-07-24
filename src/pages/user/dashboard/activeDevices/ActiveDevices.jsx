import React from 'react'
import Title from '../../../../components/shared/title/Title'
import BarChartComponent from '../../../../components/charts/barChart/BarChartComponent'
import { activeDeviceNfcData, barLineData, smartTrackerData } from '../../../../data/data'
import DonutChart from '../../../../components/charts/donutChart/DonutChart'

const ActiveDevices = () => {
  return (
    <>
    <div className="h-4"></div>
    <div className="bg-white p-4 lg:p-6 xl:p-8 rounded-[12px]">
      <Title title='Active Devices' />
      <div className="mt-4">
        <BarChartComponent data={barLineData} />
      </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-[40px] mt-4 lg:mt-6 xl:mt-[40px]">
      <div className="bg-white rounded-[15px]">
        <ChartColumn title='NFC Tags' subTitle='Session by Device'>
          <DonutChart data={activeDeviceNfcData} />
        </ChartColumn>
      </div>
    </div>
    </>
  )
}

export default ActiveDevices

const ChartColumn = ({ title, subTitle, children }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div className="mt-6 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
};