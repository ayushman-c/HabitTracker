import React from 'react'
import './Dashboard.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'


const Dashboard = () => {
  return (
    <>
         <Show when="signed-in">
          <UserButton />
        </Show>
    </>
  )
}

export default Dashboard
