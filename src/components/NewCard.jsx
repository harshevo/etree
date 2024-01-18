import React from 'react'
import leaf from '../assets/pexels-photo-2563449.jpeg';

const NewCard = () => {
  return (
    <>
        <div className='flex flex-row max-sm:flex-col'>
            <div className='flex-1'>
                <img className='object-cover h-full w-full' src={leaf}/>
            </div>
            
            <div className='flex-1 items-center justify-center p-10'>
                <div className='flex flex-col justify-center items-center pt-10 max-sm:pt-1'>
                <h3 className='text-center pt-10 max-sm:pt-5 text-2xl font-medium max-sm:text-xl'>ABOUT</h3>
                <div className='inline-flex justify-center items-center w-full pb-5'>
                    <hr className='w-10 h-1 bg-black'></hr>
                </div>
                <p className='text-justify px-20  max-md:px-10 max-lg:px-10 pb-20 max-sm:px-5 max-sm:pb-5 text-xl max-sm:text-sm'>
                    Nature and health are interconnected aspects of well-being.
                    Exposure to natural environments promotes physical and mental health,
                    reducing stress and enhancing overall vitality.
                    Regular contact with nature fosters a balanced and harmonious lifestyle,
                        contributing to a positive impact on human health.
                </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewCard