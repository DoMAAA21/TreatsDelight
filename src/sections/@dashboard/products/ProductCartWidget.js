import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Badge, Popover, List, ListItem, ListItemText, Divider, Card, CardContent, Button, Typography, Table, TableHead, TableCell, Paper, TableRow, TableBody, TableContainer, CardHeader } from '@mui/material';
import Iconify from '../../../components/iconify';

// Dummy cart items data
const dummyCartItems = [
  { id: 1, name: 'Adobo', price: 60.00, quantity: 1 },
  { id: 2, name: 'Chicken Fillet', price: 60.00, quantity: 1 },
  { id: 3, name: 'Caldereta', price: 60.00, quantity: 1 },
];

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 },
}));

export default function CartWidget() {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handlePopoverOpen = () => {
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <StyledRoot ref={anchorRef} onClick={handlePopoverOpen}>
        <Badge showZero badgeContent={dummyCartItems.length} color="error" max={99}>
          <Iconify icon="eva:shopping-cart-fill" width={24} height={24} />
        </Badge>
      </StyledRoot>
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorRef.current}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
         
          {/* <Card>
            <CardContent>
              <Typography variant="h6">Cart</Typography>
            </CardContent>
          </Card> */}
       
        <Card>
        <CardHeader
          title="Your Cart"
        />
          <CardContent>
          <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyCartItems.map((item) => (
            <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>P{item.price}</TableCell>
          </TableRow>
           
          ))}
          
          <TableRow>
          <TableCell>Total</TableCell>
          <TableCell/>
          <TableCell>P180</TableCell>
          </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        <Button variant="contained" fullWidth color="secondary">Check Out</Button>
        </CardContent>
        </Card>
      </Popover>
    </>
  );
}
