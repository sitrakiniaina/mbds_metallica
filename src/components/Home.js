
import React from "react";
import "./Home.css";
import Hobby from './Hobby';
import TabMenu from './TabMenu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import metallicaData from './../data/mettalica';
import history from './../history';

//styles
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
    width: 250
  },
}));
class Home extends React.Component {
  state = {
    
  };

  render() {
    // destructuration, permet d'utiliser des méthodes et propriétés
    // sans avoir besoin de les précéder par this. (par ex on utiliser
    // addHobby au lieu de this.addHobby, etc.)
    // const { imgSrc } = this.state;
    const { classes } = this.props;



      return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <img src={metallicaData.picture.medium}></img>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {metallicaData.name}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {metallicaData.dbp_abstract}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <TabMenu></TabMenu>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
      );
  }
}

export default withStyles(useStyles)(Home)