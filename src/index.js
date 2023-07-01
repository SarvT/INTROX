import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/about",
//     element: <About />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/experience",
//     element: <Experience />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//     errorElement: <ErrorPage/>
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

<BrowserRouter>
    <App />
  </BrowserRouter>,  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <RouterProvider router={router}> </RouterProvider> */}