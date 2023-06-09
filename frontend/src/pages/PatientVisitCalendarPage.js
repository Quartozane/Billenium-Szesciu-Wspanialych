import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Accordion, Col, Button} from "react-bootstrap";
import api from '../api/axiosConfig';
import { getUserId } from "../currentUserStorage";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import Calendar from "../components/Calendar";
import { Link, useNavigate } from "react-router-dom";


const PatientVisitCalendarPage = () => {
    const [appointedDates, setAppointedDates] = useState([]);
    useEffect(() => {
        getVisitation();
    }, []);
    
    const [visitation, setVisitation] = useState([]);

    const getVisitation = () => {
        api({
            url:'/patientCard/calendars',
            method: 'get',
            params: {
                id: getUserId(),
            }
        }).then(
            (response) => {
                setVisitation(response.data);
                setAppointedDates(response.data.map(entry => entry.visitation.appointmentDate.substring(0,10)));
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
                <Col>
                    <Calendar appointedDates={appointedDates} />
                </Col>
                <Col>
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
                                                <td className="w-50 ">
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
                                                    Stan wizyty:
                                                </td>
                                                <td>
                                                    {entry.visitation.appointmentStatus}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Cel wizyty:
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
                                                    {entry.visitation.symptoms}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                            
                        }
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default PatientVisitCalendarPage;

