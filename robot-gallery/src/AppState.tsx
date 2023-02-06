import React, { useState, PropsWithChildren } from "react";

interface stateType {
  username: String,
  shoppingCartItem: {id: Number, name: String}[]
}

const context:stateType = {
  username: '阿莱克斯',
  shoppingCartItem: []
}

export const appState = React.createContext<stateType>(context)

export const appSetState = React.createContext<React.Dispatch<React.SetStateAction<stateType>> | undefined>(undefined)

export const AppState:React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, setState] = useState<stateType>(context)
  return (
    <appState.Provider value={state}>
      <appSetState.Provider value={setState}>
        { props.children }
      </appSetState.Provider>
    </appState.Provider>
  )
}
