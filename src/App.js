import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './pages/main/Main';
import Upload from './pages/upload/Upload';
import Update from './pages/upload/update';
import UploadUser from './pages/user/UploadUser';
import UpdateUser from './pages/user/UpdateUser';
import NewForm from './pages/upload/NewForm';
import Newuserform from './pages/user/NewForm'
import BookForm from './form/BookForm';
import UserForm from './form/UserForm';




function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/upload' element={<BookForm />}/>
  <Route path='/update/:bookId' element={<Update />}/>
  <Route path='/upload-user' element={<UserForm />}/>
  <Route path='/update-user/:enduserId' element={<UpdateUser />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
