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
        <div>
            <h3 className="null review-item__titles review-item__titles--tariffs1">
                {(language.language === 'EN') ?
                    "Tariffs" :
                    "Тарифы"}
            </h3>
            <div className="review-item review-item__tariffs">
                <div className="review-item__left">
                    <h3 className="null review-item__titles review-item__titles--tariffs2">
                        {(language.language === 'EN') ?
                            "Tariffs" :
                            "Тарифы"}
                    </h3>
                    <p className="null review-item__text2">
                        {(language.language === 'EN') ?
                            "Everypay is in the stage of a hidden beta test, but you have the opportunity to join the testing of the service." :
                            "Everypay находится в стадии скрытого beta-теста, но у вас есть возможность присоединиться к тестированию сервиса."}
                    </p>
                    <p className="null review-item__text2">
                        {(language.language === 'EN') ?
                            "For companies participating in testing, the service is forever free. Write to us and we will contact you." :
                            "Для компаний, участвующих в тестировании, сервис навсегда бесплатен. Напишите нам и мы с вами свяжемся."}
                    </p>
                    <div className="input__big">
                        {check ?
                            <div className="input input--checked">
                                <i className="material-icons">check</i>
                                <p>Проверьте e-mail!</p>
                            </div> :
                            <div className="input input--form">
                                <input
                                    type="text"
                                    placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}
                                    name="email"
                                    className="input input--email"
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
                <img className="review-item__img2 review-item__img2--tariffs" src="/img/tariffs/1.png" alt="" />
            </div>
            <div className="input__small">
                {check ?
                    <div className="input input--checked">
                        <i className="material-icons">check</i>
                        <p>Проверьте e-mail!</p>
                    </div> :
                    <div className="input input--form2__tariffs">
                        <input
                            type="text"
                            placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}
                            name="email"
                            className="input input--email"
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