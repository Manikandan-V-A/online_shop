import React from "react";
import './Speacker.css'
import Imgtws1 from './assets/speackercard1.webp'
import Imgtws2 from './assets/speackercard2.webp'
import Imgtws3 from './assets/speackercard3.webp'
import Imgtws4 from './assets/speackercard4.webp'
import img1 from './assets/speacker.png'
import { useNavigate } from "react-router-dom";

const cards = [
    {id: 'speaker1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'lightblue', colormore: '+5', image1:   Imgtws1 },
    {id: 'speaker2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4',         image1:   Imgtws2 },
    {id: 'speaker3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'yellow', color2: 'black', color3: 'white', colormore: '+3',       image1:   Imgtws3 },
    {id: 'speaker4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'rose', color3: 'lightblue', colormore: '+5',       image1:   Imgtws4 },
]

export function SpeackerBoat() {

    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/detailwatch/${id}`);
    };


    return (
        <>

            {/* <div id="contact"> */}
            <div className="speacker-main">
                <div className="row">
                    <div className="speacker-left">
                        <h1>Wireless <span> Speaker </span></h1>
                        <h3>Staring from ₹999*</h3>
                        <button className="speacker-btn">Shop Product</button>
                    </div>
                    <div className="speacker-right">
                        <img className="speacker-img" src={img1} alt="" />
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* -----------------------Card-------------------------------- */}

            <div className="container-Card">
                <h2>Best <span> Selle</span><span className='rs'>rs</span> </h2>
                <div className="container-Card1">
                <div className='main-box'>
                    {
                        cards.map((data) => {
                            return (
                                <>
                                    <div className='card-box'>
                                    <div key={data.id} onClick={() => handleCardClick(data.id)} className="card-img">
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
                                                <i style={{color:data.color1}} className="fa-solid iconcolor1 fa-circle"></i>
                                                <i style={{color:data.color2}} className="fa-solid iconcolor2 fa-circle"></i>
                                                <i style={{color:data.color3}} className="fa-solid iconcolor3 fa-circle"></i> {data.colormore}
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

        </>
    )
}



