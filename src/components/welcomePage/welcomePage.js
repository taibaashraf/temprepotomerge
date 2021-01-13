import React, { Component } from 'react';
import Spacer from 'react-add-space';

import { Link } from "react-router-dom";


// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import LoginPage from './components/loginPage/loginPage';

import LoginPage from '../../components/loginPage/loginPage';

import 'materialize-css';
import './welcomePage.css';
import './responsiveWelcomePage.css';



import BImage from '../Images/BackgroundImage.png';
import vapLogo from '../Images/VAPLOGO.png';

//<i className="fa fa-signal" style={{ color: ' #F89E12' }} />

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="img-responsive" src={BImage} id="bgImagewelcomePage" style={{ }} />
                    <div className="top-leftwelcomePage"><img className="img-responsive" id="vapLogo" src={vapLogo} style={{  }}/>VAP IoT lab</div>
                    <div className="top-rightwelcomePage"><ion-icon name="chevron-down-outline" id="arrowIconwelcomePage"></ion-icon></div>
                    <div className="middleSectionwelcomePage">
                        <div className="centeredwelcomePage1" style={{  }}>Online Education</div>
                        <div className="centeredwelcomePage2" id="weightwelcomePage" style={{ }}>Welcome</div>
                        <div className="centeredwelcomePage3" style={{ }}>TO VAP IoT Lab</div>
                        <div className="centeredwelcomePage4" style={{ }}>(Virtually Accessible Physical)</div>
                        <div className="centeredwelcomePage5" style={{ color: '#F89E12'}}>
                            <ion-icon style={{
                                       
                                        borderRadius: "50%",
                                        backgroundColor: "#F89E12",
                                        border: "1px solid #F89E12",
                                        padding: "2px",
                                        marginTop:"6px",
                                    }} 
                                name="arrow-forward-outline" id="rightArrowwelcomePage "></ion-icon>
                        <Spacer amount={1} /><Link style={{ color: 'white'}} id="loginwelcomePage" to="/loginPage">Login</Link> 

                        
                        </div>
                        {/* butttttonnnnn */}

                        {/* <Link to="/loginPage" style={{color:'red'}}>Login</Link> */}
                        {/* <button to="/loginPage" tag={Link} className="" href="./loginPage" style={{color:'red'}} >Login</button> */}

                    </div>
                    <div className="vapwelcomePage">2020 VAP IoT Lab, All Rights Reserved</div>
                </div>
            </div>
       );
    }
}
export default WelcomePage;