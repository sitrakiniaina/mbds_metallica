import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import metallicaData from './../data/mettalica';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
export default function TitlebarGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>       
        {metallicaData.albums.map(album => (
          <GridListTile key={album._id}>
            <img src={album?.cover?.big??album.name} alt={album.title} />
            <GridListTileBar
              title={album.title}
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
}
