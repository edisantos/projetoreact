import React from 'react'
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const userStyle =  makeStyles({
 AppBar:{
     boxShadow:"none"
 }
});
function Header(){
    const classes = userStyle();
    return(
        <AppBar position="fixed" color="inherit" className={classes.AppBar}>
        <Toolbar>
        {/* <div>
            <span>Conecta Dev</span>
        </div>
        <div>
            <Button variant="contained" color="primary">
            Novo Post
         </Button>
            <span>mg1</span>
            <span>mg2</span>
        </div> */}
        </Toolbar>
    </AppBar>
    );
}
export default Header;