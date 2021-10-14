import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from '@mui/material';

import AddTask from '../components/AddTask';

const TableContainerComponent = ({ usersData, url }) => {
  console.log('Table Component URL', url);
  return (
    <>
      <AddTask url={url}></AddTask>
      <TableContainer component={Paper}>
        <Table aria-label='custom pagination table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((row, index) => (
              <TableRow key={row.index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableContainerComponent;
