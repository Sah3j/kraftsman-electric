import React, { useState } from 'react'
import './QuoteForm.css'
import { GrDocumentText } from 'react-icons/gr'
import { CgSmartphone } from 'react-icons/cg'
import { MdOutlineMailOutline } from 'react-icons/md'

function QuoteForm() {

  return (
    <div className='card'>
				<h2 className='card-title'>GET A FREE QUOTE TODAY</h2>
				<div className='card-content'>
					<p className='card-phone'><a href="tel:+17788831313"><span className='phone'><CgSmartphone size={25} style={{verticalAlign: 'middle'}}/>(778) 883-1313</span></a></p>
					<p className='card-email'><a href="mailto:kelectric17@gmail.com"><span className='phone'><MdOutlineMailOutline size={25} style={{verticalAlign: 'middle'}}/>kelectric17@gmail.com</span></a></p>
				</div>
    </div>
  )
}

export default QuoteForm