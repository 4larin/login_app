import react, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../../assets/Lumentum.png'


const Login = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [credentials, setCredentials] = useState({username:null, password:null})
    const formHandler = (e)=>{
        setCredentials(prevState =>{
            return({
                ...prevState,
                [e.name]: e.value
            })
        })
    }

  return (<div>
          <StyledModal
              show={true}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
          >
              <Modal.Header>
                  <Modal.Title>
                      <img src={Logo} alt="Lumentum Logo" />
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className={'p-5'}>
                 <div className="modal-body__header">
                     <h3 className={'mb-4'}>Client Login</h3>
                 </div>
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control size="lg" type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control size="lg" type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex justify-content-between wrap flex-column align-items-center gap-1" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                      <Form.Text> Forgot your password? Click here</Form.Text>
                  </Form.Group>
                  <Button className={'w-100'} size="lg" variant="primary" type="submit">
                      Login
                  </Button>
              </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button size={'lg'} className={'px-4'} variant="secondary" onClick={handleClose}>
                      Not yet a Member? Create Account Now
                  </Button>
              </Modal.Footer>
          </StyledModal>
  </div>);
};

const StyledModal = styled(Modal)`
.modal-header{
    background: #1654AD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    img{
        height:70px
    }
}

.modal-body{
    &__header{
        h3{
            font-weight: 400;
            text-align: center;
            color: #136FAA;

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

export default Login;


