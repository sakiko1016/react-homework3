import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import AddCarForm from './components/AddCarForm';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const App = () => {
  // Your existing code for managing state and routes

  return (
    <Router>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Car Inventory Dashboard</Typography>
          </Toolbar>
        </AppBar>
        
        <Switch>
          <Route exact path="/">
            <CarList cars={carsData} />
          </Route>
          <Route path="/car/:id">
            <CarDetail cars={carsData} />
          </Route>
          <Route path="/addCar">
            <AddCarForm onAddCar={handleAddCar} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;