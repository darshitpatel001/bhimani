import React from 'react'
import Imageheading from "./loans/Imageheading"
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';
import Technicalinstitutionicon from "../assets/images/technical-institutions-icon.png"
import Institutionnationalicon from "../assets/images/institutions-national-icon.png"
import Accreditedinstitutionicon from "../assets/images/accredited-institutions-icon.png"
import Nbacoursesicon from "../assets/images/nba-courses-icon.png"

export default function Subsidy(props) {

  const data = props.banner;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  const subsidysliderdata = [
    {
      icon: Technicalinstitutionicon,
      heading: "Centrally funded technical institutions",
      description: "The technical education system in the country can be broadly classified into three categories – Central Government funded institutions, State Government/State-funded institutions & Self-financed institutions."
    },
    {
      icon: Institutionnationalicon,
      heading: "Institutions of national importance",
      description: "An Institute of National Importance, in India is defined as one which serves as a pivotal player in developing highly skilled personnel within the specified region of the country/state."
    },
    {
      icon: Accreditedinstitutionicon,
      heading: "NAAC accredited universities/institutions",
      description: "The University Grants Commission (UGC) created the council in 1994. The operation of higher education institutions in India requires NAAC accreditation. In particular, state universities that are not NAAC accredited."
    },
    {
      icon: Nbacoursesicon,
      heading: "NBA recognized professional courses",
      description: "Individuals, courses, and institutions are not accredited. NBA only accredits programs in Engineering, Computer Application, Pharmacy, Management, Hotel Management and Catering Technology."
    }
  ]

  const faqsdata = [
    {
      heading: "What is Bhimani Advisors Finance",
      description: "Bhimani Finance Private Limited was an unlisted private company incorporated on 30 December, 1987. It is classified as a private limited company and is located in , Gujarat. It's authorized share capital was INR 1.00 lac and the total paid-up capital was INR 220.00 . The current status of Bhimani Finance Private Limited is - Strike Off. The last reported AGM (Annual General Meeting) of Bhimani Finance Private Limited, per our records, was held on 29 September, 1995. The Corporate Identification Number (CIN) of Bhimani Finance Private Limited is U65910GJ1987PTC010233. The registered office of Bhimani Finance Private Limited was at 10-B G-2 SATTAR TALUKA SOCIETYOPP.HIGH COURT.AHMEDABAD. , Gujarat. The status of the company is now Strike Off."
    },
    {
      heading: "Is adviser British spelling?",
      description: "There is a somewhat popular myth that circulates around that adviser is the preferred spelling in British English and advisor is the preferred spelling in American English. This is not true; in both British and American English, the traditional spelling adviser predominates."
    },
    {
      heading: "How do you spell tution in India?",
      description: "Advisor and adviser are both nouns, and they refer to one that advises, such as a person or firm that offers official or professional advice to clients.Advisor and adviser are both nouns, and they refer to one that advises, such as a person or firm that offers official or professional advice to clients.Advisor and adviser are both nouns, and they refer to one that advises, such as a person or firm that offers official or professional advice to clients.Advisor and adviser are both nouns, and they refer to one that advises, such as a person or firm that offers official or professional advice to clients.Advisor and adviser are both nouns, and they refer to one that advises, such as a person or firm that offers official or professional advice to clients."
    },
    {
      heading: "What is the full spelling of education?",
      description: "The act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgment, and generally of preparing oneself or others intellectually for mature life. the act or process of imparting or acquiring particular knowledge or skills, as for a profession."
    },
    {
      heading: "What is the correct spelling for Centre?",
      description: "Depending on your answer, you may differ on which spellings you favor. Center and centre have the same meaning. Center is the correct spelling in American English, while in British English, centre is correct."
    },
    {
      heading: "Which is correct metre or meter?",
      description: "Meter and metre are both English terms. Meter is predominantly used in American (US) English ( en-US ) while metre is predominantly used in British English (used in UK/AU/NZ) ( en-GB ).The spelling varies based on whether you're writing UK or US English. In UK English, “theatre” is standard. In US English, “theater” is more common.28-Sept-2022The spelling varies based on whether you're writing UK or US English. In UK English, “theatre” is standard. In US English, “theater” is more common.28-Sept-2023The spelling varies based on whether you're writing UK or US English. In UK English, “theatre” is standard. In US English, “theater” is more common.28-Sept-2024The spelling varies based on whether you're writing UK or US English. In UK English, “theatre” is standard. In US English, “theater” is more common.28-Sept-2025"
    },
  ]

  return (
    <div className='subsidy-page'>
      <Imageheading banner={data} />
      <section className='subsidy-slider'>
        <h1 className='heading'>Eligible Applicants/Institutions</h1>
        <p className='description'>All the students where the annual family income from all the sources does not exceed Rs. 4.5 lakhs per annum. Students who want to pursue Technical/Professional courses in NAAC, NBA, CFTI accredited or regulatory approved institutes in India.</p>
        <Slider {...settings}>
          {
            subsidysliderdata && subsidysliderdata.map((value, index) => {
              return (
                <div className={`subsidy-eligible-box box-${index}`}>
                  {/* className={'subsidy-eligible-box' + ' box-' + index} */}
                  <div className='icon-text-box'>
                    <img src={value.icon} alt='' />
                    <h4 className='box-heading'>{value.heading}</h4>
                  </div>
                  <p className='box-description'>{value.description}</p>
                </div>
              )
            })
          }
        </Slider>
      </section>
      <section className='faqa-section'>
        <h2 className='heading'>Frequently Asked Question</h2>
        <Accordion alwaysOpen>
          {
            faqsdata && faqsdata.map((value, index) => {
              return (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{value.heading}</Accordion.Header>
                  <Accordion.Body>{value.description}</Accordion.Body>
                </Accordion.Item>
              )
            })
          }
        </Accordion>
      </section>
    </div>
  )
}
