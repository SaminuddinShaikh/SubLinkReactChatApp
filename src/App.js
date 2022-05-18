import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route exact element={<PrivateRoute  />}>
            <Route exact path="/" element={<Home />} />
      </Route>
      <Route exact element={<PrivateRoute  />}>
            <Route exact path="/profile" element={<Profile />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
