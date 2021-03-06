import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AlbumDetailsHead from "./AlbumDetailsHead";
import metallicaData from './../data/mettalica';
import SongList from "./SongList";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import history from './../history';

import CustomAvatar from './../components/Common/CustomAvatar';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  avatar :{
    padding: theme.spacing(1),
    margin: 'auto',
    marginTop : '12px',
    width: 700,
  }
  
});
class AlbumDetails extends React.Component {
  album;
  albumid;
  constructor(props) {
    super(props);
    this.album = metallicaData.albums.find(c=>c.title== props.match.params.albumname);
  }
  render(){   
    const { classes ,
    } = this.props;
    console.log(this.album);
    return (    
    <div className={classes.root}>
      <AlbumDetailsHead albumid={this.album._id}> </AlbumDetailsHead>        
      <Paper className={classes.avatar}>
      <CustomAvatar  idgenerique={this.album._id} type="album"></CustomAvatar>
      </Paper>
      
      
      <Divider />      
      <SongList albumname={this.album.title} songs={this.album.songs} ></SongList>           
    </div>
    );
  }
}
export default withStyles(useStyles)(AlbumDetails)
