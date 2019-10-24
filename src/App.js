import React from 'react';
import logo from './logo.svg';
import homeLogo from './reffuf.jpg'
import { Router } from '@reach/router';
import Blog from './pages/blog';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import ResponsiveNavigation from './components/ResponsiveNavigation';
import './App.css';

function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/home',
      icon: 'ion-ios-home'
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: 'ion-ios-megaphone'
    },
    {
      text: 'About',
      path: '/about',
      icon: 'ion-ios-business'
    },
    {
      text: 'Blog',
      path: '/blog',
      icon: 'ion-ios-bonfire'
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
      icon: 'ion-ios-briefcase'
    },
  ]

  return (
    <div className="App">
    <ResponsiveNavigation 
      navLinks={ navLinks }
      logo= { logo }
    />
     <Router>
      <Contact path="/contact"/>
      <Home path="/home"/>
      <Portfolio path="/portfolio"/>
      <About path="/about"/>
      <Blog path="/blog"/>
     </Router>
    </div>
  );
}

export default App;
