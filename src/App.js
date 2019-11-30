import React from 'react';
import FormAndImage from './components/formAndImage'
import InstructionsAndFood from './components/InstructionsAndFood'
import Benefits from './components/benefits'
import Navbar from './components/navbar'
import Footer from './components/footer'
export default function ButtonAppBar() {
  return (
    <React.Fragment >
      {/*<Navbar></Navbar>*/}
      <FormAndImage></FormAndImage>
      <Benefits></Benefits>
     {/* <InstructionsAndFood></InstructionsAndFood>*/}
      <Footer></Footer>
    </React.Fragment>
  );
}
