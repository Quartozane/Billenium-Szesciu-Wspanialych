import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { React, useState, useEffect } from "react";
import api from '../api/axiosConfig';
import { getUserId } from "../currentUserStorage";
import { Link } from "react-router-dom";


const DoctorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getVisitation();
    }, []);
    
    const [visitation, setVisitation] = useState([]);

    const getVisitation = () => {
        api({
            url:'/visADocAPat',
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

    return (
        <Container>
            <Row>
                <WhereAreYou mainPageLink='/DoctorPage'>
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
                                            {entry.patient.name+' '+entry.patient.surname}
                                        </td>
                                        <td>
                                            {entry.visitation.appointmentDate.substring(0,10)+', '+entry.visitation.appointmentDate.substring(11,16)}
                                        </td>
                                        <td>
                                            <Link className='link-dark' to={'/DoctorCard/Visitation/?id='+entry.visitationId}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                                    </svg>
                                            </Link>
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
                                                {entry.visitation.symptoms}
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
                    <Button className="position-relative start-50 translate-middle-x" onClick={() => navigate('/DoctorPage/VisitCalendar')}>
                        Wyświetl kalendarz wizyt
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" className="position-relative start-50 translate-middle-x" onClick={() => navigate('/DoctorPage/PatientList')}>
                        Wyświetl listę pacjentów
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-primary" className="position-relative start-50 translate-middle-x" onClick={() => navigate('/DoctorPage/DoctorCard')}>
                        Wyświetl kartę lekarza
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorPage;
