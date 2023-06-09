package szesciu.wspanialych.version1.Controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szesciu.wspanialych.version1.Model.User;
import szesciu.wspanialych.version1.Model.Visitations;
import szesciu.wspanialych.version1.Model.VisitationsAndDoctorAndPatient;
import szesciu.wspanialych.version1.Repository.UserRepository;
import szesciu.wspanialych.version1.Repository.VisitationsRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/visADocAPat")
public class VisitationsAndDoctorAndPatientController {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final VisitationsRepository visitationsRepository;
    public VisitationsAndDoctorAndPatientController(UserRepository userRepository, VisitationsRepository visitationsRepository) {
        this.userRepository = userRepository;
        this.visitationsRepository = visitationsRepository;
    }

    @GetMapping
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getVisitationsAndDoctorAndPatient(@RequestParam String id) {
        ObjectId doctorId = new ObjectId(id);
        List<Visitations> visitations = visitationsRepository.findByDoctorId(doctorId);
        List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientsList = new ArrayList<>();

        for(Visitations visitation : visitations) {
            User doctor = userRepository.findById(visitation.getDoctorId()).orElse(null);
            User patient = userRepository.findById(visitation.getPatientId()).orElse(null);

            VisitationsAndDoctorAndPatient visitationsAndDoctorAndPatient = new VisitationsAndDoctorAndPatient();
            visitationsAndDoctorAndPatient.setVisitationId(visitation.getId().toString());
            visitationsAndDoctorAndPatient.setVisitation(visitation);
            visitationsAndDoctorAndPatient.setDoctor(doctor);
            visitationsAndDoctorAndPatient.setPatient(patient);

            visitationsAndDoctorAndPatientsList.add(visitationsAndDoctorAndPatient);
        }

        int limit = Math.min(5, visitationsAndDoctorAndPatientsList.size());
        visitationsAndDoctorAndPatientsList = visitationsAndDoctorAndPatientsList.subList(0, limit);

        return ResponseEntity.ok(visitationsAndDoctorAndPatientsList);
    }

}
