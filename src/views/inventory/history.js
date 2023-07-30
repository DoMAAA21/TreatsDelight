import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const History = [
  { item: 'Caldereta', action: 'Sold', timestamp: '2023-07-25 10:30 AM' },
  { item: 'ChickenFillet', action: 'Rolled back', timestamp: '2023-07-25 10:26 AM' },
  { item: 'Caldereta', action: 'Sold', timestamp: '2023-07-25 10:25 AM' },
  { item: 'ChickenFillet', action: 'Sold', timestamp: '2023-07-25 10:20 AM' },
  { item: 'Adobo', action: 'Sold', timestamp: '2023-07-25 10:19 AM' },
  // Add more dummy history data related to inventory as needed
];

const HistoryPage = ({ history }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Box sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">Inventory History</Typography>
            </CardContent>
          </Card>
        </Grid>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {History.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.item}</TableCell>
                  <TableCell>{entry.action}</TableCell>
                  <TableCell>{entry.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default HistoryPage;
