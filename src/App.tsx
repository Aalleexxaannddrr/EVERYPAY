import 'styles/main.scss'

import React from 'react'
import {LanguageContext} from "./context/LanguageContext";
import Page from "./components/Page";
import {useLanguage} from "./hooks/language.hook";

const App: React.FC = () => {
    const {toggleLanguage, language} = useLanguage()

  return (
      <LanguageContext.Provider value={{
          language, toggleLanguage
      }
      }>
        <div id="app">
          <Page />
        </div>
      </LanguageContext.Provider>
  )
}

export default App
