import SignUp from './elements/signup';
import LogIn from './elements/login';
import Toggle from './elements/toggle';
import VerifyEmailPopUp from './elements/verifyEmailPopUp';
import './index.scss';
import '../../services/firebase';

function Auth(){  
  let isLoggin = localStorage.getItem('usr');
  if (isLoggin) 
    window.location.replace('/');
  return (
    <div className='auth-wrap'>
      <div className='container'>
        <SignUp/>
        <LogIn/>
        <Toggle/>
        <VerifyEmailPopUp/>
      </div>
    </div>
  );
};

export default Auth;
