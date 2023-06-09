import Layout from './pages/Layout';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DoctorPage from './pages/DoctorPage';
import DoctorVisitCalendarPage from './pages/DoctorVisitCalendarPage';
import DoctorDoctorCardPage from './pages/DoctorDoctorCardPage';
import DoctorPatientListPage from './pages/DoctorPatientListPage';
import DoctorPatientCardPage from './pages/DoctorPatientCardPage';
import AddEntryPage from './pages/AddEntryPage';
import DoctorVisitationPage from './pages/DoctorVisitationPage';
import PatientPage from './pages/PatientPage';
import DoctorListPage from './pages/DoctorListPage';
import PatientVisitCalendarPage from './pages/PatientVisitCalendarPage';
import PatientPatientCardPage from './pages/PatientPatientCardPage';
import PatientUpdateCardPage from './pages/PatientUpdateCardPage';
import PatientRegisterVisitPage from './pages/PatientRegisterVisitPage';


const router = createBrowserRouter([
  {
    path:"",
    element: <Layout />,
    children: [
      { index: true, element: <LoginPage /> },
      // { path:'/calendar', element: <Calendar appointedDates="['2023-05-10', '2023-05-04']" /> },
      { path:'/DoctorPage', element: <DoctorPage /> },
      { path:'/DoctorPage/VisitCalendar', element: <DoctorVisitCalendarPage /> },
      { path:'/DoctorPage/PatientList', element: <DoctorPatientListPage /> },
      { path:'/DcotorPage/PatientCard', element: <DoctorPatientCardPage />},
      { path:'/DoctorPage/DoctorCard', element: <DoctorDoctorCardPage /> },
      { path:'/PatientCard/AddEntry', element: <AddEntryPage /> },
      { path:'/DoctorCard/Visitation', element: <DoctorVisitationPage /> },
      { path:'/PatientPage', element: <PatientPage /> },
      { path:'/PatientPage/DoctorList', element: <DoctorListPage /> },
      { path:'/PatientPage/VisitCalendar', element: <PatientVisitCalendarPage /> },
      { path:'/PatientPage/PatientCard', element: <PatientPatientCardPage /> },
      { path:'/PatientPage/PatientCard/Update', element: <PatientUpdateCardPage /> },
      { path:'/PatientPage/RegisterVisit', element: <PatientRegisterVisitPage /> },
    ],
  },
]);

function App() {

  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
