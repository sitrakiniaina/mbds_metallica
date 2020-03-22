import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import metallicaData from './../data/mettalica';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Instruments</TableCell>
            <TableCell align="right">Real name</TableCell>
            <TableCell align="right">Birth Date</TableCell>
            <TableCell align="right">Begin</TableCell>
            <TableCell align="right">End</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {metallicaData.members.map(member => (
            <TableRow key={member.id_member_musicbrainz}>
              <TableCell component="th" scope="row">
                {member.name}
              </TableCell>
              <TableCell align="left">{member.instruments}</TableCell>
              <TableCell align="left">{member.realName}</TableCell>
              <TableCell align="right">{member.birthDate}</TableCell>              
              <TableCell align="right">{member.begin}</TableCell>
              <TableCell align="right">{member.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
