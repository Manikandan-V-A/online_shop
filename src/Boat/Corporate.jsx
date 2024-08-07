import React from "react";
import './Corporate.css'
import ImgWatch from './assets/Corporate.webp'
import Imgtws1 from './assets/watch1.webp'
import Imgtws2 from './assets/headphone3.webp'
import Imgtws3 from './assets/tws3.webp'
import Imgtws4 from './assets/Partyspeaker4.webp'
import { useNavigate } from "react-router-dom";

import Actorimg1 from './assets/actor1.webp'
import Actorimg2 from './assets/actor2.webp'
import Actorimg3 from './assets/actor3.webp'
import Actorimg4 from './assets/actor4.webp'

export function Corporate() {

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
        { pname: 'Smart Watch', price: '₹1,999', del: '₹5,999', offer: '60% off', hour: '60 Hours Playback', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Imgtws1, path: tws1 },
        { pname: 'Headphones', price: '₹1,999', del: '₹2,999', offer: '27% off', hour: '30 Hours Playback', color1: 'grey', color2: 'white', color3: 'black', colormore: '+4', image1: Imgtws2, path: tws2 },
        { pname: 'True Wireless', price: '₹1,999', del: '₹2,999', offer: '45% off', hour: '12 Hours Playback', color1: 'red', color2: 'black', color3: 'blue', colormore: '+3', image1: Imgtws3, path: tws3 },
        { pname: 'Party Speakers', price: '₹1,999', del: '₹2,999', offer: '68% off', hour: '27 Hours Playback', color1: 'red', color2: 'black', color3: 'blue', colormore: '+5', image1: Imgtws4, path: tws4 },
    ]

    const datas2 = [
        { pname: 'For Fitness', actorimg: Actorimg1, path: tws1 },
        { pname: 'For Parties', actorimg: Actorimg2, path: tws2 },
        { pname: 'For Work', actorimg: Actorimg3, path: tws3 },
        { pname: 'For Audiophiles', actorimg: Actorimg4, path: tws4 },
    ]

    return (
        <>

            <div className="Corporate-main">
                <div className="row">
                    <div className="Corporate-left">
                    <img className="Corporate-img" src={ImgWatch} alt="" />
                    </div>
                    <div className="Corporate-right">
                        <h1><span>Your Bulk Orders</span></h1>
                        <h2>Are Now Hassle Free</h2>
                        <h3>Got A Big boAt Order?</h3>
                        <h4>Come sail With us</h4>
                        <h5>For shipments of 25 units or more,</h5>
                        <h6>Hit us up!</h6>
                        <button className="Corporate-btn">Submit Your Requirement</button>
                    </div>

                </div>
            </div>

            {/* -----------------------Card-------------------------------- */}

            <div className="container-Card">
                <h2>Get a <span> bo</span><span className='rs'>At</span> </h2>
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

        </>
    )
}



