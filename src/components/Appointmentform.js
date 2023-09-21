import React, { useState } from 'react';
import Firstname from '../assets/images/first-name-img.png'
import Appointmentdate from '../assets/images/appointment-img.png'
import Application from '../assets/images/application-type-img.png'
import Preferred from '../assets/images/preferred-time-img.png'
import Email from '../assets/images/email-img.png'
import Phonenumber from '../assets/images/phone-img.png'
import City from '../assets/images/city-img.png'
import Streetaddress from '../assets/images/street-address-1.png'
import Message from '../assets/images/comments-img.png'

export default function Appointmentform() {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;

        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.length <= 10) {
            setPhoneNumber(numericPhoneNumber);
        }
    };

    return (
        <>
            <div className="form-section">
                <div className="form-box">
                    <div className="form-content">
                        <h3>Appointment Form</h3>
                        <p>Let us Know How We Can Help You !</p>
                    </div>
                    <form className="main-form" action="https://formspree.io/f/mjvqarod"
                        method="POST" target="_blank" >
                        <h3>Appointment Details</h3>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Your Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Firstname} />
                                <input type="text" name='Your-Name' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Application Type</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Application} />
                                <select className="select-form" name='Application-Type' required>
                                    <option value="">------Select Application Type-----</option>
                                    <option value="Business-loan">Business-loan</option>
                                    <option value="Personal-loan">Personal-loan</option>
                                    <option value="Student-loan">Student-loan</option>
                                    <option value="Car-Loan">Car Loan</option>
                                    <option value="Gold-Loan">Gold Loan</option>
                                    <option value="Commercial-Vehicle-Loan">Commercial Vehicle Loan</option>
                                    <option value="Two-Wheeler-Loan">Two Wheeler Loan</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Appointment Date</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Appointmentdate} />
                                <input type="date" className='Date' name='appointment-date' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Preferred Time</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Preferred} />
                                <input type="text" name='Preferred-Time' required />
                            </div>
                        </div>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Email Address</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Email} />
                                <input type="text" name='Email' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Phone Number</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Phonenumber} />
                                <input type="number" name='Phone-Number' value={phoneNumber} onChange={handlePhoneNumberChange} minLength={10} required />
                            </div>
                        </div>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">City</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={City} />
                                <input type="text" name='City' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Street Address</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Streetaddress} />
                                <input type="text" name='Street-Address' required />
                            </div>
                        </div>
                        <div className="input-content content-100">
                            <label for='' className="label-contents">Your Message</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Message} />
                                <textarea rows="2" name="Message" required />
                            </div>
                        </div>
                        <input type='submit' value="Book Your Appointment" className='submit-btn' />
                    </form>
                </div>
            </div>
        </>
    )
}
