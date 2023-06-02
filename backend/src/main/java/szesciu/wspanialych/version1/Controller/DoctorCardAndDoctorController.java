package szesciu.wspanialych.version1.Controller;

import jakarta.servlet.http.HttpServletRequest;
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
    public DoctorCardAndDoctorController(DoctorCardRepository doctorCardRepository, UserRepository userRepository, VisitationsRepository visitationsRepository,PatientCardRepository patientCardRepository) {
        this.doctorCardRepository = doctorCardRepository;
        this.userRepository = userRepository;
        this.visitationsRepository = visitationsRepository;
        this.patientCardRepository = patientCardRepository;
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
    @GetMapping("/calendars")
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getCalendar() {
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
    @GetMapping("/doctorcard")
    public ResponseEntity<DoctorCardAndDoctor> getDoctorCard(ObjectId id ) {
        DoctorCardAndDoctor doctor = new DoctorCardAndDoctor();
        List<DoctorCard> all = doctorCardRepository.findAll();
        for(DoctorCard doctorCard1 : all)
        {
            if(doctorCard1.getDoctorId() == id)
            {
                doctor.setDoctorCard(doctorCard1);

            }

        }
        return ResponseEntity.ok(doctor);
    }
    @GetMapping("/doctorCardAndDoctor/patientlist")
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getPatientList() {
        List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientList = new ArrayList<>();
        List<User> patients = userRepository.findAllByUserType("Pacjent");

        for (User patient : patients) {
            VisitationsAndDoctorAndPatient visitationsAndDoctorAndPatient = new VisitationsAndDoctorAndPatient();
            visitationsAndDoctorAndPatient.setPatient(patient);
            visitationsAndDoctorAndPatientList.add(visitationsAndDoctorAndPatient);
        }

        return ResponseEntity.ok(visitationsAndDoctorAndPatientList);
    }
    @PostMapping("/addEntry")
    public ResponseEntity<PatientCard> addEntryToPatientCard(@RequestParam String cardId, @RequestParam String entry) {
        ObjectId cardObjectId = new ObjectId(cardId);
        PatientCard patientCard = patientCardRepository.findByPatientId(cardObjectId);

        if (patientCard != null) {
            patientCard.getEntry().add(entry);
            patientCardRepository.save(patientCard);
            return ResponseEntity.ok(patientCard);
        }

        return ResponseEntity.notFound().build();
    }


}
