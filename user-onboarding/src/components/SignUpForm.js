import React from 'react'
import { Form, Field, withFormik, Formik } from "formik"

const SignUpForm = () => {
    return (
        <Formik>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <label>
                    <Field type="checkbox" name="tos" />
                    Agree to Terms of Service
                </label>
                <button type="submit">Submit</button>
            </Form>
        </Formik>

    )
}

export default SignUpForm;