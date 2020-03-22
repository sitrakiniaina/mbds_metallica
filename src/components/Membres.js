import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import metallicaData from './../data/mettalica';
import history from './../history';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
class Membres extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = (event, url) => {
    history.push(url);
  };
  render(){
    Membres.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    const {
        classes
    } =this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Instruments</TableCell>
              <TableCell>Real name</TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
            {metallicaData.members.map(member => (
              <TableRow key={member.id_member_musicbrainz}>
                <TableCell component="th" scope="row">
                  
                  <ButtonBase className={classes.image}
                                onClick={event=>this.handleClick(event,"/member/"+member.name)}>
                                    {member.name}
                                </ButtonBase>
                </TableCell>
                <TableCell align="left">{member.instruments}</TableCell>
                <TableCell align="left">{member.realName}</TableCell>          
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default Membres = withStyles(useStyles)(Membres);