import React from 'react'
import Imageheading from "./loans/Imageheading";
import Insurancesection from './Insurance/Insurancesection';
import { Link } from 'react-router-dom';

export default function Incometax(props) {

  const data = props.banner;

  const content = props.content;

  return (
    <div className='insurance-page'>
      <Imageheading banner={data} />
      <Insurancesection content={content} />
      <div className='apply-now'>
        <Link to='/consultantform' onClick={() => { window.location.href = "/consultantform"; }}><button className='apply-now-btn'>Apply now for Income tax return</button></Link>
      </div>
    </div>
  )
}