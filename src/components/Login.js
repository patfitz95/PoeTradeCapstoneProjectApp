import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {
  TextField,
  Button,
  Container,
  Grid
} from '@material-ui/core'
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import axios from 'axios';
  
  class Login extends Component {
      state = {
          username: '',
          password: '',
          redirectHome: null
        }

        componentDidUpdate(prevProps, prevState) {
          if (prevProps.loginLoading && !this.props.loginLoading) {
            if (this.props.msg) {
              // trigger re render with History
              this.props.history.push('/Dashboard');
            }
          }
        }
        
        handleTextChange = (e) => {
            const state = { ...this.state }
            state[e.target.name] = e.target.value
            this.setState(state)
        }
        
        login = async (e)  => {
            e.preventDefault()
            await axios.post("/auth/login", {username: this.state.username, password: this.state.password}).then(res => {
              document.cookie = "loggedIn=true"
              
            })
            this.setState({
              redirectHome: true
            })
        }
        
        // this.state.redirectHome {
        //   return <Redirect to="/Search"/>
        // }
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

          <form className="login-form" onSubmit={this.login}>
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
              color="default">Login</Button>
              </Grid>
          </form>
              </Grid>
              </Container>
              { this.state.redirectHome && <Redirect to="/Search"/>}
      </div>
    );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch(login(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login);