import React from 'react'
import Imageheading from "./loans/Imageheading";
import Testimonialsimg from "../assets/images/testimonials-img.png"
import Testimonials1 from "../assets/images/testimonials1.png"
import Testimonials2 from "../assets/images/testimonials2.png"
import Testimonials3 from "../assets/images/testimonials3.png"
import Testimonials4 from "../assets/images/testimonials4.png"
import Testimonials5 from "../assets/images/testimonials5.png"
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function Testimonials(props) {

    const data = props.banner;

    const settingsslider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };


    return (
        <div className='testimonials-section-main'>
            <Imageheading banner={data} />
            <section className='testimonials-financial-section'>
                <div className='testimonials-financial-content'>
                    <h2 className='main-heading'>Financial Advisors Can Use Client Testimonials to Get Found Online</h2>
                    <p className='testimonials-content-des'>As financial advisors gather reviews from their clients and other acquaintances, these testimonials are displayed on their individual Wealthtender profile pages. Thousands of people who visit wealthtender.com each month can browse online directories featuring advisors with reviews. Prospective clients can then view advisor profile pages, read testimonials, and schedule introductory calls with advisors they’re thinking about hiring.</p>
                    <p className='testimonials-content-des'>To briefly summarize, the rule considers a testimonial any statement by a client about their experience with an advisor, or referral of prospects to an advisor. The rule also has a few important conditions to note:</p>
                    <ul className="testimonials-financial-list">
                        <li className='testimonials-content'>No compensation can be paid for the testimonial.</li>
                        <li className='testimonials-content'>No personal or familial relationships are allowed between the testimonial giver and the office.</li>
                        <li className='testimonials-content'>The testimonial language must be accurate and non-promissory.</li>
                        <li className='testimonials-content'>Testimonial must come from a current client.</li>
                    </ul>
                    <div className='read-btn'>
                        <Link to="/contact" onClick={() => { window.location.href = "/contact"; }}><button className='more-btn'>Read more</button></Link>
                    </div>
                </div>
                <div className='testimonials-financial-img'>
                    <img src={Testimonialsimg} alt='' />
                </div>
            </section>
            <section className='testimonial-section'>
                <div className='testimonial-heading'>
                    <div>
                        <h2 className='heading'>What a customers say</h2>
                    </div>
                    <div className='testimonial-slider-animation'>
                        <div className='testimonial-slider'>
                            <Slider {...settingsslider}>
                                <div className='testimonial-box'>
                                    <div className='box-img'>
                                        <img src={Testimonials1} alt='' />
                                    </div>
                                    <div className='testimonial-content'>
                                        <h3 className='testimonial-name'>"I was nervous about setting up my website, as I am not a savvy computer person. It was surprising how the onboarding process made it painless. The Broadridge support is good; my representative called me once a week as.</h3>
                                        <p className='testimonial-description'>- Carole McNichol</p>
                                    </div>
                                </div>
                                <div className='testimonial-box'>
                                    <div className='box-img'>
                                        <img src={Testimonials2} alt='' />
                                    </div>
                                    <div className='testimonial-content'>
                                        <h3 className='testimonial-name'>"Broadridge's websites look terrific! They made it very easy for me to get up and running fast, and make it so convenient to get everything through compliance. It is well worth the price!"</h3>
                                        <p className='testimonial-description'>-Kalvin Sid, Sid Financial</p>
                                    </div>
                                </div>
                                <div className='testimonial-box'>
                                    <div className='box-img'>
                                        <img src={Testimonials3} alt='' />
                                    </div>
                                    <div className='testimonial-content'>
                                        <h3 className='testimonial-name'>"Our relationship with Broadridge has been invaluable. It's refreshing to have a partnership with a company that not only offers the most innovative marketing solutions, but truly values our advisors and their practice."</h3>
                                        <p className='testimonial-description'>- Office Representative</p>
                                    </div>
                                </div>
                                <div className='testimonial-box'>
                                    <div className='box-img'>
                                        <img src={Testimonials4} alt='' />
                                    </div>
                                    <div className='testimonial-content'>
                                        <h3 className='testimonial-name'>"The enhancements Broadridge has made to their marketing solutions are the perfect ingredients for an effective tool advisors need. They have hit the mark by taking the best from Emerald and Forefield to create some powerful, new offerings."</h3>
                                        <p className='testimonial-description'>Summit Brokerage Services</p>
                                    </div>
                                </div>
                                <div className='testimonial-box'>
                                    <div className='box-img'>
                                        <img src={Testimonials5} alt='' />
                                    </div>
                                    <div className='testimonial-content'>
                                        <h3 className='testimonial-name'>"Since purchasing a Broadridge website, I have had a large amount of success pertaining to new clients and prospects. They have described my website as very professional and high-end, using it as a resource to help guide their financial needs.</h3>
                                        <p className='testimonial-description'>- Natacha Smith</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
