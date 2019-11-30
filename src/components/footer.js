import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">

            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol>
                            &copy; {new Date().getFullYear()} Copyright, todos los derechos reservados por <strong>nearby.com.co</strong>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <h6 style={{paddingTop:20}}>¡SÍGUENOS!</h6>
                            <a href="https://instagram.com/nearbycol?igshid=1fy4xhr4bs41e" target="_blank" style={{ paddingRight: 15 }}><InstagramIcon ></InstagramIcon></a>
                            <a href="https://www.facebook.com/Nearby-106209810824122/"  target="_blank" style={{ paddingRight: 15 }}><FacebookIcon ></FacebookIcon ></a>
                            <a href="https://twitter.com/nearbycol"  target="_blank"><TwitterIcon></TwitterIcon></a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;