import React from 'react'
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import authService from '../services/authService';

function GuestRoute({element:component, ...rest}){

    const isAuthenticated = authService.isAuthenticated();
     // const isAuthenticated = false;
    return(
       <Route {...rest} element={(
           isAuthenticated
           ? <Home />
           : component 
       )} />
    )
}

export default GuestRoute;