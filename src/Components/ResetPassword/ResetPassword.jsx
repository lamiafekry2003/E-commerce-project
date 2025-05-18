// import axios from "axios";
// import { useFormik } from "formik";
// import React, {  useState } from "react";
// import { Bars } from "react-loader-spinner";
// import { useNavigate } from "react-router-dom";
// import * as Yap from "yup";
// import { Helmet } from "react-helmet";
// export default function ResetPassword() {
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   async function resetPass(values) {
//     try {
//       setLoading(true);
//       const { data } = await axios.put(
//         `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
//         values
        
//       );
//       console.log(values);
//       if (data.token) {
//       //     console.log(data);
//         navigate("/");
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
//     newPassword: Yap.string()
//       .required("newPassword required")
//       .matches(/^[A-z][a-z0-9]{5,10}$/, "newPassword not required"),
//   });
//   let formik = useFormik({
//     initialValues: {
//       email: "",
//       newPassword: "",
//     },
//     validationSchema,
//     onSubmit: resetPass,
//   });
//   // console.log(formik);

//   return (
//     <div className="container  py-3">
//       <Helmet>
//         <title>ResetPassword</title>
//         <meta name="description" content="Helmet application" />
//       </Helmet>
//       <div className="row">
//         <div className="col-md-12 mt-5 p-5">
//           <form
//             action=""
//             className="w-75 mx-auto my-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <h4 className="mb-2 font-weight-bolder  fw-bold text-center fs-3">New Password :</h4>
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

//             <label htmlFor="newPassword">New password:</label>
//             <input
//               type="password"
//               name="newPassword"
//               id="newPassword"
//               value={formik.values.newPassword}
//               className="form-control mb-3"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.errors.newPassword && formik.touched.newPassword ? (
//               <p className="alert alert-danger ">{formik.errors.newPassword}</p>
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
//                 "Send"
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
      if (data.token) {
        setMsg("Password reset successfully");
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Email required").email("Email not valid"),
    newPassword: Yup.string()
      .required("New password required")
      .matches(/^[A-z][a-z0-9]{5,10}$/, "New password must start with a letter and be 6-11 characters long"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: resetPass,
  });

  return (
    <div className="container py-4">
      <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="Reset your password for our e-commerce platform" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mt-5 px-3 px-md-5">
          <form className="my-4" onSubmit={formik.handleSubmit} action="#">
            <h4 className="mb-4 fw-bold fs-3 text-center">Reset Password</h4>
            {msg ? (
              <div className={`alert ${msg.includes("success") ? "alert-success" : "alert-danger"} rounded-3 py-2 px-3 mt-2 mb-0 w-100`}>
                {msg}
              </div>
            ) : null}

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
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label fw-medium">New Password</label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                value={formik.values.newPassword}
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.newPassword && formik.touched.newPassword ? (
                <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100 fs-6">
                  {formik.errors.newPassword}
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
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}