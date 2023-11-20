import React from 'react'
import ModalComponent from 'react-modal-lib'
import 'react-modal-lib/dist/index.css'
import { useState } from 'react'



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="addEmployees" onClick={openModal}>
        open modal
      </button>
      {
        isModalOpen && (<ModalComponent
          isOpen={isModalOpen}
          contentComponent={
            <h2>Hi modal lib s</h2>
          }
          closeFunction={closeModal}
        />)
      }

    </>);



}

export default App
