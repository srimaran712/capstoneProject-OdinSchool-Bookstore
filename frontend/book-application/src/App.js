import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookPage from './components/BookPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage'
import CheckoutPage from './pages/CheckoutPage';
import Success from './pages/SuccessPage'
import Cancel from './pages/Cancel';
import UserOrders from './pages/UserOrders';
import Footer from './components/Footer';



function App() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/book/:id' element={<BookPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
        <Route path='/orders' element={<UserOrders/>}/>
        <Route path='/success' element={<Success/>}/>
        
     

       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
