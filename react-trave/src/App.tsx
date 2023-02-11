import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, DetailPage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route render={() => <h2>页面不存在</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
