import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography } from '@mui/material';

const stores = ['Store 1', 'Store 2', 'Store 3', 'Store 4', 'Store 5', 'Store 6', 'Store 7', 'Store 8'];
const expenseCategories = ['Water', 'Electricity', 'Rent', 'Other'];

const ExpenseManagementApp = () => {
  

  // Dummy expenses data
  const dummyExpenses = {
    'Store 1': {
      Water: 100,
      Electricity: 150,
      Rent: 800,
      Other: 200,
    },
    'Store 2': {
      Water: 120,
      Electricity: 180,
      Rent: 850,
      Other: 220,
    },
    // Add dummy expenses for other stores
  };

  const [expenses, setExpenses] = useState(dummyExpenses);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Super Admin - Store Expenses Management
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Store Name</TableCell>
                  {expenseCategories.map((category) => (
                    <TableCell key={category}>{category}</TableCell>
                  ))}
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stores.map((store) => (
                  <TableRow key={store}>
                    <TableCell>{store}</TableCell>
                    {expenseCategories.map((category) => (
                      <TableCell key={category}>{expenses[store][category]}</TableCell>
                    ))}
                    <TableCell>
                      <button>Edit</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExpenseManagementApp;
