//import  from '../services/api.js';

export const authUser = () => {
    localStorage.setItem('dataUser', JSON.stringify({
        id: 1,
        name: 'John Doe',
        email: 'ema@.com',
        auth: false,
        role: 'admin'
    }));
    
    if(localStorage.getItem('dataUser')){
        return JSON.parse(localStorage.getItem('dataUser'));
    }else{
        return false;
    }
}