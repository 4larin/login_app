import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../assets/Lumentum.png'


const ForgotPassword = ({handleCancle}) => {
  return (
    <StyledModal>
      <Modal.Header>
        <Modal.Title>
          <img src={Logo} alt="Lumentum Logo" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={'p-3 p-md-5'}>
        <div className="modal-body__header">
          <h3 className={'mb-2'}>Forgot your password?</h3>
          <i className={'mb-3 d-block'}>Enter your email address and we will send you a new password </i>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button className='px-5' variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={handleCancle} className="mx-4 border border-secondary"   variant="outline" >
            Cancle
          </Button>
        </Form>
      </Modal.Body>
    </StyledModal>);
};


const StyledModal = styled.div`
    width: 500px;
    outline: 1px solid rgba(0,0,0,0.085);
    border-radius: 4px;
    @media screen and (max-width: 560px ){
    width: 300px;
    }
.modal-header{
    background: #1654AD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    img{
        height:50px
    }
}

.modal-body{
    &__header{
        h3{
            font-weight: 400;
            color: #136FAA;
        }
        i{
          font-size: 13px;
          color: grey;
          text-decoration: italics;
        }
    }
}

.modal-footer{
    background: #F2F2F2;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-text{
    color: #136FAA;
    cursor: pointer;
    :hover{
    color: #004E80;

    }
}
`


export default ForgotPassword;
