import './app.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/siderbar/Sidebar'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

const App = () => {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:id" element={<User/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App