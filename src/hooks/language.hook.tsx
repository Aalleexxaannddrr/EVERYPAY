import {useState, useCallback, useEffect} from 'react'

const storageName = 'languageData'

export const useLanguage = () => {
    const [language, setLanguage] = useState(null)

    const toggleLanguage = useCallback((lang) => {
        setLanguage(lang)

        localStorage.setItem(storageName, JSON.stringify({language: lang}))
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.language) {
            toggleLanguage(data.language)
        }
    }, [toggleLanguage])

    return {toggleLanguage, language}
}