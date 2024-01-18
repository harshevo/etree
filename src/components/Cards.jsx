import React from 'react'

const cardObj = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nature's tranquility nurtures mental peace, promoting holistic well-being and stress relief."
  },

  {
    id: 2,
    image: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fresh air , fostering physical health through outdoor activities and revitalizing experiences."
  },

  {
    id: 3,
    image: "https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Health thrives a balanced lifestyle—nutrition, exercise, and nature's serenity intertwined."
  }
]

const Cards = () => {
  return (
    <>
      <div>
        <div className='bg-blend-color-burn flex flex-row max-sm:flex-col p-10 max-md:p-2 gap-10 justify-center items-center rounded-md w-full h-full'>

          {
             cardObj.map((id) => {
              return (
                <div className='bg-white shadow-md transition hover:scale-110 flex flex-col gap-5 w-full '>
                  <div  className='pb-2/3 relative'>
                    <img className='absolute bottom-0 object-cover h-full w-full' src={id.image}/>
                  </div>
                  <div className='inline-flex justify-center items-center w-full'>
                    <hr className='w-20 h-1 bg-gray-300'></hr>
                  </div>
                  <div className='flex flex-wrap pt-2 pb-10 px-8 items-center justify-center '>
                    <p className='font-light text-sm text-start'>{id.description}</p>
                  </div>
                </div>
              )
             })
          } 

        </div>
      </div>
    </>
  )
}

export default Cards