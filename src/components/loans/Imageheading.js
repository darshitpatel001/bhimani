import React from 'react'

export default function Loanheading(props) {

    const data = props.banner;

    return (
        <>
            <div className="loan-heading">
                <img alt='' src={data.imgurl} />
                <h1 className='loan-contant gst-return commercial-loan'>{data.heading}</h1>
            </div>
        </>
    )
}
