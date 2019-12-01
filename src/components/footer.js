import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';
const FooterPage = () => {
    return (
        <MDBFooter className="font-small pt-1 mt-4">

            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <MDBRow style={{ paddingBottom: 30 }}>
                        <MDBCol>
                            <h5 style={{ fontFamily: 'Roboto' }}>Contáctanos</h5>
                            <div >
                                <p style={{fontFamily: 'Roboto'}}>+57 300 2810932</p>
                               
                           </div>
                           <Divider variant="middle"/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{ paddingBottom: 30 }}>
                        <MDBCol>
                            <h6 style={{}}>¡Síguenos en redes sociales!</h6>
                            <a href="https://instagram.com/nearbycol?igshid=1fy4xhr4bs41e" target="_blank" rel="noopener noreferrer" style={{ paddingRight: 15 }}><InstagramIcon ></InstagramIcon></a>
                            <a href="https://www.facebook.com/Nearby-106209810824122/" target="_blank" rel="noopener noreferrer" style={{ paddingRight: 15 }}><FacebookIcon ></FacebookIcon ></a>
                            <a href="https://twitter.com/nearbycol" target="_blank" rel="noopener noreferrer"><TwitterIcon></TwitterIcon></a>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            &copy; {new Date().getFullYear()} Copyright, todos los derechos reservados por <strong>nearby.com.co</strong>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </MDBFooter>

    );
}

export default FooterPage;