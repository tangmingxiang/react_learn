import React, { useContext } from "react"
import style from './Robot.module.css'
import { appState } from "../AppState"
import { useAddToCart } from './AddToCart'

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

const RobotDisCount:React.FC<RobotProps>  = ({ id, name, email }) => {
  const state = useContext(appState)
  const addToCart = useAddToCart()
  return (
    <>
      <div className={style.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <h2>{name}</h2>
        <p>打折商品</p>
        <p>{email}</p>
        <p>作者：{state.username}</p>
        <button onClick={() => addToCart(id, name)}>加入购物车</button>
      </div>
    </>
  )
}

export default RobotDisCount
