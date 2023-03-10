import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import App from './App'
import './i18n/config'
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios'

axios.defaults.baseURL = 'http://123.56.149.216:8080/api'
axios.defaults.headers.common['x-icode'] = '5BFE3F36A4F04F4E'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
