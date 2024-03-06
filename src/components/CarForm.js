import React from 'react';
import { useForm } from 'react-hook-form';

const CarForm = ({ onSubmit, onCancel, car }) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    onCancel();
  };

  React.useEffect(() => {
    if (car) {
      setValue('make', car.make);
      setValue('model', car.model);
      setValue('year', car.year);
    }
  }, [car, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label>
        Make:
        <input type="text" name="make" ref={register} />
      </label>
      <label>
        Model:
        <input type="text" name="model" ref={register} />
      </label>
      <label>
        Year:
        <input type="text" name="year" ref={register} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CarForm;