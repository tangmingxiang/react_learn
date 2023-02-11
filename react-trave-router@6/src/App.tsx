import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, DetailPage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route element={<h2>页面不存在</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
