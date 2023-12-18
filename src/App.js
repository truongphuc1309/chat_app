import { Routes, Route } from 'react-router-dom';

import Auth from './components/auth/index';
import EmailVerification from './components/auth/emailVerification';
import Main from './components/main/index';

function App() {
  return (
     <Routes>
       <Route path='/' element={<Main/>}></Route>
       <Route path='/auth' element={<Auth/>}></Route>
       <Route path='/auth/verifyemail' element={<EmailVerification/>}></Route>
     </Routes>
  );
}

export default App;
