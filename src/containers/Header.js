import React, { useState } from 'react'
import Mainlogo from "../assets/images/main-logo.png"
import Downarrow from "../assets/images/arrow-down-sign-to-navigate.png"
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
        setActive1("false");
        setActive2("false");
        setActive3("false");
    };

    const [isActive1, setActive1] = useState("false");
    const handleToggle1 = () => {
        setActive("false");
        setActive1(!isActive1);
        setActive2("false");
        setActive3("false");
    };

    const [isActive2, setActive2] = useState("false");
    const handleToggle2 = () => {
        setActive("false");
        setActive1("false");
        setActive2(!isActive2);
        setActive3("false");
    };

    const [isActive3, setActive3] = useState("false");
    const handleToggle3 = () => {
        setActive("false");
        setActive1("false");
        setActive2("false");
        setActive3(!isActive3);
    };

    return (
        <div className='header-section' id='headerSection'>
            <Navbar expand="lg" >
                <Navbar.Brand className='d-flex'>
                    <Link to="/" onClick={() => { window.location.href = "/"; }}>
                        <img src={Mainlogo} alt='' />
                    </Link>
                    <h6 className='brand-name'>Bhimani <br /> Advisors</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className='header-menu-btns'>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav navbarScroll >
                            <Nav.Link href=''>
                                <Link to="/" onClick={() => { window.location.href = "/"; }}>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/loans" onClick={() => { window.location.href = "/loans"; }}>Loans</Link>
                                <span className='arrow-icon' onClick={handleToggle}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Link to="/business-loan" onClick={() => { window.location.href = "/business-loan"; }}>Business Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/personal-loan" onClick={() => { window.location.href = "/personal-loan"; }}>Personal Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/student-loan" onClick={() => { window.location.href = "/student-loan"; }}>Student Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/car-loan" onClick={() => { window.location.href = "/car-loan"; }}>Car Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/gold-loan" onClick={() => { window.location.href = "/gold-loan"; }}>Gold Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/commercial-loan" onClick={() => { window.location.href = "/commercial-loan"; }}>Commercial Vehicle Loan</Link>
                                    </li>
                                    <li>
                                        <Link to="/two-wheeler-loan" onClick={() => { window.location.href = "/two-wheeler-loan"; }}>Two Wheeler Loan</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive1 ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/insurance" onClick={() => { window.location.href = "/insurance"; }}>Insurance</Link>
                                <span className='arrow-icon' onClick={handleToggle1}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Link to="/health-insurance" onClick={() => { window.location.href = "/health-insurance"; }}>Health Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/car-insurance" onClick={() => { window.location.href = "/car-insurance"; }}>Car Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/bike-insurance" onClick={() => { window.location.href = "/bike-insurance"; }}>Bike Insurace</Link>
                                    </li>
                                    <li>
                                        <Link to="/life-insurance" onClick={() => { window.location.href = "/life-insurance"; }}>Life Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/fire-insurance" onClick={() => { window.location.href = "/fire-insurance"; }}>Fire Insurance</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive2 ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/tax-consultant" onClick={() => { window.location.href = "/tax-consultant "; }} >Tax consultant</Link>
                                <span className='arrow-icon' onClick={handleToggle2}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Link to="/gst-return" onClick={() => { window.location.href = "/gst-return"; }}>Gst Return</Link>
                                    </li>
                                    <li>
                                        <Link to="/income-tax" onClick={() => { window.location.href = "/income-tax"; }}>Income Tax Return</Link>
                                    </li>
                                    <li>
                                        <Link to="/pan-card" onClick={() => { window.location.href = "/pan-card"; }}>Pan Card</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="" className={!isActive3 ? "dropdown-list show" : "dropdown-list"}>
                                <Link to="/subsidy" onClick={() => { window.location.href = "/subsidy"; }}>Subsidy</Link>
                                <span className='arrow-icon' onClick={handleToggle3}><img src={Downarrow} alt='' /></span>
                                <ul className='dropdown'>
                                    <li>
                                        <Link to="/mysy" onClick={() => { window.location.href = "/mysy"; }}>Mukhymantri Yuva Swavalamban Yojana Or MYSY Scholarship</Link>
                                    </li>
                                    <li>
                                        <Link to="/ntse" onClick={() => { window.location.href = "/ntse"; }}>National Talent Search Exam (NTSE)</Link>
                                    </li>
                                    <li>
                                        <Link to="/digital-gujarat" onClick={() => { window.location.href = "/digital-gujarat"; }}>Digital Gujarat Scholarship</Link>
                                    </li>
                                    <li>
                                        <Link to="/tuition-coaching" onClick={() => { window.location.href = "/tuition-coaching"; }}>Tuition And Coaching Sahay Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/nsp" onClick={() => { window.location.href = "/nsp"; }}>National Scholarship Portal (NSP)</Link>
                                    </li>
                                    <li>
                                        <Link to="/rte" onClick={() => { window.location.href = "/rte"; }}>Right To Education (RTE)</Link>
                                    </li>
                                    <li>
                                        <Link to="/admission" onClick={() => { window.location.href = "/admission"; }}>College/Job Admission From</Link>
                                    </li>
                                    <li>
                                        <Link to="/kuvarbai" onClick={() => { window.location.href = "/kuvarbai"; }}>Kuvarbai Mameru Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/vahli-dikri" onClick={() => { window.location.href = "/vahli-dikri"; }}>Vahli Dikri Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/vidhva-sahay" onClick={() => { window.location.href = "/vidhva-sahay"; }}>Vidhva Sahay Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/atal-pansion" onClick={() => { window.location.href = "/atal-pansion"; }}>Atal Pension Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/sukanya-samriddhi" onClick={() => { window.location.href = "/sukanya-samriddhi"; }}>Sukanya Samriddhi Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/divyang-lagn" onClick={() => { window.location.href = "/divyang-lagn"; }}>Divyang Lagn Sahay Yojana</Link>
                                    </li>
                                    <li>
                                        <Link to="/jawahar-navodaya" onClick={() => { window.location.href = "/jawahar-navodaya"; }}>Jawahar Navodaya Vidyalaya</Link>
                                    </li>
                                    <li>
                                        <Link to="/manav-garima" onClick={() => { window.location.href = "/manav-garima"; }}>Manav Garima Yojana</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="">
                                <Link to="/testimonials" onClick={() => { window.location.href = "/testimonials"; }}>Testimonial</Link>
                            </Nav.Link>
                            <Nav.Link href="">
                                <Link to="/contact" onClick={() => { window.location.href = "/contact"; }}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><Button variant="outline-success" className='appointment-btn'>Appointment<span className='arrow'><i class="fa-solid fa-arrow-right"></i></span></Button></Link>
                </div>

            </Navbar>
        </div>
    )
}
