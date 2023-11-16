import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './assets/pages/home'
import Mlogin from './assets/pages/mlogin'
import DetailNews from './assets/pages/detailnews'
import HomeLog from './assets/pages/homelog'
import AdminPage from './assets/pages/adminpage'
import PrivateRoute from './assets/utils/privateroute'
import Mregister from './assets/pages/mregister'

export default function App () {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element = {<HomeLog/>}></Route>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/login' element = {<Mlogin/>}></Route>
      <Route path='/register' element = {<Mregister/>}></Route>
      <Route path='/logout' element = {<Mlogin/>}></Route>
      <Route path='/detail' element = {<DetailNews/>}></Route>
      <Route element = {<PrivateRoute/>}>
        <Route path='/admin' element = {<AdminPage/>}></Route>
      </Route>
    </Routes>
  </Router>
  </>
  )
}
