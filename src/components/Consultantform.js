import React, { useState } from 'react'
import Firstname from '../assets/images/first-name-img.png'
import present from '../assets/images/present.png'
import fathername from '../assets/images/fathername.png'
import permanent from '../assets/images/permanent.png'
import Email from '../assets/images/email-img.png'
import Phonenumber from '../assets/images/phone-img.png'
import City from '../assets/images/city-img.png'
import Streetaddress from '../assets/images/street-address-1.png'
import Message from '../assets/images/comments-img.png'

export default function Consultantform() {
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
                        <h3>Consultant Form</h3>
                        <p>Let us Know How We Can Help You !</p>
                    </div>
                    <form className="main-form" action="https://formspree.io/f/mjvqarod" method="POST" target="_blank">
                        <h3>The following particulars are furnished herewith Details</h3>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Your Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Firstname} />
                                <input type="text" name='Your-Name' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Father's name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={fathername} />
                                <input type="text" name='Father-Name' required />
                            </div>
                        </div>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Permanent residential address</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={permanent} />
                                <input type="text" name='Permanent-Address' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Present residential address</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={present} />
                                <input type="text" name='Present-Address' required />
                            </div>
                        </div>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Professional address(es) in India</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Email} />
                                <input type="text" name='Email' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Principal place of profession in India</label>
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
                            <h5>By clicking Submit, you agree to our updated Privacy Policu terms and conditions</h5>
                        </div>
                        <input type='submit' value="Submit Now !" className='submit-btn' />
                    </form>
                </div>
            </div>
        </>
    )
}
