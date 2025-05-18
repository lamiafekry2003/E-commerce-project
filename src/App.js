import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notfound from "./Components/Notfound/Notfound";
import Parents from "./Components/Parents";
import Address from "./Components/Address/Address";
import ForgetPass from './Components/ForgetPass/ForgetPass'
import { useContext, useEffect } from "react";
import { userContext } from "./UserContext";
import ProtactedRouter from "./Components/ProtectedRouter";
import Loading from "./Components/Loading";
import { Suspense, lazy } from "react";
import GategoryDetails from "./Components/GategoryDetails";
import ResetCode from "./Components/ResetCode/ResetCode";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import Orders from "./Components/Orders/Orders";
const Home = lazy(() => import("./Components/Home/Home"));
const Brands = lazy(() => import("./Components/Brands/Brands"));
const Gategories = lazy(() => import("./Components/Gategories/Gategories"));
const Products = lazy(() => import("./Components/Products/Products"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
// const Orders = lazy(() => import("./Components/Orders/Orders"));
const WishList = lazy(() => import("./Components/WishList/WishList"));
const ProductDetails = lazy(() => import("./Components/ProductDetails"));

function App() {
  const { setIsUser, setLogin } = useContext(userContext);

  useEffect(() => {
    // to handle refresh
    if (localStorage.getItem("userToken")) {
      setIsUser(localStorage.getItem("userToken"));
      setLogin(localStorage.getItem("username"));
    }
  }, []);

  const routs = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Login></Login> },
        { path: "register", element: <Register></Register> },
        {
          path: "home",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Home></Home>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Brands></Brands>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "allOrders",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Orders></Orders>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "products",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Products></Products>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <WishList></WishList>
              </Suspense>
            </ProtactedRouter>
            
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <ProductDetails></ProductDetails>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "gategories",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Gategories></Gategories>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "gategories/:id",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <GategoryDetails></GategoryDetails>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Cart></Cart>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtactedRouter>
              <Suspense fallback={<Loading></Loading>}>
                <Orders></Orders>
              </Suspense>
            </ProtactedRouter>
          ),
        },
        {
          path: "address",
          element: (
            <ProtactedRouter>
              <Address></Address>
            </ProtactedRouter>
          ),
        },
        {
          path: "forgetpass",
          element: (
            // <ProtactedRouter>
              <ForgetPass></ForgetPass>
            // </ProtactedRouter>
          ),
        },
        {
          path: "resetcode",
          element: (
            // <ProtactedRouter>
              <ResetCode></ResetCode>
            // </ProtactedRouter>
          ),
        },
        {
          path: "resetpassword",
          element: (
            // <ProtactedRouter>
              <ResetPassword></ResetPassword>
            // </ProtactedRouter>
          ),
        },
        {
          path: "updatepass",
          element: (
            //  <ProtactedRouter>
              <UpdatePassword></UpdatePassword>
            //  </ProtactedRouter>
          ),
        },
        { path: "*", element: <Notfound></Notfound> },
      ],
    },
  ]);
  return (
    <RouterProvider router={routs} />
    // <Parents/>
  );
}

export default App;
