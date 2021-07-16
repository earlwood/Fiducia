import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { Header } from '../components/header';
import { About } from '../components/about';
import { Services } from '../components/services';
import { Contact } from '../components/contact';
import JsonData from '../data/data.json';

const Home = () => {

    const location = useLocation();
    
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
    
    useEffect (() => {
        const div = document.getElementById(location.hash.replace('#', ''));
        const div2 = document.getElementById(location.pathname.replace('/', ''));
        
        
        if(div){
            window.scrollTo({
            top: div.id === 'services' ? div.offsetTop - 80 : div.offsetTop - 50,
            behavior: 'smooth'
            })
        }
        if(div2){
            window.scrollTo({
                top: div2.offsetTop,
                behavior: 'smooth'
            })
        }
        // else{
        //     window.scrollTo({
        //         top: div.offsetTop - 50,
        //         behavior: 'smooth'
        //     })
        // }
        
    }, [location])

    return(
        <div id="nav-margin">
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <div style={{marginTop: '100'}}></div>
            {/* <Features data={landingPageData.Features} /> */}
            {/* <Gallery /> */}
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            {/* <Team data={landingPageData.Team} /> */}
            <Contact data={landingPageData.Contact} />
        </div>
    )
}

export default Home;