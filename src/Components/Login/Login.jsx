// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useContext, useState } from "react";
// import { Bars } from "react-loader-spinner";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yap from "yup";
// import { userContext } from "../../UserContext";
// import { Helmet } from "react-helmet";
// export default function Login() {
//   const {user,setIsUser,setLogin}=useContext(userContext)
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   async function getLogin(values) {
//     try {
//       setLoading(true);
//       const { data } = await axios.post(
//         `https://ecommerce.routemisr.com/api/v1/auth/signin`,
//         values
//       );
//       if (data.message === "success") {
//         // console.log(data);
//         setIsUser(data.token)
//         setLogin(data.user.name)
//         // if happen reload not lost token
//         localStorage.setItem('userToken',data.token)
//         localStorage.setItem('username',data.user.name)
        
//         navigate("home");
//         setMsg("");
//         setLoading(false);
//       }
//     } catch (error) {
//       setMsg(error.response.data.message);
//       setLoading(false);
//     }
//   }
  
//   const validationSchema = Yap.object({
//     email: Yap.string().required("Email required").email("email not valid"),
//     password: Yap.string()
//       .required("Password required")
//       .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
//   });
//   let formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: getLogin,
//   });
//   // console.log(formik);

//   return (
//     <div className="container  py-3">
//       <Helmet>
//         <title>Login</title>
//         <meta name="description" content="Helmet application" />
//     </Helmet>
//       <div className="row">
//         <div className="col-md-12  mt-5 p-5">
//           <form
//             action=""
//             className="w-75 mx-auto my-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">Login Now :</h4>
//             {msg ? <p className="alert alert-danger">{msg}</p> : ""}

//             <label htmlFor="email">email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formik.values.email}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.email && formik.touched.email ? (
//               <p className="alert alert-danger ">{formik.errors.email}</p>
//             ) : (
//               ""
//             )}

//             <label htmlFor="password">password:</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formik.values.password}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.password && formik.touched.password ? (
//               <p className="alert alert-danger ">{formik.errors.password}</p>
//             ) : (
//               ""
//             )}
//             <div className="d-flex justify-content-between">
//             <Link to='forgetpass'><h4 className="fw-bold forget">Forget Password ?</h4></Link>
//             <button
//               className="btn text-white green-color ms-auto d-block"
//               disabled={!(formik.isValid && formik.dirty)}
//               type="submit"
//             >
//               {loading ? (
//                 <Bars
//                   height="20"
//                   width="40"
//                   color="white"
//                   ariaLabel="bars-loading"
//                   wrapperStyle={{}}
//                   wrapperClass=""
//                   visible={true}
//                 ></Bars>
//               ) : (
//                 "Login"
//               )}
//             </button>
//             </div>
             
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userContext } from "../../UserContext";
import { Helmet } from "react-helmet";

export default function Login() {
  const { setIsUser, setLogin } = useContext(userContext);
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
        setIsUser(data.token);
        setLogin(data.user.name);
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('username', data.user.name);
        navigate("home");
        setMsg("");
        setLoading(false);
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Email required").email("Email not valid"),
    password: Yup.string()
      .required("Password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "Password not valid"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: getLogin,
  });

  return (
    <div className="container py-4">
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to our e-commerce platform" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mt-5 px-3 px-md-5">
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <h4 className="mb-4 fw-bold fs-3 text-center">Login Now</h4>
            {msg ? <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100">{msg}</div> : null}

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Link to="forgetpass" className="text-success text-decoration-none">
                <span className="fw-medium">Forget Password?</span>
              </Link>
              <button
                className="btn text-white green-color"
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
                  />
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