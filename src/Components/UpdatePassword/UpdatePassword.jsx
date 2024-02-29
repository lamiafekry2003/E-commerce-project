import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import {Bars} from "react-loader-spinner"
import { useNavigate } from "react-router-dom";
import * as Yap from "yup";
import { Helmet } from "react-helmet";

export default function UpdatePassword() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  let token=localStorage.getItem('userToken')
  async function updatepass(values) {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        values,
         {headers:{
            token
        }}
        
      );
       if (data.token) {
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
     currentPassword: Yap.string()
      .required("currentPassword required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "currentPassword not required"),
      password: Yap.string()
      .required("Password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
      rePassword: Yap.string()
      .required("rePassword required")
      .oneOf([Yap.ref("password")]),
  });
  let formik = useFormik({
    initialValues: {
      currentPassword:"",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: updatepass,
  });
  console.log(formik);

  return (
    <div className="container  py-3">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="row">
        <div className="col-md-12 mt-5 p-5">
          <form
            action=""
            className="w-75 mx-auto my-4"
            onSubmit={formik.handleSubmit}
          >
            <h4 className="mb-2 font-weight-bolder fw-bold text-center fs-2">Update Password :</h4>
            {msg ? <p className="alert alert-success">{msg}</p> : ""}

            <label htmlFor="currentPassword">currentPassword:</label>
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              value={formik.values.currentPassword}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.currentPassword && formik.touched.currentPassword ? (
              <p className="alert alert-danger ">{formik.errors.currentPassword}</p>
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
                "Update"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

