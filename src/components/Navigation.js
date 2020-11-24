import React, { Component } from 'react'
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'
import cookie from 'cookie'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const cookies = cookie.parse(document.cookie)

class Navigation extends Component {

logout = () => {
console.log(`logging out`)
document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

render() {
    return (
    <Container>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                   Recipe Sharing App
                </Typography>
                <ul className="nav-list">
                        <Button color='inherit'><Link to="/Search">Search</Link></Button>

                    {
                    cookies["loggedIn"] ?  

                        <Button color='inherit'><Link to="/Dashboard">Dashboard</Link></Button>
                    : null
                    }
                        {
                            cookies["loggedIn"] ?  
                            <Link onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                            }}>
                            <Button color='inherit'>Logout</Button>
                            </Link>
                            : 
                            <Button color='inherit'><Link to="/">Login</Link></Button>
                        }

                </ul>
            </Toolbar>
        </AppBar>
            <Container>
            {
                cookies["loggedIn"] ?  
                    <h4>Welcome  {cookies['Username']}</h4>
                : null
            }
            </Container>
    </Container>
    )
    }
}

export default Navigation