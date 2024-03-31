import Script from 'next/script'
import React from 'react'
import Image from 'next/image'
import img1 from '../../../public/img/carousel-1.jpg'
import img2 from '../../../public/img/carousel-2.jpg'




export const Carousell = () => {
  return (
    <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
  >
   
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src={img1} className="d-block w-100" alt="..." height={800}/>
      </div>
      <div className="carousel-item">
      <Image src={img2} className="d-block w-100" alt="..." height={800}/>      </div>
      <div className="carousel-item">
      <img src="https://ik.imagekit.io/eddytools/ET-Website/Logo/banner-big_rITu8P3Ouc.png" className="d-block w-100" alt="..." height={800}/>      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}
