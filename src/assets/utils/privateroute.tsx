import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {

    const data = {
        role : true
    }
  return data.role ? <Outlet/> : <Navigate to = "/login"/>;
  
  
}
