function validate  (selector, handleFn) {
    const formElement = document.querySelector(selector);
    let formConstraints = {};
    
    const validatorConstraints = {
        required: (value) =>{
            return value ? undefined : 'Fill in this blank!';
        },
        name : (value) => {
            value = removeAscent(value);            
            const regex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
            return value.match(regex) ? undefined : 'Invalid Name';
        },
        username: (value) => {
            const regex = /(^[a-zA-Z0-9]{0,20}$)/;
            return value.match(regex) ? undefined : 'Invalid User Name';
        },
        email: (value) =>{
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return value.match(regex) ? undefined : 'Invalid email!'; 
        },
        min: (min) =>{
            return (value)=> {
                return value.length >= parseInt(min) ? undefined : 'It must have 8 characters at least!'
            }
        }
    }

    if (formElement){
        const inputs = formElement.querySelectorAll('input[constraints]');
        for (let input of inputs){
            formConstraints[input.name] = [];
            let constraints =  input.getAttribute('constraints').split('&');
            for (let constraint of constraints){
                if (constraint.includes('='))
                {
                    let constraintInfo = constraint.split('=');
                    formConstraints[input.name]
                    .push(validatorConstraints[constraintInfo[0]](constraintInfo[1]));
                    continue;
                }
                formConstraints[input.name].push(validatorConstraints[constraint]);
            }

            input.onblur = hadleValidate;
            input.oninput = cleanMess;
        }
        
        function hadleValidate (event){
            let constraintFuncs = formConstraints[event.target.name];
            let message;
            constraintFuncs.some((constraintFunc) => {
                message = constraintFunc(event.target.value);
                return message;
            });

            let formMessage = event.target.parentElement.querySelector('.message');
            let input = event.target;

            if (`${message}` !== 'undefined')
            {
                formMessage.innerHTML = message;
                input.classList.add('invalid');
                return false;
            }
            else{
                input.classList.remove('invalid');
                return true;
            }
        }

        function cleanMess (event){
            let formMessage = event.target.parentElement.querySelector('.message');
            formMessage.innerHTML = '';
        }
        
        let submitBtn = formElement.querySelector('.btn-submit');
        submitBtn.onclick = handleSubmit;
    
        function handleSubmit (event){
            event.preventDefault();
            const inputs = formElement.querySelectorAll('input[constraints]');
            let isValid = true;

            for (let input of inputs){
                hadleValidate({target: input});
                isValid &&= hadleValidate({target: input});
            }
            
            if (isValid){
                if (handleFn)
                    handleFn();
            }
        }
    }
}

function removeAscent (str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

export default validate;
export {removeAscent}
