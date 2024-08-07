import React from "react";
import './header.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from "sweetalert2";

export function HeaderBoat() {

    const navigate = useNavigate();
    const Home = () => {
        navigate('/');
    };
    const Cart = () => {
        navigate('/boAt-Personalisation');
    };
    const tws1 = () => {
        navigate('/Categories');
    };
    const tws2 = () => {
        navigate('/boAt-Personalisation');
    };
    const tws3 = () => {
        navigate('/Gift-with-boAt');
    };
    const tws4 = () => {
        navigate('/Corporate-Orders');
    };
    const tws5 = () => {
        navigate('/Categories');
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    const Loginbtn = async () => {
        const { value: email } = await Swal.fire({
            title: "Login",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address"
        });
        if (email) {
            const { value: password } = await Swal.fire({
                title: "Enter your password",
                input: "password",
                inputLabel: "Password",
                inputPlaceholder: "Enter your password",
                inputAttributes: {
                    maxlength: "10",
                    autocapitalize: "off",
                    autocorrect: "off"
                }
            });
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password",
                footer: '<a href="#">Create new account</a>'
              });
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                crossorigin="anonymous" referrerpolicy="no-referrer" />

              
            <Navbar expand="xxxl" className="bg-body-tertiary">  
            <div className="header">
                <div className="nav-back">
        <div className="toggle-button">
          <button className="button" onClick={toggleDrawer}><i className="fa-solid openmenu fa-bars"></i></button>
        </div> 
                <nav>

                    <div onClick={Home}><svg className="logo" id="Group_205728" data-name="Group 205728" xmlns="http://www.w3.org/2000/svg" width="151.848" height="62.372" viewBox="0 0 151.848 62.372">
                        <g id="Group_208975" data-name="Group 208975" transform="translate(0 0)">
                            <path id="Path_1" data-name="Path 1" d="M328.831,120.079a18.374,18.374,0,0,1,14.5,6.724q5.8,6.724,5.8,16.779,0,10.005-5.8,16.7a19.108,19.108,0,0,1-29.05,0q-5.849-6.7-5.849-16.7,0-10.061,5.849-16.779a18.508,18.508,0,0,1,14.55-6.724m0,42.195a14.177,14.177,0,0,0,11.261-5.321,22.018,22.018,0,0,0-.02-26.762,14.132,14.132,0,0,0-11.241-5.4,14.278,14.278,0,0,0-11.333,5.346,22.042,22.042,0,0,0,0,26.814,14.3,14.3,0,0,0,11.333,5.321" transform="translate(-268.85 -104.669)" fill="#1a2024" />
                            <path id="Path_2" data-name="Path 2" d="M911.15.115v15.3H926v4.017H911.15V46.866q0,6.628,1.236,8.711t6.649,2.079a26.216,26.216,0,0,0,9.672-2.256v4.714a27.981,27.981,0,0,1-10.935,2.359,14.251,14.251,0,0,1-8.75-2.614,8.478,8.478,0,0,1-3.516-7.219V19.429h-14.27l4.576-4.017h9.694V4.429l3.86-4.314Z" transform="translate(-776.859 -0.1)" fill="#1a2024" />
                            <path id="Path_3" data-name="Path 3" d="M639.38,167.836H624.387l4.282-8.3h-29.08l4.424,8.3H588.931l18.339-46.5H621.1ZM621.53,153.37l-7.286-20.019-8.976,25.411Z" transform="translate(-513.351 -105.768)" fill="#ed1c24" />
                            <path id="Path_4" data-name="Path 4" d="M0,59.12V0H1.548L4.419,4.32,4.426,21.7a18.2,18.2,0,0,1,13.86-6.452c3.772-.093,10.359,1.9,13.782,5.739a22.932,22.932,0,0,1,5.969,15.866c0,7.779-2.031,14.2-6.258,18.89S21.7,62.276,14.694,62.276A35.24,35.24,0,0,1,0,59.12M4.436,26.759,4.348,55.922a24.73,24.73,0,0,0,10.079,1.712C19.783,57.634,25.3,56,28.8,52.123c3.08-2.887,5.071-8.949,5.194-14.883A18.918,18.918,0,0,0,29.7,24.6,13.825,13.825,0,0,0,18.667,19.36c-5.052-.066-9.539,1.376-14.231,7.4" transform="translate(0 0.001)" fill="#1a2024" />
                        </g>
                    </svg></div>
                    
                    <ul id="sidemenu">
                        <li onClick={tws1}><p>Categories</p></li>
                        <li onClick={tws2}><p>boAt Personalisation</p></li>
                        <li onClick={tws3}><p>Gift with boAt</p></li>
                        <li onClick={tws4}><p>Corporate Orders</p></li>
                        <li onClick={tws5}><p>More</p></li>
                    </ul>
                    <div className="nav-right">
                
                        <i class="fa-solid search-icon search-icon fa-magnifying-glass"></i>
                        <input type="search" className="nav-search" placeholder="search" />
                        <i onClick={Loginbtn} className="fa-solid fa-user"></i>
                        <i onClick={Cart} className="fa-solid fa-bag-shopping"></i>
                    </div>
                </nav>
                </div>
            </div>


      {/* <Navbar.Toggle className='main' onClick={toggleDrawer} aria-controls="navbarScroll"  /> */}
      <div className={`drawer ${isOpen ? 'open' : ''}`} id="navbarScroll">
        <Nav className="ul" navbarScroll>
          <Nav.Link className="li" onClick={tws1} ><p className="p">Categories</p></Nav.Link>
          <Nav.Link className="li" onClick={tws2} ><p className="p">boAt Personalisation</p></Nav.Link>
          <Nav.Link className="li" onClick={tws3} ><p className="p">Gift with boAt</p></Nav.Link>
          <Nav.Link className="li" onClick={tws4} ><p className="p">Corporate Orders</p></Nav.Link>
          <Nav.Link className="li" onClick={tws5} ><p className="p">More</p></Nav.Link>
        </Nav>
      </div>
    </Navbar>

        </>
    )
}