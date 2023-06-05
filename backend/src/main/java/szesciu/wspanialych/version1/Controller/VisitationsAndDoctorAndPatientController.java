package szesciu.wspanialych.version1.Controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getVisitationsAndDoctorAndPatient() {
        List<Visitations> visitations = visitationsRepository.findAll();
        List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientsList = new ArrayList<>();

        for(Visitations visitation : visitations) {
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

    @GetMapping("/{id}")
    public ResponseEntity<VisitationsAndDoctorAndPatient> getVisitationsAndDoctorAndPatient(@PathVariable ObjectId id) {
        Visitations visitations = visitationsRepository.findById(id).orElse(null);
        VisitationsAndDoctorAndPatient visitationsAndDoctorAndPatient = new VisitationsAndDoctorAndPatient();

        User doctor = userRepository.findById(visitations.getDoctorId()).orElse(null);
        User patient = userRepository.findById(visitations.getPatientId()).orElse(null);

        visitationsAndDoctorAndPatient.setDoctor(doctor);
        visitationsAndDoctorAndPatient.setPatient(patient);
        visitationsAndDoctorAndPatient.setVisitation(visitations);

        return ResponseEntity.ok(visitationsAndDoctorAndPatient);
    }
}
