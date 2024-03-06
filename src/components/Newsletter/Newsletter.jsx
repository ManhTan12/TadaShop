// import React from 'react'
import { SendOutlined } from '@ant-design/icons';
import "./Newsletter.scss"
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Newsletter</h1>
        <div className='desc'>Get timely updates form your favorite products.</div>
        <div className="newsletter-input">
            <input type="text" placeholder='Your email'/>
            <button><SendOutlined className='icon'/></button>
        </div>
    </div>
  )
}

export default Newsletter