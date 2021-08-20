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
import Soon from "../Soon";

const Page: React.FC = () => {
    const language = useContext(LanguageContext)

    return(
        <div className="page">
            <img className="lines" src="/img/lines.png" />
            <img className="lines lines__footer" src="/img/lines.png" />
            <section className="navbar">
                <Header />
            </section>
            <main>
                <section className="slider">
                    <Slider />
                </section>
                <section className="offer_section">
                    <Offer />
                </section>
                <section className="how-it-works">
                    <HowItWorks />
                </section>
                <section className="automate_section">
                    <Automate />
                </section>
                <section className="banks_and_integrations">
                    <Banks />
                </section>
                <section className="for-whom">
                    <ForWhom />
                </section>
                <section className="cases">
                    <Cases />
                </section>
                <section className="tariffs">
                    <Tariffs />
                </section>
                <section className="soon_section">
                    <Soon />
                </section>
                <section className="safety">
                    <Safety />
                </section>
                <section className="connect">
                    <footer>
                        <Connect />
                        <div className="footer">
                            <p className="footer__text1">© 2020, Everypay</p>
                            <p className="footer__text2">
                                {(language.language === 'EN') ?
                                    "Privacy Policy" :
                                    "Политика конфиденциальности"}
                            </p>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    )
}

export default Page