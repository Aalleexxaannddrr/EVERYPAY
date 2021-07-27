import React, {useRef, useState} from "react";
import SwiperCore, { Pagination } from "swiper/core";
import {Swiper, SwiperSlide} from "swiper/react";
import {SLIDER_CONTENT} from "./data";

SwiperCore.use([Pagination])

const Slider: React.FC = () => {

    return(
        <div className="wrapper">
            <div className="review-slider">
                <Swiper
                    spaceBetween={5}
                    pagination={{
                        "clickable": true,
                    }}
                >
                    {SLIDER_CONTENT.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="review-item">
                                <div className="review-item__left">
                                    <h3 className="null review-item__titles">{slide.title}</h3>
                                    <p className="null review-item__text">{slide.description}</p>
                                    <input type="text" placeholder="Введите email" name="email" className="input input--email" />
                                    <button type="submit" className="btn btn--fill">
                                        <span className="btn__label--fill">
                                            Узнать
                                        </span>
                                    </button>
                                </div>
                                <img className="review-item__img" src={slide.imgUri} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Slider