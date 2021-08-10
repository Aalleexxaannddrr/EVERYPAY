import React, {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";

const ForWhom: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="for-whom">
            <h3 className="for-whom__title">
                {language.language === 'EN' ? 'For whom' : 'Для кого'}
            </h3>
            <div className="for-whom__wrapper">
                <div className="for-whom__item">
                    <img className="for-whom__item__img1" src="/img/for_whom/1.png" alt="" />
                    <div className="for-whom__item__text1">
                        <h3 className="for-whom__item__title">
                            {language.language === 'EN' ? 'Small business' : 'Малый бизнес'}
                        </h3>
                        <p className="for-whom__item__description">
                            {language.language === 'EN' ? 'The speed of obtaining information about payments and minimizing costs' :
                                'Скорость получения информации о платежах и минимизация издержек'}
                        </p>
                    </div>
                </div>
                <div className="for-whom__item">
                    <img className="for-whom__item__img2" src="/img/for_whom/2.png" alt="" />
                    <div className="for-whom__item__text2">
                        <h3 className="for-whom__item__title">
                            {language.language === 'EN' ? 'Startups' : 'Стартапы'}
                        </h3>
                        <p className="for-whom__item__description">
                            {language.language === 'EN' ?
                                'Automation of business processes and accounting routine'
                                : 'Автоматизация бизнес-процессов и бухгалтерской рутины'}
                        </p>
                    </div>
                </div>
                <div className="for-whom__item">
                    <img className="for-whom__item__img3" src="/img/for_whom/3.png" alt="" />
                    <div className="for-whom__item__text3">
                        <h3 className="for-whom__item__title">
                            {language.language === 'EN' ? 'Developers' : 'Разработчики'}
                        </h3>
                        <p className="for-whom__item__description">
                            {language.language === 'EN' ?
                                'Rapidly deploy your apps for small businesses and startups'
                                : 'Быстрое внедрение своих приложений для малого бизнеса и стартапов'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForWhom