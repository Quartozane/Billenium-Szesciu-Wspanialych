package szesciu.wspanialych.version1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import szesciu.wspanialych.version1.Model.DoctorCard;
import szesciu.wspanialych.version1.Model.DoctorCardAndDoctor;
import szesciu.wspanialych.version1.Model.User;
import szesciu.wspanialych.version1.Repository.DoctorCardRepository;
import szesciu.wspanialych.version1.Repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/doctorCardAndDoctor")
public class DoctorCardAndDoctorController {
    @Autowired
    private final DoctorCardRepository doctorCardRepository;
    @Autowired
    private final UserRepository userRepository;
    public DoctorCardAndDoctorController(DoctorCardRepository doctorCardRepository, UserRepository userRepository) {
        this.doctorCardRepository = doctorCardRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<DoctorCardAndDoctor>> getVisitationsAndDoctorAndPatient() {
        List<DoctorCardAndDoctor> visitationsAndDoctorAndPatientsList = new ArrayList<>();
        List<DoctorCard> doctorCards = doctorCardRepository.findAll();

        for(DoctorCard doctorCard : doctorCards) {
            User doctor = userRepository.findById(doctorCard.getDoctorId()).orElse(null);

            DoctorCardAndDoctor doctorCardAndDoctor = new DoctorCardAndDoctor();

            doctorCardAndDoctor.setUserDoctor(doctor);
            doctorCardAndDoctor.setDoctorCard(doctorCard);

            visitationsAndDoctorAndPatientsList.add(doctorCardAndDoctor);
        }
        return ResponseEntity.ok(visitationsAndDoctorAndPatientsList);
    }
}
