# dynamic-modal-library

> A modal library created with react

[![NPM](https://img.shields.io/npm/v/react-modal-lib.svg)]
(https://www.npmjs.com/package/react-modal-lib) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

##prerequisites 


Node js ust be installed
the version used must be above 16 


## Install


```bash
npm install  react-dynamic-modal-lib

If not working try for any legacy problems 

npm install  react-dynamic-modal-lib --legacy-peer-deps
```

## Usage

To use this component you have to manage it's state using
the react hook useState as follows:

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
setIsModalOpen(true);
};

const closeModal = () => {
setIsModalOpen(false);
};

########
Here is a complete example of use 

```jsx functional component 


import React, { Component } from 'react'
import  ModalComponent  from "dynamic-modal-library";
import 'dynamic-modal-library/dist/index.css'
import { useState } from 'react' 

  

  const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/*button to opn the modal and change the state of isOpen to true */}
      <button className="addEmployees" onClick={openModal}>
        open modal
      </button>
      {
          /*Open the modal with the needed props isOpen for state management 
          //contentComponent :receives any react component you have in your project 
          //closeFunction the function that closes the modal  
          //you can also add other props :
          //@param {Boolean} okButtonState   a button will be added din the middle of the react modal 
          // @param {Function} buttonFunction  the button will have an event using this function
          // @param {string} buttonText  the text of the added button 
          */
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

export default ExampleComponent

## License

MIT © [kenzaFilali] (https://github.com/kenza15a)


