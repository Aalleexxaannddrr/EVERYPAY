import React, {useContext, useState} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const HowItWorks: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="how-it-works-container">
            <h3 className="how-it-works__title">
                {language.language === 'EN' ? 'How it works' : 'Как это работает'}
            </h3>
            <div className="how-it-works__wrapper">
                <div className="how-it-works__item">
                    <img className="how-it-works__item--img1" src="/img/how_it_works/1.png" alt="" />
                    <p className="how-it-works__item--text">
                        {language.language === 'EN' ? 'Connect your bank account' : 'Подключите свой банковский счет'}
                    </p>
                </div>
                <div className="how-it-works__item">
                    <img className="how-it-works__item--img2" src="/img/how_it_works/2.png" alt="" />
                    <p className="how-it-works__item--text">
                        {language.language === 'EN' ?
                            'Choose where and to whom to send information'
                            : 'Выберите, куда и кому отправлять информацию'}
                    </p>
                </div>
                <div className="how-it-works__item">
                    <img className="how-it-works__item--img3" src="/img/how_it_works/3.png" alt="" />
                    <p className="how-it-works__item--text">
                        {language.language === 'EN' ?
                            'Receive information about received payments'
                            : 'Получайте информацию о поступивших оплатах'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks