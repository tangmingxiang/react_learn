import style from './App.module.css';
import logo from './assets/images/logo.svg'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} alt="logo" className={style.appLogo} />
        <h1>罗伯特机器人炫酷吊炸天online购物平台</h1>
      </div>
      <ShoppingCart />
      <div className={style.robotList}>
        {
          robots.map(item => <Robot id={item.id} name={item.name} email={item.email} />)
        }
      </div>
    </div>
  );
}

export default App;
