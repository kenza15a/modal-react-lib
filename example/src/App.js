import React from 'react'

import { ExampleComponent } from 'react-modal-lib'
import 'react-modal-lib/dist/index.css'
import ModalComponent from 'react-modal-lib'


import React, { useState } from 'react'


import 'react-modal-lib/dist/index.css'




const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    console.log("steps form");
    console.log(isModalOpen);
  };

  const closeModal = () => {
   
    setIsModalOpen(!isModalOpen);
    console.log("steps form");
    console.log(isModalOpen);
  };
  return <ModalComponent isOpen={true} contentComponent={<h1>hi</h1> } closeFunction={closeModal}/>
}

export default App
