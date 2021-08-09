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
                <section className="for-whom">
                    <ForWhom />
                </section>
                <section className="cases">
                    <Cases />
                </section>
                <section className="tariffs">
                    <Tariffs />
                </section>
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