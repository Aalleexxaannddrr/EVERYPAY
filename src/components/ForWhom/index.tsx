import React, {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";

const ForWhom: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div>
            <h3 className="null hiw__titles">
                {language.language === 'EN' ? 'For whom' : 'Для кого'}
            </h3>
            <div className="hiw">
                <div className="hiw-item hiw-item__for-whom">
                    <img className="hiw-item--img" src="/img/for_whom/1.png" alt="" />
                    <div className="for-whom__text">
                        <h3>
                            {language.language === 'EN' ? 'Small business' : 'Малый бизнес'}
                        </h3>
                        <p>
                            {language.language === 'EN' ? 'The speed of obtaining information about payments and minimizing costs' :
                                'Скорость получения информации о платежах и минимизация издержек'}
                        </p>
                    </div>
                </div>
                <div className="hiw-item hiw-item__for-whom">
                    <img className="hiw-item--img" src="/img/for_whom/2.png" alt="" />
                    <div className="for-whom__text">
                        <h3>
                            {language.language === 'EN' ? 'Startups' : 'Стартапы'}
                        </h3>
                        <p>
                            {language.language === 'EN' ?
                                'Automation of business processes and accounting routine'
                                : 'Автоматизация бизнес-процессов и бухгалтерской рутины'}
                        </p>
                    </div>
                </div>
                <div className="hiw-item hiw-item__for-whom">
                    <img className="hiw-item--img" src="/img/for_whom/3.png" alt="" />
                    <div className="for-whom__text">
                        <h3>
                            {language.language === 'EN' ? 'Developers' : 'Разработчики'}
                        </h3>
                        <p>
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