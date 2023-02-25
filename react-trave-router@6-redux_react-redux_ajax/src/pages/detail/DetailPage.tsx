import React from "react"
// import { RouteComponentProps } from "react-router-dom"
import { useParams } from 'react-router-dom'

// 注意这里是 type 而非 interface
// type MatchParams =  {
//   touristRouteId: string,
//   other: string
// }

// interface MatchParams_2 {
//   touristRouteId: string,
//   other: string
// }

export const DetailPage: React.FC = () => {
  const params = useParams<'touristRouteId'>()
  // const params = useParams<MatchParams>()
  // const params = useParams<keyof MatchParams_2>()
  // const params = useParams<"touristRouteId" | "other">()
  return (
    <h2>旅游详情路线: {params.touristRouteId} </h2>
    // <h2>旅游详情路线: {params.touristRouteId} {params.other} </h2>
  )
}
