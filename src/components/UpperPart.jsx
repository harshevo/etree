import React from 'react'
import leaf from '../assets/photo-1477554193778-9562c28588c0.avif';
import Header from './Header';
import Middle from './Middle';
import Form from './Form';
import Links from './Links';
import NewCard from './NewCard';

const UpperPart = () => {
  return (
    <>
        <div className='flex flex-col h-full w-full'>
            <div className='bg-white p-2 flex flex-col items-center justify-center  h-full w-full'>
                <img className="h-screen w-full object-cover" src={leaf}/>
            <div className='absolute flex-col items-center justify-center pb-10'>
                <h1 className='text-9xl max-sm:text-5xl font-medium text-[#474C46] font-sans'>LOMBOK</h1>
                <h3 className='text-xl max-sm:text-sm text-center font-bold text-[#474C46] font-sans'>HOLISTIC HEALTH</h3>

                <div className='inline-flex justify-center items-center w-full pt-2'>
                  <hr className='w-10 h-1 rounded bg-gray-500'></hr>
                </div>
                
            </div>
            </div>
            <div className='absolute p-2 end-2'>
                    <Header/>
            </div>

            <div className='relative w-full'>
                <Middle/>
            </div>

            <div className='flex flex-row max-sm:flex-col justify-center items-center'>
              <NewCard/>
            </div>

            <div>
              <Form/>
            </div>


            <div>
              <Links/>
            </div>

        </div>
    </>
  )
}

export default UpperPart