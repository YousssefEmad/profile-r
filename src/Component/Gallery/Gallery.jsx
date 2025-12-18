import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import React, { useEffect } from 'react';
import Sectionheadtitle from '../Layout/Sectionheadtitle';
export default function Gallery() {
  const images = [
    {
      thumb: "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      full: "https://routeegy.github.io/startFramework/assets/images/poert1.png"
    },
    {
      thumb: "https://routeegy.github.io/startFramework/assets/images/port2.png",
      full: "https://routeegy.github.io/startFramework/assets/images/port2.png"
    },
    {
      thumb: "https://routeegy.github.io/startFramework/assets/images/port3.png",
      full: "https://routeegy.github.io/startFramework/assets/images/port3.png"
    },
    {
      thumb: "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      full: "https://routeegy.github.io/startFramework/assets/images/poert1.png"
    },
    {
      thumb: "https://routeegy.github.io/startFramework/assets/images/port2.png",
      full: "https://routeegy.github.io/startFramework/assets/images/port2.png"
    },
    {
      thumb: "https://routeegy.github.io/startFramework/assets/images/port3.png",
      full: "https://routeegy.github.io/startFramework/assets/images/port3.png"
    }
  ];

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      infinite: false
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <>
      <div className="gallery-section bg-h text-white">
        <Sectionheadtitle title="portfolio component" />
        <div className="container">
          <div className='row mt-5'>
            {images.map((img, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="fancy-card">
                  <a data-fancybox='gallery' href={img.full}>
                    <img
                      src={img.thumb}
                      className="w-100"
                    />
                    <div className="overlay">
                      <i className="fa-solid fa-eye fa-2x"></i>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}
