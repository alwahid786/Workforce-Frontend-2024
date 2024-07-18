import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='py-4 md:py-6 mt-6 xl:mt-0'>
        <Outlet />
    </div>
  )
}

export default Main