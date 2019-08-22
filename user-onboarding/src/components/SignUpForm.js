import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from "formik"
import * as Yup from "yup";
import axios from 'axios'

const SignUpForm = ({ errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status])
    return (
        <>
            <div className="form-parent">
                <h1>Login</h1>
                <hr />
                <Form>
                    <div className="form-input">
                        {touched.name && errors.name && (
                            <p>{errors.name}</p>
                        )}
                        <Field type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="form-input">
                        {touched.email && errors.email && (
                            <p>{errors.email}</p>
                        )}
                        <Field type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-input">
                        {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                        <Field type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-checkbox">
                        {touched.tos && errors.tos && (
                            <p>{errors.tos}</p>
                        )}
                        <label>
                            <Field type="checkbox" name="tos" />
                            Agree to Terms of Service
                    </label>
                    </div>
                    <div className="form-button">
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </div>
            {users.map(user => {
                return (
                    <>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </>
                )
            })}
        </>
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
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password Required"),
        tos: Yup.bool().test('tos', 'Acceptance of Terms of Service Required', value => value === true).required('Acceptance Required')
    }),

    handleSubmit(values, { setStatus }) {
        axios.post("https://reqres.in/api/users", values)
            .then(response => setStatus(response.data))
            .catch(error => console.log(error))
    }
})(SignUpForm);

export default FormikSignUpForm;