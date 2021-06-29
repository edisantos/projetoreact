import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Feeds from './components/feeds';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
 root:{
     display:'flex',
     flexDirection:'column'
 },
 main:{
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto'
 }
});
function Home(){
    const classes = useStyle();
    return (

     <div className={classes.root}>
        <Header/>
        <div className='toolbar'></div>
         <main className={classes.main}>
            <Navbar/>
            <Feeds/>
         </main>
         <Footer/>
     </div>
    );
}
export default Home;