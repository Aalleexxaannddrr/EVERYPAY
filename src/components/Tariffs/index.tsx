import React, {useContext, useState} from "react";
import {LanguageContext} from "../../context/LanguageContext";

const Tariffs: React.FC = () => {
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

    return (
        <div className="tariffs">
            <h3 className="tariffs__title tariffs__title__hidden">
                {(language.language === 'EN') ?
                    "Tariffs" :
                    "Тарифы"}
            </h3>
            <div className="tariffs__container">
                <div className="tariffs__left">
                    <h3 className="tariffs__title tariffs__title__unhidden">
                        {(language.language === 'EN') ?
                            "Tariffs" :
                            "Тарифы"}
                    </h3>
                    <p className="tariffs__description">
                        {(language.language === 'EN') ?
                            "Everypay is in the stage of a hidden beta test, but you have the opportunity to join the testing of the service." :
                            "Everypay находится в стадии закрытого beta-теста, но у вас есть возможность присоединиться к тестированию сервиса."}
                    </p>
                    <p className="tariffs__description">
                        {(language.language === 'EN') ?
                            "For companies participating in testing, the service is forever free. Write to us and we will contact you." :
                            "Для компаний, участвующих в тестировании, сервис навсегда бесплатен. Напишите нам и мы с вами свяжемся."}
                    </p>
                    <div className="tariffs__input__unhidden">
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
                <img className="tariffs__img" src="/img/tariffs/1.png" alt="" />
            </div>
            <div className="tariffs__input__hidden">
                {check ?
                    <div className="input input--checked">
                        <i className="material-icons">check</i>
                        <p>Проверьте e-mail!</p>
                    </div> :
                    <div className="input input--form input--form--tariffs">
                        <input
                            type="text"
                            placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}
                            name="email"
                            className="input input--placeholder input--placeholder--tariffs"
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
    )
}

export default Tariffs