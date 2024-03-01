import axios from "axios";
import { useFormik } from "formik";
import React, {  useState } from "react";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yap from "yup";
import { Helmet } from "react-helmet";
export default function ResetPassword() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function resetPass(values) {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        values
        
      );
      console.log(values);
      if (data.token) {
      //     console.log(data);
        navigate("/");
        setMsg("");
        setLoading(false);
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }

  const validationSchema = Yap.object({
    email: Yap.string().required("Email required").email("email not valid"),
    newPassword: Yap.string()
      .required("newPassword required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "newPassword not required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: resetPass,
  });
  // console.log(formik);

  return (
    <div className="container  py-3">
      <Helmet>
        <title>ResetPassword</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="row">
        <div className="col-md-12 mt-5 p-5">
          <form
            action=""
            className="w-75 mx-auto my-4"
            onSubmit={formik.handleSubmit}
          >
            <h4 className="mb-2 font-weight-bolder  fw-bold text-center fs-3">New Password :</h4>
            {msg ? <p className="alert alert-danger">{msg}</p> : ""}

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

            <label htmlFor="newPassword">New password:</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={formik.values.newPassword}
              className="form-control mb-3"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.newPassword && formik.touched.newPassword ? (
              <p className="alert alert-danger ">{formik.errors.newPassword}</p>
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
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
