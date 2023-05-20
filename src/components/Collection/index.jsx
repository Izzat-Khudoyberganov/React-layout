import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Title from "../Title";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import { Navigation } from "swiper";
SwiperCore.use([Autoplay]);

const Collection = ({ info }) => {
    // const title = info[0].title;

    const person = {
        name: "Sharifboy",
        age: 16,
    };

    const { name, age } = person; /// distruktizatsiya

    const { title, id, userId, completed } = info[0];
    console.log(title, id);
    return (
        <section className='collection'>
            <div className='container'>
                <Title text={"Our Latest colour collection 2021"} />
                {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    <SwiperSlide className='swiper-slide'>
                        <p>hiii</p>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
                    <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide>
                </Swiper> */}
                {info.map((el) => (
                    <div key={el.id}>
                        <h4>{el.title}</h4>
                        <input type='checkbox' checked={el.completed} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collection;
