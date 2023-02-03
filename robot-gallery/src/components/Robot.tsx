import React from "react"
import style from './Robot.module.css'

interface RobotProps {
  id: Number,
  name: String,
  email: String
}

const Robot:React.FC<RobotProps>  = ({ id, name, email }) => {
  return (
    <>
    <div className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
    </>
  )
}
export default Robot