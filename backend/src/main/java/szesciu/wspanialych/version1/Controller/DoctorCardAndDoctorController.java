package szesciu.wspanialych.version1.Controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szesciu.wspanialych.version1.Model.*;
import szesciu.wspanialych.version1.Repository.DoctorCardRepository;
import szesciu.wspanialych.version1.Repository.PatientCardRepository;
import szesciu.wspanialych.version1.Repository.UserRepository;
import szesciu.wspanialych.version1.Repository.VisitationsRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctorCardAndDoctor")
public class DoctorCardAndDoctorController {
    @Autowired
    private final DoctorCardRepository doctorCardRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final VisitationsRepository visitationsRepository;
    @Autowired
    private final PatientCardRepository patientCardRepository;

    public DoctorCardAndDoctorController(DoctorCardRepository doctorCardRepository, UserRepository userRepository, VisitationsRepository visitationsRepository, PatientCardRepository patientCardRepository) {
        this.doctorCardRepository = doctorCardRepository;
        this.userRepository = userRepository;
        this.visitationsRepository = visitationsRepository;
        this.patientCardRepository = patientCardRepository;
    }

    @GetMapping
    public ResponseEntity<List<DoctorCardAndDoctor>> getVisitationsAndDoctorAndPatient() {
        List<DoctorCardAndDoctor> visitationsAndDoctorAndPatientsList = new ArrayList<>();
        List<DoctorCard> doctorCards = doctorCardRepository.findAll();

        for (DoctorCard doctorCard : doctorCards) {
            User doctor = userRepository.findById(doctorCard.getDoctorId()).orElse(null);

            DoctorCardAndDoctor doctorCardAndDoctor = new DoctorCardAndDoctor();

            doctorCardAndDoctor.setUserDoctor(doctor);
            doctorCardAndDoctor.setDoctorCard(doctorCard);

            visitationsAndDoctorAndPatientsList.add(doctorCardAndDoctor);
        }
        return ResponseEntity.ok(visitationsAndDoctorAndPatientsList);
    }

    @GetMapping("/calendars")
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getCalendar(@RequestParam("mail") String mail, @RequestParam("password") String password) {
        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientList = new ArrayList<>();
            List<Visitations> visitations = visitationsRepository.findAll();
            for (Visitations visitation : visitations) {
                User doctor = userRepository.findById(visitation.getDoctorId()).orElse(null);
                User patient = userRepository.findById(visitation.getPatientId()).orElse(null);
                if (doctor != null && patient != null) {
                    VisitationsAndDoctorAndPatient visitationsAndDoctorAndPatient = new VisitationsAndDoctorAndPatient();
                    visitationsAndDoctorAndPatient.setVisitation(visitation);
                    visitationsAndDoctorAndPatient.setDoctor(doctor);
                    visitationsAndDoctorAndPatient.setPatient(patient);
                    visitationsAndDoctorAndPatientList.add(visitationsAndDoctorAndPatient);
                }
            }
            return ResponseEntity.ok(visitationsAndDoctorAndPatientList);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/doctorcard")
    public ResponseEntity<DoctorCard> getDoctorCard(@RequestParam("mail") String mail, @RequestParam("password") String password) {
        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            DoctorCard doctorCard = doctorCardRepository.findByDoctorId(loggedInUser.getId());
            if (doctorCard != null) {
                return ResponseEntity.ok(doctorCard);
            }
        }
        return ResponseEntity.notFound().build();

    }

    @GetMapping("/patientlist")
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getPatientList(@RequestParam("mail") String mail, @RequestParam("password") String password) {
        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientList = new ArrayList<>();
            List<User> patients = userRepository.findAllByUserType("Pacjent");
            for (User patient : patients) {
                VisitationsAndDoctorAndPatient visitationsAndDoctorAndPatient = new VisitationsAndDoctorAndPatient();
                visitationsAndDoctorAndPatient.setPatient(patient);
                visitationsAndDoctorAndPatientList.add(visitationsAndDoctorAndPatient);
            }
            return ResponseEntity.ok(visitationsAndDoctorAndPatientList);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/patientcard/{patientId}")
    public ResponseEntity<PatientCard> getPatientCard(@PathVariable ObjectId patientId, @RequestParam("mail") String mail, @RequestParam("password") String password) {

        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            PatientCard patientCard = patientCardRepository.findByPatientId(patientId);
            if (patientCard != null) {
                return ResponseEntity.ok(patientCard);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/patientcard/{patientId}/visits")
    public ResponseEntity<List<Visitations>> getPatientVisits(@RequestParam("mail") String mail, @RequestParam("password") String password, @PathVariable ObjectId patientId) {
        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            List<Visitations> visitationsList = visitationsRepository.findAllByPatientId(patientId);
            return ResponseEntity.ok(visitationsList);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/addEntry")
    public ResponseEntity<PatientCard> addEntryToPatientCard(@RequestParam("mail") String mail, @RequestParam("password") String password, @RequestParam String cardId, @RequestParam String entry) {
        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            ObjectId cardObjectId = new ObjectId(cardId);
            PatientCard patientCard = patientCardRepository.findByPatientId(cardObjectId);

            List<String> tmp = patientCard.getEntry() == null ? new ArrayList<>() : patientCard.getEntry();
            tmp.add(entry);
            patientCard.setEntry(tmp);

            patientCardRepository.save(patientCard);
            return ResponseEntity.ok(patientCard);
        }
        return ResponseEntity.notFound().build();
    }


}
