import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Loaninquiry(props) {

    const inquiryContent = props.inquiryContent;

    const inquiry = inquiryContent.inquiry;

    console.log(inquiryContent)
    console.log(inquiry)

    return (
        <div className='loan-inquiry'>
            <div className='main-loan-inquiry'>
                <div className='loan-inquiry-content'>
                    <h3>{inquiryContent.mainHeading}</h3>
                    <div className='inquiry-box'>
                        <div className='inquiry-content'>
                            {
                                inquiry && inquiry.map((value, index) => {

                                    return (
                                        <div className={'loan-content content-'+index}>
                                            <h6>{value.title}</h6>
                                            <p>{value.description}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className='click-now'>
                               <Link to='/allform' onClick={() => { window.location.href = "/allform";}}><Button className='click-now-btn'>{inquiryContent.btnName}</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
