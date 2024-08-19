import React from 'react';
import './Personalisation.css'
import { useNavigate } from 'react-router-dom';

import Imgtws1 from './assets/tws1.gif'
import Imgtws2 from './assets/tws2.webp'
import Imgtws3 from './assets/tws3.webp'
import Imgtws4 from './assets/tws4.gif'

import Imgwatch1 from './assets/watch1.webp'
import Imgwatch2 from './assets/watch2.webp'
import Imgwatch3 from './assets/watch3.webp'
import Imgwatch4 from './assets/watch4.webp'

import Imgspeaker1 from './assets/speackercard1.webp'
import Imgspeaker2 from './assets/speackercard2.webp'
import Imgspeaker3 from './assets/speackercard3.webp'
import Imgspeaker4 from './assets/speackercard4.webp'

import Imgheadphone1 from './assets/headphone1.webp'
import Imgheadphone2 from './assets/headphone2.jpg'
import Imgheadphone3 from './assets/headphone3.webp'
import Imgheadphone4 from './assets/headphone4.webp'

import Imgneckband1 from './assets/neckband1.webp'
import Imgneckband2 from './assets/neckband2.webp'
import Imgneckband3 from './assets/neckband3.webp'
import Imgneckband4 from './assets/neckband4.webp'

import Imgpartyspeaker1 from './assets/Partyspeaker1.webp'
import Imgpartyspeaker2 from './assets/Partyspeaker2.webp'
import Imgpartyspeaker3 from './assets/Partyspeaker3.webp'
import Imgpartyspeaker4 from './assets/Partyspeaker4.webp'

export function Personalisation() {

    const navigate = useNavigate();
    const handleCardClick = (id) => {
      navigate(`/detailwatch/${id}`);
    };

    const cards = [
        {id: 'tws1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: Imgtws1 },
        {id: 'tws2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: Imgtws2 },
        {id: 'tws3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'white', color3: 'black', colormore: '+3',  image1: Imgtws3 },
        {id: 'tws4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'black', color2: 'lightblue', color3: 'red', colormore: '+5', image1: Imgtws4 },

        {id: 'watch1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: Imgwatch1 },
        {id: 'watch2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: Imgwatch2 },
        {id: 'watch3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: Imgwatch3 },
        {id: 'watch4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: Imgwatch4 },
    
        {id: 'speaker1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1: Imgspeaker1 },
        {id: 'speaker2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1: Imgspeaker2 },
        {id: 'speaker3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1: Imgspeaker3 },
        {id: 'speaker4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1: Imgspeaker4 },

        {id: 'headphone1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1:   Imgheadphone1 },
        {id: 'headphone2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1:   Imgheadphone2 },
        {id: 'headphone3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1:   Imgheadphone3 },
        {id: 'headphone4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1:   Imgheadphone4 },    

        {id: 'neckband1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1:   Imgneckband1 },
        {id: 'neckband2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1:   Imgneckband2 },
        {id: 'neckband3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1:   Imgneckband3 },
        {id: 'neckband4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1:   Imgneckband4 },

        {id: 'partyspeaker1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1:   Imgpartyspeaker1 },
        {id: 'partyspeaker2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',    image1:   Imgpartyspeaker2 },
        {id: 'partyspeaker3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',  image1:   Imgpartyspeaker3 },
        {id: 'partyspeaker4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',  image1:   Imgpartyspeaker4 },
    
    ]

    return (
        <>
            <div className="personalisation-container-Card">
                <h2>Special Range — <span>Personalised </span><span className='rs'>Products </span> </h2>
                <div className="personalisation-container-Card1">
                    <div className='personalisation-main-box'>
                        {
                            cards.map((data) => {
                                return (
                                    <>
                                        <div className='personalisation-card-box'>
                                        <div key={data.id} onClick={() => handleCardClick(data.id)} className="card-img">
                                                <img src={data.image1} />
                                            </div>
                                            <div className="personalisation-yellow-box-main">
                                                <div className="personalisation-yellow-box">
                                                    <div className="personalisation-yellow-box-words">
                                                        <p>{data.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='personalisation-product-name'>
                                                <div>
                                                    <h6>{data.pname}</h6>
                                                </div>
                                                <div className="personalisation-color-more">
                                                    <i style={{ color: data.color1 }} className="fa-solid iconcolor1 fa-circle"></i>
                                                    <i style={{ color: data.color2 }} className="fa-solid iconcolor2 fa-circle"></i>
                                                    <i style={{ color: data.color3 }} className="fa-solid iconcolor3 fa-circle"></i> {data.colormore}
                                                </div>
                                            </div>
                                            <div className='personalisation-product-price'>
                                                <h5>{data.price} <del>{data.del}</del> <span>{data.offer}</span> </h5>
                                            </div>
                                            <div className="personalisation-cart-btn">
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
        </>
    )
}