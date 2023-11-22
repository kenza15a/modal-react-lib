/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react'
import './ModalComponent.css'
import '../styles/styles.css'
//import PropTypes from "prop-types";
/**
 * 
 * @param {Boolean} isOpen 
 * @param {Component}  contentComponent
 * @param {Function} closeFunction 
 * @param {Boolean} okButtonState 
 * @param {Function} buttonFunction 
 * @param {string} buttonText 
 *  @return  {React.ReactElement}
 */
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
/*
ModalComponent.propTypes = {
  isOpen: PropTypes.Boolean.isRequired,
  contentComponent:PropTypes.object.isRequired,
  closeFunction:PropTypes.func.isRequired,
  okButtonState:PropTypes.Boolean,
  buttonFunction:PropTypes.func,
  buttonText:PropTypes.string

};
*/
export default ModalComponent
