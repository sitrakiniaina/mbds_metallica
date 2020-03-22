import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import history from './../history';

const useStyles = theme => ({
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
});
class SongList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleListItemClick = (event, url) => {
    console.log("mankato");
    history.push(url);
  };
  render(){   
    const { classes , songs , albumname
    } = this.props;
    return (
      <div className={classes.root}>                      
        <List component="nav">       
          {songs.map((song,i) => (               
          <ListItem

            button
            key={song._id}
            onClick={event => this.handleListItemClick(event, "/song/"+albumname+"/"+song.title)}
          >
            <ListItemText className={classes.listDesc} primary={i+1} />
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
