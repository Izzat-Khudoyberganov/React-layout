import React from "react";
import Title from "../Title";
import headphoneData from "../../data";
import "./style.css";

import headphone from "../../assets/image/headphone.png";

const Headphones = () => {
    return (
        <section className='headphone-wrapper'>
            <div className='container'>
                <div className='content'>
                    <div className='headphone-info'>
                        <Title
                            text={
                                "Good headphones and loud music is all you need"
                            }
                            position={true}
                        />
                        <div className='headphone-properties'>
                            {headphoneData.map((el) => (
                                <div
                                    className='headphone-properties__box'
                                    key={el.id}
                                >
                                    <img src={el.image} alt={el.title} />
                                    <div className='headphone-properties__box-info'>
                                        <h3 className='box-info__title'>
                                            {el.title}
                                        </h3>
                                        <p className='box-info__text'>
                                            {el.text}
                                        </p>
                                        <a
                                            href={el.href}
                                            className='box-info__link'
                                        >
                                            {el.link}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='headphone-img'>
                        <img src={headphone} alt='headphone' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Headphones;
