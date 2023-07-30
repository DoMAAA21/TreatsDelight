import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid } from '@mui/material';

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Replace this with your backend API endpoint to fetch reservations data
    // For now, we'll use the dummyReservations array for demonstration purposes
    setReservations(dummyReservations);
  }, []);

  // Dummy reservations data
  const dummyReservations = [
    {
      id: 1,
      customerName: 'Mr. John Lester',
      pickupDate: '2023-07-25 10:32 AM',
      items: ['Chicken Fillet', 'Adobo', 'Caldereta'],
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Mrs. Maria Lapel',
      pickupDate: '2023-07-25 10:32 AM',
      items: ['Chicken Fillet', 'Adobo', 'Caldereta'],
      status: 'Complete',
    },
    {
      id: 3,
      customerName: 'Mr. Mike Johnson',
      pickupDate: '2023-07-25 10:30 AM',
      items: ['Chicken Fillet', 'Adobo', 'Caldereta'],
      status: 'Pending',
    },
  ];

  return (
    <div>
      <h1>Reservations for Pickup</h1>
      <Grid container spacing={2} justifyContent="center" sx={{
        background: 'linear-gradient(135deg, #f0f0f0, #ffffff)',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        '@media (max-width: 600px)': {
          padding: '10px', // Adjust padding for small screens
        },
      }}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                {/* ... TableHead content ... */}
              </TableHead>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell>{reservation.id}</TableCell>
                    <TableCell>{reservation.customerName}</TableCell>
                    <TableCell>{reservation.pickupDate}</TableCell>
                    <TableCell>{reservation.items.join(', ')}</TableCell>
                    <TableCell>
                      {reservation.status === 'Pending' ? (
                        <Button variant="contained" color="primary" sx={{
                          '@media (max-width: 600px)': {
                            fontSize: '12px', // Adjust font size for small screens
                            padding: '5px 10px', // Adjust padding for small screens
                          },
                        }}>
                          Pending
                        </Button>
                      ) : (
                        <Button variant="contained" color="success" sx={{
                          '@media (max-width: 600px)': {
                            fontSize: '12px', // Adjust font size for small screens
                            padding: '5px 10px', // Adjust padding for small screens
                          },
                        }}>
                          Complete
                        </Button>
                      )}
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

export default AdminDashboard;
