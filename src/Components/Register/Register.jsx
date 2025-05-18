// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useState } from "react";
// import {Bars} from "react-loader-spinner"
// import { useNavigate } from "react-router-dom";
// import * as Yap from "yup";
// import { Helmet } from "react-helmet";

// export default function Register() {
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const  navigate=useNavigate()

//   async function getRegister(values) {
//     try {
//       setLoading(true);
//       const { data } = await axios.post(
//         `https://ecommerce.routemisr.com/api/v1/auth/signup`,
//         values
//       );
//       if (data.message === "success") {
//         // console.log(data);
//         navigate('/')
//         setMsg("");
//         setLoading(false);
//       }
//     } catch (error) {
//       // console.log(error)
//       setMsg(error.response.data.message);
//       setLoading(false);
//     }
//   }
//   const validationSchema = Yap.object({
//     name: Yap.string()
//       .required("Name required")
//       .min(2, "too small name")
//       .max(10, "too long name "),
//     email: Yap.string().required("Email required").email("email not valid"),
//     password: Yap.string()
//       .required("Password required")
//       .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
//     rePassword: Yap.string()
//       .required("rePassword required")
//       .oneOf([Yap.ref("password")]),
//     phone: Yap.string()
//       .required("phone is required")
//       .matches(/^(002)?(01)[0-25][0-9]{8}$/, "phone not valid"),
//   });
//   let formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       rePassword: "",
//       phone: "",
//     },
//     validationSchema,
//     onSubmit: getRegister,
//   });
//   // console.log(formik);

//   return (
//     <div className="container  py-3">
//       <Helmet>
//         <title>Register</title>
//         <meta name="description" content="Helmet application" />
//       </Helmet>
//       <div className="row">
//         <div className="col-md-12  mt-5 p-5">
//           <form
//             action=""
//             className="w-75 mx-auto my-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">Register Now :</h4>
//             {msg ? <p className="alert alert-danger">{msg}</p> : ""}

//             <label htmlFor="name">name:</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formik.values.name}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.name && formik.touched.name ? (
//               <p className="alert alert-danger ">{formik.errors.name}</p>
//             ) : (
//               ""
//             )}

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
//               <p className="alert alert-danger ">
//                 {formik.errors.password}
//               </p>
//             ) : (
//               ""
//             )}

//             <label htmlFor="rePassword">rePassword:</label>
//             <input
//               type="password"
//               name="rePassword"
//               id="rePassword"
//               value={formik.values.rePassword}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.rePassword && formik.touched.rePassword ? (
//               <p className="alert alert-danger ">
//                 {formik.errors.rePassword}
//               </p>
//             ) : (
//               ""
//             )}

//             <label htmlFor="phone">phone:</label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               value={formik.values.phone}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.phone && formik.touched.phone ? (
//               <p className="alert alert-danger ">{formik.errors.phone}</p>
//             ) : (
//               ""
//             )}

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
//                 "Register"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

export default function Register() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getRegister(values) {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      if (data.message === "success") {
        navigate('/');
        setMsg("");
        setLoading(false);
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name required")
      .min(2, "Too small name")
      .max(10, "Too long name"),
    email: Yup.string().required("Email required").email("Email not valid"),
    password: Yup.string()
      .required("Password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "Password not valid"),
    rePassword: Yup.string()
      .required("rePassword required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^(002)?(01)[0-25][0-9]{8}$/, "Phone not valid"),
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

  return (
    <div className="container py-4">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register for our e-commerce platform" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mt-5 px-3 px-md-5">
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <h4 className="mb-4 fw-bold fs-3 text-center">Register Now</h4>
            {msg ? <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100">{msg}</div> : null}

            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">{formik.errors.name}</div>
              ) : null}
            </div>

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

            <div className="mb-3">
              <label htmlFor="rePassword" className="form-label fw-medium">Re-enter Password</label>
              <input
                type="password"
                name="rePassword"
                id="rePassword"
                value={formik.values.rePassword}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">{formik.errors.rePassword}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formik.values.phone}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">{formik.errors.phone}</div>
              ) : null}
            </div>

            <button
              className="btn text-white green-color w-100 mt-3"
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
            >
              {loading ? (
                <span className="d-flex justify-content-center">
                  <Bars
                    height="20"
                    width="40"
                    color="white"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </span>
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