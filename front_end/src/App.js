import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/orders' element={<Orders />}/>
    </Routes>
  );
}

export default App;
