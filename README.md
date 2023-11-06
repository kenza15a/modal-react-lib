# react-dynamic-modal-lib

> a modal library created with react

[![NPM](https://img.shields.io/npm/v/react-modal-lib.svg)](https://www.npmjs.com/package/react-modal-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dynamic-modal-lib

if not working try
npm install  react-dynamic-modal-lib --legacy-peer-deps
```

## Usage

To use this component youy have to manage it's stte using
the react hook usetate as follows:

const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
setIsModalOpen(true);
};

const closeModal = () => {
setIsModalOpen(false);
};

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-modal-lib'
import 'react-modal-lib/dist/index.css'
import ModalComponent from 'ret-dynamic-modal-lib'
class Example extends Component {
  render() {
    return (
      <>
        {
          <ModalComponent
            isOpen={isModalOpen}
            contentComponent={
              <EmployeesStepsForm closeParentFunction={closeModal} />
            }
            closeFunction={closeModal}
          />
        }
      </>
    )
  }
}
```

## License

MIT © [kenza](https://github.com/kenza15a)
