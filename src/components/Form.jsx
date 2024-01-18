import React from 'react'

const Form = () => {
  return (
    <>
        <div className='bg-[#D9DED8] flex flex-col items-center justify-center gap-2 p-10 pt-20 pb-20'>
            <h1 className='text-center font-medium text-xl'>SUBSCRIBE</h1>
            <p className='text-center'>Sign up to our newsletter</p>
            <div className='px-5 pt-2 w-full flex flex-col items-center justify center'>
                <input type='text ' className='w-[40%] p-2 max-sm:w-full' />
            </div>
            <div className='flex flex-col p-2'>
                <buttom className='border border-black p-2 w-40 text-center font-medium'>SUBMIT</buttom> 
            </div>
        </div>
    </>
  )
}

export default Form