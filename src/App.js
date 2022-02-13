import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/Login/Login';
import Background from './assets/Lumen BG.svg'


const App = () => {
  return( 
  <Section> 
  <Login/>
   </Section>
)};


const Section = styled.section`
  /* background: url("${Background}"); */
  background-size: 20%;
  background-position:  center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;


  @media screen and (max-width: 560px ){
    background: hsla(212, 15%, 52%, 0.08);
    }
`

export default App;
