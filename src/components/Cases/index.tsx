import React, {useContext} from "react";
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {CASES_CONTENT} from "./data";
import {LanguageContext} from "../../context/LanguageContext";

SwiperCore.use([Pagination])

const Cases: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="cases">
            <h3 className="cases__title">
                {language.language === 'EN' ? 'Cases' : 'Кейсы'}
            </h3>
            <div className="cases__wrapper">
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    freeMode={true}
                    breakpoints={{
                        319: {
                            slidesPerView: 3,
                            spaceBetween: 150
                        },
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 180
                        },
                        1439: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {CASES_CONTENT.map((cas) => (
                        <SwiperSlide key={cas.id}>
                            <div className="cases-container">
                                <div className="cases__item">
                                    <div className={"cases__item__icons"+cas.id}>
                                        <img className={"cases__item__icons"+cas.id+"--icon1"} src={cas.img1} alt="" />
                                        <img className={"cases__item__icons"+cas.id+"--icon2"} src={cas.img2} alt="" />
                                        <img className={"cases__item__icons"+cas.id+"--icon3"} src={cas.img3} alt="" />
                                    </div>
                                    <h3 className={"cases__item__title"+cas.id}>
                                        {language.language === 'EN' ? cas.titleEN : cas.title}
                                    </h3>
                                    <div className="cases__item__read">
                                        <b className="cases__item__read--text">
                                            {language.language === 'EN' ? 'Read the case' : 'Читать кейс'}
                                        </b>
                                        <div>
                                            <img className="cases__item__read--vector" src="/img/cases/vector.png" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="bottom"></div>*/}
                            </div>
                        </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Cases