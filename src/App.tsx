import 'styles/main.scss'

import React from 'react'
import { ToastContainer } from 'react-toastify'

import Page from "./components/Page";

const App: React.FC = () => {
  return (
    <div id="app">
      <ToastContainer
        containerId="toast-main-container"
        className="toast-main-container"
        autoClose={5000}
        pauseOnFocusLoss
      />
      <Page />
    </div>
  )
}

export default App
