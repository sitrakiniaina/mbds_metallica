import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import metallicaData from './../data/mettalica';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow :1,
    width: '100%',
    maxWidth: 600,
    margin : 'auto',
    height : 400,
    overflow : "scroll",
    overflowX : 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  listTitre : {
    backgroundColor : '#fafafa',
    width : '100px',
    textAlign : "left"
  },
  listDesc : {
    width : '3px',
    textAlign : "left",
  },
}));
class SongList extends React.Component {
  albumurl;
  album;
  constructor(props) {
    
    super(props);
    this.album =metallicaData.albums.find(c=>c._id==props.albumid);   
    this.albumurl = "/album/"+this.album.title+"/song/";
  }
  handleListItemClick = (event, url) => {
    window.location.href=url;
  };
  render(){   
    const { classes ,
    } = this.props;
    return (
      <div className={classes.root}>                      
        <List component="nav">       
          {metallicaData.albums.find(c=>c.title==this.album.title).songs.map(song => (               
          <ListItem
            button

            onClick={event => this.handleListItemClick(event, this.albumurl+song.title)}
          >
            <ListItemText className={classes.listDesc} primary="1" />
            <ListItemText className={classes.listTitre} primary={song.title} />
          </ListItem>        
          ))
          }        
        </List>
      
    </div>
    );
  }

}
export default withStyles(useStyles)(SongList)
