import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PresidentsView = ({presidents}) => {

    return (
     (presidents.length > 0) && <div>
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            ['President', 'Birthday', 'Birthplace', 'Death day', 'Death place'].map(column => (
                                <TableCell key={column} style={{fontSize: `2em`, color: 'rgb(14,56,91)'}}>{column}</TableCell>
                            ))
                        }
                     </TableRow>
                </TableHead>
                 <TableBody>
                {presidents.map(({birthday, birthplace, deathday, deathplace, firstName, lastName}) => (<TableRow key={birthday}>
                    <TableCell style={{fontSize: '1.5em'}}>{`${firstName} ${lastName}`}</TableCell>
                    <TableCell style={{fontSize: '1.5em'}}>{birthday}</TableCell>
                    <TableCell style={{fontSize: '1.5em'}}>{birthplace}</TableCell>
                    <TableCell style={{fontSize: '1.5em'}}>{deathday}</TableCell>
                    <TableCell style={{fontSize: '1.5em'}}>{deathplace}</TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>
        </Paper>
    </div>)
}

export default PresidentsView;
