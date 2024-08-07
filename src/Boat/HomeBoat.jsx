import React from "react";
import './CarouselsBoat.css'
import './ProductsBoat.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Boat/assets/carousel 1.webp'
import img2 from '../Boat/assets/carousel 11.webp'
import img3 from '../Boat/assets/carousel 3.webp'
import img4 from '../Boat/assets/carousel 4.webp'
import img5 from '../Boat/assets/carousel 5.webp'
import img6 from '../Boat/assets/carousel 6.webp'
import img7 from '../Boat/assets/carousel 2.webp'

import imgback1 from '../Boat/assets/carouselback1.jpg'
import imgback2 from '../Boat/assets/carouselback2.jpg'
import imgback3 from '../Boat/assets/carouselback3.jpg'
import imgback4 from '../Boat/assets/carouselback4.jpg'
import imgback5 from '../Boat/assets/carouselback5.jpg'
import imgback6 from '../Boat/assets/carouselback6.jpg'

import './HomeBoat.css'
import Imgtws1 from './assets/watch1.webp'
import Imgtws2 from './assets/headphone3.webp'
import Imgtws3 from './assets/tws3.webp'
import Imgtws4 from './assets/Partyspeaker4.webp'
import { useNavigate } from 'react-router-dom';

import Vid1 from './assets/video1.mp4'
import Vid2 from './assets/video2.mp4'
import Vid3 from './assets/video3.mp4'
import Vid4 from './assets/video4.mp4'

import Actorimg1 from './assets/actor1.webp'
import Actorimg2 from './assets/actor2.webp'
import Actorimg3 from './assets/actor3.webp'
import Actorimg4 from './assets/actor4.webp'

import Ads1 from './assets/ads1.mp4'
import Ads2 from './assets/ads2.mp4'
import Ads3 from './assets/ads3.mp4'
import Ads4 from './assets/ads4.mp4'

import Product1 from './assets/product1.png'
import Product2 from './assets/product2.webp'
import Product3 from './assets/product3.png'
import Product4 from './assets/product4.png'
import Product5 from './assets/product5.png'
import Product6 from './assets/product6.png'
import Product7 from './assets/product7.png'
import Product8 from './assets/product8.png'
import Product9 from './assets/product9.png'


import { WatchBoat } from "./Watch";
import { PartyspeakerBoat } from "./Partyspeaker";
import { SpeackerBoat } from './Speacker';

