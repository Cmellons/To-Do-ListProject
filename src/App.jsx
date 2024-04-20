import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';
import ContactPage from './components/ContactPage';
import bg from './assets/Neyland.png';

function App() {
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}} className="h-screen w-screen">
      <nav className="flex justify-center items-center h-16">
        <Link to="/contact" className="text-orange-500 font-semibold hover:underline flex items-center px-4 py-2 text-lg">Contact</Link>
      </nav>
      <div className="container mx-auto flex items-center justify-center h-screen">
        <Routes>
          <Route path="*" element={<Card />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;