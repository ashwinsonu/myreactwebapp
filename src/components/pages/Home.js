import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import HeroSection from '../HeroSection.js'
import Cards from './Cards';

function Home() 
{
    return(
        <>
        <HeroSection/>
        <Cards/>
        <Footer/> 
         </>
    )
}

export default Home;
