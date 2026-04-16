import React from 'react'
import './Logout.css'
import { useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
        <div className="logout-main">
            <div className="logout-sub">
                <div className="logsub">
                <div className="logout-box-1">
                    <div className="logout-heading">DANGER ZONE</div>
                    <div className="logout-text">LOGOUT FROM YOUR ACCOUNT</div>
                </div>
                <div className="logout-button" onClick={handleLogout}>LOGOUT</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Logout
