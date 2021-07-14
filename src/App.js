import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SingIn from './pages/SingIn';
import Home from './pages/Home';
import theme from './theme'
import GuestRouter from './Routers/GuestRouter'

import './mock';

const useStyle = makeStyles({
  h1:{
      fontSize: 60,
      textAlign:'center'
  }

});
   



function App() {
  // console.log(window.location.href);
  // const url = window.location.href;
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <GuestRouter path="/SingIn" element={<SingIn/>} />
        <Route path="*" element={<h1 className={classes.h1}>Not found: Error 404</h1>}/>
      </Routes>
      </BrowserRouter>
      {/* {
        url === 'http://localhost:3000/'
        ? <Home />
        : <SingIn/>
      }  */}
    
     
</ThemeProvider>

  );
}

export default App;
