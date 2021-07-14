import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService'
import FormHelperText from '@material-ui/core/FormHelperText';
//import axios from '../../utils/axios'; //removi pois agora vamos usar o arquivo authService




const useStyle = makeStyles((theme)=>({
 root:{
//     display:'flex',
//     flexDirection:'row',
     height:'100vh'
 },
 image:{
     backgroundImage:'url(/img/backgroud_city.jpg)',
     backgroundPosition:'center',
     backgroundSize:'cover',
     backgroundRepeat:'none',
     padding:theme.spacing(2),
     textAlign:'center'

 },
 login:{
     display:'flex',
     flexDirection:'column',
     alignItems:'center'
    
    
 },
 avatar:{
     background:theme.palette.primary.main,
     marginBottom: theme.spacing(1)
 },
 button:{
     marginTop:theme.spacing(1)
 },
 form:{
     margin:theme.spacing(0,4)
 }
// left:{
// background:'blue',
// // flexGrow:0,
// flexBasis:'58%',

// display:'flex',
// flexDirection:'column',
// justifyContent:'center',
// alignItems:'center'

// },
// right:{
// background:'orange',
// // flexGrow:0,
// flexBasis:'42%'
// },
// form:{
//  display:'flex',
//  flexDirection:'column',
//  margin:'64px 34px',
//  alignItems:'center'   
// }
}));

function Copyright(){
    return(
        <Typography variant="body2" align="center">
           {'Copyright '}
        </Typography>
    )
}

function SingIn(){
    const navigate = useNavigate();
    const classes = useStyle();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    //Esta é uma maneira de fazer:
    // function handlesSingIn(){
    //    // alert("OK")
    //    //Aqui será toda nossa regra de negocio para chamada a API.
    //    //Se retorno OK, direciona para home
    //    //senao exibe mensagem para o usuario
        

    //    //O Axios é um obj promise/promessa -- Ele é usado para requisião assingrona.
    // //    axios.get('https://api.github.com/users/edisantos')
    // //              .then(response => {
    // //                  console.log(response.data)
    // //              })
    // //              .catch(error =>{
    // //                  console.log("ocorreu erro")

     
    // //              })

    //     axios.post('/api/home/login').then(response => console.log(response)); // Esta é uma maneira de fazer.

    // }

    // Outra maniera de fazer usando async
  
    async function handlesSingIn(){

        try{
            //Esta linha de comando substitui pelo authServie
            //const response = await axios.post('/api/home/login', {email:'edylemos@gmail.com',password:'admin'});
           await authService.SignIn(email, password);
            //Se Ok - Status :200 Ira para pagina Home
            navigate('/');

        }catch(error){
            /// console.log(error.response);
             setErrorMessage(error.response.data.message);
        }
       
      
    }

   // console.log(email);
    return(

        <Grid container className={classes.root}>
           <Grid item container 
           direction="column" 
           justify="center" 
           alignItems="center" 
           md={7}
           className={classes.image}>
           <Typography style={{color:'#FFF', fontSize:35, lineHeight:'45px'}}>
           <strong> Simplificando a forma de conectar desenvolvedores de sofware</strong>
       </Typography>
        <Typography variang="body2" style={{color:'rgb(255.255,255,0.7)', fontSize:20, lineHeight:'30px', marginTop:30}}>
         Compartilhe seu conhecimento com toda a nossa rede de desenvolvedores de software.
         </Typography>
           </Grid>
           <Grid item md={5}>
            <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
                <Avatar className={classes.avatar}>
                 <LockIcon/>
                </Avatar>
               <Typography variant='h5'>
                Acesso
               </Typography>
               <form className={classes.form}>
                   <TextField
                   variant="outlined"
                   required
                   margin="normal"
                   fullWidth
                   id="email"
                   label="E-mail"
                   name="email"
                   autoComplete="email"
                   autoFocus
                   value={email}
                   onChange={(event)=> setEmail(event.target.value)}
                   />
                   <TextField
                   variant="outlined"
                   required
                   margin="normal"
                   fullWidth
                   type="password"
                   id="password"
                   label="Senha"
                   name="password"
                   autoComplete="current-password"
                   value={password}
                   onChange={(event)=> setPassword(event.target.value)}
                   />
                  <Button fullWidth variant="contained" color="primary" className={classes.button} onClick={(handlesSingIn)}>
                    Entrar
                  </Button>
                  {
                     errorMessage &&
                      <FormHelperText error> 
                          { errorMessage }
                      </FormHelperText>
                  }
                  <Grid item>
                      <Link> Esqueceu sua senha?</Link>
                  </Grid>
                  <Grid item>
                  <Link>Não tem uma conta? Registre-se</Link>
                  </Grid>
                  
               </form>
            </Box>
           </Grid>
        </Grid>
    //    <div className={classes.root}>
    //        {/* Flex item container*/}
    //      <div className={classes.left}>
    //        <Typography style={{color:'#FFF', fontSize:35, lineHeight:'45px'}}>
    //         <strong> Simplificando a forma de conectar desenvolvedores de sofware</strong>
    //        </Typography>
    //        <Typography variang="body2" style={{color:'rgb(255.255,255,0.7)', fontSize:20, lineHeight:'30px', marginTop:30}}>
    //       Compartilhe seu conhecimento com doda a nossa rede de desenvolvedores de software.
    //        </Typography>
    //      </div>
    //        {/* Flex item */}
    //      <div className={classes.right}>
    //          <form className={classes.form}>
    //             <h4>Acesso</h4>
    //             <input type="text" id="usuario" name="usuario"/>
    //             <input type="text" id="senha" name="senha"/>
    //          </form>
    //      </div>
    //    </div>
    )
}

export default SingIn;