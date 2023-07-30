import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Grid,
  Button,
  Box
} from '@mui/material';
import { Icon } from '@iconify/react';

function App() {
  const [dishes, setDishes] = useState([
    { id: 1, name: 'Caldereta', price: 60.00, enabled: true},
    { id: 2, name: 'Chicken Fillet', price: 60.00, enabled: true },
    { id: 3, name: 'Adobo', price: 60.00, enabled: true },
    { id: 4, name: 'Breaded Pork', price: 60.00, enabled: true },
    
  ]);

  const handleToggleEnabled = (id) => {
    const updatedDishes = dishes.map((dish) =>
      dish.id === id ? { ...dish, enabled: !dish.enabled } : dish
    );
    setDishes(updatedDishes);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ background: 'linear-gradient(135deg, #f0f0f0, #ffffff)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}
      >
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">Manage Menu (28/07/2023)</Typography>
            </CardContent>
          </Card>
        </Grid>
       
        <Grid item xs={12}>
        <Button variant="contained" fullWidth>Add</Button>
        </Grid>
        {dishes.map((dish) => (
          <Grid key={dish.id} item xs={12} sm={6} md={4} lg={3} style={{ height: '200px', width: '200px' }}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '10px',
                borderRadius: '8px',
                background: dish.enabled ? '#c3e6cb' : '#f8d7da', // Change background color based on enabled status
              }}
            >
              <CardHeader
                title={dish.name}
                action={
                  <IconButton edge="end" aria-label="edit">
                    <Icon icon="material-symbols:edit" />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Status: {dish.enabled ? 'Available' : 'Not Available'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: {dish.price}
                </Typography>
            
              <CardActions>
                <IconButton
                  color={dish.enabled ? 'primary' : 'secondary'}
                  aria-label="toggle enabled"
                  onClick={() => handleToggleEnabled(dish.id)}
                >
                  {dish.enabled ? <Icon icon="material-symbols:toggle-on" height={35} width={35} /> : <Icon icon="material-symbols:toggle-off-outline" height={35} width={35} />}
                </IconButton>
              </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
