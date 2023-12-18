function openSignUp (){
    const container = document.querySelector('.container');
    container.classList.add('toggled');
};

function closeSignUp (){
    const container = document.querySelector('.container');
    container.classList.remove('toggled');
};

function handleBlur (e){
  let label = e.target.parentElement.querySelector('label');
  if (e.target.value !== ''){
    setTimeout (()=>{
        if (e.target.classList.contains('invalid')){
            e.target.style.borderColor = '#f01d1d';
            label.style.color = '#f01d1d';
        }
    }, 10);
    label.style.transform = 'translateY(-20px)';
    label.style.color = '#779bd6';
    label.style.fontSize = '1.2rem';
    e.target.style.borderColor = '#779bd6';
  }
  else{
    setTimeout (()=>{
        if (e.target.classList.contains('invalid')){
            e.target.style.borderColor = '#f01d1d';
        }
    }, 10);
    e.target.style.borderColor = 'transparent';
    e.target.style.backgroundColor = '#e6e6e6';
    label.style.fontSize = '1.4rem';
    label.style.backgroundColor = 'transparent';
    label.style.transform = 'translateY(0)';
    label.style.color = '#817f7f';
  }
}

function handleFocus (e){
  let label = e.target.parentElement.querySelector('label');
  e.target.style.borderColor = '#779bd6';
  e.target.style.backgroundColor = 'transparent';
  label.style.fontSize = '1.2rem';
  label.style.transform = 'translateY(-20px)';
  label.style.color = '#779bd6';
  label.style.backgroundColor = '#f1f1f1';
}

export {openSignUp, closeSignUp, handleBlur, handleFocus}