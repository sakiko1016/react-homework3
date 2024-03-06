import React, { useState } from 'react';
import CarTable from './CarTable';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="dashboard">
      {isLoggedIn ? (
        <>
          <h1>Welcome to the Car Inventory Dashboard</h1>
          <CarTable />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <h2>Please sign in to view the inventory:</h2>
          <button onClick={handleSignIn}>Sign In</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;