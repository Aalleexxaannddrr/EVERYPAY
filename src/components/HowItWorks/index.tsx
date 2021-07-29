import React, {useContext} from 'react'
import {LanguageContext} from "../../context/LanguageContext";

const HowItWorks: React.FC = () => {
    const language = useContext(LanguageContext)

    return (
        <div className="hiw">
            <h3>
                {language.language === 'EN' ? 'How it works' : 'Как это работает'}
            </h3>
            <div className="hiw-item">
                <img src="/img/how_it_works/1.png" alt="" />
                <p>
                    {language.language === 'EN' ? 'Connect your bank account' : 'Подключите свой банковский счет'}
                </p>
            </div>
            <div className="hiw-item">
                <img src="/img/how_it_works/2.png" alt="" />
                <p>
                    {language.language === 'EN' ? 'Choose where and to whom to send information' : 'Выберите, куда и кому отправлять информацию'}
                </p>
            </div>
            <div className="hiw-item">
                <img src="/img/how_it_works/3.png" alt="" />
                <p>
                    {language.language === 'EN' ? 'Receive information about received payments' : 'Получайте информацию о поступивших оплатах'}
                </p>
            </div>
        </div>
    )
}

export default HowItWorks