import React, {useContext} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const Soon: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="soon">
            <h3 className="soon__title">
                {(language.language === 'EN') ?
                    "Coming soon" :
                    "Скоро появится"}
            </h3>
            <div className="soon__item soon__item--1">
                <h3 className="soon__item__title">
                    {(language.language === 'EN') ?
                        "Integration with CRM systems Bitrix24 and amoCRM" :
                        "Интеграции с CRM-системами Битрикс24 и amoCRM"}
                </h3>
                <div className="soon__item__description">
                    <div className="soon__item__line" />
                    <div className="soon__item__right soon__item__right--1">
                        <p className="soon__item__right__text">
                            {(language.language === 'EN') ?
                                "We offer you a simple tool to automate the notification of incoming payments" :
                                "Интегрируйте уведомления о платежах прямо в вашу CRM, в которой работают ваши сотрудники"}
                        </p>
                        <div className="soon__item__right__icons">
                            <img className="soon__item__right__icons__icon1" src="/img/cases/bitrix.png" alt="" />
                            <img className="soon__item__right__icons__icon2" src="/img/cases/amoCRM.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="soon__sep" />
            <div className="soon__item soon__item--2">
                <h3 className="soon__item__title">
                    {(language.language === 'EN') ?
                        "Open API Everypay" :
                        "Открытое API Everypay"}
                </h3>
                <div className="soon__item__description">
                    <div className="soon__item__line" />
                    <div className="soon__item__right soon__item__right--2">
                        <p className="soon__item__right__text">
                            {(language.language === 'EN') ?
                                "Connect your systems and integrate payment notifications yourself using the simple Everypay API" :
                                "Подключайте свои системы и интегрируйте уведомления о поступающих платежах самостоятельно с помощью простого API Everypay"}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="soon__sep" />
            <div className="soon__item soon__item--3">
                <h3 className="soon__item__title">
                    {(language.language === 'EN') ?
                        "Automatic creation of payments" :
                        "Автоматическое создание платежек"}
                </h3>
                <div className="soon__item__description">
                    <div className="soon__item__line" />
                    <div className="soon__item__right soon__item__right--3">
                        <p className="soon__item__right__text">
                            {(language.language === 'EN') ?
                                "Upload the scanned invoice for payment to our system and a payment order will be automatically created in the client bank based on the data from the invoice. With the help of computer vision and machine learning technologies, we achieve high accuracy and speed of work" :
                                "Загрузите скан счета на оплату в нашу систему и в банк-клиенте автоматически будет создано платежное поручение на основании данных из счета. С помощью технологий компьютерного зрения и машинного обучения мы достигаем высокой точности и скорости работы"}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="soon__sep" />
            <h3 className="soon__more">
                {(language.language === 'EN') ?
                    "And 17 more innovations" :
                    "И еще 17 нововведений"}
            </h3>
        </div>
    )
}

export default Soon