// import React, { useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import img1 from "../../assessts/freshcart-logo.svg";
// import { userContext } from "../../UserContext";
// import { getCart, useGetCart } from "../useCart";
// import { getWishlist, useGetWish } from "../useWishlist";
// export default function Navbar() {
//   let { data } = useGetCart("getCart", getCart);
//   let { data: fav } = useGetWish("getWishlist", getWishlist);
//   // console.log(data)
//   const { user, setIsUser, setOpen, login } = useContext(userContext);
//   const navigate = useNavigate();
//   // console.log(user);
//   function LogOut() {
//     setIsUser(null);
//     localStorage.removeItem("userToken");
//     navigate("");
//   }

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to="home">
//             <img src={img1} alt=" logo" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {user ? (
//               <>
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="home">
//                       Home
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="products">
//                       Products
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="gategories">
//                       Gategories
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="brands">
//                       Brands
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="allorders">
//                       Orders
//                     </NavLink>
//                   </li>
//                 </ul>
//               </>
//             ) : (
//               ""
//             )}
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="wishlist">
//                   <i class="fa-solid fa-heart text-main fa-lg"></i>
//                 </Link>
//               </li>

//               <li
//                 className="nav-item position-relative"
//                 data-bs-toggle={!user ? "modal" : ""}
//                 data-bs-target="#exampleModal"
//                 onClick={() => {
//                   setOpen(true);
//                 }}
//               >
//                 <Link className="nav-link" to={"cart"}>
//                   <i
//                     className="fa-solid fa-cart-shopping"
//                     style={{ color: "#0aad0a" }}
//                   ></i>
//                 </Link>
//                 <span className="d-inline-block cart d-flex justify-content-center align-items-center position-absolute  rounded-circle ">
//                   {data?.data?.numOfCartItems}
//                 </span>
//               </li>
//               {!user ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to="register">
//                       Register
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink className="nav-link" to=" ">
//                       Login
//                     </NavLink>
//                   </li>
//                 </>
//               ) : (
//                 <div class="dropdown mt-1" style={{marginRight:'10px'}}>
//                 <button
//                   class=" border border-0"
//                   type="button"
//                   data-bs-toggle="dropdown" aria-expanded="false">

//                   <i class="fas fa-user fa-sm text-main "></i>
//                 </button>
//                 <ul class="dropdown-menu">
//                 {login ? (
//                 <li className="nav-item">
//                   <span className="nav-link ms-1 text-center">
//                     <span className="fw-bold"> Hi  <span className="text-main">{login}</span></span>
//                   </span>
//                 </li>
//               ) : (
//                 ""
//               )}
//               <hr/>
//                 <li className="nav-item ">
//                 <NavLink className="nav-link" to="updatepass">
//                   Update password
//                 </NavLink>
//                 </li>
//                  <li className="nav-item">
//                    <a className="nav-link curser" onClick={LogOut}>
//                      Logout
//                    </a>
//                  </li>
//                 </ul>
//               </div>
//                 // <li className="nav-item">
//                 //   <a className="nav-link curser" onClick={LogOut}>
//                 //     Logout
//                 //   </a>
//                 // </li>
//               )}
//                <li className="nav-item ">
//                 <Link className="nav-link" to="">
//                   <i class="fa-brands fa-facebook"></i>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="">
//                   <i class="fa-brands fa-instagram"></i>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="">
//                   <i class="fa-brands fa-twitter"></i>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="">
//                   <i class="fa-brands fa-youtube"></i>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="">
//                   <i class="fa-brands fa-tiktok"></i>
//                 </Link>
//               </li>

//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* model */}
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <p className="fw-bold text-center">Please Login First....</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img1 from "../../assessts/freshcart-logo.svg";
import { userContext } from "../../UserContext";
import { getCart, useGetCart } from "../useCart";
import { getWishlist, useGetWish } from "../useWishlist";

