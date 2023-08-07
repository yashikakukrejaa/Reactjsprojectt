
import './App.css';

import Nav from './Nav.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddBook from './Components/AddBook';
import UpdateBook from './Components/UpdateBook';
import Book from './Components/Book';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Book/>}/>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/update/:id' element={<UpdateBook/>}/> 
        <Route path='/logout' element={<h1>logout</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
        </Route>
        
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    
     
          
          </BrowserRouter>
          <Footer/>


    </div>
  );
}

export default App;
