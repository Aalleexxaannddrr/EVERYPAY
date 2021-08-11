import React, {Fragment, useContext, useState} from "react"
import {LanguageContext} from "../../context/LanguageContext";
import Header from "../Header";
import Slider from "../Slider";
import Offer from "../Offer";
import HowItWorks from "../HowItWorks";
import ForWhom from "../ForWhom";
import Cases from "../Cases";
import Tariffs from "../Tariffs";
import Safety from "../Safety";
import Connect from "../Connect";
import Automate from "../Automate";
import Banks from "../Banks";

const Page: React.FC = () => {
    const language = useContext(LanguageContext)

    return(
        <div className="page">
            <Fragment>
                <img className="lines" src="/img/lines.png" />
                <section className="navbar">
                    <Header />
                </section>
                <Slider />
                <Offer />
                <section className="how-it-works">
                    <HowItWorks />
                </section>
                <Automate />
                <Banks />
                <section className="for-whom">
                    <ForWhom />
                </section>
                <section className="cases">
                    <Cases />
                </section>
                <section className="tariffs">
                    <Tariffs />
                </section>
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
                <section className="safety">
                    <Safety />
                </section>
                <section className="connect">
                    <Connect />
                    <div className="footer">
                        <p className="footer__text1">© 2020, Everypay</p>
                        <p className="footer__text2">
                            {(language.language === 'EN') ?
                                "Privacy Policy" :
                                "Политика конфиденциальности"}
                        </p>
                    </div>
                </section>
            </Fragment>
        </div>
    )
}

export default Page