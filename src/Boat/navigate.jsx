import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderBoat } from './header';
import { HomeBoat } from './HomeBoat';
import { Personalisation } from './Personalisation';
import { GiftBoat } from './GiftBoat';
import { CategoriesBoat } from './Categories';
import { Corporate } from './Corporate';
import { Bottominfo } from './Bottominfo';
import { WatchBoat } from './Watch';
import { Allcards } from './AllCards';
export function Navigateboat() {
  return (

    <>

      <Router>
        <HeaderBoat />
        <Routes>
          <Route path="/" element={<HomeBoat />} />
          <Route path="/Categories" element={<CategoriesBoat />} />
          <Route path="/boAt-Personalisation" element={<Personalisation/>} />
          <Route path="/Gift-with-boAt" element={<GiftBoat/>} />
          <Route path="/Corporate-Orders" element={<Corporate/>} />
          <Route path="/detailwatch/:id" element={<Allcards/>} />
          
        </Routes>
        <Bottominfo/>
      </Router>
    </>
  );
}

