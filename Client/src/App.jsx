import { useState } from 'react'
import './App.css'
import Header from './Header/Header';
import Main from "../src/Main/Main";
import Footer from "../src/Footer/Footer";


function App() {

  return (
    <div className='App' style={{backgroundColor:"#343541", color:"ghostwhite"}}>
      <div className='upper' >
        <Header />
        <Main />
      </div>    
      <Footer></Footer>  
    </div>
  )
}

export default App
