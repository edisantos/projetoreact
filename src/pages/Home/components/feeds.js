import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import PostCard from '../../../components/PostCard'
const useStyles = makeStyles((theme)=>({
    root:{
       
       }


}));
const post =[
//  {id:1,description:'Noticia de tecnologia'},
//  {id:1,description:'Noticia mercado financeiro'},
//  {id:1,description:'Noticia evangelicos'},
    {
        id:1,
        author:{
            id:1,
            name:'Edinaldo Santos',
            username:'edisantos',
            avatar:'/img/Avatar/avatar1.png',
        },
        title:'Criando app do zero com React.js',
        date: '01/06/2021',
        description:'Que curso legar. Muito top',
        hashtags:'#dotnet,#javascripts,#react.js',
        image:'/img/Post/post.png'
    },
    {
        id:2,
        author:{
            id:2,
            name:'Edinaldo Lemos',
            username:'edilemos',
            avatar:'/img/Avatar/avatar1.png'
        },
        title:'Trabalhando com Flutter',
        date: '01/06/2021',
        description:'Que curso legar. Muito top',
        hashtags:'#dotnet,#javascripts,#react.js',
        image:'/img/Post/post.png'
    }
];
function Feeds(){
    const classes = useStyles();
    return(
     
     <div className={classes.root}>
         {
            post.map(post =>(
                <PostCard key={post.id} post={post} /> 
            ))
         }
        
     </div>
    );
}
export default Feeds;