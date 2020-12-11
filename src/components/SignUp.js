import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container,
  Grid
} from '@material-ui/core'
import { connect } from 'react-redux';
import { signUp } from '../redux/actions';
  
  class SignUp extends Component {
      state = {
          username: '',
          password: '',
        }
        
        handleTextChange = (e) => {
            const state = { ...this.state }
            state[e.target.name] = e.target.value
            this.setState(state)
        }
        
        signup = (e) => {
            e.preventDefault()
            this.props.signUp(this.state);
            
        }
        
        render() {
            return (
                <div className="App">
                    <Container maxWidth='sm'>
                    <br/>

        <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
        >

          <form className="login-form" onSubmit={this.signup}>
            <Grid item>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
              </Grid>
              <Grid item>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
              </Grid>
            <Grid item>
            <br/>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              fullWidth
              color="default">SignUp</Button>
              </Grid>
          </form>
              </Grid>
              </Container>
      </div>
    );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => {
      dispatch(signUp(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(SignUp)