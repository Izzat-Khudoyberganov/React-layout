import React from "react";
import "./style.css";

import hero from "../../../assets/image/hero.png";

const HeaderInfo = () => {
    return (
        <div className='header-info'>
            <div className='container'>
                <div className='content'>
                    <div className='content-img'>
                        <img src={hero} alt='hero' />
                    </div>
                    <div className='content-info'>
                        <span className='subtitle'>heart it. feel it</span>
                        <h1 className='main-title'>moce width the music</h1>
                        <div className='price-box'>
                            <span className='discount-price'>$ 435</span>
                            <span className='old-price'>$ 465</span>
                        </div>
                        <button className='button btn-light'>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;
