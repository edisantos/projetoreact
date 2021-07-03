import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
//Passando parametros

const useStyles = makeStyles((theme)=>({
  root:{
     marginBottom: theme.spacing(2)
     }
}));
function PostCard( {post} ){
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardHeader
       avatar={<Avatar src={post.author.avatar} /> }
       title={<Typography variant="h6">{post.title}</Typography>}
      />
      <CardContent>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}
export default PostCard;