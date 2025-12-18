import React from 'react'

export default function Sectionheadtitle({ title }) {
  return (
    <>
      <div className="text-center pt-4">
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>{title}</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-3'></div>
      </div>
    </div>
    </>
  )
}
