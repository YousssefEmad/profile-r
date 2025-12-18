import React from 'react'

export default function Footer() {

  const footerData = {
    location: {
      line1: "2215 John Daniel Drive",
      line2: "Clark, MO 65243"
    },
    social: [
      { icon: "fa-brands fa-facebook-f", link: "#" },
      { icon: "fa-brands fa-twitter", link: "#" },
      { icon: "fa-brands fa-linkedin-in", link: "#" },
      { icon: "fa-brands fa-dribbble", link: "#" }
    ],
    about:
      "Freelance is a free to use, licensed Bootstrap theme created by Route"
  };

  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-4 col-md-6 col-12">
              <div className="wget text-lg-center text-md-center text-start">
                <h3 className='text-white mb-3'>LOCATION</h3>
                <p>{footerData.location.line1}</p>
                <p>{footerData.location.line2}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="wget text-lg-center text-md-center text-start">
                <h3 className='text-white mb-3'>AROUND THE WEB</h3>
                <div className="icons d-flex gap-3 justify-content-center">
                  {footerData.social.map((item, i) => (
                    <a key={i} href={item.link}>
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="wget text-lg-center text-md-center text-start">
                <h3 className='text-white mb-3'>ABOUT FREELANCER</h3>
                <p>{footerData.about}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
