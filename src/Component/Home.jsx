import React, { use, useEffect, useState } from 'react'
import Sectionheadtitle from './Layout/Sectionheadtitle';
export default function Home() {


  return (
    <>
      <div className='home bg-prime d-flex justify-content-center align-items-center text-white'>
        <div className="text-center">
          <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="" />
           <Sectionheadtitle title="Start Framework" />
            <div className="text-center text-white">
              Graphic Artist - Web Designer - Illustrator
            </div>
        </div>
      </div>
    </>
  )
}
