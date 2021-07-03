import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Feeds from './components/feeds';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles({
 root:{
     display:'flex',
     flexDirection:'column'
 },
 main:{
    height: '100vh',
    padding: 24
    // display: 'flex',
    // width: '1200px',
    // margin: '0 auto'
 },
 toolbar:{
     minHeight:64
 }
});
function Home(){
    const classes = useStyle();
    return (

     <div className={classes.root}>
        <Header/>
        <div className={classes.toolbar}></div>
         <main className={classes.main}>
         <Container maxWidth="lg">
         <Box display='flex'>
            <Navbar/>
            <Feeds/>
        </Box>
        </Container>
            
           
         </main>
         <Footer/>
     </div>
    );
}
export default Home;