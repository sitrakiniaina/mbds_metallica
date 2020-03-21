
import React from "react";
import "./Home.css";
import Hobby from './Hobby';
import TabMenu from './TabMenu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
  state = {
    newItem: null,
    hobbies: ["tennis", "foot"]
  };

  addHobby = () => {
    const { hobbies, newItem } = this.state;
    hobbies.push(newItem);
    this.setState({ hobbies }); // écriture raccourcie de ES6 équivalent à {hobbies:hobbies}
  };

  removeHobby = (hobbyToRemove) => {
    this.setState(prevState => {
      const newHobbiesList = prevState.hobbies.filter(
        hobby => hobby !== hobbyToRemove && hobby
      );
      return { hobbies: newHobbiesList };
    });
  };

  render() {
    // destructuration, permet d'utiliser des méthodes et propriétés
    // sans avoir besoin de les précéder par this. (par ex on utiliser
    // addHobby au lieu de this.addHobby, etc.)
    const { addHobby, removeHobby } = this;
    const { hobbies } = this.state;

      let listeDesHobbies = hobbies.map((h, index) => (
        <Hobby name={h} key={index} removeHobby={removeHobby} />
      ));

      return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Typography>Eto ilay a propos</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TabMenu></TabMenu>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
      );
  }
}

export default Home;