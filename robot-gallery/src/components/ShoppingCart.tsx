import React from "react";
import style from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { appState } from '../AppState'

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { this.setState({ isOpen: !this.state.isOpen }) }
  handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log('target', e.target)
    console.log('currentTarget', e.currentTarget)
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  render(): React.ReactNode {
    return (
      <appState.Consumer>
        { value => (
          <div className={style.cartContainer}>
            <button className={style.button} 
              // onClick = { (e) => { this.setState({ isOpen: !this.state.isOpen }) }}
              onClick = { this.handleClick }
            >
              <FiShoppingCart />
              <span>购物车 { value.shoppingCartItem.length } (件)</span>
            </button>
            <div className={style.cartDropDown} style={{
              display: value.shoppingCartItem.length !== 0 && this.state.isOpen ? 'block' : 'none'
            }}>
              <ul>
                {value.shoppingCartItem.map(item => <li key={item.id + ''}>{item.name}</li>)}
              </ul>
            </div>
          </div>
        ) }
      </appState.Consumer>
    )
  }
}

export default ShoppingCart
