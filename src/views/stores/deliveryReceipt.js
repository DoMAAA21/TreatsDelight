import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { Icon } from '@iconify/react';

const DeliveryReceipt = () => {
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
                    title="Delivery Receipt-Julie's Store Order#2031"
                    subheader="Wait for a Text Message if order is ready"
                    action={<Icon icon="mdi:download" width={35} height={35} />} // Optional action elements like IconButton can be added here
                />




                <CardContent>
                    <TableContainer component={Paper}>
                        <Table>

                            <TableRow style={{ backgroundColor: '#e58799' }}  >
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

                                <TableRow style={{ backgroundColor: '#e58799' }} >
                                    <TableCell>Delivery Fee</TableCell>
                                    <TableCell />
                                    <TableCell>P20</TableCell>
                                </TableRow>

                                <TableRow style={{ backgroundColor: '#c13d60' }} >
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

export default DeliveryReceipt;
