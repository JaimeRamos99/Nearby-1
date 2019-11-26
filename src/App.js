import React from 'react';
import FormAndImage from './components/formAndImage'
import InstructionsAndFood from './components/InstructionsAndFood'
import Benefits from './components/benefits'
import Navbar from './components/navbar'
export default function ButtonAppBar() {
  return (
    <React.Fragment >
      <Navbar></Navbar>
      <FormAndImage></FormAndImage>
      <Benefits></Benefits>
      <InstructionsAndFood></InstructionsAndFood>
    </React.Fragment>
  );
}
