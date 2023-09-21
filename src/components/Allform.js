import React, { useState } from 'react';
import Loanamount from '../assets/images/loan-amount.png'
import Annualincome from '../assets/images/annual-img.png'
import Selectloan from '../assets/images/select-img.png'
import Gender from '../assets/images/gender.png'
import Firstname from '../assets/images/first-name-img.png'
import Lastname from '../assets/images/last-name-img.png'
import Month from '../assets/images/month-img.png'
import Day from '../assets/images/day-img.png'
import Year from '../assets/images/year-img.png'
import Email from '../assets/images/email-img.png'
import Phonenumber from '../assets/images/phone-img.png'
import Street1 from '../assets/images/street-address-1.png'
import Street2 from '../assets/images/street-address-2.png'
import City from '../assets/images/city-img.png'
import State from '../assets/images/email-img.png'
import Zipcode from '../assets/images/zip-code-img.png'
import Income from '../assets/images/income-img.png'
import Rent from '../assets/images/rent-img.png'
import Payment from '../assets/images/pyment-img.png'
import Comments from '../assets/images/comments-img.png'
import Institution from '../assets/images/institution-img.png'
import Saving from '../assets/images/saving-account-img.png'
import Address from '../assets/images/address-img.png'

export default function Allform() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;

        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.length <= 10) {
            setPhoneNumber(numericPhoneNumber);
        }
    };
    const [phoneNumber1, setPhoneNumber1] = useState('');

    const handlePhoneNumberChanges = (event) => {
        const inputPhoneNumber = event.target.value;

        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.length <= 10) {
            setPhoneNumber1(numericPhoneNumber);
        }
    };
    const [pinCode, setpinCode] = useState('');
    
    const handlepincodeChange = (event) => {
        const inputPincode = event.target.value;

        const numericPinCode = inputPincode.replace(/\D/g, '');
        
        if (numericPinCode.length <= 6) {
            setpinCode(numericPinCode);
        }
    };  
    return (
        <>
            <div className="form-section">
                <div className="form-box">
                    <div className="form-content">
                        <h3>All Types Loan Application Form</h3>
                        <p>Personal Information inquiry</p>
                    </div>
                    <form className="main-form" action="https://formsubmit.co/darshitakbari9999@gmail.com" method="POST" target="_blank">
                        <h3>Desired Loan Amount $ *</h3>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Loan Amount</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Loanamount} />
                                <input type="number" name='Loan-Amount' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Annual Income</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Annualincome} />
                                <input type="number" name='Annual-Amount' required />
                            </div>
                        </div>
                        <h3>Loan will be used for *</h3>
                        <div className="input-content ">
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Selectloan} />
                                <select className="select-form" name='Loan' required>
                                    <option value="">------Select your Loan-----</option>
                                    <option value="Business-loan">Business-loan</option>
                                    <option value="Personal-loan">Personal-loan</option>
                                    <option value="Student-loan">Student-loan</option>
                                    <option value="Car-loan">Car Loan</option>
                                    <option value="Gold-loan">Gold Loan</option>
                                    <option value="Commercial-Vehicle-loan">Commercial Vehicle Loan</option>
                                    <option value="Two-Wheeler-loan">Two Wheeler Loan</option>
                                </select>
                            </div>
                        </div>
                        <h3>Contact Information *</h3>
                        <div className="input-content content-1">
                            <label for='' className="label-contents">First Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Firstname} />
                                <input type="text" name='First-Name' required />
                            </div>
                        </div>
                        <div className="input-content content-2">
                            <label for='' className="label-contents">Last Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Lastname} />
                                <input type="text" name='Last-Name' required />
                            </div>
                        </div>
                        <div className="input-content content-3">
                            <label for='' className="label-contents">Gender</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Gender} />
                                <select className="select-form" name='Gender' required>
                                    <option value="">------Select Gender-----</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <h3>Birth Date *</h3>
                        <div className="input-content content-1">
                            <label for='' className="label-contents">Day</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Day} />
                                <input type="number" name='Day' required />
                            </div>
                        </div>
                        <div className="input-content content-2">
                            <label for='' className="label-contents">Month</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Month} />
                                <input type="number" name='Month' required />
                            </div>
                        </div>
                        <div className="input-content content-3">
                            <label for='' className="label-contents">Year</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Year} />
                                <input type="number" name='Year' required />
                            </div>
                        </div>
                        <h3>Marital Status*</h3>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">E-mail</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Email} />
                                <input type="email" name='Email' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Phone Number</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Phonenumber} />
                                <input type="number" name='Phonenumber' value={phoneNumber} onChange={handlePhoneNumberChange} minLength={10} required />
                            </div>
                        </div>
                        <h3>Address of Applicant*</h3>
                        <div className="input-content content-100">
                            <label for='' className="label-contents">Street Address</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Street1} />
                                <input type="text" name='Street' required />
                            </div>
                        </div>
                        <div className="input-content content-100">
                            <label for='' className="label-contents">Street Address Line 2</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Street2} />
                                <input type="text" name='Streetaddress' required />
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
                            <label for='' className="label-contents">State / Province</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={State} />
                                <input type="text" name='State' required />
                            </div>
                        </div>
                        <div className="input-content content-100">
                            <label for='' className="label-contents">Postal / Zip Code</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Zipcode} />
                                <input type="text" name='Zipcode' value={pinCode} onChange={handlepincodeChange} minLength={6} required />
                            </div>
                        </div>
                        {/* <h3>How long have you lived in your given address?</h3>
                        <div className='main-btn'>
                            <div className='radio-btn'>
                                <input type="radio" className='radios' name='0 - 1 year' />
                                <label className="label-contents" for=''>0 - 1 Year</label>
                                <input type="radio" className='radios' name='1 - 2 year' />
                                <label className="label-contents" for=''>1 - 2 Year</label>
                            </div>
                            <div className='radio-btn'>
                                <input type="radio" className='radios' name='3 - 4 year' />
                                <label className="label-contents" for=''>3 - 4 Year</label>
                                <input type="radio" className='radios1' name='5+ year' />
                                <label className="label-contents" for=''>5+ Year</label>
                            </div>
                        </div> */}
                        <h3 className='information-heading'>EMPLOYMENT INFORMATION</h3>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">First Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Firstname} />
                                <input type="text" name='Firstname' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Last Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Lastname} />
                                <input type="text" name='Lastname' required />
                            </div>
                        </div>
                        {/* <h3>Years of experience</h3>
                        <div className='main-btns'>
                            <div className='radio-btn' name='Years of experience'>
                                <input type="radio" className='radios' name='0 - 1 year' />
                                <label className="label-contents" for=''>0 - 1 Year</label>
                                <input type="radio" className='radios' name='1 - 2 year' />
                                <label className="label-contents" for=''>1 - 2 Year</label>
                            </div>
                            <div className='radio-btn'>
                                <input type="radio" className='radios' name='3 - 4 years' />
                                <label className="label-contents" for=''> Year</label>
                                <input type="radio" className='radios1' name='5+ years' />
                                <label className="label-contents" for=''>5+ Year</label>
                            </div>
                        </div> */}
                        <div className="input-content content-50-left">
                            <h3 className='heading-1'>Gross monthly income*</h3>
                            <label for='' className="label-contentss">Income</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Income} />
                                <input type="text" name='Monthly-Income' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <h3 className='heading-2'>Monthly rent/mortgage*</h3>
                            <label for='' className="label-contentss">Rent / mortgage</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Rent} />
                                <input type="text" name='Rent-Mortgage' required />
                            </div>
                        </div>
                        <h3>Down Payment Amount*</h3>
                        <div className="input-content content-100">
                            <label for='' className="label-contents">Payment</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Payment} />
                                <input type="text" name='Street' required />
                            </div>
                        </div>
                        <div className="input-content content-100">
                            <label for='' className="label-contents">Comments</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Comments} />
                                <textarea rows="2" name="Comments" />
                            </div>
                        </div>
                        <h3 className='information-heading'>BANK REFERENCES</h3>
                        <h3>Please List Here *</h3>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Institution Name</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Institution} />
                                <input type="text" name='Institution-Name' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Saving Account #</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Saving} />
                                <input type="text" name='Saving-Account' required />
                            </div>
                        </div>
                        <div className="input-content content-50-left">
                            <label for='' className="label-contents">Address</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Address} />
                                <textarea rows="2" name='Address' required />
                            </div>
                        </div>
                        <div className="input-content content-50-right">
                            <label for='' className="label-contents">Phone number</label>
                            <div className="input-img">
                                <img className="input-imgs" alt="" src={Phonenumber} />
                                <input type="text" name='Phone-Number' value={phoneNumber1} onChange={handlePhoneNumberChanges} minLength={10} required />
                            </div>
                        </div>
                        <h3 className='information-heading'>CONSENT</h3>
                        <div className='chek-box-content'>
                            <p>I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.</p>
                            <div className='chek-box'>
                                <input type="checkbox" name="check1" required />
                                <label for=''>Yes</label>
                            </div>
                        </div>
                        <div className='chek-box-content'>
                            <p>I hereby agree that the information given is true, accurate and complete as of the date of this application submission.</p>
                            <div className='chek-box'>
                                <input type="checkbox" name="check2" required />
                                <label for=''>Yes</label>
                            </div>
                        </div>
                        <input type='submit' value="Submit Now !" className='submit-btn' />
                    </form>
                </div>
            </div>
        </>
    )
}
