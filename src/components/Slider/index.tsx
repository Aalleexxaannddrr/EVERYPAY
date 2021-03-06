import React, {useContext, useState} from "react";
import SwiperCore, { Pagination } from "swiper/core";
import {Swiper, SwiperSlide} from "swiper/react";
import {SLIDER_CONTENT} from "./data";
import {LanguageContext} from "../../context/LanguageContext";

SwiperCore.use([Pagination])

const Slider: React.FC = () => {
    const language = useContext(LanguageContext)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState(false)

    const handleClickToKnowBtn = (email) => {
        const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!email){
            if (language.language === 'EN'){
                setMessage('Enter your email!')
            } else if (language.language === 'RU') {
                setMessage('Введите email!')
            }
        } else if(!(isEmail.test(String(email).toLowerCase()))) {
            if (language.language === 'EN'){
                setMessage('Invalid email entered!')
            } else if (language.language === 'RU') {
                setMessage('Введен неверный email!')
            }
        } else if(isEmail.test(String(email).toLowerCase())){
            setMessage('')
            setCheck(true)
        }
    }

    return(
        <div className="slider-container">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <Swiper
                spaceBetween={5}
                pagination={{
                    "clickable": true,
                }}
            >
                {SLIDER_CONTENT.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={"slide-"+slide.id}>
                            <div className={"slide-"+slide.id+"__left"}>
                                <h3 className={"slide-"+slide.id+"__left--title"}>
                                    {(language.language === 'EN') ? slide.titleEN: slide.title}</h3>
                                <p className={"slide-"+slide.id+"__left--description"}>
                                    {(language.language === 'EN') ? slide.descriptionEN : slide.description}</p>
                                <div className="slider-input">
                                    {check ?
                                        <div className="input input--checked">
                                            <i className="material-icons">check</i>
                                            <p>{(language.language === 'EN') ? "Check email!" :
                                                "Проверьте email!"}</p>
                                        </div> :
                                        <div className="input input--form">
                                            <input
                                                type="text"
                                                placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}
                                                name="email"
                                                className="input input--placeholder"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                            <button
                                                className="btn btn--fill"
                                                onClick={() => handleClickToKnowBtn(email)}
                                            >
                                                <span className="btn__label--fill">
                                                    {(language.language === 'EN') ? "To know" : "Узнать"}
                                                </span>
                                            </button>
                                        </div>
                                    }
                                    <p className="warning">{message}</p>
                                </div>
                            </div>
                            <img className={"slide-"+slide.id+"__img"} src={slide.imgUri} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider