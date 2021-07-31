import React, {Fragment, useContext} from "react"
import {LanguageContext} from "../../context/LanguageContext";
import Header from "../Header";
import Slider from "../Slider";
import HowItWorks from "../HowItWorks";
import ForWhom from "../ForWhom";

const Page: React.FC = () => {
    const language = useContext(LanguageContext)

    return(
        <div className="page">
            <Fragment>
                <Header />
                <Slider />
                <div className="review-item review-item__revers">
                    <img className="review-item__img2" src="/img/page/1.png" alt="" />
                    <div className="review-item__left">
                        <h3 className="null review-item__titles2">
                            {(language.language === 'EN') ?
                                "We offer you a simple tool to automate the notification of incoming payments" :
                                "Мы предлагаем вам простой инструмент, чтобы автоматизировать информирование о поступающих оплатах"}
                        </h3>
                        <p className="null review-item__text2">
                            {(language.language === 'EN') ?
                                "The accountant is in quarantine and the director is unavailable? The responsible employee will instantly know about the receipt of money on the company's account. " :
                                "Бухгалтер на карантине, а директор недоступен? Ответственный сотрудник моментально узнает о поступлении денег на счет компании."}
                        </p>
                    </div>
                </div>
                <section className="how-it-works">
                    <HowItWorks />
                </section>
                <section className="for-whom">
                    <ForWhom />
                </section>
            </Fragment>
        </div>
    )
}

export default Page