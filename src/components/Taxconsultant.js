import React from 'react'
import Imageheading from "./loans/Imageheading"
import Industriesicon from "../assets/images/industries-icon.png"
import Technologyicon from "../assets/images/technology-icon.png"
import Healthcareicon from "../assets/images/healthcare-icon.png"
import Retailicon from "../assets/images/retail-icon.png"
import Entertainmenticon from "../assets/images/entertainment-icon.png"
import Educationicon from "../assets/images/education-icon.png"
import Taxconsultantimg from "../assets/images/experience-client-img.png"
import Taximg1 from "../assets/images/tax-services-img-1.png"
import Taximg2 from "../assets/images/tax-services-img-2.png"
import Taximg3 from "../assets/images/tax-services-img-3.png"
import Taximg4 from "../assets/images/tax-services-img-4.png"

export default function Taxconsultant(props) {

  const data = props.banner;

  const experienceclientdata = [
    {
      img: Industriesicon,
      heading: "Industries",
      description: "group of productive enterprises or organizations that produce or supply goods, services, or sources of income. In economics."
    },
    {
      img: Technologyicon,
      heading: "Technology",
      description: "Technology is the application of knowledge for achieving practical goals in a reproducible way. The word technology can also"
    },
    {
      img: Healthcareicon,
      heading: "Healthcare",
      description: "Healthcare technology is any technology, including medical devices, IT systems, algorithms, artificial, cloud and blockchain, designed to ..."
    },
    {
      img: Retailicon,
      heading: "Retail",
      description: "Retail is the sale of goods and services to consumers, in contrast to wholesaling, which is sale to business or institutional customers"
    },
    {
      img: Entertainmenticon,
      heading: "Entertainment",
      description: "Gravida vulputate aliquet tempor sitam neque sed pretium non urna sed etid aenean haretra quam placerat."
    },
    {
      img: Educationicon,
      heading: "Education",
      description: "Education is the transmission of knowledge, skills, and character traits. There are many debates about its precise definition"
    }
  ]

  const taxservicesdata = [
    {
      img: Taximg1,
      heading: "Individual Tax",
      description: "Aenean haretra quam adipiscing senectus penatibus aliqadipiscing elementum aliquet eget sene"
    },
    {
      img: Taximg2,
      heading: "Business Tax",
      description: "Tax calculated on domestic company/ 2 % of tax calculated on foreign company as per above rates."
    },
    {
      img: Taximg3,
      heading: "Accounting",
      description: "the process of recording financial transactions pertaining to a business. The accounting process includes summarizing."
    },
    {
      img: Taximg4,
      heading: "Incorporation",
      description: "Incorporation is the formation of a new corporation. The corporation may be a business, a nonprofit organization."
    }
  ]

  return (
    <div className='tax-consultant-page'>
      <Imageheading banner={data} />
      <section className='tax-consultant-client-section'>
        <h1 className='heading'>We Match Our Clients With A Consultant Whose Experience</h1>
        <p className='description'>Aenean haretra quam placerat adipiscing penatibus aliquam adipiscing gravida elementum aliquet eget senectus felis enim diam molestie.</p>
        <img src={Taxconsultantimg} alt='' className='tax-img' />
        <div className='experience-section'>
          {
            experienceclientdata && experienceclientdata.map((value, index) => {
              return (
                <div className='experience-box'>
                  <div className='box-icon'>
                    <img src={value.img} alt='' />
                  </div>
                  <div className='box-content'>
                    <h5 className='box-heading'>{value.heading}</h5>
                    <p className='box-description'>{value.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className='tax-services-section'>
        <h2 className='heading'>Our Tax Services</h2>
        <p className='description'>Aenean haretra quam placerat adipiscing penatibus aliquam adipiscing gravida elementum aliquet eget senectus felis enim diam molestie.</p>
        <div className='tax-services-box'>
          {
            taxservicesdata && taxservicesdata.map((value, index) => {
              return (
                <div className='box'>
                  <img src={value.img} alt='' />
                  <div className='box-content'>
                    <h5 className='box-heading'>{value.heading}</h5>
                    <p className='box-description'>{value.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
