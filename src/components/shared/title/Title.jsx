import React from 'react'

const Title = ({title}) => {
  return (
    <>
    <h4 className="text[#111111] text-lg md:text-[24px] font-semibold">
        {title}
      </h4>
      {/* diver */}
      <div className="w-[104px] h-[4px] bg-[#111111] rounded-xl mt-1"></div>
    </>
  )
}

export default Title