import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from '../assets/images/whatsapp.png'
import facebook from '../assets/images/facebook.png'
// import instagram from '../assets/images/instagram.png'
import linkdin from '../assets/images/linkdin.png'

export default function Footer() {
    return (
        <>
            <div className='footer-section'>
                <div className='footer-menus'>
                    <div className='deposits-column menu'>
                        <h5 className='menu-heading'>Loans</h5>
                        <ul>
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
                    </div>
                    <div className='pay-online-column menu'>
                        <h5 className='menu-heading'>insurance</h5>
                        <ul>
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
                    </div>
                    <div className='loans-column menu'>
                        <h5 className='menu-heading'>tax consultant</h5>
                        <ul>
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
                    </div>
                    <div className='resources-column menu'>
                        <h5 className='menu-heading'>Resources</h5>
                        <ul>
                            <li>
                                <Link to="/testimonials" onClick={() => { window.location.href = "/testimonials"; }}>Testimonial</Link>
                            </li>
                            <li>
                                <Link to="/">Downloads</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='discover-column menu'>
                        <h5 className='menu-heading'>Discover</h5>
                        <ul>
                            <li>
                                <Link to="/contact" onClick={() => { window.location.href = "/contact"; }}>About Us</Link>
                            </li>
                            <li>
                                <Link to="/subsidy" onClick={() => { window.location.href = "/subsidy"; }}>Subsidy</Link>
                            </li>
                            <li>
                                <Link to="/gst-return" onClick={() => { window.location.href = "/gst-return"; }}>Gst Return</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='contact-us-column menu'>
                        <h5 className='menu-heading'>Contact Us</h5>
                        <ul>
                            <li>
                                <Link to="/subsidy" onClick={() => { window.location.href = "/subsidy"; }}>FAQs</Link>
                            </li>
                            <li>
                                <Link to="/pan-card" onClick={() => { window.location.href = "/pan-card"; }}>Pan Card</Link>
                            </li>
                            <li>
                                <Link to="/appointmentform" onClick={() => { window.location.href = "/appointmentform"; }}>Service Request</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='services-row'>
                    <div className='follow-us-on column'>
                        <h4 className='heading'>follow us on:</h4>
                        <ul>
                            <li><Link to='https://api.whatsapp.com/send?phone=8451202145' target='_blank'   ><img src={whatsapp} alt='' /></Link></li>
                            <li><Link to='https://www.facebook.com/rohitbhimaniFinanceexpert/' target='_blank'><img src={facebook} alt='' /></Link></li>
                            {/* <li><img src={instagram} alt='' /></li> */}
                            <li><Link to='https://www.linkedin.com/in/rohit-bhimani-5b3b0176/?originalSubdomain=in' target='_blank'><img src={linkdin} alt='' /></Link></li>
                        </ul>
                    </div>
                    <div className='toll-free-number column'>
                        <h3 className='heading'>Toll Free Number :</h3>
                        <h4 className='number'>+91 8451202145</h4>
                        <h4 className='number'>+91 2134567890</h4>
                    </div>
                    <div className='deposit-customer-care column'>
                        <h3 className='heading'>Deposit Customer Care :</h3>
                        <h4 className='number'>02241574545</h4>
                    </div>
                    <div className='menu-copyright'>
                        <p className='copyright'><Link to="/">Privacy Policy</Link> | <Link to="/">Site map</Link> |<br /> <Link to="/">Interest Rate Policy</Link> | <Link to="/">Code of Conduct for Collections</Link><br /> © 2023 Bhimani Advisors Finance Limited. All rights reserved.</p>
                    </div>
                </div>
                <div className='footer-description'>
                    <p className='description'>Two Entities - One Shared Vision - Shriram Transport Finance Company Limited (STFC) and Shriram City Union Finance Limited (SCUF) are now merged as Shriram Finance Limited</p>
                </div>
            </div>
        </>
    )
}