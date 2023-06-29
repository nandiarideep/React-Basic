import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Sign = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-400 to-indigo-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? 'ring-red-500'
                  : 'focus:ring-purple-400'
              }`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? 'ring-red-500'
                  : 'focus:ring-purple-400'
              }`}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white rounded-md py-2 px-4 hover:bg-purple-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
