import React, { Component } from 'react';
import Spacer from 'react-add-space';
// import ReactTable from "react-table"; 

import './forumPage1.css';
import './responsiveForum1.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ForumPage1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forms: [
                {
                    serial: '',
                    topic: 'VAPIoT-HANDS ON /COMPILER',
                    comments: 453,
                    lastComment: 'By Kauf.H',
                    usersType: 'Faculty',
                   author:'jawad',
                    date:'sep 23,2018 5:35'
                },
                {
                    serial: '',
                    topic: 'EN-GENERAL',
                    comments: 134,
                    lastComment: 'By Kauf.H',
                    usersType: 'Student',
                   author:'jawad',
                   date:'sep 23,2018 5:35'
                },
                {
                    serial: '',
                    topic: 'VAPIoT-HANDS ON /COMPILER',
                    comments: 45,
                    lastComment: 'By Kauf.H',
                    usersType: 'Student',
                    author:'jawad',
                    date:'sep 23,2018 5:35'
                },
                {
                    serial: '',
                    topic: 'EN-GENERAL',
                    comments: 76,
                    lastComment: 'By Kauf.H',
                    usersType: 'Faculty',
                    author:'jawad',
                   date:'sep 23,2018 5:35'
                },
                {
                    serial: '',
                    topic: 'VAPIoT-HANDS ON /COMPILER',
                    comments: 345,
                    lastComment: 'By Kauf.H',
                    usersType: 'Student',
                   author:'taiba no its only jawad',
                    date:'sep 23,2018 5:35'
                }
            ]
        };
    }

renderTableData(){
    return this.state.forms.map(( form,  index) => {
        const { id, serial, topic, comments, lastComment, usersType, date, author} =  form
        return(
            // <tr key={id}>
            //     <td> {id} </td>
            //     <td> {serial} </td>
            //     <td> {topic} </td>
            //     <td> {comments} </td>
            //     <td> {lastComment} </td>
            //     <td> {usersType} </td>
            // </tr>
            <tr style={{ padding: '50px', }}>
                <td id="td1aforumPage1"><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                <td id="td2aforumPage1" >{topic} 
                        <p className="pTagforumPage1" style={{}}>VAPIoT community related topics</p>
                    <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                </td>
                <td id="td3aforumPage1">{comments}</td>
                <td id="td4aforumPage1">jawad<br />
                    <i className="fa fa-calendar" /> {date}
                    </td>
                <td id="td5aforumPage1">
                    <i className="fa fa-mail-forward" />
                    <Spacer amount={1} />
                    faculty
                </td>
            </tr>
        )
    })
}
renderTableHeader() {
    let header = Object.keys(this.state.forms[0])
    return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
        
    })
 }

render() {
    return (
        <div>
            <div className="">
                <img className="img-responsive" src={bgImage} id="bgImageforumPage1" style={{}} />
                <div className="top-leftforumPage1"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />
                    <Spacer amount={1} />
                    VAP IoT lab</div>
                <div className="top-left1forumPage1" style={{}}>Home</div>
                <div className="top-left2forumPage1" style={{}}>About</div>
                <div className="top-left3forumPage1" style={{}}>Blogs</div>
                <div className="top-left4forumPage1" style={{}}>Forum</div>
                <div className="top-left5forumPage1" style={{}}>Contact</div>
                <button className="top-left6forumPage1" id="btnlogoutforumPage1" style={{}}>Logout</button>

                <div className="section">
                    <div id="container" style={{ backgroundColor: '', }}>
                        <div id="faqTableforumPage1">
                        <table id='forms'>
                                <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                </tbody>
                         </table>
                            {/* <table className="table" >
                                <thead>
                                    <tr>
                                        <th><b>Serial</b></th>
                                        <th><b>Topic</b></th>
                                        <th><b>Comments</b></th>
                                        <th><b>Last comment</b></th>
                                        <th><b>Users Type</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ padding: '50px', }}>
                                        <td id="td1aforumPage1"><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2aforumPage1" >VAPIoT-HANDS ON /COMPILER
                                                <p className="pTagforumPage1" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3aforumPage1">453</td>
                                        <td id="td4aforumPage1">By Kauf.H<br />
                                            <i className="fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td id="td5aforumPage1">
                                            <i className="fa fa-mail-forward" />
                                            <Spacer amount={1} />
                                                Faculty
                                            </td>
                                    </tr>
                                    <tr className="rowss">
                                        <td id="td1bforumPage1"><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2bforumPage1">EN-GENERAL
                                                <p className="pTagforumPage1" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3bforumPage1">134</td>
                                        <td id="td4bforumPage1">By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                                </td>
                                        <td id="td5bforumPage1"><i className="fa fa-circle" />
                                            <Spacer amount={1} />
                                            Student</td>
                                    </tr>
                                    <tr>
                                        <td id="td1cforumPage1"><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2cforumPage1">VAPIoT-HANDS ON /COMPILER<br />
                                            <p className="pTagforumPage1" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3cforumPage1">45</td>
                                        <td id="td4bforumPage1">By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td id="td5cforumPage1">
                                            <i className="fa fa-circle" />
                                            <Spacer amount={1} />
                                                Student
                                            </td>
                                    </tr>
                                    <tr>
                                        <td id="td1dforumPage1" ><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /></td>
                                        <td id="td2dforumPage1" >EN-GENERAL
                                            <p className="pTagforumPage1" style={{}}>VAPIoT community related topics</p>

                                            <p style={{ color: '#f89e12' }}>Moderator. Ben Johne. ST</p>
                                        </td>
                                        <td id="td3dforumPage1">76</td>
                                        <td id="td4bforumPage1">By Kauf.H<br />
                                            <i className=" fa fa-calendar" /> sep 23,2018 5:35
                                            </td>
                                        <td id="td5dforumPage1"><i className="fa fa-mail-forward" />
                                            <Spacer amount={1} />
                                            Faculty</td>
                                    </tr>
                                    <tr>
                                        <td id="td1eforumPage1"><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /></td>

                                        <td id="td2eforumPage1">VAPIoT-HANDS ON / COMPILER
                                                <p className="pTag" style={{}}>VAPIoT community related topics</p>
                                            <p style={{ color: '#f89e12' }}>
                                                Moderator. Ben Jhone. ST
                                                </p>
                                        </td>
                                        <td id="td3eforumPage1">345</td>
                                        <td id="td4bforumPage1">By Kauf.H<br />
                                            <i className="fa fa-calender" /> sep 23,2018 5:35
                                                </td>
                                        <td id="td5eforumPage1"><i className="fa fa-circle" />
                                            <Spacer amount={1} />
                                                Student
                                            </td>
                                    </tr>
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>

                <div className="footer" style={{ backgroundColor: 'black' }}>
                    <div className="Row1forumPage1" style={{ paddingLeft: '30px', width: '90%' }}>
                        <div className="ColumnforumPage1" id="startFooterpartforumPage1" style={{}}>
                            2020  VAP IoT Lab , All Rights  Reserved
                        </div>
                        <div className="ColumnforumPage1" id="middleFooterpartforumPage1" style={{}}>
                            Follow us on <br />
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12' }} /> |</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12' }} />|</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12' }} />  </a>
                        </div>
                        <div className="ColumnforumPage1">
                            <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}
}
export default ForumPage1;