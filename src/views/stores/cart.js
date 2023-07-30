import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography, Grid, Card, CardContent,Box} from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../../sections/@dashboard/products';
// mock
import PRODUCTS from './mock';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Grid container spacing={2} justifyContent="center" style={{ background: 'linear-gradient(135deg, #f0f0f0, #ffffff)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4"> Delivery | Today's Menu</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Box m={2} />
     
      
        
       
       
     
      </Grid>
      <Grid style={{ background: 'linear-gradient(135deg, #f0f0f0, #ffffff)', padding: '20px', borderRadius: '8px', textAlign: 'center' }} justifyContent="center">
      <ProductList products={PRODUCTS} />
      <ProductCartWidget />
      </Grid>
    </>
  );
}
