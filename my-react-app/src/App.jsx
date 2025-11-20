import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Forget from './Forget'
import Reset from './Reset'
// import Otp from './Otp'

const App = () => {
  return (
    <div>
   

      <Routes>
        {/* <Route  path='/' element={<Otp/>}/> */}
        <Route   path='/' element={<SignUp/>}/>
        <Route   path='/login' element={<Login/>}/>
        <Route   path='/forget' element={<Forget/>}/>
        <Route   path='/reset/:resetToken' element={<Reset/>}/>





      </Routes>
    </div>
  )
}

export default App 

