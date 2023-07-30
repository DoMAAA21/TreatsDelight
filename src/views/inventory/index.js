import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Button,
  Paper,
  Box,
  Checkbox,
  Grid,
  FormControlLabel
} from '@mui/material';
import { Icon } from '@iconify/react';

const initialInventory = [
  { id: 1, name: 'Caldereta', quantity: 10, price: 60, outOfStock: false },
  { id: 2, name: 'Chicken Fillet', quantity: 15, price: 60, outOfStock: false },
  { id: 3, name: 'Adobo', quantity: 20, price: 60, outOfStock: false },
  { id: 4, name: 'Breaded Pork', quantity: 20, price: 60, outOfStock: false },
  { id: 5, name: 'Kare Kare', quantity: 20, price: 60, outOfStock: false },
  { id: 6, name: 'Rice', quantity: 20, price: 10, outOfStock: false },
  // Add more food items as needed
];

const CanteenApp = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [changes, setChanges] = useState({});

  const handleSellItem = (itemId) => {
    setChanges((prevChanges) => ({
      ...prevChanges,
      [itemId]: (prevChanges[itemId] || 0) + 1,
    }));
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleRollback = (itemId) => {
    setChanges((prevChanges) => ({
      ...prevChanges,
      [itemId]: (prevChanges[itemId] || 0) - 1,
    }));
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleOutOfStock = (itemId, isOutOfStock) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, outOfStock: isOutOfStock } : item
      )
    );
  };

  const totalSales = initialInventory.reduce(
    (acc, item) =>
      acc +
      (changes[item.id] || 0) * item.price,
    0
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Box sx={{ marginBottom: 2 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h4">Julie's Store Inventory</Typography>

              <Icon icon="uil:history" width={40} height={40} />
            </CardContent>
          </Card>
        </Grid>
      </Box>




      <Grid container spacing={2}>
        {inventory.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Total Sold: {(changes[item.id] || 0)}</Typography>
                <Typography>Price: P{item.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSellItem(item.id)}
                  disabled={item.quantity === (changes[item.id] || 0) || item.outOfStock}
                >
                  Sell
                </Button>
                {(changes[item.id] || 0) > 0 && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRollback(item.id)}
                  >
                    Rollback
                  </Button>
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={item.outOfStock}
                      onChange={(e) => handleOutOfStock(item.id, e.target.checked)}
                    />
                  }
                  label="Out of Stock"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Sales: P{totalSales}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CanteenApp;
