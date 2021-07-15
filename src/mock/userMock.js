import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config)=>{
    console.log(config)
    const {email, password} = JSON.parse(config.data);
   // console.log(email,password);

    if(email!== 'edylemos@gmail.com' || password!== 'admin'){
        return [400, {message: 'e-mail ou senha são invalidas'}]
    }

    const user = {
        id:1,
        name: 'Edinaldo Santos',
        username: 'edylemos',
        email: 'edylemos@gmail.com',
        avatar: '/img/Avatar/avatar1.png'
    }
     return [200,{ user }]

 
});