import React from 'react'

export default function Insurancesection(props) {

  const content = props.content;
  const contentdescriptionlist = content.description;
  const contentlist = content.list;

  return (
    <div className='insurance-section'>
      <div className='insurance-img'>
        <img src={content.imgurl} alt='' />
      </div>
      <div className='insurance-content'>
        <h3 className='insurance-heading'>{content.heading}</h3>
        {
          contentdescriptionlist && contentdescriptionlist.map((value, index) => {
            return (
              <p className='insurance-description'>{value.descriptionlist}</p>
            )
          })
        }
        <h5 className='insurance-sub-heading'>{content.subheading}</h5>
        <ul className='insurance-benefits-list'>
          {
            contentlist && contentlist.map((value, index) => {
              return (
                <li>{value.listcontent}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}