import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Box,
} from '@mui/material';
import { Icon } from '@iconify/react';

const columns = [
  {
    id: 'storeName',
    label: 'Store',
  },
  {
    id: 'water',
    label: 'Water Expenses',
  },
  {
    id: 'electricity',
    label: 'Electricity',
  },
  {
    id: 'expenseAmount',
    label: 'Other Expeneses Amount',
  },
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'Action',
    label: 'Action',
  },
];

const data = [
  { id: 1, storeName: 'Danissa88',water: 2000,electricity:2000, expenseAmount: 1000, date: '2023-08-01',Action: <Icon icon="uil:edit" height={30} width={30}/> },
  { id: 2, storeName: 'Joymarie',water: 2300,electricity:1800, expenseAmount: 740, date: '2023-08-01',Action: <Icon icon="uil:edit" height={30} width={30}/> },
  { id: 3, storeName: 'RL kids',water: 1800,electricity:1400, expenseAmount: 434, date: '2023-08-01',Action: <Icon icon="uil:edit" height={30} width={30}/> },
  { id: 4, storeName: 'Kael Food Stall',water: 2000,electricity:2000, expenseAmount: 1000, date: '2023-08-01',Action: <Icon icon="uil:edit" height={30} width={30}/> },
  { id: 1, storeName: 'Reyno S',water: 2000,electricity:2000, expenseAmount: 1000, date: '2023-08-01',Action: <Icon icon="uil:edit" height={30} width={30}/> },
  
  
  // Add more dummy data for other stores...
];

const ExpensesManagement = () => {
  return (
    <Box p={3}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button variant="contained" color="primary" mt={2}>
        Add Expense
      </Button> */}
    </Box>
  );
};

export default ExpensesManagement;
