import React from 'react'

const Gallery = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner text-center justify-content-center">
          <div className="carousel-item active">
          <img style={{width: '40%', height: 200, overflow: 'hidden', position: 'relative'}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/1200px-Honda.svg.png" classname="d-block w-100 "  alt="Honda" />

          </div>
          <div className="carousel-item">
            <img
            style={{width: '40%', height: 200, overflow: 'hidden', position: 'relative'}} 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png"
              className="d-block w-100 "
              alt="VolksWagen"
            />
          </div>
          <div className="carousel-item">
            <img
           style={{width: '40%', height: 200, overflow: 'hidden', position: 'relative'}} 
              src="https://upload.wikimedia.org/wikipedia/commons/9/94/ToyotaLogoRedVer.svg"
              className="d-block w-100 "
              alt="Toyota"
            />
          </div>
          <div className="carousel-item">
        <img style={{width: '40%', height: 200, overflow: 'hidden', position: 'relative'}} 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/1024px-Ford_Motor_Company_Logo.svg.png" 
        classname="d-block w-100 " alt="Ford" />

          </div>
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Gallery
