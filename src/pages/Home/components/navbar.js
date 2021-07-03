import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ListSubheader } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Vamos criar um erofunction
const useStyles = makeStyles((theme)=>({
    root:{
         padding:theme.spacing(2), // 8*2 = 16
         //margin:275,
         marginRight:theme.spacing(2), // 8*2 = 16
       },
       button:{
           width:'100%'
       }


}));
const tags=[
   {id:1,name:'Javascripts'},
   {id:2, name:'ASP.NET'},
   {id:3, name:'C#'},
   {id:4, name:'NET CORE'},
   {id:5, name:'REACT'},
   {id:6, name:'REACT NATIVE'},
   {id:7,name:'SQL SERVER'}

];



function Navbar(){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
            <ListSubheader>
            {`Tags em Alta`}
        </ListSubheader>
        {
            tags.map((item)=>(
            <ListItem dense button key={`item-${item.id}-${item.name}`}>
                <ListItemText primary={`#${item.name}`}/>
            </ListItem>
            ))
        }
        </Paper>
        
    )
}
export default Navbar;