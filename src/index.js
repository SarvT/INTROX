import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-handle";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  // {
  //   path: "/about",
  //   element: <About />,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/experience",
  //   element: <Experience />,
  //   errorElement: <ErrorPage/>
  // },
  // {
  //   path: "/projects",
  //   element: <Projects />,
  //   errorElement: <ErrorPage/>
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" Component={<Homepage />}>
          <Route index element={<Homepage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" Component={<Contact />} />
          <Route path="/about" Component={<About />} />
          {/* <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter> */}

    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
