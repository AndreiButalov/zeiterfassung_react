import React from 'react'
import Calender from './components/Calender/calender'
import Navbar from './components/Navbar/Navbar'



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
