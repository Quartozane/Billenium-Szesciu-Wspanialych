import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import './DoctorPage.css';
import { useNavigate } from "react-router-dom";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { React, useState, useEffect } from "react";
import api from '../api/axiosConfig';
import { getUserId } from "../currentUserStorage";


const DoctorPage = () => {
    const naviage = useNavigate();

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
    console.log(visitation);

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
