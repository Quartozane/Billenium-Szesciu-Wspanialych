import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './pages/Layout';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Calendar from './components/Calendar';


const router = createBrowserRouter([
  {
    path:"",
    element: <Layout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path:'/calendar', element: <Calendar appointedDates="['2023-05-10', '2023-05-04']" /> },
    ],
  },
]);

function App() {

  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
