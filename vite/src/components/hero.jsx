import Search from './search.jsx';
import React from 'react'

const hero = () => {
  return (
    <div className='flex md:flex-row flex-col w-full justify-between'>
        <div className='flex flex-row font-saira font-semibold items-center md:mt-30 mt-[20px]'>
          <h1 className='flex-1 ss:text-[72px] text-[52px] ss:leading-[68px] leading-[48px] ss:px-12 px-12 ss:top-60'>
            GUJCET MOCK <br className='sm:block hidden'/>
            TEST RESULT
            <p className='ss:text-[30px] text-[24px] ss:leading-[42px] leading-[28px] md:px-2 sm:px-2 px-1'>
            HELD BY: RNGPIT
            </p>
          </h1>
        </div>
        <div className='md:pt-[40px] pt-[60px] pb-[20px] flex font-saira font-semibold'>
          <Search/>
        </div>
    </div>
  )
}

export default hero