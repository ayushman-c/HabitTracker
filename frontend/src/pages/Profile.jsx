import React from 'react'
import './Profile.css'
import ProfNav from '../components/ProfileC/ProfNav'
import ProfCard from '../components/ProfileC/ProfCard'
import StatCards from '../components/ProfileC/StatCards'
import Footer from '../components/Footer'
import Logout from '../components/ProfileC/Logout'
const Profile = () => {
  return (
    <>  
      <ProfNav/>
      <ProfCard/>
      <StatCards/>
      
      <Logout/>
      <Footer/>
    </>
  )
}

export default Profile
