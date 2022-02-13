import React from 'react';
import styled from 'styled-components';

const ForgotPassword = () => {
  return (
  <Modal>
    <div className="overlay"/>
    <div className="modal">
    <div className="modal__header">Modal Header</div>
    <div className="modal__body">Modal Body</div>
    <div className="modal__footer">Modal Footer</div>
    </div>
  </Modal>);
};


const Modal = styled.div`
    position: fixed;
`


export default ForgotPassword;
