import React from "react";
import { ToastContainer } from "react-toastify";

const Root = ({ children }) => (
  <div>
    {children}
    <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover={false}
    />
    ;
  </div>
);

export default Root;
