import React, {createRef, RefObject, useEffect, useState} from "react"
import classNames from 'classnames'

const NAV_LiNKS = [
    {name: 'Как это работает?', scrlPts: '10', keyword: 'HowDoesItWork'},
    {name: 'Для кого', scrlPts: '20', keyword: 'ForWhom'},
    {name: 'Кейсы', scrlPts: '30', keyword: 'Cases'},
    {name: 'Тарифы', scrlPts: '40', keyword: 'Tariffs'},
    {name: 'Безопасность', scrlPts: '50', keyword: 'Secure'}
]

const Header: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const menuPopupRef: RefObject<HTMLDivElement> = createRef()
    const menuButtonRef: RefObject<HTMLDivElement> = createRef()

    const toggleMenuVisible = () => {
        setMenuVisible(!menuVisible)
    }

    const handleClickOutside = (e: any) => {
        if (!menuVisible) return
        if (menuButtonRef.current && menuButtonRef.current.contains(e.target)) return
        if (menuPopupRef.current && !menuPopupRef.current.contains(e.target)) {
            setMenuVisible(false)
        }
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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuPopupRef])

    return (
        <div className="header-wrapper">
            <header className="header">
                <button
                    className="logo_btn"
                    onClick={() => handleMenuClick(0)}
                >
                    <img src="/img/logo1.png" alt="" className="header_logo-img" />
                </button>
                <nav className="header_nav">
                    <ul className="header_list">
                        {NAV_LiNKS.map((item, i) => (
                            <li key={i} className="header_item">
                                <button className="menu_btn" onClick={() => handleMenuClick(item.scrlPts)}>
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header_func">
                    <input type="radio" id="RU" value="RU" name="language" checked />
                    <label htmlFor="RU">RU</label>

                    <input type="radio" id="EN" value="RU" name="language" />
                    <label htmlFor="EN">EN</label>
                </div>
                <button className="connect_btn">
                    Подключиться
                </button>
                <div
                    ref={menuButtonRef}
                    className={classNames('menu-btn menu-btn--ml', {
                        'active': menuVisible
                    })}
                    onClick={toggleMenuVisible}
                >
                    <span></span>
                </div>
                <div
                    ref={menuPopupRef}
                    className={classNames('header__menu', {
                        'header__menu--visible': menuVisible,
                    })}
                >
                    <div
                        className="header__menu__overlay"
                        onClick={toggleMenuVisible}
                    />
                    <div className="header__menu__content-wrapper">
                        <div className="header__menu__content">
                            <div className="header__menu__close">
                                <div
                                    ref={menuButtonRef}
                                    className={classNames('menu-btn menu-btn--ml', {
                                        'active': menuVisible,
                                    })}
                                    onClick={toggleMenuVisible}
                                >
                                    <span></span>
                                </div>
                            </div>
                            <button
                                className="logo_btn"
                                onClick={() => handleMenuClick(0)}
                            >
                                <img src="/img/logo1.png" alt="" className="header_logo-img" />
                            </button>
                            <ul className="header_list">
                                {NAV_LiNKS.map((item, i) => (
                                    <li key={i} className="header_item">
                                        <button className="menu_btn" onClick={() => handleMenuClick(item.scrlPts)}>
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="header__menu__bottom">
                                <input type="radio" id="RU" value="RU" name="language" checked />
                                <label htmlFor="RU">RU</label>

                                <input type="radio" id="EN" value="RU" name="language" />
                                <label htmlFor="EN">EN</label>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )

}

export default Header