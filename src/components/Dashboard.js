import React from 'react'
import {
    Container,
    Table,
    TableHead,
    TableRow,
    TableCell,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//const cookies = cookie.parse(document.cookie)

const useStyles = makeStyles({
  bold: {
    fontWeight: '600',
  },
  underline: {
    fontWeight: '800',
    textDecoration: 'underline'
  }
});

const Dashboard = () => {

const classes = useStyles();

    return (
        <Container maxWidth="lg" className="car-container">
            <div className="flex-container">
            </div>
            <Table>	
                <TableHead>	
                    <TableRow className={classes.bold}>	
                        <TableCell>Recipe Name</TableCell>	
                        <TableCell>Rating</TableCell>	
                    </TableRow>	
                </TableHead>	
            </Table>
        </Container>
    )
}

export default Dashboard