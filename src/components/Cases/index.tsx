import React, {useContext} from "react";
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {CASES_CONTENT} from "./data";
import {LanguageContext} from "../../context/LanguageContext";

SwiperCore.use([Pagination])

const Cases: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <h3 className="null hiw__titles">
                {language.language === 'EN' ? 'Cases' : 'Кейсы'}
            </h3>
            <div className="cases">
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        790: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        1200: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                        },
                    }}
                >
                    {CASES_CONTENT.map((cas) => (
                        <SwiperSlide key={cas.id}>
                            <div className="hiw-item hiw-item__case">
                                <div className="icons-wrapper">
                                    <img className="icon" src={cas.img1} alt="" />
                                    <img className="icon" src={cas.img2} alt="" />
                                    <img className="icon" src={cas.img3} alt="" />
                                </div>
                                <div className="for-whom__text">
                                    <h3>
                                        {language.language === 'EN' ? cas.titleEN : cas.title}
                                    </h3>
                                    <b className="blue-text">
                                        {language.language === 'EN' ? 'Read the case' : 'Читать кейс'}
                                        <i className="material-icons material-icons__blue">chevron_right</i>
                                    </b>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Cases