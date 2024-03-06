import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddCarForm = ({ onAddCar }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { make, model, year };
    onAddCar(newCar);
    setMake('');
    setModel('');
    setYear('');
  }

  return (
    <div>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Make" value={make} onChange={(e) => setMake(e.target.value)} required />
        <TextField label="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
        <TextField label="Year" type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary">Add Car</Button>
      </form>
    </div>
  );
}

export default AddCarForm;