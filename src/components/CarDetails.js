import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const CarDetail = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id == id);

  if (!car) {
    return <Typography variant="h6">Car not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">Car Details</Typography>
      <Typography variant="body1">Make: {car.make}</Typography>
      <Typography variant="body1">Model: {car.model}</Typography>
      <Typography variant="body1">Year: {car.year}</Typography>
    </div>
  );
}

export default CarDetail;