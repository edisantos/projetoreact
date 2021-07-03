import React from 'react'
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SvgIcon } from '@material-ui/core';
import {Bell} from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

const userStyle =  makeStyles({
 AppBar:{
     boxShadow:"none",

 },
 img:{
     maxHeight:60,
 },
 grow:{
     flexGrow:1
 },
 userSection:{
     display:'flex',
     alignItems:'center'
 },
 button:{
     marginRight:10
 },
 avatar:{
     marginLeft:10
 }

});
function Header(){
    const classes = userStyle();
    return(
        <AppBar position="fixed" color="inherit" className={classes.AppBar}>
        <Toolbar>
            <img src='/img/EdlyLemosDevLogo.png' alt="logo" className={classes.img}/>
            <div className={classes.grow}></div>
            <div className={classes.userSection}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Novo Post
                </Button>
                <SvgIcon>
                    <Bell></Bell>
                </SvgIcon>
               <Avatar src="/broken-image.jpg" className={classes.avatar} />
            </div>
        </Toolbar>
    </AppBar>
    );
}
export default Header;