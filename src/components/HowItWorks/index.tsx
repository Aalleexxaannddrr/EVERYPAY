import React, {useContext, useState} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const HowItWorks: React.FC = () => {
    const language = useContext(LanguageContext)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState(false)

    const handleClickToKnowBtn = (email) => {
        const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!email){
            setMessage('Введите email!')
        } else if(!(isEmail.test(String(email).toLowerCase()))) {
            setMessage('Введен неверный email!')
        } else if(isEmail.test(String(email).toLowerCase())){
            setMessage('')
            setCheck(true)
        }
    }

    return (
        <div>
            <h3 className="null hiw__titles">
                {language.language === 'EN' ? 'How it works' : 'Как это работает'}
            </h3>
            <div className="hiw">
                <div className="hiw-item">
                    <img className="hiw-item--img" src="/img/how_it_works/1.png" alt="" />
                    <p>
                        {language.language === 'EN' ? 'Connect your bank account' : 'Подключите свой банковский счет'}
                    </p>
                </div>
                <div className="hiw-item">
                    <img className="hiw-item--img" src="/img/how_it_works/2.png" alt="" />
                    <p>
                        {language.language === 'EN' ?
                            'Choose where and to whom to send information'
                            : 'Выберите, куда и кому отправлять информацию'}
                    </p>
                </div>
                <div className="hiw-item">
                    <img className="hiw-item--img" src="/img/how_it_works/3.png" alt="" />
                    <p>
                        {language.language === 'EN' ?
                            'Receive information about received payments'
                            : 'Получайте информацию о поступивших оплатах'}
                    </p>
                </div>
            </div>
            <div className="review-item review-item__blue">
                <h3 className="null review-item__titles3">
                    {(language.language === 'EN') ?
                        "Automate business processes" :
                        "Автоматизируйте бизнес-процессы"}
                </h3>
                <div className="review-item__left">
                    <p className="null review-item__text">
                        {(language.language === 'EN') ?
                            "Connect the familiar applications that you use in your work." :
                            "Подключайте привычные приложения, которые вы используете в работе."}
                    </p>
                    {check ?
                        <div className="input input--checked">
                            <i className="material-icons">check</i>
                            <p>Проверьте e-mail!</p>
                        </div> :
                        <div className="input input--form2">
                            <input
                                type="text"
                                placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}
                                name="email"
                                className="input input--email2"
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
            <h3 className="null hiw__titles">
                {language.language === 'EN' ? 'Banks and integrations' : 'Банки и интеграции'}
            </h3>
            <div>
                <div className="hiw hiw__bi">
                    <div className="banks">
                        <p className="banks__title">
                            {language.language === 'EN' ? 'Banks' : 'Банки'}
                        </p>
                        <div className="banks__img-container">
                            <img className="banks__img" src="/img/how_it_works/banks/1.png" alt="" />
                        </div>
                        <div className="banks__img-container">
                            <img className="banks__img" src="/img/how_it_works/banks/2.png" alt="" />
                        </div>
                        <div className="banks__img-container">
                            <img className="banks__img" src="/img/how_it_works/banks/3.png" alt="" />
                        </div>
                        <hr className="banks__hr" />
                        <div className="banks__img-container">
                            <img className="banks__img" src="/img/how_it_works/banks/4.png" alt="" />
                            {language.language === 'EN' ? <p>Loading from <b>1C</b></p> : <p>Загрузка из <b>1C</b></p>}
                        </div>
                    </div>
                    <div className="integrations">
                        <p className="integrations__title">
                            {language.language === 'EN' ? 'Integrations' : 'Интеграции'}
                        </p>
                        <div className="banks__img-container">
                            <img className="integrations__img" src="/img/how_it_works/integrations/1.png" alt="" />
                            {language.language === 'EN' ? <p>Push-web notifications</p> : <p>Push-web уведомления</p>}
                        </div>
                        <div className="banks__img-container">
                            <img className="integrations__img" src="/img/how_it_works/integrations/2.png" alt="" />
                            {language.language === 'EN' ? <p>E-mail notifications</p> : <p>E-mail уведомления</p>}
                        </div>
                        <div className="banks__img-container">
                            <img className="integrations__img" src="/img/how_it_works/integrations/3.png" alt="" />
                            <p>Telegram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks