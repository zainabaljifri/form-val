import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from "formik";
import { signupSchema } from "../AppSchema";

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export default function Signup() {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, }
        = useFormik({
            initialValues: { firstname: "", lastname: "", email: "", password: "", confirmPassword: "", },
            validationSchema: signupSchema,
            onSubmit,
        });


    return (
        <Form noValidate onSubmit={handleSubmit} autoComplete="off">
            <Row className="mb-3">
                <h1>Let's sign you up!</h1>
                <p>Discover a new way to create forms </p>
                <Form.Group as={Col} lg="6" className='py-2'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control autoComplete="off"
                        value={values.firstname}
                        onChange={handleChange}
                        id="firstname"
                        type="firstname"
                        placeholder="Enter First Name"
                        onBlur={handleBlur}
                        className={touched.firstname ? errors.firstname ? "input-error" : "input-valid" : ""}
                    />
                    {errors.firstname && touched.firstname && <span className="error">{errors.firstname}</span>}
                </Form.Group>
                <Form.Group as={Col} lg="6" className='py-2'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control autoComplete="off"
                        value={values.lastname}
                        onChange={handleChange}
                        id="lastname"
                        type="lastname"
                        placeholder="Enter Last Name"
                        onBlur={handleBlur}
                        className={touched.lastname ? errors.lastname ? "input-error" : "input-valid" : ""}
                    />
                    {errors.lastname && touched.lastname && <span className="error">{errors.lastname}</span>}
                </Form.Group>

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
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control autoComplete="off"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.confirmPassword ? errors.confirmPassword ? "input-error" : "input-valid" : ""}
                         />
                    {errors.confirmPassword && touched.confirmPassword && (<span className="error">{errors.confirmPassword}</span>)}
                </Form.Group>
                <Form.Group as={Col} lg="12" className='py-2'>
                    <Button className="col-12 btn" type="submit" disabled={isSubmitting}>Sign up</Button>
                </Form.Group>
            </Row>
        </Form>
    );
}