import React from 'react'
import Imageheading from './loans/Imageheading'
import Featuresection from './loans/Featuresection'
import Loaninquiry from './loans/Loaninquiry'

export default function Twowheelerloan(props) {

    const data = props.banner;

    const bannerContent = props.bannerContent;

    const inquiryContent = props.inquiryContent;

    return (
        <>
            <Imageheading banner={data} />
            <Featuresection bannerContent={bannerContent} />
            <Loaninquiry inquiryContent={inquiryContent} />
        </>
    )
}
