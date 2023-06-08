package szesciu.wspanialych.version1.Controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szesciu.wspanialych.version1.Model.*;
import szesciu.wspanialych.version1.Repository.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

import java.util.*;

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
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getVisitationsAndDoctorAndPatient(@RequestParam String id) {
        ObjectId patientId = new ObjectId(id);
        List<Visitations> visitations = visitationsRepository.findAllByPatientId(patientId);
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
    public ResponseEntity<List<DoctorCardAndDoctor>> getDoctorCardAndDoctor() {
        List<User> doctors = userRepository.findAllByUserType("Lekarz");
        List<DoctorCardAndDoctor> doctorCardAndDoctors = new ArrayList<>();
        for(User user : doctors) {
            DoctorCard doctorCard = doctorCardRepository.findByDoctorId(user.getId());
            DoctorCardAndDoctor doctorCardAndDoctor = new DoctorCardAndDoctor();
            doctorCardAndDoctor.setUserDoctor(user);
            doctorCardAndDoctor.setDoctorCard(doctorCard);
            doctorCardAndDoctors.add(doctorCardAndDoctor);
        }
        return ResponseEntity.ok(doctorCardAndDoctors);
    }

//    @GetMapping("/patientcalendar")
//    public ResponseEntity<List<Visitations>> getPatientCalendar(@RequestParam("mail") String mail, @RequestParam("password") String password) {
//        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
//        if (loggedInUser != null && loggedInUser.getUserType().equals("Pacjent")) {
//            ObjectId patientId = loggedInUser.getId();
//            List<Visitations> patientvisit = visitationsRepository.findAllByPatientId(patientId);
//            return ResponseEntity.ok(patientvisit);
//        }
//        return ResponseEntity.notFound().build();
//    }

    @GetMapping("/patientcard")
    public ResponseEntity<PatientCard> getPatientCard(@RequestParam("mail") String mail, @RequestParam("password") String password) {

        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
        if (loggedInUser != null && loggedInUser.getUserType().equals("Pacjent")) {
            ObjectId patientId = loggedInUser.getId();
            PatientCard patientCard = patientCardRepository.findByPatientId(patientId);
            if (patientCard != null) {
                return ResponseEntity.ok(patientCard);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/updatecard")
    public ResponseEntity<String> updatePatientCard(@RequestParam String id, @RequestBody Map<String, Object> requestBody) {
        ObjectId patientId = new ObjectId(id);
        PatientCard updatePatientCard = patientCardRepository.findByPatientId(patientId);
        User updateUser = userRepository.findByIdAndUserType(patientId, "Pacjent");
        if (updatePatientCard != null && updateUser != null) {
            if (requestBody.containsKey("userPatient")) {
                Map<String, Object> userPatientData = (Map<String, Object>) requestBody.get("userPatient");
                updateUser.setAddress((String) userPatientData.get("address"));
                updateUser.setPhoneNumber((String) userPatientData.get("phoneNumber"));
                userRepository.save(updateUser);
            }
            if (requestBody.containsKey("patientCard")) {
                Map<String, Object> patientCardData = (Map<String, Object>) requestBody.get("patientCard");
                updatePatientCard.setNFZDepartment((String) patientCardData.get("NFZDepartment"));
                patientCardRepository.save(updatePatientCard);
            }
            return ResponseEntity.ok("Successfully updated!");
        }
        return ResponseEntity.notFound().build();
    }

//    @GetMapping("/visitations/{id}")
//    public ResponseEntity<Visitations> getVisitationsAndDoctorAndPatient(@RequestParam("mail") String mail, @RequestParam("password") String password, @PathVariable ObjectId id) {
//        User loggedInUser = userRepository.findByMailAndPassword(mail, password);
//        if (loggedInUser != null && loggedInUser.getUserType().equals("Pacjent")) {
//            Visitations visitations = visitationsRepository.findById(id).orElse(null);
//            if (visitations != null) {
//                return ResponseEntity.ok(visitations);
//            }
//        }
//        return ResponseEntity.notFound().build();
//    }

    @GetMapping("/calendars")
    public ResponseEntity<List<VisitationsAndDoctorAndPatient>> getCalendarForPatient(@RequestParam String id) {
        ObjectId patientId = new ObjectId(id);
        List<VisitationsAndDoctorAndPatient> visitationsAndDoctorAndPatientList = new ArrayList<>();
        List<Visitations> visitations = visitationsRepository.findAllByPatientId(patientId);
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

    @PostMapping("/patientVisit")
    public ResponseEntity<Visitations> createVisit(@RequestParam String idPatient, @RequestBody Map<String, Object> requestBody) {
        ObjectId patientId = new ObjectId(idPatient);
        ObjectId doctorId = new ObjectId((String) requestBody.get("idDoctor"));
        Visitations visitations = new Visitations();
        visitations.setDoctorId(doctorId);
        visitations.setPatientId(patientId);
        visitations.setAppointmentBookingDate(LocalDate.now());
        visitations.setAppointmentDate((LocalDateTime) requestBody.get("appointmentDate"));
        visitations.setAppointmentStatus("Oczekujaca");
        visitationsRepository.save(visitations);
        return ResponseEntity.ok(visitations);
    }
}

