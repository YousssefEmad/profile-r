import React from 'react';
import Sectionheadtitle from './Layout/Sectionheadtitle';

export default function About() {
  const texts = [
    "Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <div className='about bg-prime d-flex justify-content-center align-items-center text-white'>
      <div className="text-center">
        <Sectionheadtitle title="About Component" />
      <div className="container">
        <div className="row">
          {texts.map((text, index) => (
            <div key={index} className="col-lg-6 col-12 mb-3">
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
        
      </div>
    </div>
  );
}
