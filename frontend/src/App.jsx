import React from 'react'
import Navbar from './components/Navbar/navbar'
import Calender from './components/Calender/calender'



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='calender_contaner'>
        <Calender/>
      </div>
    </div>
  )
}

export default App
