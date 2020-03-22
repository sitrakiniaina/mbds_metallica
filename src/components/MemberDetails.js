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
import ButtonBase from '@material-ui/core/ButtonBase';
import history from './../history';
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
class MemberDetails extends React.Component {
    member;
    constructor(props) {
      super(props);  
      this.member = metallicaData.members.find(c=>c.name==props.match.params.membername)
    }   
    handleClick = (event,url) => {
        history.push(url);
    };
    render() {
        MemberDetails.propTypes = {
            classes: PropTypes.object.isRequired,
        };
        const {
            classes
        } =this.props;
        return(
            <Container maxWidth="lg" >
                <Grid className={classes.block} container spacing={1}>                    
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container>
                                <Grid xs={3}>
                                <ButtonBase className={classes.image}
                                onClick={event=>this.handleClick(event,"/")}>
                                    <img className={classes.img} alt="complex" src={metallicaData.picture.small} />
                                    <Typography  gutterBottom>
                                        {metallicaData.name}
                                    </Typography>
                                </ButtonBase>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography variant="h2" gutterBottom>
                                        {this.member.name}
                                    </Typography>
                                </Grid>                                
                                <Grid xs={3}>
                                    
                                </Grid>
                            </Grid>
                           
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CustomAvatar type="member" idgenerique={this.member.name}></CustomAvatar>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        < Paper className={classes.paper}>
                            <Typography gutterBottom>
                                {this.member.abstract}
                                {this.member.dbp_abstract}
                            </Typography>
                        </Paper>
                    </Grid> 
                    <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">       
                            <TableBody>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                    Name
                                </TableCell>
                                <TableCell align="lef">{this.member.name}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                    Gender
                                </TableCell>
                                <TableCell align="lef">{this.member.gender}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                    Bith Date
                                </TableCell>
                                <TableCell align="lef">{this.member.birthDate}</TableCell>             
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" component="th" scope="row">
                                Instruments

                                </TableCell>
                            <TableCell align="lef">{this.member.instruments}</TableCell>             
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
export default MemberDetails = withStyles(useStyles)(MemberDetails);

