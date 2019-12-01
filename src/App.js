import React from 'react';
import FormAndImage from './components/firstSection'
import InstructionsAndFood from './components/InstructionsAndFood'
import Benefits from './components/benefits'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Contador from './components/contadorUI'
import FormSolo from './components/formSolo'
export default function ButtonAppBar() {
  return (
    <React.Fragment >
      {/*<Navbar></Navbar>*/}
      <FormAndImage href="#footer"></FormAndImage>
      <Benefits></Benefits>
      <Contador></Contador>
      <FormSolo></FormSolo>
     {/* <InstructionsAndFood></InstructionsAndFood>*/}
      <Footer id="footer"></Footer>
    </React.Fragment>
  );
}
