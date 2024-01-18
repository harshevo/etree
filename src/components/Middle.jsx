import React from 'react'
import Cards from '../components/Cards'

const Middle = () => {
  return (
    <>
        <div className='bg-[#D9DED8] pt-2 pb-4 h-full w-full ' >
            <div className='h-full w-full justify-center '>
                <div className='flex flex-col justify-start items-center pt-10'>
                    <h3 className='pt-10 text-stone-500 text-2xl font-bold'>LATEST ARTICLES</h3>
                    <div className='inline-flex justify-center items-center w-full pt-2'>
                      <hr className='w-5 h-1 rounded bg-gray-500'></hr>
                    </div>
                </div>
                <div className='pb-20 px-10 max-sm:px-5 max-md:p-8'>
                  <Cards/>
                </div> 
            </div>

        </div>
    </>
  )
}

export default Middle