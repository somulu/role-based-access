import React from 'react';
import { useForm } from 'react-hook-form';

// import '../style.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='container pt-5'>
      <div className='row justify-content-sm-center pt-5'>
        <div className='col-sm-6 shadow round pb-3'>
          <h1 className='text-center pt-3 text-secondary'>Login Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label className='col-form-label'>Email:</label>
              <input
                type='text'
                className={`form-control ${errors.email && 'invalid'}`}
                {...register('email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                onKeyUp={() => {
                  trigger('email');
                }}
              />
              {errors.email && (
                <small className='text-danger'>{errors.email.message}</small>
              )}
            </div>
            <div className='form-group'>
              <label className='col-form-label'>Password:</label>
              <input
                type='password'
                className={`form-control ${errors.password && 'invalid'}`}
                {...register('password', {
                  required: 'Password is required',
                  min: {
                    value: 8,
                    message: 'Minimum Required age is 8',
                  },
                  max: {
                    value: 25,
                    message: 'Maximum allowed age is 25',
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[@!$])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message: 'Password must have A-Z, a-z, 0-9 and @,!,$',
                  },
                })}
                onKeyUp={() => {
                  trigger('password');
                }}
              />
              {errors.password && (
                <small className='text-danger'>{errors.password.message}</small>
              )}
            </div>

            <input
              type='submit'
              className='btn btn-primary my-3'
              value='Login'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
