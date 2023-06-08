import React from "react";
import api from '../api/axiosConfig';
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getUserId } from "../currentUserStorage";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { useNavigate } from "react-router-dom";


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
                                            {entry.patient.name+' '+entry.patient.surname}
                                        </td>
                                        <td>
                                            {entry.visitation.appointmentDate.substring(0,10)+', '+entry.visitation.appointmentDate.substring(11,16)}
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
