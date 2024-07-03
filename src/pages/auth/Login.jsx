import React from 'react'
import logo from '../../assets/images/logo/logo.png'
import loginImg from '../../assets/images/login/login-img.png'

const Login = () => {
  return (
    <section className='w-full h-[100vh] grid md:grid-cols-2'>
        <div className='bg-primary py-[24px] lg:py-[90px] xl:py-[132px] hidden md:block'>
            <div className="px-[24px] lg:px-[60px] xl:pl-[132px] xl:pr-[72px]">
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4">
                    <img src={logo} alt="logo" className='w-[60px] md:w-[90px]' />
                    <h2 className="text-lg md:text-[30px] font-semibold text-white">
                        Workforce Ease
                    </h2>
                </div>
                <h1 className="my-4 md:my-[32px] text-white font-semibold text-2xl md:text3xl lg:text-[50px] leading-none lg:leading-[75px] text-center md:text-left">
                    Welcome to Workforce <br />
                    Ease!
                </h1>
                <p className="text-white text-base md:text-[30px] text-center md:text-left">
                    Register your account
                </p>
            </div>
            <div className='mt-12'>
                <img src={loginImg} alt="login image" className='max-w-[100%] w-[600px]' />
            </div>
        </div>
        <div className=''>2</div>
    </section>
  )
}

export default Login