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