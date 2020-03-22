import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import metallicaData from './../data/mettalica';
import history from './../history';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
class AlbumGroupe extends React.Component {
    constructor(props) {
        super(props);
    }
    routeChange(path) {
        history.push(path);
    }
    render(){
        AlbumGroupe.propTypes = {
            classes: PropTypes.object.isRequired,
        };
        const { classes ,
        } = this.props;
        return (
            <div className={classes.root}>
              <GridList cellHeight={250} className={classes.gridList} cols="4">       
                {metallicaData.albums.map(album => (
                  <GridListTile key={album._id} onClick={()=>this.routeChange("/album/"+album.title)}>
                    <img src={album?.cover?.medium??album.name} alt={album.title} />
                    <GridListTileBar
                      title={album.title+" - "+album.dateRelease}
                      subtitle={<span>by: {album.name}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${album.title}`} className={classes.icon}>
                          <InfoIcon />
                        </IconButton>                              
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          );
    };
}
export default withStyles(useStyles)(AlbumGroupe)

