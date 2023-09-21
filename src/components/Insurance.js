import React from 'react'
import Imageheading from "./loans/Imageheading"
import Generalinsuranceicon from "../assets/images/general-insurance-icon.png"
import Lifeinsuranceicon from "../assets/images/life-insurance-icon.png"
import Benefitsinsuranceicon from "../assets/images/benefits-insurance-icon.png"
import Insurancebenefitsimg from "../assets/images/insurance-work-benefits-img.png"
import Insurancelifeicon from "../assets/images/insurance-life-icon.png"
import Wealthbonusicon from "../assets/images/wealth-bonus-icon.png"
import { Link } from 'react-router-dom';

export default function Insurance(props) {

    const data = props.banner;

    const Benefitsinsurancedata = [
        {
            img: Benefitsinsuranceicon,
            heading: "Cover Against Uncertainty",
            description: "This is one of the main advantages of having the right insurance policy. Insurance policies protect the insured against any potential loss. Buying the right insurance policy is the best way to protect yourself from the uncertainties of life."
        },
        {
            img: Benefitsinsuranceicon,
            heading: "Cash Flow Management",
            description: "Having to cover the losses out of one‘s own pocket can significantly impact cash flow management. However, the right insurance policy can help you tackle such problems. The insurance provider."
        },
        {
            img: Benefitsinsuranceicon,
            heading: "Investment Opportunities",
            description: "Unit Linked Insurance Plans invest a portion of the premium payments into various market linked investment funds. This way, you can build an investment portfolio while also getting a proper investment cover."
        },
        {
            img: Benefitsinsuranceicon,
            heading: "Tax Benefits",
            description: "Purchasing an insurance plan has various tax benefits. The premium payments you make for the insurance policy are exempt from income tax. Section 80C, 80D, and 10(10D) of the Income Tax Act detail all the tax benefits of an insurance policy."
        }
    ]

    return (
        <div className='insurance-page'>
            <Imageheading banner={data} />
            <section className='insurance-main-section'>
                <h1 className='heading'>What is Insurance?</h1>
                <p className='description'>An insurance policy can be defined as a contract between an insurance provider and a policyholder. Under this contract, the policyholder makes regular payments to the insurance company in return for a hedge against sudden financial or health risks. Depending on the terms and conditions laid down in the policy, the insurance company pays out a lump sum amount as reimbursement to the insured in the event of a claim.</p>
                <div className='insurance-box'>
                    <div className='box'>
                        <div className='box-img'>
                            <img src={Generalinsuranceicon} alt='' />
                        </div>
                        <h4 className='box-heading'>General Insurance</h4>
                        <p className='box-description'>General Insurance is a leading general insurance company in India. Buy & Renew different insurance policies such as Health, Bike, Motor, Travel & more ...</p>
                    </div>
                    <div className='box'>
                        <div className='box-img'>
                            <img src={Lifeinsuranceicon} alt='' />
                        </div>
                        <h4 className='box-heading'>Life Insurance</h4>
                        <p className='box-description'>At its core, life insurance is a financial benefit for possible contingencies linked to human life. These include death, disability, or retirement. When these ...</p>
                    </div>
                </div>
            </section>
            <section className='benefits-insurance-section'>
                <h3 className='heading'>Benefits of Buying Insurance</h3>
                <p className='description'>Purchasing an insurance policy has numerous benefits for the individual. It provides a cover against unforeseen financial losses and helps create a fund for life after superannuation. Given below are some of the other benefits of an insurance policy:</p>
                <div className='benefits-boxes'>
                    {
                        Benefitsinsurancedata && Benefitsinsurancedata.map((value, index) => {
                            return (
                                <div className={`box-content box-${index}`}>
                                    {/* className={'box-content' + ' box-' + index} */}
                                    <div className='box-img'>
                                        <img src={value.img} alt='' />
                                    </div>
                                    <h5 className='box-heading'>{value.heading}</h5>
                                    <p className='box-description'>{value.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='insurance-work-section'>
                <h1 className='heading'>How Does Insurance Work?</h1>
                <p className='description'>Insure your life with Lifegood and we’ll match up to 100% og your premium in an investment - at no extra cost.</p>
                <div className='insurance-work-content'>
                    <div className='insurance-work-img'>
                        <img src={Insurancebenefitsimg} alt='' />
                        <div className='wealth-bonus-box'>
                            <img src={Wealthbonusicon} alt='' />
                            <h6 className='wealth-bonus-percent'>75%</h6>
                            <p className='wealth-bonus-title'>Wealth Bonus</p>
                        </div>
                    </div>
                    <div className='insurance-work-benefits'>
                        <div className='insurance-work-box'>
                            <div className='box-img'>
                                <img src={Insurancelifeicon} alt='' />
                            </div>
                            <h4 className='box-heading'>Insurance  Your Life</h4>
                            <p className='box-description'>Insurance your life with Lifegood and get a lot of advantages .contingencies linked to human life. These include death, disability, or retirement. When these ...</p>
                            <Link to="/insurance" onClick={() => { window.location.href = "/insurance"; }}><button className='box-button'>Read More</button></Link>
                        </div>
                        <div className='insurance-work-box'>
                            <div className='box-img'>
                                <img src={Benefitsinsuranceicon} alt='' />
                            </div>
                            <h4 className='box-heading'>Get Wealth Bonus</h4>
                            <p className='box-description'>Your Wealth Bonus grows with your premiums and with the market . contingencies linked to human life. These include death, disability, or retirement. When these ...</p>
                            <Link to='/appointmentform' className='appointment' onClick={() => { window.location.href = "/appointmentform"; }}><button className='box-button'>Apply more</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
