import * as React from 'react';
import {Table as MTable, TableBody} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

export default function Table(props) {
    const classes = useStyles();

    const getTableBody = () => {
    const getData = (row, index) => row.map((val, i) => <TableCell align="right" key={`${i}${index}`}>{val}</TableCell>);

        const bodyRows = props.rows.map((row, i) => (
            <TableRow key={`row${i}`}>
                {getData(row, i)}
            </TableRow>
        ));

        return (
            <TableBody>
                {bodyRows}
            </TableBody>
        );
    }

    const getTableHeader = () => {
    const headerCells = props.headerRow.map((header, i) => <TableCell key={i}>{header}</TableCell>);

        return (
            <TableHead>
                <TableRow>
                    {headerCells}
                </TableRow>
            </TableHead>
        );
    }
    return (
        <TableContainer>
            <MTable className={classes.table} >
                {getTableHeader()}
                {getTableBody()}
            </MTable>
        </TableContainer>
    )
  }