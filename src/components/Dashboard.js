import React from 'react'
import {
    Container,
    Table,
    TableCell,
    TableHead,
    TableRow
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

const Dashboard = (props) => {

const classes = useStyles();

    return (
        <Container maxWidth="lg" className="car-container">
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow className={classes.bold}>
                        <TableCell>Currency Trading Shortcuts</TableCell>
                        <TableCell>Buy Orders Shortcuts</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </Container>
    )
}

export default Dashboard