// src/App.js
import React, { useState } from 'react';
import { Grid, Container, Typography, Card, CardContent, Box, Switch, Button, TextField, IconButton, FormControlLabel } from '@mui/material';
import { Icon } from '@iconify/react';


const menuItemsData = [
  { id: 1, name: 'Caldereta ', price: 60, available: true, editable: false },
  { id: 2, name: 'Chicken Fillet', price: 60, available: true, editable: false },
  { id: 3, name: 'Adobo', price: 60, available: false, editable: false },
  { id: 4, name: 'Breaded Pork', price: 60, available: true, editable: false },
  { id: 5, name: 'Bicol Express', price: 60, available: false, editable: false },
  { id: 6, name: 'Cliff Hauz', price: 60, available: false, editable: false },
 
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuItemsData);
  const [newMenuItem, setNewMenuItem] = useState('');

  const handleMenuToggle = (id) => {
    const updatedMenu = menuItems.map((item) =>
      item.id === id ? { ...item, available: !item.available } : item
    );
    setMenuItems(updatedMenu);
  };

  const handleEditClick = (id) => {
    const updatedMenu = menuItems.map((item) =>
      item.id === id ? { ...item, editable: true } : item
    );
    setMenuItems(updatedMenu);
  };

  const handlePriceChange = (id, event) => {
    const updatedMenu = menuItems.map((item) =>
      item.id === id ? { ...item, price: parseFloat(event.target.value) } : item
    );
    setMenuItems(updatedMenu);
  };

  const handleSaveClick = (id) => {
    const updatedMenu = menuItems.map((item) =>
      item.id === id ? { ...item, editable: false } : item
    );
    setMenuItems(updatedMenu);
  };

  const handleAddItemClick = () => {
    if (newMenuItem) {
      const newItem = {
        id: menuItems.length + 1,
        name: newMenuItem,
        price: 0,
        available: false,
        editable: false,
      };
      setMenuItems([...menuItems, newItem]);
      setNewMenuItem('');
    }
  };

  return (<>
        <Grid item xs={12} style={{ padding: '20px'}}>
          <Card>
            <CardContent>
              <Typography variant="h4">Today's Menu</Typography>
            </CardContent>
          </Card>
        </Grid>
    <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }} style={{ padding: '20px'}}>
       
          
              <Button variant="contained" fullWidth onClick={handleAddItemClick} size="large">
              Add
              </Button>
       
      </Grid>
      <Box m={2} />
     
    <Grid container spacing={2}  justifyContent="center" style={{ padding: '20px'}}>
      {menuItems.map((item) => (
        <Grid key={item.id} item xs={12} md={6} lg={4}>
          <Card
            onClick={() => handleMenuToggle(item.id)}
            sx={{
              opacity: item.available ? 1 : 0.5, // Reduce opacity when not available
            }}
          >
            <CardContent>
              {item.editable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Price"
                  type="number"
                  value={item.price}
                  onChange={(event) => handlePriceChange(item.id, event)}
                  onBlur={() => handleSaveClick(item.id)}
                />
              ) : (
                <Typography variant="h5" gutterBottom>
                  {item.name}
                </Typography>
              )}
              <FormControlLabel
                control={
                  <Switch
                    checked={item.available}
                    onChange={() => handleMenuToggle(item.id)}
                  />
                }
                label={`Price: P${item.price.toFixed(2)}`}
              />
              {!item.editable && (
                <IconButton
                  onClick={() => handleEditClick(item.id)}
                  size="small"
                >
                  <Icon icon="ic:outline-edit" />
                </IconButton>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
      
    </Grid>
    </>
  );
};

export default App
