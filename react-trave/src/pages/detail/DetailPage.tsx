import React from "react"
import { RouteComponentProps } from "react-router-dom"

interface PropTypes {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<PropTypes>> = (props) => {
  return (
    <h2>旅游详情路线: {props.match.params.touristRouteId} </h2>
  )
}
