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
            <div className="soon">
                <h3 className="null hiw__titles">
                    {(language.language === 'EN') ?
                        "Coming soon" :
                        "Скоро появится"}
                </h3>
                <div className="review-item review-item">
                    <h3 className="null review-item__titles4">
                        {(language.language === 'EN') ?
                            "Integration with CRM systems Bitrix24 and amoCRM" :
                            "Интеграции с CRM-системами Битрикс24 и amoCRM"}
                    </h3>
                    <div className="soon-right">
                        <div className="soon-line">
                            <hr className="line" />
                        </div>
                        <div className="review-item__left">
                            <p className="null review-item__text2">
                                {(language.language === 'EN') ?
                                    "We offer you a simple tool to automate the notification of incoming payments" :
                                    "Интегрируйте уведомления о платежах прямо в вашу CRM, в которой работают ваши сотрудники"}
                            </p>
                            <div className="icons-wrapper">
                                <img className="icon" src="/img/cases/bitrix.png" alt="" />
                                <img className="icon" src="/img/cases/amoCRM.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="soon-sep" />
                <div className="review-item review-item">
                    <h3 className="null review-item__titles4">
                        {(language.language === 'EN') ?
                            "Open API Everypay" :
                            "Открытое API Everypay"}
                    </h3>
                    <div className="soon-right">
                        <div className="soon-line">
                            <hr className="line" />
                        </div>
                        <div className="review-item__left">
                            <p className="null review-item__text2">
                                {(language.language === 'EN') ?
                                    "Connect your systems and integrate payment notifications yourself using the simple Everypay API" :
                                    "Подключайте свои системы и интегрируйте уведомления о поступающих платежах самостоятельно с помощью простого API Everypay"}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="soon-sep" />
                <div className="review-item review-item">
                    <h3 className="null review-item__titles4">
                        {(language.language === 'EN') ?
                            "Automatic creation of payments" :
                            "Автоматическое создание платежек"}
                    </h3>
                    <div className="soon-right">
                        <div className="soon-line">
                            <hr className="line" />
                        </div>
                        <div className="review-item__left">
                            <p className="null review-item__text2">
                                {(language.language === 'EN') ?
                                    "Upload the scanned invoice for payment to our system and a payment order will be automatically created in the client bank based on the data from the invoice. With the help of computer vision and machine learning technologies, we achieve high accuracy and speed of work" :
                                    "Загрузите скан счета на оплату в нашу систему и в банк-клиенте автоматически будет создано платежное поручение на основании данных из счета. С помощью технологий компьютерного зрения и машинного обучения мы достигаем высокой точности и скорости работы"}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="soon-sep" />
                <h3 className="soon-more">
                    {(language.language === 'EN') ?
                        "And 17 more innovations" :
                        "И еще 17 нововведений"}
                </h3>
            </div>
        </div>
    )
}

export default Tariffs