import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const CarList = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <ListItem key={car.id}>
          <Link to={`/car/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary={`${car.make} ${car.model} (${car.year})`} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default CarList;