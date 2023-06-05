import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './pages/Layout';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Calendar from './components/Calendar';
import DoctorPage from './pages/DoctorPage';
import VisitCalendarPage from './pages/VisitCalendarPage';
import DoctorCardPage from './pages/DoctorCardPage';
import PatientListPage from './pages/PatientListPage';
import PatientCardPage from './pages/PatientCardPage';
import AddEntryPage from './pages/AddEntryPage';


const router = createBrowserRouter([
  {
    path:"",
    element: <Layout />,
    children: [
      { index: true, element: <LoginPage /> },
      // { path:'/calendar', element: <Calendar appointedDates="['2023-05-10', '2023-05-04']" /> },
      { path:'/DoctorPage', element: <DoctorPage /> },
      { path:'/VisitCalendar', element: <VisitCalendarPage /> },
      { path:'/PatientList', element: <PatientListPage /> },
      { path:'/PatientCard', element: <PatientCardPage />},
      { path:'/DoctorCard', element: <DoctorCardPage /> },
      { path:'/AddEntry', element: <AddEntryPage /> },
    ],
  },
]);

function App() {

  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
