import React from "react";
import style from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

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
      return <div className={style.cartContainer}>
        <button className={style.button} 
          // onClick = { (e) => { this.setState({ isOpen: !this.state.isOpen }) }}
          onClick = { this.handleClick }
        >
          <FiShoppingCart />
          <span>购物车 2 (件)</span>
        </button>
        <div className={style.cartDropDown} style={{
          display: this.state.isOpen ? 'block' : 'none'
        }}>
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
  }
}

export default ShoppingCart
