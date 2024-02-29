import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import {Bars} from "react-loader-spinner"
import { useNavigate } from "react-router-dom";
import * as Yap from "yup";
import { Helmet } from "react-helmet";

export default function Register() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const  navigate=useNavigate()

  async function getRegister(values) {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      if (data.message === "success") {
        // console.log(data);
        navigate('/')
        setMsg("");
        setLoading(false);
      }
    } catch (error) {
      // console.log(error)
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }
  const validationSchema = Yap.object({
    name: Yap.string()
      .required("Name required")
      .min(2, "too small name")
      .max(10, "too long name "),
    email: Yap.string().required("Email required").email("email not valid"),
    password: Yap.string()
      .required("Password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
    rePassword: Yap.string()
      .required("rePassword required")
      .oneOf([Yap.ref("password")]),
    phone: Yap.string()
      .required("phone is required")
      .matches(/^(002)?(01)[0-25][0-9]{8}$/, "phone not valid"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: getRegister,
  });
  // console.log(formik);

  return (
    <div className="container  py-3">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="row">
        <div className="col-md-12  mt-5 p-5">
          <form
            action=""
            className="w-75 mx-auto my-4"
            onSubmit={formik.handleSubmit}
          >
            <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">Register Now :</h4>
            {msg ? <p className="alert alert-danger">{msg}</p> : ""}

            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="alert alert-danger ">{formik.errors.name}</p>
            ) : (
              ""
            )}

            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="alert alert-danger ">{formik.errors.email}</p>
            ) : (
              ""
            )}

            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="alert alert-danger ">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}

            <label htmlFor="rePassword">rePassword:</label>
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <p className="alert alert-danger ">
                {formik.errors.rePassword}
              </p>
            ) : (
              ""
            )}

            <label htmlFor="phone">phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="alert alert-danger ">{formik.errors.phone}</p>
            ) : (
              ""
            )}

            <button
              className="btn text-white green-color ms-auto d-block"
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
            >
              {loading ? (
                <Bars
                  height="20"
                  width="40"
                  color="white"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                ></Bars>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
