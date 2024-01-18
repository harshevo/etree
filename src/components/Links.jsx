import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faMeta } from '@fortawesome/free-brands-svg-icons';
import NewCard from './NewCard';

const Links = () => {
  return (
    <>
      <div className='bg-white flex flex-row max-sm:flex-col-reverse p-10 items-center justify-center w-full'>
        <div className='flex-1 flex-row justify-center gap-2 '>
            <FontAwesomeIcon className='fa-xl p-2' icon={faInstagram}/>
            <FontAwesomeIcon className='fa-xl p-2' icon={faMeta}/>
            <FontAwesomeIcon className='fa-xl p-2' icon={faTwitter}/>
        </div>

        <div className='flex flex-row max-sm:flex-col' >
          <h3 className='px-2 max-sm:p-1 text-center'>ABOUT</h3> 
          <h3 className='px-2 max-sm:p-1 text-center'>ARTICLES</h3>
          <h3 className='px-2 max-sm:p-1 text-center'>SUBSCRIBE</h3>
        </div>
      </div>
    </>
  )
}

export default Links; 