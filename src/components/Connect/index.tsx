import React, {useContext, useState} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const Connect: React.FC = () => {
    const language = useContext(LanguageContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState(false)

    const handleClickConnectBtn = (name, email, info) => {
        const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!email || !name || !info){
            if (language.language === 'EN'){
                setMessage('Fill in all the fields!')
            } else if (language.language === 'RU') {
                setMessage('Заполните все поля!')
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
        <div className="connect__container">
            <h3 className="connect__title">
                {(language.language === 'EN') ? "Connect": "Подключиться"}
            </h3>
            <div className="connect__item">
                <div className="connect__item__description">
                    <p className="connect__item__description__text">
                        {(language.language === 'EN') ? "Do you want to start using the system? Write to us." :
                            "Хотите начать пользоваться системой? Напишите нам."}
                    </p>
                    <p className="connect__item__description__email">email</p>
                    <p className="connect__item__description__contact">hello@everypay.io</p>
                </div>
                {check ?
                    <div className="checked">
                        {(language.language === 'EN') ?
                            <>
                                <p className="null review-item__text review-item__text__m">Thank you!</p>
                                <p className="null review-item__text">We have accepted your request.</p>
                                <p className="null review-item__text">
                                    Our support specialist will contact you shortly.
                                </p>
                            </>
                            :
                            <>
                                <p className="null review-item__text review-item__text__m">Спасибо!</p>
                                <p className="null review-item__text">Мы приняли ваш запрос.</p>
                                <p className="null review-item__text">
                                    В ближайшее время наш специалист поддержки свяжется с вами.
                                </p>
                            </> }
                    </div> :
                    <div className="connect__item__form">
                        <input
                            type="text"
                            placeholder={(language.language === 'EN') ? "Your name*" : "Ваше имя*"}
                            name="name"
                            className="input input--connect"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Email*"
                            name="email"
                            className="input input--connect"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder={(language.language === 'EN') ? "Tell us about your company*" :
                                "Расскажите о своей компании*"}
                            name="info"
                            className="input input--textarea"
                            value={info}
                            onChange={e => setInfo(e.target.value)}
                        />
                        <p className="warning">{message}</p>
                        <button
                            className="btn btn--fill btn--fill--connect"
                            onClick={() => handleClickConnectBtn(name, email, info)}
                        >
                            <span className="btn__label--fill">
                                {(language.language === 'EN') ? "Connect" : "Подключиться"}
                            </span>
                        </button>
                    </div>

                }
            </div>
        </div>
    )
}

export default Connect