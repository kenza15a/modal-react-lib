/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import './ModalComponent.css'
import '../styles/styles.css'
function ModalComponent({
  isOpen,
  contentComponent,
  closeFunction,
  okButtonState,
  buttonFunction,
  buttonText
}) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={closeFunction}>
       
        {/*close the modal when i click outside */}
        <div className="modal" onClick={(e) => e.stopPropagation()}>
         
          {/*to stop the closing event when i click inside the modal */}
          <div className="modal-content">
            <span className="close" onClick={closeFunction}>
              &times;
            </span>
            <div className="modal-main-content">
            {contentComponent}
            {okButtonState && (   <button className="modal-confirmation" onClick={buttonFunction}>{buttonText}</button>)}
            </div>
         </div>
          </div>
        </div>
      
    </>
  );
}

export default ModalComponent
