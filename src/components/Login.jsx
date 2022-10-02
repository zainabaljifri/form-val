import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from "formik";
import { loginSchema } from "../AppSchema";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function Login() {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit }
    = useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginSchema,
      onSubmit,
    });
  return (
    <Form noValidate onSubmit={handleSubmit} autoComplete="off">
      <Row className="mb-3">
        <h1>Hello Again!</h1>
        <p>Continue where you left off</p>
        <Form.Group as={Col} lg="12" className='py-2'>
          <Form.Label>Email address</Form.Label>
          <Form.Control autoComplete="off"
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            onBlur={handleBlur}
            placeholder="e.g. johndoe@gmail.com"
            className={touched.email ? errors.email ? "input-error" : "input-valid" : ""}
          />
          {errors.email && touched.email && <span className="error">{errors.email}</span>}

        </Form.Group>
        <Form.Group as={Col} lg="12" className='py-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control autoComplete="off"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.password ? errors.password ? "input-error" : "input-valid" : ""}
          />
          {errors.password && touched.password && (<span className="error">{errors.password}</span>)}
        </Form.Group>
        <Form.Group as={Col} lg="12" className='py-2'>
          <Button className="col-12 btn" type="submit" disabled={isSubmitting}>Login</Button>
        </Form.Group>
      </Row>
    </Form>
  );
}
