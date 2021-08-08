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

const Page: React.FC = () => {
    const language = useContext(LanguageContext)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState(false)

    const handleClickToKnowBtn = (email) => {
        const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!email){
            if (language.language === 'EN'){
                setMessage('Enter your email!')
            } else if (language.language === 'RU') {
                setMessage('Введите email!')
            }
        } else if(!(isEmail.test(String(email).toLowerCase()))) {
            if (language.language === 'EN'){
                setMessage('Invalid email entered!')
            } else if (language.language === 'RU') {
                setMessage('Введен неверный email!')
            }
        } else if(isEmail.test(String(email).toLowerCase())){
            setMessage('')
            setCheck(true)
        }
    }

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
                {/*<div className="review-item review-item__blue">*/}
                {/*    <h3 className="null review-item__titles3">*/}
                {/*        {(language.language === 'EN') ?*/}
                {/*            "Automate business processes" :*/}
                {/*            "Автоматизируйте бизнес-процессы"}*/}
                {/*    </h3>*/}
                {/*    <div className="review-item__left">*/}
                {/*        <p className="null review-item__text">*/}
                {/*            {(language.language === 'EN') ?*/}
                {/*                "Connect the familiar applications that you use in your work." :*/}
                {/*                "Подключайте привычные приложения, которые вы используете в работе."}*/}
                {/*        </p>*/}
                {/*        {check ?*/}
                {/*            <div className="input input--checked">*/}
                {/*                <i className="material-icons">check</i>*/}
                {/*                <p>{(language.language === 'EN') ? "Check email!" :*/}
                {/*                    "Проверьте email!"}</p>*/}
                {/*            </div> :*/}
                {/*            <div className="input input--form2">*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    placeholder={(language.language === 'EN') ? "Enter your email" : "Введите email"}*/}
                {/*                    name="email"*/}
                {/*                    className="input input--email2"*/}
                {/*                    value={email}*/}
                {/*                    onChange={e => setEmail(e.target.value)}*/}
                {/*                />*/}
                {/*                <button*/}
                {/*                    className="btn btn--fill"*/}
                {/*                    onClick={() => handleClickToKnowBtn(email)}*/}
                {/*                >*/}
                {/*                <span className="btn__label--fill">*/}
                {/*                    {(language.language === 'EN') ? "To know" : "Узнать"}*/}
                {/*                </span>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*        <p className="warning">{message}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <h3 className="null hiw__titles">
                    {language.language === 'EN' ? 'Banks and integrations' : 'Банки и интеграции'}
                </h3>
                <div>
                    <div className="hiw hiw__bi">
                        <div className="banks">
                            <p className="banks__title">
                                {language.language === 'EN' ? 'Banks' : 'Банки'}
                            </p>
                            <div className="banks__img-container">
                                <img className="banks__img" src="/img/how_it_works/banks/1.png" alt="" />
                            </div>
                            <div className="banks__img-container">
                                <img className="banks__img" src="/img/how_it_works/banks/2.png" alt="" />
                            </div>
                            <div className="banks__img-container">
                                <img className="banks__img" src="/img/how_it_works/banks/3.png" alt="" />
                            </div>
                            <hr className="banks__hr" />
                            <div className="banks__img-container">
                                <img className="banks__img" src="/img/how_it_works/banks/4.png" alt="" />
                                {language.language === 'EN' ? <p>Loading from <b>1C</b></p> : <p>Загрузка из <b>1C</b></p>}
                            </div>
                        </div>
                        <div className="integrations">
                            <p className="integrations__title">
                                {language.language === 'EN' ? 'Integrations' : 'Интеграции'}
                            </p>
                            <div className="banks__img-container">
                                <img className="integrations__img" src="/img/how_it_works/integrations/1.png" alt="" />
                                {language.language === 'EN' ? <p>Push-web notifications</p> : <p>Push-web уведомления</p>}
                            </div>
                            <div className="banks__img-container">
                                <img className="integrations__img" src="/img/how_it_works/integrations/2.png" alt="" />
                                {language.language === 'EN' ? <p>E-mail notifications</p> : <p>E-mail уведомления</p>}
                            </div>
                            <div className="banks__img-container">
                                <img className="integrations__img" src="/img/how_it_works/integrations/3.png" alt="" />
                                <p>Telegram</p>
                            </div>
                        </div>
                    </div>
                </div>
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