import React, { useState } from 'react';
import Imageheading from "./loans/Imageheading";
import Mapicon from "../assets/images/map-icon.png"
import Emailicon from "../assets/images/email-icon.png"
import Phoneicon from "../assets/images/phone-icon.png"


export default function Contect(props) {
    const data = props.banner;
    const Benefitsinsurancedata = [
        {
            img: Mapicon,
            heading: "228-229, Super Diamond Market, Mini Bazar, Varachha Road , Surat."
        },
        {
            img: Emailicon,
            heading: "rbhimani_co@yahoo.com"
        },
        {
            img: Phoneicon,
            heading: "+91 98985 01106",
            number: "+91 90330 41505"
        }
    ]

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value;

        const numericPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

        if (numericPhoneNumber.length <= 10) {
            setPhoneNumber(numericPhoneNumber);
        }
    };
    return (
        <div className='conntact-main-section'>
            <Imageheading banner={data} />
            <div className='working-together'>
                <h3 className='heading'>Let’s Start WorkingTogether. Get in Touch</h3>
                <p className='description'>If you have queries then please feel free to drop me a message.</p>
                <div className='contact-boxes'>
                    {
                        Benefitsinsurancedata && Benefitsinsurancedata.map((value, index) => {
                            return (
                                <div className={`box-content box-contents box-${index}`}>
                                    {/* className={'box-content box-contents' + ' box-' + index} */}
                                    <div className='box-img'>
                                        <img src={value.img} alt='' />
                                    </div>
                                    <p className='box-description'>{value.heading}</p>
                                    <p className='box-description'>{value.number}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='main-contect-form'>
                <div className='main-contect'>
                    <h3>Drop Us Message For Any Query</h3>
                    <p>Get in touch with our experts to turn your idea into reality.</p>
                </div>
                <div className='contact-us-content'>
                    <h2 className='heading'>MESSAGE US</h2>
                    <form action="https://formspree.io/f/mjvqarod"
                        method="POST" target="_blank" className='contact-form' >
                        <label className='first-name'>Your Name<input type='text' name='First-Name' required /></label>
                        <label className='phone-number'>Your Phone<input type='number' name='Phone-Number' value={phoneNumber} onChange={handlePhoneNumberChange} minLength={10} /></label>
                        <label className='subject'>Your Subject<input type='text' name='Subject' required /></label>
                        <label className='message'>Message<textarea rows="4" name='Message' required /></label>
                        <input type='submit' value="SEND MY MESSAGE" className='submit-btn' />
                    </form>
                </div>
            </div>
        </div>


    )
}
