export default function Toggle (){
    
    function closeSignUp (){
        const container = document.querySelector('.container');
        container.classList.remove('toggled');
    };

    function openSignUp (){
        const container = document.querySelector('.container');
        container.classList.add('toggled');
    };

    return (
        <div className='toggle-container'>
        <div className='toggle-right toggle-panel text-white'>
          <h1 className='toggle-title title text-white mb-16'>Hello, My Friend !</h1>
          <p className='toggle-content font-16'>If you don't have an account, Please click this button to Sign Up</p>
          <button className='toggle-signup btn toggle-btn mt-16 text-white' onClick={openSignUp}>Sign Up</button>
        </div>
        <div className='toggle-left toggle-panel text-white'>
          <h1 className='toggle-title title mb-16 text-white'>Welcome!</h1>
          <p className='toggle-content font-16'>If you have an account, Please click this button to Sign In</p>
          <button className='toggle-login btn toggle-btn mt-16 text-white' onClick={closeSignUp}>Sign In</button>
        </div>
      </div>
    );
}