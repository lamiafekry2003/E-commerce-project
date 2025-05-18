// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useState } from "react";
// import {Bars} from "react-loader-spinner"
// import { useNavigate } from "react-router-dom";
// import * as Yap from "yup";
// import { Helmet } from "react-helmet";

// export default function UpdatePassword() {
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   let token=localStorage.getItem('userToken')
//   async function updatepass(values) {
//     try {
//       setLoading(true);
//       const { data } = await axios.put(
//         `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
//         values,
//          {headers:{
//             token
//         }}
        
//       );
//        if (data.token) {
//         setMsg("");
//         setLoading(false);
//        }
//     } catch (error) {
//       // console.log(error)
//       setMsg(error.response.data.message);
//       setLoading(false);
//     }
//   }
//   const validationSchema = Yap.object({
//      currentPassword: Yap.string()
//       .required("currentPassword required")
//       .matches(/^[A-z][a-z0-9]{5,10}$/, "currentPassword not required"),
//       password: Yap.string()
//       .required("Password required")
//       .matches(/^[A-z][a-z0-9]{5,10}$/, "password not required"),
//       rePassword: Yap.string()
//       .required("rePassword required")
//       .oneOf([Yap.ref("password")]),
//   });
//   let formik = useFormik({
//     initialValues: {
//       currentPassword:"",
//       password: "",
//       rePassword: "",
//     },
//     validationSchema,
//     onSubmit: updatepass,
//   });
//   console.log(formik);

//   return (
//     <div className="container  py-3">
//       <Helmet>
//         <title>UpdatePassword</title>
//         <meta name="description" content="Helmet application" />
//       </Helmet>
//       <div className="row">
//         <div className="col-md-12 mt-5 p-5">
//           <form
//             action=""
//             className="w-75 mx-auto my-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <h4 className="mb-2 font-weight-bolder fw-bold text-center fs-2">Update Password :</h4>
//             {msg ? <p className="alert alert-success">{msg}</p> : ""}

//             <label htmlFor="currentPassword">currentPassword:</label>
//             <input
//               type="password"
//               name="currentPassword"
//               id="currentPassword"
//               value={formik.values.currentPassword}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.currentPassword && formik.touched.currentPassword ? (
//               <p className="alert alert-danger ">{formik.errors.currentPassword}</p>
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
//                 "Update"
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
import * as Yup from "yup";
import { Helmet } from "react-helmet";

export default function UpdatePassword() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem('userToken');

  async function updatepass(values) {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        values,
        {
          headers: {
            token
          }
        }
      );
      if (data.token) {
        setMsg("Password updated successfully");
        setLoading(false);
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .required("Current password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "Current password must start with a letter and be 6-11 characters long"),
    password: Yup.string()
      .required("New password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "New password must start with a letter and be 6-11 characters long"),
    rePassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  let formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: updatepass,
  });

  return (
    <div className="container py-4">
      <Helmet>
        <title>Update Password</title>
        <meta name="description" content="Update your password for our e-commerce platform" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mt-5 px-3 px-md-5">
          <form className="my-4" onSubmit={formik.handleSubmit} action="#">
            <h4 className="mb-4 fw-bold fs-3 text-center">Update Password</h4>
            {msg ? (
              <div className={`alert ${msg.includes("success") ? "alert-success" : "alert-danger"} rounded-3 py-2 px-3 mt-2 mb-0 w-100`}>
                {msg}
              </div>
            ) : null}

            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label fw-medium">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                id="currentPassword"
                value={formik.values.currentPassword}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.currentPassword && formik.touched.currentPassword ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">
                  {formik.errors.currentPassword}
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium">New Password</label>
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
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="rePassword" className="form-label fw-medium">Confirm New Password</label>
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
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">
                  {formik.errors.rePassword}
                </div>
              ) : null}
            </div>

            <button
              className="btn text-white bg-success w-100 mt-3"
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
                "Update"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
