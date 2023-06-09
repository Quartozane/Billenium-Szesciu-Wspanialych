import React from "react";
import api from '../api/axiosConfig';
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getUserId } from "../currentUserStorage";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const PatientPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getVisitation();
    }, []);
    
    const [visitation, setVisitation] = useState([]);

    const getVisitation = () => {
        api({
            url: '/patientCard',
            method: 'get',
            params: {
                id: getUserId(),
            }
        }).then(
            (response) => {
                setVisitation(response.data);
            }
        ).catch(
            (e) => {
                alert(e);
            }
        )
    };
    console.log(visitation);
    const deleteVisit = (visit) => {
        console.log(visit);
        api({
            url:'/visitations/patientVisitDelete',
            method: 'delete',
            params: {
                visitationId: visit,
            }
        }).then(
            (response) => {
                alert(response.data);
            }
        ).catch(
            (e) => {
                alert(e);
            }
        )
    }

    return (
        <Container>
            <Row>
                <WhereAreYou mainPageLink='/PatientPage'>
                </WhereAreYou>
            </Row>
            <Row>
                <Accordion>
                    {
                        visitation.map(
                            entry => 
                            <Accordion.Item key={entry.visitation.id.date+entry.visitation.id.timestamp} eventKey={entry.visitation.id}>
                                <Accordion.Header>
                                    <table className="w-100">
                                        <td className="w-50">
                                            {entry.doctor.name+' '+entry.doctor.surname+' - '}
                                        </td>
                                        <td>
                                            {entry.visitation.appointmentDate.substring(0,10)+', '+entry.visitation.appointmentDate.substring(11,16)}
                                        </td>
                                        <td>
                                            <Button onClick={(e) => deleteVisit(entry.visitationId)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            </Button>
                                        </td>
                                    </table>
                                </Accordion.Header>
                                <Accordion.Body key={entry.visitation.id}>
                                <table className="w-100">
                                    <tbody>
                                        <tr>
                                            <td className="w-25">
                                                Data umówienia wizyty:
                                            </td>
                                            <td>
                                                {entry.visitation.appointmentBookingDate}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Opis wizyty:
                                            </td>
                                            <td>
                                                {entry.visitation.appointmentDescription}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Powód wizyty:
                                            </td>
                                            <td>
                                                {entry.visitation.appointmentPurpose}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Objawy:
                                            </td>
                                            <td>
                                                {entry.visitation.symptoms ===null ? '' : entry.visitation.symptoms}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Stan wizyty:
                                            </td>
                                            <td>
                                                {entry.visitation.appointmentStatus}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                        
                    }
                </Accordion>
            </Row>
            <Row className='pt-3'>
                <Col>
                    <Button className="position-relative start-50 translate-middle-x" onClick={() => navigate('/PatientPage/RegisterVisit')}>
                        Zarejestruj się na wizytę
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" className="position-relative start-50 translate-middle-x" onClick={() => navigate('/PatientPage/VisitCalendar')}>
                        Wyświetl kalendarz wizyt
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" className="position-relative start-50 translate-middle-x" onClick={() => navigate('/PatientPage/PatientCard')}>
                        Wyświetl kartę pacjenta
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PatientPage;
