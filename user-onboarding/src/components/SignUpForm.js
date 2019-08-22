import React from 'react'
import { Form, Field, withFormik } from "formik"

const SignUpForm = () => {
    return (
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
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        }
    },
})(SignUpForm);

export default FormikSignUpForm;