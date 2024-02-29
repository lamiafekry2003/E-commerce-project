import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as Yap from "yup";
import { userContext } from "../../UserContext";
import { Helmet } from "react-helmet";
export default function Login() {
  const {user,setIsUser,setLogin}=useContext(userContext)
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getLogin(values) {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        values
      );
      if (data.message === "success") {
        // console.log(data);
        setIsUser(data.token)
        setLogin(data.user.name)
        // if happen reload not lost token
        localStorage.setItem('userToken',data.token)
        localStorage.setItem('username',data.user.name)
        
        navigate("home");
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
    password: Yap.string()
      .required("Password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: getLogin,
  });
  // console.log(formik);

  return (
    <div className="container  py-3">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="row">
        <div className="col-md-12  mt-5 p-5">
          <form
            action=""
            className="w-75 mx-auto my-4"
            onSubmit={formik.handleSubmit}
          >
            <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">Login Now :</h4>
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
              <p className="alert alert-danger ">{formik.errors.password}</p>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-between">
            <Link to='forgetpass'><h4 className="fw-bold forget">Forget Password ?</h4></Link>
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
                "Login"
              )}
            </button>
            </div>
             
          </form>
        </div>
      </div>
    </div>
  );
}
