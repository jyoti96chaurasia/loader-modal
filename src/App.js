import React,{ useEffect, useState } from 'react'; 
import Modal from './components/Modal';
import './App.css';

function App() {
  const [openModal , setOpenModal]= useState(false);

  const handleOpenModal =() => {
    setOpenModal(true)
  }

  return (
    <div className="App">
      
      <Modal openModal={openModal}/>
    </div>
  );
}

export default App;
