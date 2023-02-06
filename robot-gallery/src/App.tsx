import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import logo from './assets/images/logo.svg'
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/ShoppingCart'

interface Props {

}

interface State {
  robotGallery: any[],
  count_1: number,
  count_2: number
}

class App_1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: [],
      count_1: 0,
      count_2: 0
    }
  }

  componentDidMount(): void {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }
  
  render(): React.ReactNode {
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src={logo} alt="logo" className={style.appLogo} />
          <h1>罗伯特机器人炫酷吊炸天online购物平台</h1>
        </div>
        
        <button onClick={ () => {
          // setState 的第二个参数可以接受一个函数，来获取更新之后的 state
          this.setState( { count_1: this.state.count_1 + 1 }, () => { console.log('after count_1', this.state.count_1) })
          console.log('before count_1', this.state.count_1)
        } }>count_1</button>
        <span>{ this.state.count_1 }</span>

        <button onClick={ () => {
          // setState 的第一个参数可以接受一个函数，该函数的第一个参数为 preState 第二个参数为 preProps
          // setState 的第二个参数可以接受一个函数，来获取更新之后的 state
          this.setState( (preState, preProps) => ({ count_2: preState.count_2 + 1 }), () => { console.log('after count_2', this.state.count_2) })
          this.setState( (preState, preProps) => ({ count_2: preState.count_2 + 1 }), () => { console.log('after count_2', this.state.count_2) })
          console.log('before count_2', this.state.count_2)
        } }>count_2</button>
        <span>{ this.state.count_2 }</span>

        <ShoppingCart />
        <div className={style.robotList}>
          {
            this.state.robotGallery.map(item => <Robot id={item.id} name={item.name} email={item.email} key={item.id} />)
          }
        </div>
      </div>
    );
  }
  
}

const App:React.FC = (props) => {
  const [ count, setCount ] = useState<number>(0)
  const [ robotGallery, setRobotGallery ] = useState<any[]>([])
  const [ loading, setLoading ] = useState<boolean>(false)

  useEffect(() => {
    document.title = `点击了${count}次`
  }, [count])

  // useEffect 中使用 async 和 await
  // useEffect 中处理 loading
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch('http://jsonplaceholder.typicode.com/users')
      // .then(response => response.json())
      // .then(data => setRobotGallery(data))
      const data = await response.json()
      setRobotGallery(data)
      setLoading(false)
    }
    fetchData()    
  }, [])

  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} alt="logo" className={style.appLogo} />
        <h1>罗伯特机器人炫酷吊炸天online购物平台</h1>
      </div>

      <button onClick={ () => { setCount(count+1) } }>count_1</button>
      <span>{ count }</span>

      <ShoppingCart />
      {!loading ?
        <div className={style.robotList}>
          {
            robotGallery.map((item, index) => index % 2 === 0 ? 
              <Robot id={item.id} name={item.name} email={item.email} key={item.id} />
              : <RobotDiscount id={item.id} name={item.name} email={item.email} key={item.id} />)
          }
        </div> : <h2>loading 加载中</h2>
      }
    </div>
  );
  
}

export default App;
