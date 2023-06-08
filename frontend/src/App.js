import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './pages/Layout';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Calendar from './components/Calendar';
import DoctorPage from './pages/DoctorPage';
import VisitCalendarPage from './pages/VisitCalendarPage';
import DoctorDoctorCardPage from './pages/DoctorDoctorCardPage';
import DoctorPatientListPage from './pages/DoctorPatientListPage';
import PatientCardPage from './pages/PatientCardPage';
import AddEntryPage from './pages/AddEntryPage';
import VisitationPage from './pages/VisitationPage';
import PatientPage from './pages/PatientPage';
import DoctorListPage from './pages/DoctorListPage';
import PatientVisitCalendarPage from './pages/PatientVisitCalendarPage';
import PatientPatientCardPage from './pages/PatientPatientCardPage';
import PatientUpdateCardPage from './pages/PatientUpdateCardPage';


const router = createBrowserRouter([
  {
    path:"",
    element: <Layout />,
    children: [
      { index: true, element: <LoginPage /> },
      // { path:'/calendar', element: <Calendar appointedDates="['2023-05-10', '2023-05-04']" /> },
      { path:'/DoctorPage', element: <DoctorPage /> },
      { path:'/DoctorPage/VisitCalendar', element: <VisitCalendarPage /> },
      { path:'/DoctorPage/PatientList', element: <DoctorPatientListPage /> },
      { path:'/PatientCard', element: <PatientCardPage />},
      { path:'/DoctorPage/DoctorCard', element: <DoctorDoctorCardPage /> },
      { path:'/PatientCard/AddEntry', element: <AddEntryPage /> },
      { path:'/PatientCard/Visitation', element: <VisitationPage /> },
      { path:'/PatientPage', element: <PatientPage /> },
      { path:'/PatientPage/DoctorList', element: <DoctorListPage /> },
      { path:'/PatientPage/VisitCalendar', element: <PatientVisitCalendarPage /> },
      { path:'/PatientPage/PatientCard', element: <PatientPatientCardPage /> },
      { path:'/PatientPage/PatientCard/Update', element: <PatientUpdateCardPage /> },
    ],
  },
]);

function App() {

  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
