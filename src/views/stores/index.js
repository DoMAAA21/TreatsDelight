import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';
import randomColor from 'randomcolor';


// const storesData = Array.from({ length: 12 }, (_, index) => ({
//     id: index + 1,
//     name: faker.company.companyName(),
//     description: faker.lorem.slug(),
//     color: randomColor.apply(),
//   }));

const storesData = [
    {id:1,name:`Julie's Store`, description: '', color:'#fdf3f4'},
    {id:2,name:`Bembang's Store`, description: '', color:'#fbe8eb'},
    {id:3,name:`Kuya B's Store`, description: '', color:'#f6d5da'},
    {id:4,name:`Marites' Store`, description: '', color:'#ea9daa'},
    {id:5,name:`Melonie's Store`, description: '', color:'#e58799'},
    {id:6,name:`TUPTambayan`, description: '', color:'#d75c77'},
    {id:7,name:`Chick n fill`, description: '', color:'#c13d60'},
    {id:8,name:`Meryenda Po`, description: '', color:'#a22e4f'}

]

function StorePicker() {
  return (
  <>
   {/* <div style={{ padding: '20px' }}> */}
      <Grid container spacing={2} justifyContent="center" style={{ background: 'linear-gradient(135deg, #f0f0f0, #ffffff)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h4">Delivery | TUPT Canteen</Typography>
            </CardContent>
          </Card>
        </Grid>
        {storesData.map(store => (
          <Grid key={store.id} item xs={12} sm={6} md={4} lg={3} style={{ height: '200px', width: '200px' }}>
            <Card style={{ backgroundColor: store.color, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', borderRadius: '8px' }}>
              <CardContent>
                <Typography variant="h5">{store.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {store.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    {/* </div> */}
  </>
  );
}

export default StorePicker;
