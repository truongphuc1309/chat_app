import {removeAscent} from '../../../services/validator'

function createUserName (name, createAt){
    name = removeAscent (name);
    let subname = name.split(' ');
    name = subname.join('') + createAt.slice(-3);
    return name;
}

export default createUserName;