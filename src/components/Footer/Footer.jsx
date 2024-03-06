// import React from 'react'
import "./Footer.scss"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, GoogleOutlined, HeatMapOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="left">
            <h1 className="logo">
                TADA SHOP
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quia rem repudiandae, debitis, similique aliquam unde facilis 
                iste sunt nihil quidem recusandae, quo eligendi odio asperiores 
                atque totam tempore eum consectetur!
            </p>
            <div className="iconContainer">
                <div className="icon" style={{backgroundColor:'#3B5999'}}>
                    <FacebookOutlined className="icon-w"/>
                </div>
                <div className="icon" style={{backgroundColor:'#E4405F'}}>
                <InstagramOutlined className="icon-w"/>
                </div>
                <div className="icon" style={{backgroundColor:'#55ACEE'}}>
                <TwitterOutlined className="icon-w"/>
                </div>
                <div className="icon" style={{backgroundColor:'#F7EFE5'}}>
                <GoogleOutlined className="icon-w"/>
                </div>
            </div>

        </div>
        <div className="center">
            <h3 className="title">Usefull Links</h3>
            <ul className="list">
                <li className="listItem">Home</li>
                <li className="listItem">Man fashion</li>
                <li className="listItem">Accessoress</li>
                <li className="listItem">Order Tracking</li>
                <li className="listItem">Wishlist</li>
                <li className="listItem">Cart</li>
                <li className="listItem">Women fashion</li>
                <li className="listItem">My account</li>
                <li className="listItem">WishLisst</li>
                <li className="listItem">Terms</li>
            </ul>
        </div>
        <div className="right">
            <h3 className="title">Contact</h3>
            <div className="contactItem">
            <HeatMapOutlined /> <p>622 DixiPark,  South Arsenal 98336</p>
            </div>
            <div className="contactItem">
            <PhoneOutlined /> <p>+1 234 567 </p>
            </div>
            <div className="contactItem">
            <MailOutlined /> <p>tada@gmail.com.tan</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer