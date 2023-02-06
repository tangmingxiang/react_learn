import React, { useContext } from "react"
import style from './Robot.module.css'
import { appState, appSetState } from "../AppState"

interface RobotProps {
  id: Number,
  name: String,
  email: String
}

// Context 和 useContext
// const Robot_1:React.FC<RobotProps>  = ({ id, name, email }) => {
//   return (
//     <>
//     <appContext.Consumer>
//       {(value) => {
//         return (
//           <div className={style.cardContainer}>
//             <img src={`https://robohash.org/${id}`} alt="robot" />
//             <h2>{name}</h2>
//             <p>{email}</p>
//             <p>作者：{value.username}</p>
//           </div>
//         )
//       }}
//     </appContext.Consumer>
//     </>
//   )
// }

const Robot:React.FC<RobotProps>  = ({ id, name, email }) => {
  const state = useContext(appState)
  const setState = useContext(appSetState)
  const addToCart = () => {
    if (setState) {
      setState(state => ({
        ...state,
        shoppingCartItem: [...state.shoppingCartItem, { id, name }]
      }))
    }
  }
  return (
    <>
      <div className={style.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>作者：{state.username}</p>
        <button onClick={addToCart}>加入购物车</button>
      </div>
    </>
  )
}

export default Robot
