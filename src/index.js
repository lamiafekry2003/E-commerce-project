import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CounterContextProvider } from "./CounterContext";
import { UserContextProvider } from "./UserContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * (30 * 1000),
      refetchOnWindowFocus: false,
      // staleTime: 10000,
    },
  },
});
root.render(
  // <React.StrictMode>
  <UserContextProvider>
    <CounterContextProvider>
      <QueryClientProvider client={queryClient}>
      <Toaster />
        <App />
        {/* <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-right"
        ></ReactQueryDevtools> */}
      </QueryClientProvider>
    </CounterContextProvider>
  </UserContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
