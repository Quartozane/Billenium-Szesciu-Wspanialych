import React from "react";
import Home from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import TestPage from "./Pages/TestPage";

// https://react-slideshow-image.netlify.app/?path=/story/examples-fade--default&args=canSwipe:true&globals=backgrounds.grid:true;backgrounds.value:!hex(333333)
// https://react-slideshow-image.netlify.app/?path=/story/introduction--page
// https://codesandbox.io/s/priceless-bohr-ggirf
// https://www.npmjs.com/package/react-slideshow-image
// https://codesandbox.io/s/admiring-wave-17e0j?file=/src/App.js
// https://www.figma.com/file/xBWCDC3p7kVztCmW4iMB0H/ZETO---zarz%C4%85dzanie-gospodarstwem-rolnym?node-id=5-161&t=295u1YAXl77kfRxU-0

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/test", element: <TestPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
