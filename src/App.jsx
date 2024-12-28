import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home'
import PrivateRoute from './privateRoutes';
import Login from './component/login';
import Signup from './component/signup';

function App() {

  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    </>

  )
}

export { App }
