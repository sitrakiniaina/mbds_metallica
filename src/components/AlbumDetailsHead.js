import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import metallicaData from './../data/mettalica';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 700,
    height : 250,
  },
  image: {
    width: 250,
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  listTitre : {
    backgroundColor : '#fafafa',
    width : '50px'
  },
  listDesc : {
    width : '50px',
    textAlign : "left",
  },
  containerDesc :{
      paddingTop : "27px"
  }
}));
function AlbumDetailsHead(props) {
  const classes = useStyles();
  var album;
  album = metallicaData.albums.find(c=>c._id==props.albumid);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={album?.cover?.medium??album.name} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className={classes.containerDec}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                    <List component="nav" aria-label="contacts">
                        <ListItem button>
                            <ListItemText className={classes.listTitre} primary="Album name" />
                            <ListItemText className={classes.listDesc} primary={album.title} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText className={classes.listTitre} primary="Artist" />
                            <ListItemText className={classes.listDesc} primary={album.id_artist} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText className={classes.listTitre} primary="Number of fan" />
                            <ListItemText  className={classes.listDesc} primary={album.deezerFans} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText  className={classes.listTitre} primary="UPC" />
                            <ListItemText  className={classes.listDesc} primary={album.upc} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText  className={classes.listTitre} primary="Contain Excplicit Lyrics" />
                            <ListItemText  className={classes.listDesc} primary={album.explicitLyrics?'YES':'NO'} />
                        </ListItem>
                    </List>
              </Grid>              
            </Grid>           
          </Grid>
        </Grid>
      </Paper>    
    </div>
    
  );
}
export default AlbumDetailsHead;