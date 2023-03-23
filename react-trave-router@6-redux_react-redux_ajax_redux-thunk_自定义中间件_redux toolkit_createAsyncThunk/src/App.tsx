import styles from './App.module.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, DetailPage, SearchPage, ShoppingCartPage } from './pages'
import { useSelector } from './redux/hooks';

// 搭建私有路由
const PrivateRoute = ({ children }) => {
  const jwt = useSelector((s) => s.user.token);
  return jwt ? children : <Navigate to="/signIn"/>;
};

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route path='/search/:keywords' element={<SearchPage />} />
          <Route path='/shoppingCart' element={<PrivateRoute><ShoppingCartPage /></PrivateRoute>} />
          <Route path='*' element={<h2>页面不存在</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
