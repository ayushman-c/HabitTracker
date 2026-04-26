import React from 'react'
import Navbar from '../components/LandingPageC/Navbar'
import Hero from '../components/LandingPageC/Hero'
import MarqueeTicker from "../components/LandingPageC/MarqueeTicker";
import SystemArchitecture from "../components/LandingPageC/SystemArchitecture";
import FieldReports from "../components/LandingPageC/FieldReports";
import Concluding from '../components/LandingPageC/Concluding';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <MarqueeTicker/>
        <SystemArchitecture/>
        <FieldReports/>
        <Concluding/>
        <Footer/>

    </>
  )
}

export default LandingPage
