import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";
import "./PatientUpdateCardPage.css";
import p1 from "../images/p1.png";


const PatientUpdateCardPage = () => {
    const getPatientCard = sendRequest('put', '/patientCard/updatecard', {
        id: '6473f4b78f4eff2057490419',
    }, {
        userPatient: {
            address: "Nowy adres456",
            phoneNumber: "991222333",
        },
        patientCard: {
            NFZDepartment: "Nowy oddział123456",
        },
    });
    console.log(getPatientCard);

    return (
        <Container>
            <p className="data">Dane pacjenta</p>
            <p className="more-info" id="names">Karolina Wiśniewska</p>
            <img src={p1}/>
            <p className="t" id="t1">Nr kartoreki</p>
            <p className="i" id="i1">375024</p>
            <hr id="h1"/>
            <p className="t" id="t2">PESEL</p>
            <p className="i" id="i2">64964206419</p>
            <hr id="h2"/>
            <p className="t" id="t3">Data urodzenia</p>
            <p className="i" id="i3">1997-10-23 (25 lat)</p>
            <hr id="h3"/>
            <p className="t" id="t4">Karta OSOZ</p>
            <p className="i" id="i4"></p>
            <hr id="h4"/>
            <p className="t" id="t5">Status eWUŚ</p>
            <p className="i" id="i5">Zweryfikowany</p>
            <hr id="h5"/>
            <p className="more-info" id="personal">Dane adresowe</p>
            <p className="t" id="t6">Adres</p>
            <hr id="h6"/>
            <p className="t" id="t7">Wojwództwo</p>
            <hr id="h7"/>
            <p className="t" id="t8">Oddział NFZ</p>
            <hr id="h8"/>
            <p className="more-info" id="contact">Dane korespondencyjne</p>
            <p className="t" id="t9">Telefon</p>
            <hr id="h9"/>
            <p className="t" id="t10">Email</p>
            <hr id="h10"/>
            <p className="info">Informacje medyczne</p>
            <p className="more-info" id="allergies">Uczulenia</p>
            <p className="i" id="i6">Uczulenie na orzechy</p>
            <p className="more-info" id="notes">Uwagi</p>
            <p className="i" id="i7">Ostatnie wyniki badań:</p>
            <p className="i" id="i8">-wysokie ciśnienie krwi</p>
            <p className="more-info" id="diseases">Choroby przewlekłe</p>
            <hr id="h11"/>
            <p className="i" id="i9">Nadciśnienie tętniczne</p>
            <hr id="h12"/>
            <p className="medic">Zażywane leki</p>
            <p className="more-info" id="med">Leki</p>
            <hr id="h13"/>
            <p className="t" id="t11">Inhibitory ACE</p>
            <hr id="h14"/>
            <p className="i" id="i10">2019-08-12</p>
            <p className="t" id="t12">Diuretyki</p>
            <p className="i" id="i11">2019-04-25</p>
            <button type="submit" className="accept">Zatwierdź zmiany</button><br/>
            <button className="cancel">Anuluj</button>
        </Container>
    );
}

export default PatientUpdateCardPage;
