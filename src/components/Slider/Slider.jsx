// import React from 'react'
import { useState } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import "./Slider.scss";
//import { sliderItems } from '../../data';
const Slider = () => {

    const sliderItems = [
        {
            id: 1,
            img: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-fdfhj9uzfflve3",
            title: "SUMMER SALE",
            desc: "DONT COMPROMISE ON STYLE! GET FAIL 30% OFF FOR NEW ARRIVALS. ",
            col: ""
        },
        {
            id: 2,
            img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln85eu6hs84z07",
            title: "Winter SALE",
            desc: "DONT COMPROMISE ON STYLE! GET FAIL 30% OFF FOR NEW ARRIVALS. ",
            col: ""
        },
        {
            id: 3,
            img: "https://down-vn.img.susercontent.com/file/1829f08595261855ded7c33034ed3d48",
            title: "Popular SALE",
            desc: "DONT COMPROMISE ON STYLE! GET FAIL 30% OFF FOR NEW ARRIVALS. ",
            col: ""
        }
    ]

    const [currentSlider, setCurrentSlider] = useState(0);


    const prevSlider = () => {
        setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlider = () => {
        setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
    }
    return (
        <div className="slider">
            <div className="arrow-left" onClick={() => { prevSlider() }}>
                <CaretLeftOutlined />
            </div>
            <div className="slider-wapper 1" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {
                    sliderItems.map((item) =>
                    (
                        <div className="slider-container" key={item.id}>
                            <div className="slider-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="slider-info">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button>SHOW NOW</button>
                            </div>
                        </div>
                    ))
                }

                {/* <div className="slider-container">
                <div className="slider-img">
                    <img src={sliderItems.img[1]} alt="" />
                </div>
                <div className="slider-info">
                    <h1>{sliderItems.title[1]}</h1>
                    <p>{sliderItems.desc[1]}</p>
                    <button>SHOW NOW</button>
                </div>
            </div>

            <div className="slider-container">
                <div className="slider-img">
                    <img src={sliderItems.img[2]} alt="" />
                </div>
                <div className="slider-info">
                    <h1>{sliderItems.title[2]}</h1>
                    <p>{sliderItems.desc[2]}</p>
                    <button>SHOW NOW</button>
                </div>
            </div> */}
            </div>
            {/* <div className="slider-wapper 2">
            
        </div>
        <div className="slider-wapper 3">
            
        </div> */}
            <div className="arrow-right" onClick={() => { nextSlider() }}>
                <CaretRightOutlined />
            </div>
        </div>
    )
}

export default Slider