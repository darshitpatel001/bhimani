import React, { useState } from 'react';
import Arrow from "../assets/images/arrow.png"
import Mainbannerimg from "../assets/images/index-main-banner-img.png"
import Taxconsultantimg from "../assets/images/we-are-tax-consultant-img.png"
import Strategicplanning from "../assets/images/Strategic-planning-icon.png"
import Companyformation from "../assets/images/company-formation-icon.png"
import Payrollservices from "../assets/images/payroll-services-icon.png"
import Taxpreparation from "../assets/images/tax-preparation-icon.png"
import Cryptocurrencytaxes from "../assets/images/cryptocurrency-taxes-icon.png"
import Businessimmigration from "../assets/images/business-immigration-icon.png"
import Twowheelericon from "../assets/images/two-wheeler-loan-icon.png"
import Recurringdepositeicon from "../assets/images/recurring-deposit-icon.png"
import Personalloanicon from "../assets/images/personal-loan-icon.png"
import Fixeddepositeicon from "../assets/images/fixed-deposit-icon.png"
import Goldloanicon from "../assets/images/gold-loan-icon.png"
import Businessloanicon from "../assets/images/business-loan-icon.png"
import Passengervehicleicon from "../assets/images/passenger-vehicle-icon.png"
import Fuelfinanceicon from "../assets/images/fuel-finance-icon.png"
import Tollfinanceicon from "../assets/images/toll-finance-icon.png"
import Challanicon from "../assets/images/challan-discounting-icon.png"
import Testimoniallogo from "../assets/images/testimonial-logo.png"
import Contactusimg from "../assets/images/contact-us-img.png"
import Testimonialimg1 from "../assets/images/testimonial-img-1.png"
import Testimonialimg2 from "../assets/images/testimonial-img-2.png"
import Testimonialimg3 from "../assets/images/testimonial-img-3.png"
import Testimonialimg4 from "../assets/images/testimonial-img-4.png"
import Testimonialimg5 from "../assets/images/testimonial-img-5.png"
import Testimonialimg6 from "../assets/images/testimonial-img-6.png"
import { Tab, Tabs } from 'react-bootstrap'
import Slider from "react-slick";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

export default function Index() {

    const settingsslider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;

        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.length <= 10) {
            setPhoneNumber(numericPhoneNumber);
        }
    };

    const options = {
        items: 3, // Number of items to display at once
        loop: true, // Infinite loop
        margin: 10, // Space between items
        nav: false, // Display navigation buttons
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                nav: false,// Number of items to display on small screens
            },
            766: {
                items: 2,
                nav: false, // Number of items to display on larger screens
            },
            1200: {
                items: 3,
                nav: false,
            }
        }
    };
    return (
        <div className='index-page-main-section'>
            <section className='main-banner-section'>
                <div className='main-banner-constent'>
                    <h3 className='small-heading'>your dream</h3>
                    <h1 className='main-heading'>home with  simple faster friendlier home loans</h1>
                    <p className='content'>Maximizing your tax returns with customized strategies and expert advice tailored to your unique situation.</p>
                    <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='text-arrow-btn'>Get started<img src={Arrow} alt='' /></button></Link>
                </div>
                <div className='main-banner-img'>
                    <img src={Mainbannerimg} alt='' />
                </div>
                <div className='counter-section'>
                    <div className='box'>
                        <h1 className='count'>3 lacs</h1>
                        <h5 className='count-des'>happy customer</h5>
                    </div>
                    <div className='box box2'>
                        <h1 className='count'>200+</h1>
                        <h5 className='count-des'>Branches</h5>
                    </div>
                    <div className='box'>
                        <h1 className='count'>50+</h1>
                        <h5 className='count-des'>Cities Covered</h5>
                    </div>
                    <div className='box'>
                        <h1 className='count'>15,00 cr</h1>
                        <h5 className='count-des'>Disbursed Annually</h5>
                    </div>
                </div>
            </section>
            <section className='tax-consultant-section'>
                <div className='tax-consultant-img'>
                    <img src={Taxconsultantimg} alt='' />
                </div>
                <div className='tax-consultant-content'>
                    <h4 className='small-heading'>WE ARE TAX CONSULTANT</h4>
                    <h2 className='main-heading'>We Provide The Best Service For Your Convenience</h2>
                    <p className='tax-consultant-des'>Phasellus molestie porttitor rutrum. Praesent fringilla porttitor dolor ut mollis. Mauris ut aliquet magna. In mauris quam, aliquet sed interdum vitae, suscipit ac justo. Praesent rutrum orci sed turpis dictum fringilla.</p>
                    <ul className="tax-consultant-services-list">
                        <li className='tax-consultant-service'>IRS Tax Problems</li>
                        <li className='tax-consultant-service'>Tax Prepration and Planning</li>
                        <li className='tax-consultant-service'>Payroll Services</li>
                        <li className='tax-consultant-service'>Book keeping and Virtual CFO</li>
                    </ul>
                    <Link to="/tax-consultant" onClick={() => { window.location.href = "/tax-consultant "; }} ><button className='more-btn'>Discover more</button></Link>
                </div>
            </section>
            <section className='quick-repairs-section'>
                <div className='quick-repairs-heading'>
                    <h6 className='main-heading'>quick repairs</h6>
                    <h2 className='heading'>We Are Offers Multiple Services Throughout The Year.</h2>
                </div>
                <div className='repair-boxs'>
                    <div className='rows-box'>
                        <div className='box-1'>
                            <div className='image-1'>
                                <img src={Strategicplanning} alt='' />
                            </div>
                            <h4>Strategic Planning</h4>
                            <p>Strategic planning is a critical management process that organizations use to set priorities, allocate resources, and guide decision-making to achieve.</p>
                            {/* <span>Read More <img src={Arrowlightblack} alt='' /></span> */}
                        </div>
                        <div className='box-2'>
                            <div className='image-2'>
                                <img src={Companyformation} alt='' />
                            </div>
                            <h4>Company Formation</h4>
                            <p>You need to decide on the legal structure of your company. Common options include sole proprietorship, partnership, limited liability or a organization.</p>
                            {/* <span>Read More <img src={Arrowlightblack} alt='' /></span> */}
                        </div>
                        <div className='box-3'>
                            <div className='image-3'>
                                <img src={Payrollservices} alt='' />
                            </div>
                            <h4>Payroll Services</h4>
                            <p>Payroll services handle the calculation and deduction of federal, state, and local income taxes, as well as Social Security and Medicare.</p>
                            {/* <span>Read More <img src={Arrowlightblack} alt='' /></span> */}
                        </div>
                        <div className='box-4'>
                            <div className='image-4'>
                                <img src={Taxpreparation} alt='' />
                            </div>
                            <h4>Tax Preparation</h4>
                            <p>the process of collecting, organizing, and filing the necessary documents and information required by a government authority to calculate.</p>
                            {/* <span>Read More <img src={Arrowlightblack} alt='' /></span> */}
                        </div>
                        <div className='box-5'>
                            <div className='iamge-5'>
                                <img src={Cryptocurrencytaxes} alt='' />
                            </div>
                            <h4>Cryptocurrency Taxes</h4>
                            <p>Cryptocurrency taxes can be complex because they involve transactions that may not be as straightforward as traditional financial activities.</p>
                            {/* <span>Read More <img src={Arrowlightblack} alt='' /></span> */}
                        </div>
                        <div className='box-6'>
                            <div className='image-6'>
                                <img src={Businessimmigration} alt='' />
                            </div>
                            <h4>Business Immigration</h4>
                            <p>Business immigration, also known as business or investor visa programs, allows individuals to move to another country for the purpose.</p>
                            {/* <span>Read More <img src={Arrowlightblack} alt='' /></span> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-loans-section">
                <div className='our-loans-heading'>
                    <h6 className='main-heading'>OUR LOANS</h6>
                    <h2 className='heading'>We have your finances covered</h2>
                </div>
                <div className='our-loans-category'>
                    <Tabs defaultActiveKey="personal" id="uncontrolled-tab-example" >
                        <Tab eventKey="personal" title="Personal" className='personal-loan-slider'>

                            <OwlCarousel {...options} className='owl-theme' loop margin={10} nav>
                                <div className='box'>
                                    <h4 className='loan-heading'>Book your Two-Wheeler today with easy repayment EMIs</h4>
                                    <p className='loan-description'>Getting a Two-Wheeler Loan is easy. Affordable interest rates start as low as 11.5% p.a.*</p>
                                    <img src={Twowheelericon} alt='' />
                                    <h3 className='loan-main-heading'>Two-Wheeler Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Enjoy remarkable returns on your Recurring Deposit</h4>
                                    <p className='loan-description'>Rated "[ICRA]AA+ (Stable)" by ICRA and "IND AA+/ Stable" by India Ratings and Research</p>
                                    <img src={Recurringdepositeicon} alt='' />
                                    <h3 className='loan-main-heading'>Recurring Deposit</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Quick and easy Personal Loan with easy repayment options</h4>
                                    <p className='loan-description'>Get flexible EMI tenures on Personal Loan. Interest rates start as low as 11.5% p.a.*</p>
                                    <img src={Personalloanicon} alt='' />
                                    <h3 className='loan-main-heading'>Personal Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Get the best interest rates on your Fixed Deposit</h4>
                                    <p className='loan-description'>Earn up to 9.10%* p.a. (Including 0.50%* p.a. for Senior Citizens and 0.10%* p.a. for Women)</p>
                                    <img src={Fixeddepositeicon} alt='' />
                                    <h3 className='loan-main-heading'>Fixed Deposit</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Enjoy remarkable returns on your Recurring Deposit</h4>
                                    <p className='loan-description'>Rated "[ICRA]AA+ (Stable)" by ICRA and "IND AA+/ Stable" by India Ratings and Research</p>
                                    <img src={Goldloanicon} alt='' />
                                    <h3 className='loan-main-heading'>Gold Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Tab>
                        <Tab eventKey="business" title="Business" className='business-loan-slider'>
                            <OwlCarousel {...options} className='owl-theme' loop margin={10} nav>
                                <div className='box'>
                                    <h4 className='loan-heading'>Grow your business & make extra profit</h4>
                                    <p className='loan-description'>Reliable and fast loan approval process with minimum documentation</p>
                                    <img src={Businessloanicon} alt='' />
                                    <h3 className='loan-main-heading'>Business Loan</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Accelerate twice at the speed of your business</h4>
                                    <p className='loan-description'>Getting a Passenger Commercial Vehicle Finance is simple. Interest rates starting 14% p.a.*</p>
                                    <img src={Passengervehicleicon} alt='' />
                                    <h3 className='loan-main-heading'>passenger Commercial Vehicle Finance</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Simplify fuel expenses with SMILEAGE</h4>
                                    <p className='loan-description'>The quickest credit facility for fuel & lubricants available across India</p>
                                    <img src={Fuelfinanceicon} alt='' />
                                    <h3 className='loan-main-heading'>Fuel Finance</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Drive past tolls effortlessly with FASTag Recharges</h4>
                                    <p className='loan-description'>Make your everyday travel easy and cashless with convenient Toll Finance</p>
                                    <img src={Tollfinanceicon} alt='' />
                                    <h3 className='loan-main-heading'>Toll Finance</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                                <div className='box'>
                                    <h4 className='loan-heading'>Manage freight charges and transportation costs effortlessly</h4>
                                    <p className='loan-description'>Manage transportation & freight costs effortlessly with Challan Discounting</p>
                                    <img src={Challanicon} alt='' />
                                    <h3 className='loan-main-heading'>Challan Discounting</h3>
                                    <div className='loan-btns'>
                                        <Link to='/contact' className='appointment' onClick={() => { window.location.href = "/contact"; }}><button className='know-more-btn btn'>Know more</button></Link>
                                        <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='apply-more-btn btn'>Apply more</button></Link>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </Tab>
                    </Tabs>
                </div>
            </section>
            <section className='testimonial-section'>
                <div className='testimonial-heading'>
                    <h6 className='main-heading'>Testimonial</h6>
                    <h2 className='heading'>Our Certified Public Accountants Have Knowledge And Experience</h2>
                </div>
                <div className='testimonial-slider-animation'>
                    <div className='testimonial-slider'>
                        <Slider {...settingsslider}>
                            <div className='testimonial-box'>
                                <img src={Testimonialimg6} alt='' />
                                <h3 className='testimonial-name'>Mr. Scott Wyman</h3>
                                <p className='testimonial-description'>Our certified public accountants have knowledge and experience in a wide variety of industries. We offer diverse and very unique specialty services that ensure continued growth, success and longevity for decades to Come to Tax Consulting.</p>
                            </div>
                            <div className='testimonial-box'>
                                <img src={Testimonialimg6} alt='' />
                                <h3 className='testimonial-name'>Mr. Scott Wyman</h3>
                                <p className='testimonial-description'>Our certified public accountants have knowledge and experience in a wide variety of industries. We offer diverse and very unique specialty services that ensure continued growth, success and longevity for decades to Come to Tax Consulting.</p>
                            </div>
                            <div className='testimonial-box'>
                                <img src={Testimonialimg6} alt='' />
                                <h3 className='testimonial-name'>Mr. Scott Wyman</h3>
                                <p className='testimonial-description'>Our certified public accountants have knowledge and experience in a wide variety of industries. We offer diverse and very unique specialty services that ensure continued growth, success and longevity for decades to Come to Tax Consulting.</p>
                            </div>
                        </Slider>
                    </div>
                    <div className='testimonial-animation'>
                        <div className="image-animation main">
                            <div className="big-circle">

                            </div>
                            <div className="circle">
                                <div className="icon-block">
                                    <img src={Testimonialimg1} alt="app icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg2} alt="blockchain icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg3} alt="ar-vr icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg4} alt="artificial intelligence icon" />
                                </div>
                                <div className="icon-block">
                                    <img src={Testimonialimg5} alt="artificial intelligence icon" />
                                </div>
                            </div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="center-logo">
                                <img src={Testimoniallogo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-us-sction'>
                <div className='contact-us-img'>
                    <img src={Contactusimg} alt='' />
                </div>
                <div className='contact-us-content'>
                    <h5 className='main-heading'>CONTACT US</h5>
                    <h2 className='heading'>Please Fill Out This Form To And We Will Get In Touch.</h2>
                    <form action="https://formspree.io/f/mjvqarod"
                        method="POST" target="_blank" className='contact-form'>
                        <label className='first-name'>First name*<input type='text' name='First-Name' /></label>
                        <label className='email'>Email*<input type='email' name='Email' /></label>
                        <label className='phone-number'>Phone Number*<input type='number' name='Phone-Number' value={phoneNumber} onChange={handlePhoneNumberChange} minLength={10} /></label>
                        <label className='subject'>Subject*<input type='text' name='Subject' /></label>
                        <label className='message'>Message<textarea rows="4" name='Message' /></label>
                        <input type='submit' value="Send us Message" className='submit-btn' />
                    </form>
                </div>
            </section>
        </div>
    )
}