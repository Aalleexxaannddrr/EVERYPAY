import React, {useContext} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const Safety: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="safety">
            <h3 className="safety__title">
                {(language.language === 'EN') ?
                    "Safety" :
                    "Безопасность"}
            </h3>
            <div className="safety__container">
                <img className="safety__img" src="/img/safety/1.png" alt="" />
                <div className="safety__right">
                    <h3 className="safety__right__title">
                        {(language.language === 'EN') ?
                            "Safety" :
                            "Безопасность"}
                    </h3>
                    <p className="safety__right__text">
                        {(language.language === 'EN') ?
                            "Using Everypay is completely safe: connection to a bank account is carried out in the \"Only for receiving statements\" mode, and information storage in the system is protected and depersonalized." :
                            "Использование Everypay полностью безопасно: подключение к банковскому счету осуществляется в режиме «только для получения выписок», а хранение информации в системе защищено и деперсонализировано."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Safety