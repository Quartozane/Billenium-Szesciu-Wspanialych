import React from "react";
import { Container } from "react-bootstrap";
import api from '../api/axiosConfig';


const VisitCalendarPage = () => {
    
    const getVisitCalendar = async (e) => {
      
        try {
      
          const response = await api({
            url: '/doctorCardAndDoctor/calendars',
            method: 'get',
          });
      
          if (response.status === 200) {
            console.log(response);

          } else {
            console.log('Błąd żądania, response status:', response.status);
          }
        } catch (error) {
          console.log('Błąd żądania:', error);
        }
      };

      console.log(getVisitCalendar());

    return (
        <Container>

        </Container>
    );
};

export default VisitCalendarPage;
