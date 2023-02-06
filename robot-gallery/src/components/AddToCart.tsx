import React, { useContext } from 'react'
import { appSetState } from '../AppState'
import { RobotProps } from './Robot'

const withAddToCart = (Children: React.ComponentType<RobotProps>) => {
  // HOC 返回一个匿名的类组件
    // return class extends React.Component {}
  // 或返回一个匿名的函数式组件
    // return (props) => {}
  return (props) => {
    const setState = useContext(appSetState)
    const addToCart = (id:Number, name:String) => {
      if (setState) {
        setState(state => ({
          ...state,
          shoppingCartItem: [...state.shoppingCartItem, { id, name }]
        }))
      }
    }
    return <Children {...props} addToCart={addToCart} />
  }
}

export default withAddToCart

export const useAddToCart = () => {
  const setState = useContext(appSetState)
  const addToCart = (id:Number, name:String) => {
    if (setState) {
      setState(state => ({
        ...state,
        shoppingCartItem: [...state.shoppingCartItem, { id, name }]
      }))
    }
  }
  return addToCart
}
