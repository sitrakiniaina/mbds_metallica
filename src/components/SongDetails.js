import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import metallicaData from './../data/mettalica';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomAvatar from './../components/Common/CustomAvatar';
import Container from '@material-ui/core/Container';
const useStyles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth : 'auto',
    },
    block :{
        margin : 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    liSection :{
        display : 'inline',
        float : 'left'
    },
    ulSection :{
        listStyle : 'none'
    }
  });
class SongDetails extends React.Component {
    songid;
    albumid;
    song;
    constructor(props) {
      super(props);
      this.albumid = props.match.params.albumname;    
      this.songid = props.match.params.songname;
      this.album = metallicaData.albums.find(c=>c._id==this.albumid);
      this.song = metallicaData.albums.find(c=>c.title==this.albumid).songs.find(c=>c.title==this.songid);
    }
    availableAlbum(){
        var available = [];       
        metallicaData.albums.map(album=> {
            album.songs.map(song =>{
                if(song.title==this.song.title){
                    var keyValue = {key:album.title,value:"/album/"+album.title};            
                    available.push(keyValue);
                }
            });
        });
        return available;
    }
    handleClick = (event,url) => {
        window.location.href=url;
    };
    render() {
        SongDetails.propTypes = {
            classes: PropTypes.object.isRequired,
        };
        const {
            classes
        } =this.props;
        return(
            <Container maxWidth="lg" >
                <Grid className={classes.block} container spacing={1}>                    
                    <Grid item xs={12}>
                        < Paper className={classes.paper}>
                        <Typography variant="h2" gutterBottom>
                            {this.song.title}
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CustomAvatar type="song" idgenerique={this.song._id}></CustomAvatar>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        < Paper className={classes.paper}>
                            <Typography gutterBottom>
                                {this.song.abstract}
                            </Typography>
                        </Paper>
                    </Grid> 
                    <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">       
                            <TableBody>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                    ISRC
                                </TableCell>
                                <TableCell align="lef">{this.song.isrc}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Duration
                                </TableCell>
                                <TableCell align="lef">{this.song.length}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Rank
                                </TableCell>
                                <TableCell align="lef">{this.song.rank}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Release Date

                                </TableCell>
                            <TableCell align="lef">{this.song.releaseDate}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Begin Date

                                </TableCell>
                            <TableCell align="lef">{this.song.begin}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                End Date

                                </TableCell>
                                <TableCell align="lef">{this.song.end}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Recorded
                                </TableCell>
                                <TableCell align="lef">{this.song.recorded}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Genre
                                </TableCell>
                                <TableCell align="lef">{this.song.genre}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Writer
                                </TableCell>
                                <TableCell align="lef">{this.song.writer}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Producer
                                </TableCell>
                                <TableCell align="lef">{this.song.producer}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Award
                                </TableCell>
                                <TableCell align="lef">{this.song.award}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                RecordLabel
                                </TableCell>
                            <TableCell align="lef">{this.song.recordLabel}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Language
                                </TableCell>
                                <TableCell align="lef">{this.song.language_detect}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                BPM
                                </TableCell>
                                <TableCell align="lef">{this.song.bpm}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Gain
                                </TableCell>
                                <TableCell align="lef">{this.song.gain}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Notes
                                </TableCell>
                                <TableCell align="lef">44333</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Also available in
                                </TableCell>
                                <TableCell align="lef">
                                    {
                                        this.availableAlbum().map(item=>{
                                            return <a  onClick={event=>this.handleClick(event,item.value)}>{item.key}  -  </a>;
                                        })
                                    }
                                </TableCell>             
                                </TableRow> 
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Cover versions (4)
                                </TableCell>
                                <TableCell align="lef">44333</TableCell>             
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>            
            </Grid>
        </Container>
        );
    }
    
}
export default SongDetails = withStyles(useStyles)(SongDetails);

