import React, { Component } from 'react';
import './welcomeBootstrap.css';

import './responsiveWelcome.css';

import Spacer from 'react-add-space';

import { Navbar, Nav, Button } from 'react-bootstrap';
import BImage from '../Images/BImage.png';
import BImage1 from '../Images/BImage1.png';

class WelcomeBootstrap extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar expand="lg" style={{ height: '0' }}>
                        <Navbar.Brand href="#home"><i className="fa fa-signal" id="vapwelcomeB" style={{ }} /><a id="vapIdwelcomeB" style={{ }}>VAP IoT lab</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-autowelcomeB" >
                                <Nav.Link href="#home" style={{ color: '#F89E12', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Home</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>About</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Forum</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Contact</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontfamily: "Myriad pro Semibold" }}><b>FAQs</b></Nav.Link><Spacer amount={20} />
                                <button type="button" className="mr-autowelcomeB" id="btnwelcomeB" style={{}}>Logout</button>
                            </Nav>
                        </Navbar.Collapse>
                        
                    </Navbar>

                </div>   {/*  Navbar ends */}
                <div style={{ margin: '0' }} >
                    <div className="col-md-12" id="ppwelcomeB" >
                        <img className="img-responsive" src={BImage} id="iotImage1welcomeB" style={{ }} />

                        <div style={{ paddingLeft: '45%' }} id="middleSectionwelcomeB">
                            <div className="centered1welcomeB" style={{  }} >Online Education</div>
                            <div className="centered2welcomeB" style={{  }}>Welcome</div>
                            <div className="centered3welcomeB" style={{ }}>TO VAP IoT Lab</div>
                            <div className="centered4welcomeB" style={{  }}>(Virtually Accessible Physical)</div>
                            <div className="centered5welcomeB" style={{  }}><ion-icon name="caret-forward" id="filledArrowwelcomeB" style={{ color: 'black', borderRadius: '50%', backgroundColor: '#F89E12', border: '1px solid #F89E12' }}></ion-icon><Spacer amount={1} />Read More
                         </div>
                        </div>



                        <img className="img-responsive" src={BImage1} id="iotImage2welcomeB" style={{}} />
                    </div>
                </div>
                <div style={{marginLeft:'10%'}}>
                    <div className="RowwelcomeB" id="fourSectionswelcomeB" style={{ color: 'white' }}>
                        <div className="ColumnwelcomeB" id="part1welcomeB" style={{   }}>
                            <h5 id="ourSpecialityPartwelcomeB" style={{ }}>
                                Our speciality
                            </h5>
                                Connect with the real hardware virtually
                               
                            <br />
                                The basic technology we will<br /> be using is remote access<br /> to different IoT boards.
                        </div>
                        <div className="ColumnwelcomeB" id="part2welcomeB" style={{  }}>
                            <div className="rowwelcomeB">
                                <ion-icon name="settings" id="headIcons1welcomeB" style={{ }}></ion-icon><Spacer amount={1} />
                                <h5 className="mainHeads" style={{}}>
                                    <b style={{ color: 'black', }}>Hands-On</b>
                                </h5>
                            </div>
                            <p id="para1welcomeB" style={{ backgroundColor:'white',  }}>
                                <br />Access to IoT boards<br />by burning the codes.
                            </p>
                        </div>
                        <div className="ColumnwelcomeB" id="part3welcomeB" style={{}}>
                            <div className="rowwelcomeB" >
                                <ion-icon name="clipboard" id="headIcons2welcomeB" style={{  color: '#f89e12' }}></ion-icon><Spacer amount={1} />
                                <h5 className="mainHeadswelcomeB" style={{ }}>
                                    <b style={{ color: 'black' }}>Training & Boards</b>
                                </h5>
                            
                            <p id="para2welcomeB" style={{backgroundColor:'white'}}>
                                <div style={{ }}><br />Preparing students for<br />rapidly changing world.</div>
                            </p></div>
                        </div>
                        <div className="ColumnwelcomeB" id="part4welcomeB" style={{ }}>
                          <div className="rowwelcomeB">
                          <ion-icon name="reader" id="headIcons3welcomeB"style={{ color:'black' }}></ion-icon><Spacer amount={1} />
                          <h5 className="mainHeadswelcomeB" style={{  }}>                           
                                <b style={{ color: 'black' }}>Lectures</b>
                        </h5>
                          </div>
                            <p id="para3welcomeB" style={{backgroundColor:'#feb33e' }}>
                                <br />IoT Lab related to guide<br />lines and lectures.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footerwelcomeB" id="footerwelcomeB" style={{  }}>
                    <div className="Row1welcomeB" style={{ paddingLeft: '30px', width: '90%' }}>
                        <div className="ColumnwelcomeB" id="footerAwelcomeB" style={{  }}>
                            2020  VAP IoT Lab , All Rights  Reserved
                        </div>
                        <div className="ColumnwelcomeB" id="footerBwelcomeB" style={{  }}>
                            Follow us on <br />
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12'}} /> |</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12' }} />|</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12' }} />  </a>
                        </div>
                        <div className="ColumnwelcomeB">
                            <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" id="msgBoxwelcomeB" style={{  }} />  </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeBootstrap;