import React from "react";
import './GiftBoat.css'
import { CardBoat } from "./CardBoat";
import Gift1 from './assets/gift1.webp'
import Gift2 from './assets/gift2.webp'
import Gift3 from './assets/gift3.jpeg'
import Gift4 from './assets/gift4.jpeg'
import GiftBack1 from './assets/giftback1.webp'
import GiftBack2 from './assets/giftback2.webp'
import GiftBack3 from './assets/giftback3.jpeg'
import GiftBack4 from './assets/giftback4.jpeg'
import Left from './assets/gift-left.webp'
import Right from './assets/gift-right.webp'


export function GiftBoat() {
    return (
        <>
            <div className="Gift-LR-main">
                {/* <div className="row"> */}
                <div className="Gift-main-img">
                    <img className="Gift-img" src={Gift1} alt="" />
                    <img className="Gift-Back-img" src={GiftBack1} alt="" />
                </div>
                <div className="Gift-main-img">
                    <img className="Gift-img" src={Gift2} alt="" />
                    <img className="Gift-Back-img" src={GiftBack2} alt="" />
                </div>
                {/* </div> */}
            </div>

            <CardBoat />

            <div className="Gift-LR-main">
                {/* <div className="row"> */}
                <div className="Gift-main-img">
                    <img className="Gift-img" src={Gift3} alt="" />
                    <img className="Gift-Back-img" src={GiftBack3} alt="" />
                </div>

                <CardBoat />

                <div className="Gift-LR-main">
                    <div className="LR-row">
                        <div className="Gift-left1">
                            <img className="Gift-img1" src={Left} alt="" />
                        </div>
                        <div className="Gift-right1">
                            <img className="Gift-img1" src={Right} alt="" />
                        </div>
                    </div>
                </div>
                <div className="Gift-main-img">
                    <img className="Gift-img" src={Gift4} alt="" />
                    <img className="Gift-Back-img" src={GiftBack4} alt="" />
                </div>
                {/* </div> */}
            </div>
        </>
    )
}