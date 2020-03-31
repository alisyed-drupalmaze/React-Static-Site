import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar/NavBar';
import PageFooter  from './Components/Footer/PageFooter';

import HomePage from './Components/Pages/HomePage/HomePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import ContactusPage from './Components/Pages/Contact/ContactusPage';


function App() {
  return (
    <div >
     <BrowserRouter >
     <NavBar />
     <Route path="/Home" component={HomePage} />
     <Route path="/AboutPage" component={AboutPage} />
     <Route path="/ContactusPage" component={ContactusPage} />
     </BrowserRouter>
     <PageFooter  />
    </div>
  );
}

export default App;
