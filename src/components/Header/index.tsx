import React, {useContext, useState} from "react"
import classNames from 'classnames'
import {LanguageContext} from "../../context/LanguageContext";

const NAV_LiNKS = [
    {name: 'Как это работает?', ENname:'How it works?', scrlPts: '10', keyword: 'HowItWorks'},
    {name: 'Для кого', ENname:'For whom', scrlPts: '20', keyword: 'ForWhom'},
    {name: 'Кейсы', ENname:'Cases', scrlPts: '30', keyword: 'Cases'},
    {name: 'Тарифы', ENname: 'Tariffs', scrlPts: '40', keyword: 'Tariffs'},
    {name: 'Безопасность', ENname:'Safety', scrlPts: '50', keyword: 'Safety'}
]

const Header: React.FC = () => {
    const language = useContext(LanguageContext)
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenuVisible = () => {
        setMenuVisible(!menuVisible)
    }

    const handleMenuClick = (scrlPts) => {
        const doingBlock = document.querySelector('section.doing-block')
        if (!doingBlock) return
        const offsetTop = doingBlock.getBoundingClientRect().top
        window.scrollTo({
            top: offsetTop - scrlPts,
            behavior: 'smooth'
        })
    }

    return (
        <div className="header-wrapper">
            <header className="header">
                <button
                    className="header__logo"
                    onClick={() => handleMenuClick(0)}
                >
                    <img src="/img/logo1.png" alt="" className="header__logo-img" />
                </button>
                <nav className="header__nav">
                    <ul className="null header__list">
                        {NAV_LiNKS.map((item, i) => (
                            <li key={i} className="header__item">
                                <button className="header__link" onClick={() => handleMenuClick(item.scrlPts)}>
                                    {(language.language === 'EN') ? item.ENname : item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__language">
                    <button className={classNames('header__language-btn', {
                        'header__active-language': (language.language === null || language.language === 'RU')
                    })} onClick={() => language.toggleLanguage("RU")}>
                        RU
                    </button>
                    <button className={classNames('header__language-btn', {
                        'header__active-language': (language.language === "EN")
                    })} onClick={() => language.toggleLanguage('EN')}>
                        EN
                    </button>
                </div>
                <div className="header__btn">
                    <button className="btn btn--hollow">
                        <span className="btn__label--hollow">
                            {(language.language === 'EN') ? 'Connect' : 'Подключиться'}
                        </span>
                    </button>
                </div>
                <div
                    className={classNames('menu-btn menu-btn--ml', {
                        'active': menuVisible
                    })}
                    onClick={toggleMenuVisible}
                >
                    <span></span>
                </div>
                <div
                    className={classNames('header__menu', {
                        'header__menu--visible': menuVisible,
                    })}
                >
                    <div className="header__menu__content-wrapper">
                        <ul className="null header__menu__nav">
                            {NAV_LiNKS.map((item, i) => (
                                <li key={i} className="header__item">
                                    <button className="header__link" onClick={() => handleMenuClick(item.scrlPts)}>
                                        {(language.language === 'EN') ? item.ENname : item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="header__menu__bottom">
                            <button className="btn btn--hollow">
                                <span className="btn__label--hollow">
                                    {(language.language === 'EN') ? 'Connect' : 'Подключиться'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )

}

export default Header