import React from 'react'

export default function Featuresection(props) {

    const bannerContent = props.bannerContent;

    const featureboxcontent = bannerContent.featureBoxContent;

    return (
        <div className='two-wheeler-loan'>
            <div className='two-loan-content'>
                <h2>{bannerContent.mainHeading}</h2>
                <p>{bannerContent.description}</p>
                <h4>{bannerContent.heading}</h4>
            </div>
            <div className="Twowheeler-container">
                <div className='row'>
                    {
                        featureboxcontent && featureboxcontent.map((value, index) => {
                            return (
                                <div className="col-md-4">
                                    <div className={`main-interest box-${index}`}>
                                        {/* className={'main-interest'+' box-'+ index} */}
                                        <div className='interest-img'>
                                            <img alt='' src={value.featureImg} />
                                        </div>
                                        <div className='interest-content'>
                                            <h5>{value.featureHeading}</h5>
                                            <h6>{value.featureDescription}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
