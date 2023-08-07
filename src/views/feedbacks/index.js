import React from 'react';
import { Avatar, Box, Typography, Rating, Grid, Card, CardContent } from '@mui/material';
import { Icon } from '@iconify/react';

const Feedback = ({ image, name, rating, comment }) => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar alt={name} src={image} />
      <Box ml={2}>
        <Typography variant="body1" fontWeight="bold">
          {name}
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating value={rating} readOnly />
          <Typography variant="body2" color="text.secondary" ml={1}>
            ({rating})
          </Typography>
        </Box>
        <Typography variant="body2">{comment}</Typography>
      </Box>
    </Box>
  );
};

const ChickenFilletFeedback = () => {
  const feedbackData = [
    {
      id: 1,
      image: 'URL_TO_CUSTOMER_IMAGE_1',
      name: 'John Lucas',
      rating: 4.5,
      comment: 'The chicken fillet was delicious and juicy!',
    },
    {
      id: 2,
      image: 'URL_TO_CUSTOMER_IMAGE_2',
      name: 'Ranarie Cruz',
      rating: 5,
      comment: 'Best chicken fillet I have ever had!',
    },
    // Add more feedback items as needed
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Customer Feedbacks
              
            </Typography>
            <img src="../assets/images/products/product_2.jpg" alt="Chicken Fillet" style={{ width: '100%', marginBottom: '16px' }} />
            {feedbackData.map((feedback) => (
              <Feedback
                key={feedback.id}
                image={feedback.image}
                name={feedback.name}
                rating={feedback.rating}
                comment={feedback.comment}
              />
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ChickenFilletFeedback;
