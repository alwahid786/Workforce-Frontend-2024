import React from 'react'
import Aside from '../../components/layout/aside/Aside'
import Header from '../../components/layout/header/Header'
import Main from '../../components/layout/main/Main'

const Users = () => {
  return (
    <section className='w-full relative user-dashboard p-4 h-screen'>
        <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-2 bg-primary rounded-[16px] p-4 md:p-6">
                <Aside />
            </div>
            <div className="col-span-10">
                <Header />
                <Main />
            </div>
        </div>
    </section>
  )
}

export default Users