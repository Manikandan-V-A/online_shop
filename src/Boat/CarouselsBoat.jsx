import React from 'react';
import './CarouselsBoat.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Boat/assets/carousel 1.webp'
import img2 from '../Boat/assets/carousel 11.webp'
import img3 from '../Boat/assets/carousel 3.webp'
import img4 from '../Boat/assets/carousel 4.webp'
import img5 from '../Boat/assets/carousel 5.webp'
import img6 from '../Boat/assets/carousel 6.webp'
import img7 from '../Boat/assets/carousel 2.webp'
export function CarouselsBoat(){
    return(
        <>
        <div className="carouselmain">
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="car" src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img3} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img4} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img5} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img6} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img7} />
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}