import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardContent, Box, Switch } from '@mui/material';
import Swal from 'sweetalert2';
// components

// sections
import {
  AppWidgetSummary,

} from '../../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function UserDashboard() {
 
    const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = (event) => {
    const newState = event.target.checked;
    setIsSwitchOn(newState);

    const message = newState ? 'open' : 'close';
    const color = newState ? 'green' : 'grey';

    Swal.fire({
      title: `Store ${message.toUpperCase()}`,
      text: `Your store is now ${message}`,
      icon: 'success',
      timer: 1500,
      timerProgressBar: true,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
    });
  };
  return (
    <>
      <Helmet>
        <title> Dashboard  </title>
      </Helmet>

      <Container maxWidth="xl">
   
    

        <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Mobile Kiosk"  color="warning" icon={'material-symbols:jamboard-kiosk'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <AppWidgetSummary title="Reservations/Pickup"  icon={'fluent-mdl2:reservation-orders'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Delivery"  color="info" icon={'icon-park-outline:delivery'} />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Recommendations"  color="info" icon={'carbon:recommend'} />
          </Grid>

         

        </Grid>
      </Container>
    </>
  );
}
