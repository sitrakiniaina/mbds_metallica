import React from 'react';
import {withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import metallicaData from './../../data/mettalica';
import PropTypes from 'prop-types';
const useStyles =theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
});
class CustomAvatar extends React.Component {
    element;
    constructor(props) {
        super(props);
        this.initElement();
    }
    initElement(){
        if(this.props.type=="album"){    
            this.element = metallicaData.albums.find(c=>c._id=this.props.idgenerique);
        }
        if(this.props.type=="song"){
            metallicaData.albums.map(album=>{
                album.songs.map(song=>{
                    if(song._id==this.props.idgenerique){
                        this.element = song;
                    }
                });
            });
        } 
        if(this.props.type=="member"){
            this.element= metallicaData.members.find(c=>c.name = this.props.idgenerique);
        }
    }    
    render(){
        CustomAvatar.propTypes = {
            classes: PropTypes.object.isRequired,
        };
        const { classes ,
        } = this.props;
        return (
            <Container className={classes.root} >       
                {this.element.urlDeezer?<a href={this.element.urlDeezer}><Avatar alt="Deezer" src="https://wasabi.i3s.unice.fr/img/deezer_icon.svg" /></a>:""}
                {this.element.urlAmazon?<a href={this.element.urlAmazon}><Avatar alt="Amazon" src="https://wasabi.i3s.unice.fr/img/amazon_icon.svg" /></a>:""}
                {this.element.urlITunes?<a href={this.element.urlITunes}><Avatar alt="I Tune" src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" /></a>:""}
                {this.element.urlITunesl?<a href={this.element.urlITunesl}><Avatar alt="I Tune" src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" /></a>:""}
                {this.element.urlMusicBrainz?<a href={this.element.urlMusicBrainz}><Avatar alt="Music Brainz" src="https://wasabi.i3s.unice.fr/img/musicbrainz_icon.svg" /></a>:""}
                {this.element.urlSpotify?<a href={this.element.urlSpotify}><Avatar alt="Spotify" src="https://wasabi.i3s.unice.fr/img/spotify_icon.svg" /></a>:""}
                {this.element.urlWikipedia?<a href={this.element.urlWikipedia}><Avatar alt="Wikipedia" src="https://wasabi.i3s.unice.fr/img/wikipedia_icon.svg" /></a>:""}
                {this.element.urlAllmusic?<a href={this.element.urlAllmusic}><Avatar alt="All Music" src="https://wasabi.i3s.unice.fr/img/allmusic_icon.svg" /></a>:""}    
                {this.element.urlDiscogs?<a href={this.element.urlDiscogs}><Avatar alt="Discogs" src="https://wasabi.i3s.unice.fr/img/discogs_icon.svg" /></a>:""} 
                {this.element.urlGoEar?<a href={this.element.urlDiscogs}><Avatar alt="Go Ear" src="https://wasabi.i3s.unice.fr/img/goear_icon.svg" /></a>:""}
                {this.element.urlPandora?<a href={this.element.urlPandora}><Avatar alt="Pandora" src="" /></a>:""}     
                {this.element.urlYouTube?<a href={this.element.urlYouTube}><Avatar alt="Youtube" src="https://wasabi.i3s.unice.fr/img/youtube_icon.svg" /></a>:""}     
                {this.element.urlYouTube?<a href={this.element.urlLastFm}><Avatar alt="Last FM" src="https://wasabi.i3s.unice.fr/img/lastfm_icon.svg" /></a>:""}            
            </Container>
          );
    }
}
export default withStyles(useStyles)(CustomAvatar)
