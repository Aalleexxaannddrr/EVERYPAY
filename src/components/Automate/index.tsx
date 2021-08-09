import React, {useContext, useState} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const Automate: React.FC = () => {
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
        <div className="automate">
            <h3 className="automate__title">
                {(language.language === 'EN') ?
                    "Automate business processes" :
                    "Автоматизируйте бизнес-процессы"}
            </h3>
            <div className="automate__right">
                <p className="automate__right--text">
                    {(language.language === 'EN') ?
                        "Connect the familiar applications that you use in your work." :
                        "Подключайте привычные приложения, которые вы используете в работе."}
                </p>
                {check ?
                    <div className="input input--checked">
                        <i className="material-icons">check</i>
                        <p>{(language.language === 'EN') ? "Check email!" :
                            "Проверьте email!"}</p>
                    </div> :
                    <div className="input input--form--automate">
                        <input
                            type="text"
                            placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}
                            name="email"
                            className="input input--placeholder--automate"
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

export default Automate