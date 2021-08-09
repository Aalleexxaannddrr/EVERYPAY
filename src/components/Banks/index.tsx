import React, {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";

const Banks:React.FC = () => {
    const language = useContext(LanguageContext)

    return(
        <div className="banks">
            <h3 className="banks__title">
                {language.language === 'EN' ? 'Banks and integrations' : 'Банки и интеграции'}
            </h3>
            <div className="banks__wrapper">
                <div className="banks__item">
                    <p className="banks__item__title">
                        {language.language === 'EN' ? 'Banks' : 'Банки'}
                    </p>
                    <div className="banks__item__img-container">
                        <img className="banks__item__img-container__dot" src="/img/banks/1.png" alt="" />
                        <img className="banks__item__img-container__tinkoff" src="/img/banks/2.png" alt="" />
                    </div>
                    <img className="banks__item__img-container__modul" src="/img/banks/3.png" alt="" />
                    <hr className="banks__item__hr" />
                    <div className="banks__item__img-container">
                        <img className="banks__item__img-container__plus" src="/img/banks/4.png" alt="" />
                        <img className="banks__item__img-container__csv" src="/img/banks/5.png" alt="" />
                        {language.language === 'EN' ?
                            <p className="banks__item__img-container__text">Loading from <b>1C</b></p> :
                            <p className="banks__item__img-container__text">Загрузка из <b>1C</b></p>}
                    </div>
                </div>
                <div className="banks__item banks__item__integrations">
                    <p className="banks__item__title">
                        {language.language === 'EN' ? 'Integrations' : 'Интеграции'}
                    </p>
                    <div className="banks__item__img-container">
                        <img className="banks__item__img-container__push" src="/img/banks/6.png" alt="" />
                        {language.language === 'EN' ?
                            <p className="banks__item__img-container__push__text">Push-web notifications</p>
                            : <p className="banks__item__img-container__push__text">Push-web уведомления</p>}
                    </div>
                    <div className="banks__item__img-container">
                        <img className="banks__item__img-container__email" src="/img/banks/7.png" alt="" />
                        {language.language === 'EN' ?
                            <p className="banks__item__img-container__email__text">E-mail notifications</p> :
                            <p className="banks__item__img-container__email__text">E-mail уведомления</p>}
                    </div>
                    <div className="banks__item__img-container">
                        <img className="banks__item__img-container__telegram" src="/img/banks/8.png" alt="" />
                        <p className="banks__item__img-container__telegram__text">Telegram</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banks