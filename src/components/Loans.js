import React from 'react'
import Imageheading from "./loans/Imageheading"
import Loansimg from "../assets/images/loans-roals.png"
import Businessloan from '../assets/images/b-loan.png'
import Studentloan from '../assets/images/s-1.png'
import Personalloan from '../assets/images/p-1.png'
import Carloan from '../assets/images/c-1.png'
import { Link } from 'react-router-dom'
export default function Loans(props) {

    const data = props.banner;

    const financialdata = [
        {
            heading: "One Stop Shop for Multiple Products:",
            description: "Looking for a personal, home or car loan? Bhimani offers multiple competent choices in each case, based on your specific requirements."
        },
        {
            heading: "Lowest Interest Rates:",
            description: "Our association with market leaders like HDFC Bank and Axis Bank help us score the lowest interest rates on personal, car or home loans for you."
        },
        {
            heading: "Get Instant Quotes:",
            description: "Filling up a simple online form helps us evaluate the perfect loan options for you. Rather than spending a substantial amount."
        },
        {
            heading: "Simple Online Comparison:",
            description: "Various parameters are in play when loans are compared against each other for your specific suitability- rate of 4."
        },
        {
            heading: "Transparent Workings:",
            description: "Bhimani isn’t a mediator, a promoter or in cahoots with any bank. Our assessment of the available loan options for you is always impartial and objective"
        },
        {
            heading: "Privacy:",
            description: "We treat your personal information with the highest of regards. The information you provide is only shared a third party for any reason whatsoever."
        }
    ]

    const loansdata = [
        {
            img: Businessloan,
            heading: "Business Loan",
            description: "Grow your business with minimum documentation & quick approvals",
            content: "Business loans are financial products designed to provide capital to businesses for various and more. The features of a business loan.",
            link: "/business-loan"
        },
        {
            img: Personalloan,
            heading: "Personal Loan",
            description: "Avail personal  holiday, home renovation & marriage at attractive interest rates",
            content: "Personal loans are a type of unsecured loan that individuals can borrow from banks, credit unions, or online lenders for various purposes",
            link: "/personal-loan"
        },
        {
            img: Studentloan,
            heading: "Student Loan",
            description: "Loans available for a variety of courses with easy loan disbursal",
            content: "Student loans are financial tools designed to help individuals pay for their education, including tuition, books, and living expenses.",
            link: "/student-loan"
        },
        {
            img: Carloan,
            heading: "Used Car Loan",
            description: "Benefit for from a high Loan To Value ratio",
            content: "Used car loans, also known as pre-owned car loans, are financial products designed to help individuals purchase a used or second-hand vehicle.",
            link: "/car-loan"
        }
    ]


    return (
        <div className='main-loan-page'>
            <Imageheading banner={data} />
            <section className='main-loan-section'>
                <h1 className='heading'>The Many Roles of a Financial Advisor.</h1>
                <p className='description'>These plans include not only investments but also savings, budget, insurance, and tax strategies.You do not need to be wealthy to benefit from the services of a financial advisor.</p>
                <img src={Loansimg} alt='' className='tax-img' />
                <div className='financial-section'>
                    {
                        financialdata && financialdata.map((value, index) => {
                            return (
                                <div className='financial-box'>
                                    <div className='box-content'>
                                        <li className='box-heading'>{value.heading}</li>
                                        <p className='box-description'>{value.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className='loan-section'>
                <h3 className='heading'>Benefits of Buying Insurance</h3>
                <p className='description'>Purchasing an insurance policy has numerous benefits for the individual. It provides a cover against unforeseen financial losses and helps create a fund for life after superannuation. Given below are some of the other benefits of an insurance policy:</p>
                <div className='loan-boxes'>
                    {
                        loansdata && loansdata.map((value, index) => {
                            return (
                                <div className={`box-contents box${index}`}>
                                    {/* className={'box-contents' + ' box' + index} */}
                                    <div className='box-img'>
                                        <img src={value.img} alt='' />
                                    </div>
                                    <h5 className='box-heading'>{value.heading}</h5>
                                    <p className='box-description'>{value.description}</p>
                                    <li>Features</li>
                                    <p className='box-content'>{value.content}</p>
                                    <Link to={value.link}>
                                        <button className='btn'>Explore More</button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
