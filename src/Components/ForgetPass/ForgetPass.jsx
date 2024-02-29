import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as Yap from "yup";
import { userContext } from "../../UserContext";
import { Helmet } from "react-helmet";

export default function ForgetPass() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getForget(values) {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        values
      );
      if (data.statusMsg === "success") {
        // console.log("Password reset request successful.");
        console.log(data);
        navigate("/resetcode");
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
  });
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: getForget,
  });
  // console.log(formik);

  return (
    <div className="container  py-3">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="row">
        <div className="col-md-12 my-5 p-5">
          <form
            action=""
            className="w-75 mx-auto my-4"
            onSubmit={formik.handleSubmit}
          >
            <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">
              Forget Password :
            </h4>
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
                "Confirm"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
