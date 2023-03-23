import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import App from './App'
import './i18n/config'
import { Provider } from 'react-redux'
import rootStore from './redux/store'
import axios from 'axios'
// redux-persist 针对 react 开发的 Provider
import { PersistGate } from 'redux-persist/integration/react'

axios.defaults.baseURL = 'http://123.56.149.216:8080/api'
axios.defaults.headers.common['x-icode'] = '5BFE3F36A4F04F4E'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      {/* 刚开始 PersistGate 会去 localStorage 读取数据，可能会对 UI 造成阻塞，所以需要加上 loading  */}
      {/* 可以给 loading 传入 Spin 组件或 null */}
      <PersistGate loading={null} persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
