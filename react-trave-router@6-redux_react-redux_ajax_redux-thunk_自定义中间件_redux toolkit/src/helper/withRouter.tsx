import { useNavigate, NavigateFunction } from "react-router-dom"

export interface RouteComponentProps {
  navigate: NavigateFunction
}

export const withRouter = (Component) => {
  return (props) => {
    const navigate = useNavigate()
    return (
    <Component navigate={navigate} {...props}/>
    )
  }
}
