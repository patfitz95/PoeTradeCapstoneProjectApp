import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'
import cookie from 'cookie'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


class Navigation extends Component {

cookies = cookie.parse(document.cookie)
render() {
    const cookies = cookie.parse(document.cookie)
    return (
    <Container>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                   Recipe Finder
                </Typography>
                <ul className="nav-list">
                        <Button color='inherit'><Link to="/SignUp">SignUp</Link></Button>
                        <Button color='inherit'><Link to="/Search">Search</Link></Button>
                        <Button color='inherit'><Link to="/Login">Login</Link></Button>

                    {cookies.loggedIn && (
        <div>
        
          <Button
            color='inherit'
            onClick={() => {
              window.location.assign("/Dashboard");
            }}
          >
            {" "}
            Dashboard{" "}
          </Button>
          <Button
            color='inherit'
            onClick={() => {
              document.cookie = "loggedIn=";
              window.location.assign("/");
            }}
          >
            {" "}
            Sign Out{" "}
          </Button>
        </div>
      )}
                </ul>
            </Toolbar>
        </AppBar>
            <Container>
            {
                cookies["loggedIn"] ?  
                    <h4>Welcome  {cookies['username']}!</h4>
                : null
            }
            </Container>
    </Container>
    )
    }
}
  
  export default Navigation;