import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
//Passando parametros

const useStyles = makeStyles((theme)=>({
  root:{
     marginBottom: theme.spacing(2)
     },
     subheader:{
         display:'flex',
         alignItems:'center',
        
     },
     caption:{
       marginRight: theme.spacing(1)
     },
     messege:{
       height:'auto',
       marginBottom:theme.spacing(2),
       padding:'0 24px'
     },image:{
        height:300,
        width: '100%',
        maxWidth:'100%'
     },
     content:{
      padding:0,
      
     },
     cardarea:{
       padding:5
     },
     favorite:{
       marginLeft:'auto'
     }

}));
function PostCard( {post} ){
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardHeader
       avatar={<Avatar src={post.author.avatar} /> }
       title={<Typography variant="h6">{post.title}</Typography>}
       subheader={
        <div className={classes.subheader}> {/* // Ao inves de usar a Div vc pode usar um elemento vazio ex: <></> */}
             <Typography variant="caption" className={classes.caption}>
           {'Avaliado por:'}
           </Typography>
          <Typography variant="subtitley2" className={classes.caption}>
            {post.author.name}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
           { post.date}
          </Typography>
         </div>
       
        
       }
      />
      <CardContent className={classes.content}>
         <Typography className={classes.messege} variant="body">
           {post.hashtags}
         </Typography>
      </CardContent>
      <CardActionArea className={classes.cardarea}>
      <img src={post.image} className={classes.image} alt="image"/>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
        <FavoriteIcon/>
        <Typography style={{cursor:'pointer'}} color="textSecondary" variant="boby2">
         {'10'}
        </Typography>
        </IconButton>
        <IconButton aria-label="comment">
        
        <MessageIcon/>
        <Typography style={{cursor:'pointer'}} color="textSecondary" variant="boby2">
         {'15'}
        </Typography>
        </IconButton>
        <IconButton aria-label="favorite" className={classes.favorite}>
        <BookmarkIcon/>
        <Typography style={{cursor:'pointer'}} color="textSecondary" variant="boby2">
       
        </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default PostCard;