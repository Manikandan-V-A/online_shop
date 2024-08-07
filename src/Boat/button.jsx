import React, { useState } from 'react';
// import './App.css'; // Ensure you have appropriate CSS for the sidemenu

const App123 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <button onClick={openMenu}>Open Menu</button>
      <div 
        id="sidemenu" 
        style={{
          position: 'fixed',
          right: menuOpen ? '0' : '-200px',
          transition: 'right 0.3s',
          width: '200px',
          height: '100%',
          backgroundColor: '#f4f4f4',
          // Add other styles as needed
        }}
      >
        <button onClick={closeMenu}>Close Menu</button>
        {/* Add menu content here */}
      </div>
    </div>
  );
};

export default App123;
