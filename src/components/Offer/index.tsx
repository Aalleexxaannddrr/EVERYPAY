import React, {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";

const Offer: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="offer">
            <img className="offer__img" src="/img/offer/1.png" alt="" />
            <div className="offer__right">
                <h3 className="offer__right--title">
                    {(language.language === 'EN') ?
                        "We offer you a simple tool to automate the notification of incoming payments" :
                        "Мы предлагаем вам простой инструмент, чтобы автоматизировать информирование о поступающих оплатах"}
                </h3>
                <p className="offer__right--description">
                    {(language.language === 'EN') ?
                        "The accountant is in quarantine and the director is unavailable? The responsible employee will instantly know about the receipt of money on the company's account. " :
                        "Бухгалтер на карантине, а директор недоступен? Ответственный сотрудник моментально узнает о поступлении денег на счет компании."}
                </p>
            </div>
        </div>
    )
}

export default Offer