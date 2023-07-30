import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import ReactApexChart from 'react-apexcharts';


const AnalyticsPage = () => {
  // Dummy sales data for each dish

  const dummyMonthlySalesData = [
    { month: 'Monday', sales: 5045 },
    { month: 'Tuesday', sales: 3560 },
    { month: 'Wednesday', sales: 3500 },
    { month: 'Thursday', sales: 4000 },
    { month: 'Friday', sales: 3000 },
    { month: 'Saturday', sales: 1200 },
    { month: 'Sunday', sales: 0 },
  ];

  const months = dummyMonthlySalesData.map(item => item.month);
  const sales = dummyMonthlySalesData.map(item => item.sales);

  const dummySalesData = [
    { dish: 'Chicken Fillet', sales: 1200 },
    { dish: 'Adobo', sales: 1800 },
    { dish: 'Caldereta', sales: 1400 },
    { dish: 'Breader Pork', sales: 800 },
    { dish: 'Menudo', sales: 600 },
    { dish: 'Bicol Express', sales: 1000 },
    { dish: 'Others', sales: 500 },
  ];

  const dishes = dummySalesData.map(item => item.dish);
  const dishSales = dummySalesData.map(item => item.sales);

  // ApexCharts configuration for the bar chart
  const options = {
    chart: {
      id: 'sales-chart',
    },
    xaxis: {
      categories: months,
    },
  };

  const series = [
    {
      name: 'Sales',
      data: sales,
    },
  ];

  const barSeries = [
    {
      name: 'Sales',
      data: dishSales,
    },
  ];

  // ApexCharts configuration for the pie chart
  const pieOptions = {
    labels: dishes,
    dataLabels: {
      enabled: true,
    },
  };

  const pieSeries = dishSales;

  return (
    <div>
      <h1>Monthly Sales Analytics</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
          <h2>Top Sales Dishes</h2>
          <ReactApexChart options={options} series={series} type="bar" height={400} />
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card>
                <CardContent>
          <h2>Top Sales Dishes - Pie Chart</h2>
          <ReactApexChart options={pieOptions} series={pieSeries} type="pie" height={400} />
          </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnalyticsPage;
