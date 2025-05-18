// import axios from "axios";
// import { useFormik } from "formik";
// import React, {  useState } from "react";
// import { Bars } from "react-loader-spinner";
// import { useNavigate } from "react-router-dom";
// import * as Yap from "yup";
// import { Helmet } from "react-helmet";

// export default function ForgetPass() {
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   async function getForget(values) {
//     try {
//       setLoading(true);
//       const { data } = await axios.post(
//         `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
//         values
//       );
//       if (data.statusMsg === "success") {
//         // console.log("Password reset request successful.");
//         console.log(data);
//         navigate("/resetcode");
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
//   });
//   let formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema,
//     onSubmit: getForget,
//   });
//   // console.log(formik);

//   return (
//     <div className="container  py-3">
//       <Helmet>
//         <title>ForgetPassword</title>
//         <meta name="description" content="Helmet application" />
        
//       </Helmet>
//       <div className="row">
//         <div className="col-md-12 my-5 p-5">
//           <form
//             action=""
//             className="w-75 mx-auto my-4"
//             onSubmit={formik.handleSubmit}
//           >
//             <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">
//               Forget Password :
//             </h4>
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
//                 "Confirm"
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
        navigate("/resetcode");
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
  });

  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: getForget,
  });

  return (
    <div className="container py-4">
      <Helmet>
        <title>Forget Password</title>
        <meta name="description" content="Reset your password for our e-commerce platform" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 mt-5 px-3 px-md-5">
          <form className="my-4" onSubmit={formik.handleSubmit} action="#">
            <h4 className="mb-4 fw-bold fs-3 text-center">Forget Password</h4>
            {msg ? (
              <div className="alert alert-danger rounded-3 py-2 px-3 mt-2 mb-0 w-100">{msg}</div>
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
                "Confirm"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}