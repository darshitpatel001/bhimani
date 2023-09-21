import React from 'react'
import Imageheading from "./loans/Imageheading";
import gstfeaturebenefitsicon1 from "../assets/images/gst-feature-benefits-icon-1.png"
import gstfeaturebenefitsicon2 from "../assets/images/gst-feature-benefits-icon-2.png"
import gstfeaturebenefitsicon3 from "../assets/images/gst-feature-benefits-icon-3.png"
import gstfeaturebenefitsicon4 from "../assets/images/gst-feature-benefits-icon-4.png"
import gstfeaturebenefitsicon5 from "../assets/images/gst-feature-benefits-icon-5.png"
import gstfeaturebenefitsicon6 from "../assets/images/gst-feature-benefits-icon-6.png"
import gstfeaturebenefitsicon7 from "../assets/images/gst-feature-benefits-icon-7.png"
import gstfeaturebenefitsicon8 from "../assets/images/gst-feature-benefits-icon-8.png"
import gstfeaturebenefitsicon9 from "../assets/images/gst-feature-benefits-icon-9.png"
import gstfeaturebenefitsicon10 from "../assets/images/gst-feature-benefits-icon-10.png"
import gstfeaturebenefitsicon11 from "../assets/images/gst-feature-benefits-icon-11.png"
import gstfeaturebenefitsicon12 from "../assets/images/gst-feature-benefits-icon-12.png"
import { Link } from 'react-router-dom';

export default function Gstreturn(props) {

    const data = props.banner;

    const featurebenefitsdata = [
        {
            img: gstfeaturebenefitsicon1,
            heading: "GST Tax filing",
            description: "Ten steps to file GST return online · Ensure that you are registered."
        },
        {
            img: gstfeaturebenefitsicon2,
            heading: "Export",
            description: "A product or service that is created in one nation but sold to a buyer.."
        },
        {
            img: gstfeaturebenefitsicon3,
            heading: "Import",
            description: "The meaning of IMPORT is to bring from a foreign or external source."
        },
        {
            img: gstfeaturebenefitsicon4,
            heading: "ECommerce",
            description: "all online activity that involves the buying and selling of products services."
        },
        {
            img: gstfeaturebenefitsicon5,
            heading: "Online selling",
            description: "We ensure that your gold is safe & secure"
        },
        {
            img: gstfeaturebenefitsicon6,
            heading: "Compliance",
            description: "The meaning of COMPLIANCE is the act or process of complying to a desire."
        },
        {
            img: gstfeaturebenefitsicon7,
            heading: "Planning",
            description: "Planning is the process of thinking regarding the activities required to.."
        },
        {
            img: gstfeaturebenefitsicon8,
            heading: "ISD",
            description: "The full form of ISD is International Subscriber Dialing. ISD,"
        },
        {
            img: gstfeaturebenefitsicon9,
            heading: "Business Tax Architecture",
            description: "Business activity crosses national borders, the question arises as to where the profits "
        },
        {
            img: gstfeaturebenefitsicon10,
            heading: "Recommendations.",
            description: "a suggestion or proposal as to the best course of action, especially one put."
        },
        {
            img: gstfeaturebenefitsicon11,
            heading: "GST Tax filing",
            description: "Ensure that you are registered under GST and have the 15-digit GST"
        },
        {
            img: gstfeaturebenefitsicon12,
            heading: "Letter of Undertaking",
            description: "Ten steps to file GST return online · Ensure that you are registered."
        }
    ]

    return (
        <div className='gst-return-page'>
            <Imageheading banner={data} />
            <section className='gst-return-section'>
                <h1 className='heading'>GST Return Filing Process</h1>
                <p className='description'>The government has been making strides towards innovation and automation and has instituted facilities for the online filing of returns under GST on the government’s GST portal, through the Goods and Service Tax Network (GSTN).</p>
                <h5 className='sub-heading'>Gold Loan Features and Benefits</h5>
                <div className='feature-benefits'>
                    {
                        featurebenefitsdata && featurebenefitsdata.map((value, index) => {
                            return (
                                <div className={`feature-benefits-box box-${index}`}>
                                    {/* className={'feature-benefits-box'+' box-'+ index} */}
                                    <img src={value.img} alt='' />
                                    <div className='feature-benefits-content'>
                                        <h6 className='feature-benefits-heading'>{value.heading}</h6>
                                        <p className='feature-benefits-description'>{value.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Link to="/consultantform" onClick={() => { window.location.href = "/consultantform"; }} ><input type='submit' value="Apply now for gst return" className='submit-btn' /></Link>
                </div>
            </section>
        </div>
    )
}
