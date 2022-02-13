import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/Login/Login';

const App = () => {
  return( 
  <Section> 
  <Login/>
  <h1>Hello world</h1>
   </Section>
)};


const Section = styled.section`
  /* background: red; */
  min-height: 100vh;
  width: 100%
`

export default App;
