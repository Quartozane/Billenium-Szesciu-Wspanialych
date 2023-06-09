import React from "react";
import { sendRequest } from "../sendRequest";
import { getUser } from "../currentUserStorage";
import WhereAreYou from "../components/UI/navigation/WhereAreYou";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./DoctorCardPage.css"; // Zaimportuj plik CSS

const DoctorCardPage = () => {
    const user = getUser();
    const getDoctorCard = sendRequest('get', '/doctorCardAndDoctor/doctorcard');
    const utf8 = require('utf8');
    console.log(getDoctorCard);

    return (
        <Container>
            <Row>
                <WhereAreYou mainPageLink='/DoctorPage'>
                    Strona g³ówna > Karta lekarza >
                </WhereAreYou>
            </Row>

            <div className="doctor-card">
                <h1 className="doctor-card-title">Karta lekarza</h1>

                <div className="doctor-card-image"></div>

                <div className="doctor-card-info">
                    <h2 className="doctor-name">Stefan Zadroga</h2>

                    <p className="price">Cena wizyty:200 z³</p>

                    <div className="line"></div>

                    <div className="calendar-icon"></div>

                    <p className="schedule">Dni i godziny przyjêæ</p>
                    <br></br>
                    <div className="line1"></div>

                    <h3 className="education-title">Wykszta³cenie</h3>

                    <p className="education-description">
                        Ukoñczy³ wydzia³ Lekarski Akademii Medycznej w Warszawie
                    </p>
                    <br/>
                    <h3 className="specializations-title">Specjalizacje</h3>

                    <p className="specializations-description">
                        Posiada specjalizacje III stopnia z zakresu gastroenterologii interwencyjnej i II stopnia z zakresu endoskopii
                    </p>

                    <h3 className="experience-title">Doœwiadczenie</h3>

                    <p className="experience-description">
                        Nasz gastrolog to doœwiadczony lekarz specjalizuj¹cy siê w endoskopii i gastrologii
                        interwencyjnej, z kilkuletnim sta¿em pracy na oddziale gastroenterologicznym w Szpitalu
                        Uniwersyteckim.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default DoctorCardPage;