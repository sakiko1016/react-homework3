import React from 'react';

const CarTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Toyota</td>
          <td>Camry</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Ford</td>
          <td>Mustang</td>
          <td>2019</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CarTable;