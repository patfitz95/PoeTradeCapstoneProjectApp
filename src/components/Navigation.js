import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'
import cookie from 'cookie'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


class Navigation extends Component {
  
  state = {
    isLoggedIn: false
  }
  componentDidMount() {
    setInterval(()=> {
      const cookies = cookie.parse(document.cookie)
    if (cookies.loggedIn ==='true') {

      this.setState ({isLoggedIn: true})
    } else {
      this.setState ({isLoggedIn: false})
    }
    }, 250)
  }
  // componentDidUpdate() {
  //   console.log('isLoggedIn', this.state.isLoggedIn)
  // }

  
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
                        {!this.state.isLoggedIn &&(<Button color='inherit'><Link to="/Login">Login</Link></Button>)}
                    {this.state.isLoggedIn && (
        <div>
        
          <Button
            color='inherit' 
            >
            <Link to="/Dashboard">Dashboard</Link>

          </Button>
          <Link to="/Login"><Button
            color='inherit'
            onClick={() => {
              document.cookie = "loggedIn=";
            }}
          >
            Log Out
          </Button>
          </Link>
        </div>
      )}
                </ul>
            </Toolbar>
        </AppBar>
            
    </Container>
    )
    }
}
  
  export default Navigation;