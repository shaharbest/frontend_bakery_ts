import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { Store } from './Components/Store';

ReactDOM.render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);