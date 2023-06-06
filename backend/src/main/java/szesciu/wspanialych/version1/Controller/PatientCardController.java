package szesciu.wspanialych.version1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import szesciu.wspanialych.version1.Model.*;
import szesciu.wspanialych.version1.Repository.*;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/patientCard")
public class PatientCardController {

    @Autowired
    private PatientCardRepository patientCardRepository;
    @Autowired
    private VisitationsRepository visitationsRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DoctorCardRepository doctorCardRepository;

    //    @GetMapping
//    public ResponseEntity<List<PatientCard>> getPatientCard() {
//        List<PatientCard> patientCards = patientCardRepository.findAll();
//        return ResponseEntity.ok(patientCards);
//    }
    @GetMapping
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getVisitationsAndDoctorAndPatient() {
        List<Visitations> visitations = visitationsRepository.findAll();
        List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientsList = new ArrayList<>();

        for (Visitations visitation : visitations) {
            User doctor = userRepository.findById(visitation.getDoctorId()).orElse(null);
            User patient = userRepository.findById(visitation.getPatientId()).orElse(null);

            VisitationsAndDoctorAndPatient visitationsAndDoctorAndPatient = new VisitationsAndDoctorAndPatient();

            visitationsAndDoctorAndPatient.setVisitation(visitation);
            visitationsAndDoctorAndPatient.setDoctor(doctor);
            visitationsAndDoctorAndPatient.setPatient(patient);

            visitationsAndDoctorAndPatientsList.add(visitationsAndDoctorAndPatient);
        }

        int limit = Math.min(5, visitationsAndDoctorAndPatientsList.size());
        visitationsAndDoctorAndPatientsList = visitationsAndDoctorAndPatientsList.subList(0, limit);

        return ResponseEntity.ok(visitationsAndDoctorAndPatientsList);
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<Object>> getAllDoctors() {
        List<User> doctors = userRepository.findAll();
        List<DoctorCard> cards = doctorCardRepository.findAll();

        List<Object> result = new LinkedList<>();
        result.add(doctors);
        result.add(cards);
        return ResponseEntity.ok(result);
    }
}

