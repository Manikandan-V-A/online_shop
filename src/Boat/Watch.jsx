import React from "react";
import './Watch.css'
import ImgWatch from './assets/iqoo1.png'
import Imgtws1 from './assets/watch1.webp'
import Imgtws2 from './assets/watch2.webp'
import Imgtws3 from './assets/watch3.webp'
import Imgtws4 from './assets/watch4.webp'
import { useNavigate } from "react-router-dom";

const cards = [
    {id: 'watch1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5',   image1:   Imgtws1 },
    {id: 'watch2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1:   Imgtws2 },
    {id: 'watch3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',   image1:   Imgtws3 },
    {id: 'watch4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',   image1:   Imgtws4 },
]

export function WatchBoat() {

    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/detailwatch/${id}`);
    };

    return (
        <>

            {/* <div id="contact"> */}
            <div className="Watch1-main">
                <div className="row">
                    <div className="Watch-left">
                    <img className="Watch-img" src={ImgWatch} alt="" />
                    </div>
                    <div className="Watch-right">
                        <h1>Smart <span>Watch</span></h1>
                        <h3>Staring from ₹1,999*</h3>
                        <button className="Watch-btn">Shop Product</button>
                    </div>

                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                    <div className='main-box'>
                        {
                            cards.map((card) => {
                                return (
                                    <>
                                        <div className='card-box'>
                                            <div key={card.id} onClick={() => handleCardClick(card.id)} className="card-img">
                                                <img src={card.image1} />
                                            </div>
                                            <div className="yellow-box-main">
                                                <div className="yellow-box">
                                                    <div className="yellow-box-words">
                                                        <p>{card.hour}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='product-name'>
                                                <div>
                                                    <h6>{card.pname}</h6>
                                                </div>
                                                <div className="color-more">
                                                    <i style={{ color: card.color1 }} className="fa-solid iconcolor1 fa-circle"></i>
                                                    <i style={{ color: card.color2 }} className="fa-solid iconcolor2 fa-circle"></i>
                                                    <i style={{ color: card.color3 }} className="fa-solid iconcolor3 fa-circle"></i> {card.colormore}
                                                </div>
                                            </div>
                                            <div className='product-price'>
                                                <h5>{card.price} <del>{card.del}</del> <span>{card.offer}</span> </h5>
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

        </>
    )
}



