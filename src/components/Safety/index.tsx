import React, {useContext} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const Safety: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="review-item review-item">
            <img className="review-item__img2 review-item__img2__big" src="/img/safety/1.png" alt="" />
            <div className="review-item__left review-item__left__safety">
                <h3 className="null review-item__titles">
                    {(language.language === 'EN') ?
                        "Safety" :
                        "Безопасность"}
                </h3>
                <div className="safety">
                    <img className="review-item__img2 review-item__img2__hidden" src="/img/safety/1.png" alt="" />
                    <p className="null review-item__text2">
                        {(language.language === 'EN') ?
                            "Using Everypay is completely safe: connection to a bank account is carried out in the \"Only for receiving statements\" mode, and information storage in the system is protected and depersonalized." :
                            "Использование Everypay полностью безопасно: подключение к банковскому счету осуществляется в режиме «Только для получения выписок», а хранение информации в системе защищено и деперсонализировано."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Safety