export default function Navbar() {
  let { data } = useGetCart("getCart", getCart);
  useGetWish("getWishlist", getWishlist);
  const { user, setIsUser, setOpen, login } = useContext(userContext);
  const navigate = useNavigate();

  // Function to close the navbar collapse on mobile
  const closeNavbar = () => {
    const collapseElement = document.getElementById("navbarSupportedContent");
    if (collapseElement && window.bootstrap && window.bootstrap.Collapse) {
      console.log("Closing navbar collapse...");
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
        toggle: false,
      });
      bsCollapse.hide();
    } else {
      console.warn("Bootstrap Collapse not available or element not found.");
      // Fallback: manually hide the collapse
      if (collapseElement) {
        collapseElement.classList.remove("show");
      }
    }
  };

  function LogOut() {
    console.log("Logging out...");
    setIsUser(null);
    localStorage.removeItem("userToken");
    navigate("");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="home">
            <img src={img1} alt="FreshCart Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user ? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-lg-row flex-column">
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link"
                      to="home"
                      onClick={closeNavbar}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link"
                      to="products"
                      onClick={closeNavbar}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link"
                      to="gategories"
                      onClick={closeNavbar}
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link"
                      to="allorders"
                      onClick={closeNavbar}
                    >
                      Orders
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-lg-row flex-column">
                  <li className="nav-item p-2">
                    <Link
                      className="nav-link"
                      to="wishlist"
                      onClick={closeNavbar}
                    >
                      <i className="fa-solid fa-heart text-main fs-5"></i>
                    </Link>
                  </li>
                  <li
                    className="nav-item position-relative p-2"
                    data-bs-toggle={!user ? "modal" : ""}
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      console.log("Cart icon clicked, user:", user);
                      setOpen(true);
                      closeNavbar();
                    }}
                  >
                    <Link className="nav-link" to="cart">
                      <i className="fa-solid fa-cart-shopping text-main fs-5"></i>
                    </Link>
                    <span className="d-inline-block cart d-flex justify-content-center align-items-center position-absolute rounded-circle">
                      {data?.data?.numOfCartItems || 0}
                    </span>
                  </li>
                  <div className="dropdown p-2">
                    <button
                      className="border border-0 bg-transparent"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={() => console.log("Dropdown button clicked, login:", login)}
                    >
                      <i className="fas fa-user text-main fs-5"></i>
                    </button>
                    <ul className="dropdown-menu">
                      {login ? (
                        <li className="nav-item">
                          <span className="nav-link ms-1 text-center">
                            <span className="fw-bold">
                              Hi <span className="text-main">{login}</span>
                            </span>
                          </span>
                        </li>
                      ) : null}
                      <hr />
                      <li className="nav-item">
                        <NavLink className="nav-link" to="updatepass">
                          Update password
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link curser" onClick={LogOut}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-row flex-wrap social-icons">
                    <li className="nav-item p-2">
                      <Link className="nav-link" to="" onClick={closeNavbar}>
                        <i className="fa-brands fa-facebook fs-5"></i>
                      </Link>
                    </li>
                    <li className="nav-item p-2">
                      <Link className="nav-link" to="" onClick={closeNavbar}>
                        <i className="fa-brands fa-instagram fs-5"></i>
                      </Link>
                    </li>
                    <li className="nav-item p-2">
                      <Link className="nav-link" to="" onClick={closeNavbar}>
                        <i className="fa-brands fa-twitter fs-5"></i>
                      </Link>
                    </li>
                    <li className="nav-item p-2">
                      <Link className="nav-link" to="" onClick={closeNavbar}>
                        <i className="fa-brands fa-youtube fs-5"></i>
                      </Link>
                    </li>
                    <li className="nav-item p-2">
                      <Link className="nav-link" to="" onClick={closeNavbar}>
                        <i className="fa-brands fa-tiktok fs-5"></i>
                      </Link>
                    </li>
                  </div>
                </ul>
              </>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-lg-row flex-column">
                <li className="nav-item p-2">
                  <NavLink
                    className="nav-link"
                    to="register"
                    onClick={closeNavbar}
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item p-2">
                  <NavLink className="nav-link" to="" onClick={closeNavbar}>
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="fw-bold text-center">Please Login First....</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}