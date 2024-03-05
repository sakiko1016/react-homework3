import React from 'react';
import CarForm from './CarForm';

const DataTable = ({ data, onDelete, onUpdate }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Car Make</th>
                    <th>Car Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((car) => (
                    <tr key={car.id}>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>
                            <button onClick={() => onDelete(car.id)}>Delete</button>
                            <CarForm onSubmit={(formData) => onUpdate(car.id, formData)} car={car} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;