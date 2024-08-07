import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './menutop.css';

export function MenuTop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">

<div className="toggle-button">
          <button onClick={toggleDrawer}>Menu</button>
        </div>
      {/* <Navbar.Toggle className='main' onClick={toggleDrawer} aria-controls="navbarScroll"  /> */}
      <div className={`drawer ${isOpen ? 'open' : ''}`} id="navbarScroll">
        <Nav className="ul" navbarScroll>
          <Nav.Link className="li"><p>Categories</p></Nav.Link>
          <Nav.Link className="li"><p>boAt Personalisation</p></Nav.Link>
          <Nav.Link className="li"><p>Gift with boAt</p></Nav.Link>
          <Nav.Link className="li"><p>Corporate Orders</p></Nav.Link>
          <Nav.Link className="li"><p>More</p></Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

