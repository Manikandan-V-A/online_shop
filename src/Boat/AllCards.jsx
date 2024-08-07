import React from "react";
import './AllCards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import check1 from './assets/check.png';
import swal from "sweetalert";
import Swal from "sweetalert2";

import Button1 from './assets/5button1.webp';
import Button2 from './assets/5button2.webp';
import Button3 from './assets/5button3.jpg';
import Button4 from './assets/5button4.webp';

import Imgwatch1 from './assets/watch1.webp'
import Imgwatch2 from './assets/watch2.webp'
import Imgwatch3 from './assets/watch3.webp'
import Imgwatch4 from './assets/watch4.webp'

import Imgtws1 from './assets/tws1.gif'
import Imgtws2 from './assets/tws2.webp'
import Imgtws3 from './assets/tws3.webp'
import Imgtws4 from './assets/tws4.gif'

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



const cards = [
    {id: 'watch1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: Imgwatch1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'watch2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: Imgwatch2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'watch3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: Imgwatch3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'watch4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: Imgwatch4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 

    {id: 'tws1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue',   image1: Imgtws1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'tws2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey', color2: 'white', color3: 'black',           image1: Imgtws2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'tws3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow', color2: 'black', color3: 'white',         image1: Imgtws3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'tws4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red', color2: 'rose', color3: 'lightblue',         image1: Imgtws4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 

    {id: 'speaker1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: Imgspeaker1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'speaker2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: Imgspeaker2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'speaker3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: Imgspeaker3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'speaker4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: Imgspeaker4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 

    {id: 'headphone1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: Imgheadphone1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'headphone2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: Imgheadphone2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'headphone3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: Imgheadphone3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'headphone4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: Imgheadphone4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 

    {id: 'neckband1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: Imgneckband1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'neckband2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: Imgneckband2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'neckband3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: Imgneckband3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'neckband4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: Imgneckband4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 
    
    {id: 'partyspeaker1', pname: 'Stone 620', price: '₹1,999', del: '₹5,999', offer: '60% off', color1: 'lightred', color2: 'black', color3: 'lightblue', image1: Imgpartyspeaker1, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'partyspeaker2', pname: 'Stone 520', price: '₹1,999', del: '₹2,999', offer: '27% off', color1: 'grey',     color2: 'white', color3: 'black',     image1: Imgpartyspeaker2, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'partyspeaker3', pname: 'Stone 420', price: '₹1,999', del: '₹2,999', offer: '45% off', color1: 'yellow',   color2: 'black', color3: 'white',     image1: Imgpartyspeaker3, image2: Button1, image3: Button2, image4: Button3, image5: Button4 },
    {id: 'partyspeaker4', pname: 'Stone 320', price: '₹1,999', del: '₹2,999', offer: '68% off', color1: 'red',      color2: 'rose',  color3: 'lightblue', image1: Imgpartyspeaker4, image2: Button1, image3: Button2, image4: Button3, image5: Button4 }, 

]
export function Allcards() {

    const Buybtn =()=>{
        swal({
            title: "Are you sure?",
            text: "Please ensure that once an order is placed, it cannot be canceled.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Order placed successfully.", {
                icon: "success",
              });
            } else {
              swal("You no longer need this product.",{
                icon: "warning",
              });
            }
          });
    }
    const Cartbtn =()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Add to Cart successfully"
      });
    }
    
    
    const [activeButton, setActiveButton] = useState(1);

    const handleMouseEnter = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const { id } = useParams();
    const navigate = useNavigate();
    const card = cards.find((card) => card.id === id);
  
    if (!card) {
      return <h2>Card not found</h2>;
    }  

    return (
        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />

            <div className="Allcards-main">
                <div className="row">
                    <h1>Wireless <span>name</span></h1>
                    <div className="Allcards-mini">
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(1)} ><img className="Allcards-mini-img" src={card.image1} alt="Image 1"/></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(2)} ><img className="Allcards-mini-img" src={card.image2} alt="Image 2" /></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(3)} ><img className="Allcards-mini-img" src={card.image3} alt="Image 3" /></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(4)} ><img className="Allcards-mini-img" src={card.image4} alt="Image 4" /></button>
                        <button className="Allcards-mini-btn" onMouseEnter={() => handleMouseEnter(5)} ><img className="Allcards-mini-img" src={card.image5} alt="Image 5" /></button>
                    </div>
                    <div className="Allcards-left">
                        {activeButton === 1 && <img className="Allcards-img" src={card.image1} alt="Image 1" />}
                        {activeButton === 2 && <img className="Allcards-img" src={card.image2} alt="Image 2" />}
                        {activeButton === 3 && <img className="Allcards-img" src={card.image3} alt="Image 3" />}
                        {activeButton === 4 && <img className="Allcards-img" src={card.image4} alt="Image 4" />}
                        {activeButton === 5 && <img className="Allcards-img" src={card.image5} alt="Image 5" />}
                    </div>
                    <div className="Allcards-right">
                        <h2 className="header-star"><i class=" star1 fa-solid fa-star"></i> 5.0 | 1000+ reviews <img className="header-check" src={check1} alt="" /></h2>
                        <h1 className="card-name"><span>{card.pname}</span></h1>
                        <p><span> Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface </span></p>
                        <h3 className="card-name-h3"> {card.price} <del>{card.del}</del> <span>{card.offer}</span></h3>
                        <h4 className="card-name-h4">Choose your colour :</h4>
                        <h5 className="card-name-h5">
                            <i onMouseEnter={() => handleMouseEnter(5)} style={{ color:card.color1}} className="fa-solid fa-circle iconcolor"></i>
                            <i onMouseEnter={() => handleMouseEnter(1)} style={{ color:card.color2}} className="fa-solid fa-circle iconcolor"></i>
                            <i onMouseEnter={() => handleMouseEnter(2)} style={{ color:card.color3}} className="fa-solid fa-circle iconcolor"></i>
                        </h5>
                        <h6 className="card-name-h6">Check Delivery</h6>
                        <div className="check-Delivery">
                            <h1 className="free">Free Delivery <span className="by">| By tomorrow</span></h1>
                            <h1 className="order">If ordered within <span className="hrs"> 2 hrs 55 min</span></h1>
                        </div>
                        <button onClick={Cartbtn} className="Allcards-btn"> <i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                        <button onClick={Buybtn} className="Allcards-btn buy"> <i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
                    </div>

                </div>
            </div>
        </>
    )
}



