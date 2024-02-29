import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as Yap from "yup";
import { Helmet } from "react-helmet";

export default function ResetCode() {
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    async function getCode(values) {
      try {
        setLoading(true);
        const { data } = await axios.post(
          `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
          values
        );
        if (data.status  === "Success") {
          // console.log(data);
          navigate("/resetpassword");
          setMsg("");
          setLoading(false);
        }
      } catch (error) {
        setMsg(error.response.data.message);
        setLoading(false);
      }
    }
    
    const validationSchema = Yap.object({
      resetCode: Yap.string().required("resetCode required").matches(/^[0-9]{5,6}$/,'Enter Valid Code'),
    });
    let formik = useFormik({
      initialValues: {
        resetCode: "",
      },
      validationSchema,
      onSubmit: getCode,
    });
    // console.log(formik);
  
    return (
      <div className="container  py-3">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="row">
          <div className="col-md-12 mt-5 p-5">
            <form
              action=""
              className="w-75 mx-auto my-4"
              onSubmit={formik.handleSubmit}
            >
              <h4 className="mb-2 font-weight-bolder fs-2 fw-bold text-center">Reset Code :</h4>
              {msg ? <p className="alert alert-danger">{msg}</p> : ""}
  
              <label htmlFor="resetCode">Verify code:</label>
              <input
                type="resetCode"
                name="resetCode"
                id="resetCode"
                value={formik.values.resetCode}
                className="form-control mb-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.resetCode && formik.touched.resetCode ? (
                <p className="alert alert-danger ">{formik.errors.resetCode}</p>
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
                  "Verfiy"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
