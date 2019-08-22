import React from 'react'
import { Form, Field, withFormik } from "formik"
import * as Yup from "yup";

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

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name Required"),
        email: Yup.string().email("Email is not valid").required("Email Required"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password Required")
    }),
})(SignUpForm);

export default FormikSignUpForm;