import React from "react";
import { sendRequest } from "../sendRequest";
import { Container } from "react-bootstrap";
import p1 from "../images/p1.png";
import "./PatientUpdateCardPage.css";


const PatientPatientCardPage = () => {
    const getPatientCard = sendRequest('get', '/patientCard/patientcard');
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
            <p className="i" id="i6">Główna 15/3, 02-111 Warszawa</p>
            <hr id="h6"/>
            <p className="t" id="t7">Wojwództwo</p>
            <p className="i" id="i7">Mazowieckie</p>
            <hr id="h7"/>
            <p className="t" id="t8">Oddział NFZ</p>
            <p className="i" id="i8">9 Mazowiecki</p>
            <hr id="h8"/>
            <p className="more-info" id="contact">Dane korespondencyjne</p>
            <p className="t" id="t9">Telefon</p>
            <p className="i" id="i9">529662964</p>
            <hr id="h9"/>
            <p className="t" id="t10">Email</p>
            <p className="i" id="i10">karolinawisniewska123@gmail.com</p>
            <hr id="h10"/>
            <p className="info">Informacje medyczne</p>
            <p className="more-info" id="allergies">Uczulenia</p>
            <p className="i" id="i11">Uczulenie na orzechy</p>
            <p className="more-info" id="notes">Uwagi</p>
            <p className="i" id="i12">Ostatnie wyniki badań:</p>
            <p className="i" id="i13">-wysokie ciśnienie krwi</p>
            <p className="more-info" id="diseases">Choroby przewlekłe</p>
            <hr id="h11"/>
            <p className="i" id="i14">Nadciśnienie tętniczne</p>
            <hr id="h12"/>
            <p className="medic">Zażywane leki</p>
            <p className="more-info" id="med">Leki</p>
            <hr id="h13"/>
            <p className="t" id="t11">Inhibitory ACE</p>
            <hr id="h14"/>
            <p className="i" id="i15">2019-08-12</p>
            <p className="t" id="t12">Diuretyki</p>
            <p className="i" id="i16">2019-04-25</p>
            <button type="submit" className="accept">Edytuj kartę pacjenta</button><br/>
            <button className="cancel">Lista wizyt</button>
        </Container>
    );
}

export default PatientPatientCardPage;
