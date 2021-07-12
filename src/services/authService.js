import { reject } from 'q'
import axios from '../utils/axios'

class AuthService{
   //Aqui vamos implementar outras funçoes no futuro

   // Pesquisar o que é uma Promise JavaScript
    SignIn(email, password){
        return new Promise((resolve, rejetc)=>{
            axios.post('/api/home/login', {email,password})
            .then(response =>{
                if(response.data.user){
                resolve(response.data.user)
                }else{
                  reject(response.data.error)  
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }
}

const authService = new  AuthService();

export default authService;