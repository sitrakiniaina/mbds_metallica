import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import metallicaData from './../../data/mettalica';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars(idgenerique,type) {
  const classes = useStyles();
  var element = metallicaData.albums.find(c=>c._id=idgenerique);
  if(type==="album"){
    element = metallicaData.albums.find(c=>c._id=idgenerique);
  }
  if(type==="song"){
    metallicaData.albums.map(album=>{
        album.songs.map(song=>{
            if(song._id==idgenerique){
                element = song;
            }
        });
    });
  }
  
  return (
    <div className={classes.root}>       
        {element.urlDeezer?<a href={element.urlDeezer}><Avatar alt="Deezer" src="https://wasabi.i3s.unice.fr/img/deezer_icon.svg" /></a>:""}
        {element.urlAmazon?<a href={element.urlAmazon}><Avatar alt="Amazon" src="https://wasabi.i3s.unice.fr/img/amazon_icon.svg" /></a>:""}
        {element.urlITunes?<a href={element.urlITunes}><Avatar alt="I Tune" src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" /></a>:""}
        {element.urlITunesl?<a href={element.urlITunesl}><Avatar alt="I Tune" src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" /></a>:""}

        {element.urlMusicBrainz?<a href={element.urlMusicBrainz}><Avatar alt="Music Brainz" src="https://wasabi.i3s.unice.fr/img/musicbrainz_icon.svg" /></a>:""}
        {element.urlSpotify?<a href={element.urlSpotify}><Avatar alt="Spotify" src="https://wasabi.i3s.unice.fr/img/spotify_icon.svg" /></a>:""}
        {element.urlWikipedia?<a href={element.urlWikipedia}><Avatar alt="Wikipedia" src="https://wasabi.i3s.unice.fr/img/wikipedia_icon.svg" /></a>:""}
        {element.urlAllmusic?<a href={element.urlAllmusic}><Avatar alt="All Music" src="https://wasabi.i3s.unice.fr/img/allmusic_icon.svg" /></a>:""}    
        {element.urlDiscogs?<a href={element.urlDiscogs}><Avatar alt="Discogs" src="https://wasabi.i3s.unice.fr/img/discogs_icon.svg" /></a>:""} 
        {element.urlGoEar?<a href={element.urlDiscogs}><Avatar alt="Go Ear" src="https://wasabi.i3s.unice.fr/img/goear_icon.svg" /></a>:""}
        {element.urlPandora?<a href={element.urlPandora}><Avatar alt="Pandora" src="" /></a>:""}     
        {element.urlYouTube?<a href={element.urlYouTube}><Avatar alt="Youtube" src="https://wasabi.i3s.unice.fr/img/youtube_icon.svg" /></a>:""}     
        {element.urlYouTube?<a href={element.urlLastFm}><Avatar alt="Last FM" src="https://wasabi.i3s.unice.fr/img/lastfm_icon.svg" /></a>:""}            
    </div>
  );
}
