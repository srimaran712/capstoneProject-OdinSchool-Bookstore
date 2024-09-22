import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes,Route} from 'react-router-dom'
import AddBook from './pages/AddBook';
import ListBooks from './pages/ListBooks';
import Orders from './pages/Orders';
import UpdateBook from './pages/UpdateBook';
import AddCategory from './pages/AddCategory';
import ChartPage from './pages/Chart';
import OrdersUpdate from './pages/OrdersUpdate'
import AdminAddForm from './pages/AddAdmin';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';




function App() {
  return (
    <div className="mx-1 sm:mx-[2%]">
    <Navbar/>
    <div className="flex">
         <Sidebar/>
         <Routes>
          <Route path='/addBook' element={<ProtectedRoute><AddBook/></ProtectedRoute>}/>
          <Route path='/listBooks' element={<ProtectedRoute><ListBooks/></ProtectedRoute>}/>
          <Route path='/orders' element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
          <Route path='/update/:id' element={<ProtectedRoute><UpdateBook/></ProtectedRoute>}/>
          <Route path='/addCategory' element={<ProtectedRoute><AddCategory/></ProtectedRoute>}/>
          <Route path='/sales' element={<ProtectedRoute><ChartPage/></ProtectedRoute>}/>
          <Route path='/order/:id' element={<ProtectedRoute><OrdersUpdate/></ProtectedRoute>}/>
          <Route path='/signup' element={<ProtectedRoute><AdminAddForm/></ProtectedRoute>}/>
          <Route path='/login' element={<LoginPage/>}/>
          
         </Routes>
    </div>
    </div>
  );
}

export default App;
