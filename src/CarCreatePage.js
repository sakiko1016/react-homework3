import { useForm } from 'react-hook-form';

function CarCreatePage() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // call API to create car
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('make')} /> 
      <input {...register('model')} />
      <input {...register('year')} />
      
      <button type="submit">Create Car</button>
    </form>
  )
}