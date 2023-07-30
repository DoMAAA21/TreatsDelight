import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { Icon } from '@iconify/react';

const Kiosk = () => {
  // Dummy orders data
  const orders = [
    { item: 'Adobo', price: 60, quantity: 1 },
    { item: 'Chicken Fillet', price: 60, quantity: 1 },
    { item: 'Caldereta', price: 60, quantity: 1 },

  ];

  return (
    <Grid


    >



      <Card>
        <CardHeader
          title="Please Proceed to Julie's Store"
          subheader="Show this receipt"
          action={<Icon icon="mdi:download" width={35} height={35} />} // Optional action elements like IconButton can be added here
        />




        <CardContent>
          <TableContainer component={Paper}>
            <Table>

              <TableRow style={{ backgroundColor: '#CCCDC6' }}  >
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>

              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.item}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>P{order.price.toFixed(2)}</TableCell>
                  </TableRow>
                ))}

                <TableRow style={{ backgroundColor: '#CCCDC6' }} >
                  <TableCell>Total</TableCell>
                  <TableCell />
                  <TableCell>P180</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Kiosk;