export function HomeBoat() {
 const name=1;
    const navigate = useNavigate();
    const tws1 = () => {
        navigate('/Categories');
    };
    const tws2 = () => {
        navigate('/Categories');
    };
    const tws3 = () => {
        navigate('/Categories');
    };
    const tws4 = () => {
        navigate('/Categories');
    };

    const datas = [
        { pname: 'Smart Watch',     price: '₹1,599', del: '₹3,999', offer: '65% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Imgtws1, path: tws1 },
        { pname: 'Headphones', price: '₹1,999', del: '₹3,599', offer: '45% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Imgtws2, path: tws2 },
        { pname: 'True Wireless', price: '₹2,999', del: '₹5,999', offer: '50% off', hour: '12 Hours Playback', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Imgtws3, path: tws3 },
        { pname: 'Party Speakers', price: '₹15,999', del: '₹25,999', offer: '45% off', hour: '27 Hours Playback', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Imgtws4, path: tws4 },
    ]
    const datas1 = [
        { pname: 'Wireless Earbuds', video1: Vid1, path: tws1 },
        { pname: 'Headphones', video1: Vid2, path: tws2 },
        { pname: 'Neckbands', video1: Vid3, path: tws3 },
        { pname: 'Smartwatches', video1: Vid4, path: tws4 },
    ]
    const datas2 = [
        { pname: 'For Fitness', actorimg: Actorimg1, path: tws1 },
        { pname: 'For Parties', actorimg: Actorimg2, path: tws2 },
        { pname: 'For Work', actorimg: Actorimg3, path: tws3 },
        { pname: 'For Audiophiles', actorimg: Actorimg4, path: tws4 },
    ]
    const datas3 = [
        { pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', ads1: Ads1, path: tws1 },
        { pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', ads1: Ads2, path: tws2 },
        { pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', ads1: Ads3, path: tws3 },
        { pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', ads1: Ads4, path: tws4 },
    ]

    const datas4 = [
        { pname: 'Smart Watch', Productimg: Product1, path: tws1 },
        { pname: 'Party Speakers', Productimg: Product2, path: tws2 },
        { pname: 'Headphones', Productimg: Product3, path: tws3 },
        { pname: 'Soundbars', Productimg: Product4, path: tws4 },
        { pname: 'Neckbands', Productimg: Product5, path: tws1 },
        { pname: 'Earbuds', Productimg: Product6, path: tws2 },
        { pname: 'Power banks', Productimg: Product7, path: tws3 },
        { pname: 'Gaming Headphones', Productimg: Product8, path: tws4 },
        { pname: 'Wireless Speakers', Productimg: Product9, path: tws4 },
    ]

    return (
        <>

            {/* ------------------------------ Carousels --------------------------- */}

            <div className="carouselmain">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img4} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img5} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img6} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={img7} />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="carouselmain-back">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={imgback1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={imgback2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={imgback3} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={imgback4} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={imgback5} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img onClick={tws1} className="car" src={imgback6} />
                    </Carousel.Item>
                </Carousel>
            </div>


{/* ------------------------------------- Products ----------------------------- */}

<div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                    <div className='Product-main-box'>
                        {
                            datas4.map((data4) => {
                                return (
                                    <>
                                        <div onClick={tws1} className='Product-box'>
                                            <div className="Product-img1">
                                            <div onClick={data4.path} className="Product-img">
                                                {/* <video src={data2.video1} autoPlay loop style={{ borderRadius: '10px' }} ></video> */}
                                                <img src={data4.Productimg} />
                                            </div>
                                            </div>
                                            <div className='Product-main-name'>
                                                <div>
                                                    <h6 className="Product-name">{data4.pname}</h6>
                                                    {/* <p className="actor-view">View All -- </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            {/* ------------------------------ Cards --------------------------- */}

            <div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas.map((data) => {
                                return (
                                    <>
                                        <div className='card-box'>
                                            <div onClick={data.path} className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="yellow-box-main">
                                                <div className="yellow-box">
                                                    <div className="yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="cart-btn">
                                                <button><a href="#">Add To Cart </a></button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

{/* -------------------------------------- tws ---------------------------- */}
<WatchBoat/>
            {/* ----------------------------- Video Card --------------------------------  */}

            <div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas1.map((data1) => {
                                return (
                                    <>
                                        <div className='video-box'>
                                            <div onClick={data1.path} className="card-img">
                                                <video src={data1.video1} autoPlay loop style={{ borderRadius: '10px' }} ></video>
                                                {/* <img src={data.image1} /> */}
                                            </div>
                                            <div className='videomain-name'>
                                                <div>
                                                    <h6 className="video-name">{data1.pname}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

{/* -------------------------------------------- */}

{/* <SpeackerBoat/> */}


            {/* ----------------------------- Video Card --------------------------------  */}

            <div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas2.map((data2) => {
                                return (
                                    <>
                                        <div className='actor-box'>
                                            <div onClick={data2.path} className="card-img">
                                                {/* <video src={data2.video1} autoPlay loop style={{ borderRadius: '10px' }} ></video> */}
                                                <img src={data2.actorimg} />
                                            </div>
                                            <div className='actormain-name'>
                                                <div>
                                                    <h6 className="actor-name">{data2.pname}</h6>
                                                    <p className="actor-view">View All -- </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>



{/* -------------------------------------------- */}

{/* <PartyspeakerBoat/> */}

 {/* ------------------------------ Ads --------------------------- */}

 <div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            datas3.map((data3) => {
                                return (
                                    <>
                                        <div className='video-box'>
                                            <div onClick={data3.path} className="card-img">
                                                <video src={data3.ads1} autoPlay loop muted style={{ borderRadius: '10px' }} ></video>
                                            </div>
                                            <div className="yellow-box-main">
                                                <div className="yellow-box">
                                                    <div className="yellow-box-words">
                                                         {/* <img src={data.image1} /> */}
                                                        {/* <p>{data.hour}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{data3.pname}</h6>
                                                </div>
                                            </div>
                                            <div className='product-price'>
                                                <h5>{data3.price} <del>{data3.del}</del> <span>{data3.offer}</span> </h5>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}