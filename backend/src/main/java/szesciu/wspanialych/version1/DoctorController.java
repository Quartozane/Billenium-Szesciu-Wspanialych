package szesciu.wspanialych.version1;

import jakarta.servlet.http.HttpServletRequest;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoActionOperation;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Controller
public class DoctorController {


    @Autowired
    Doctor_Card_Repository doctorCardRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PatientCardRepository patientCardRepository;
    @Autowired
    VisitationsRepository visitationsRepository;

    @GetMapping(path = "/MainDoctorPage")
    private ResponseEntity<List<Visitations>> UpcomingVisit(HttpServletRequest request) {
        List<Visitations> allVisitations = visitationsRepository.findAll();
        List<Visitations> upcomingVisitations = new ArrayList<>();
        List<PatientCard> patientId = new ArrayList<>();
        User loggedInUser = (User) request.getAttribute("loggedInUser");
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            User doctor = userRepository.findByMailAndPassword(loggedInUser.getMail(), loggedInUser.getPassword());
            for (int i = 0; i < 5 && i < allVisitations.size(); i++) {
                upcomingVisitations.add(allVisitations.get(i));
            }
            upcomingVisitations.sort(Comparator.comparing(Visitations::getDate));

            for (Visitations visitations : upcomingVisitations) {
                User user = userRepository.findByid(visitations.getId());
                if (user != null) {
                    User userData = new User();
                    userData.setId(user.getId());
                    userData.setName(user.getName());
                    userData.setSurname(user.getSurname());
                    visitations.setUser(userData);
                }

            }
        }
        return ResponseEntity.ok(upcomingVisitations);
    }

    @GetMapping(path = "/DoctorCard")
    private ResponseEntity<Doctor_card> getDoctorCard(HttpServletRequest request) {
        User loggedInUser = (User) request.getAttribute("loggedInUser");

        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            User doctor = userRepository.findByMailAndPassword(loggedInUser.getMail(), loggedInUser.getPassword());

            if (doctor != null) {
                Doctor_card doctorCard = new Doctor_card();
                doctorCard.setName(doctor.getName());
                doctorCard.setSurname(doctor.getSurname());
                doctorCard.setEducation(doctor.getDoctorCard().getEducation());
                doctorCard.setExperience(doctor.getDoctorCard().getExperience());
                doctorCard.setSpecialization(doctor.getDoctorCard().getSpecialization());
                doctorCard.setPrice(doctor.getDoctorCard().getPrice());
                doctorCard.setUser(doctor);

                return ResponseEntity.ok(doctorCard);
            }
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping(path = "/DoctorCalendarVisit")
    private ResponseEntity<List<Visitations>> getCalendar(HttpServletRequest request) {
        User loggedInUser = (User) request.getAttribute("loggedInUser");
        List<Visitations> upcomingVisitations = new ArrayList<>();
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            User doctor = userRepository.findByMailAndPassword(loggedInUser.getMail(), loggedInUser.getPassword());
            if (doctor != null) {
                List<Visitations> doctorVisitations = doctor.getVisitations();
                for (Visitations visitations : doctorVisitations) {
                    User patient = userRepository.findById(visitations.getUserId())
                            .orElseThrow(() -> new IllegalArgumentException("Patient not found"));

                    Visitations visitationWithPatient = new Visitations();
                    visitationWithPatient.setUser(patient);
                    visitationWithPatient.setDate(visitations.getDate());
                    upcomingVisitations.add(visitationWithPatient);
                }
            }
        }
        return ResponseEntity.ok(upcomingVisitations);
    }
    @GetMapping(path = "/ListPatient")
    private ResponseEntity<List<User>> getPatientList(HttpServletRequest request) {
        User loggedInUser = (User) request.getAttribute("loggedInUser");
        List<User> user = userRepository.findAll();
        List<User> usr = new ArrayList<>();
        if (loggedInUser != null && loggedInUser.getUserType().equals("Lekarz")) {
            User doctor = userRepository.findByMailAndPassword(loggedInUser.getMail(), loggedInUser.getPassword());
            if (doctor != null) {
                return ResponseEntity.ok(user);
                }
            }
        return ResponseEntity.ok(user);
    }
    @GetMapping(path = "/userData/{user_id}")
    public ResponseEntity<User> getPatientData(@PathVariable("user_id") ObjectId user_id) {
        List<PatientCard> patientCards = patientCardRepository.findAll();

        for (PatientCard card : patientCards) {
            if (card.getUser_id().equals(user_id)) {
                User user = new User();
                user.setName(card.getUser().getName());
                user.setSurname(card.getUser().getSurname());
                card.setAllergies(card.getAllergies());
                card.setOSOZ_card(card.getOSOZ_card());
                card.setDiseases(card.getDiseases());
                card.setActive_package(card.getActive_package());
                card.setNFZ_department(card.getNFZ_department());
                card.setUsedMedications(card.getUsedMedications());

                user.setPatientCard(card);

                return ResponseEntity.ok(user);
            }
        }

        return ResponseEntity.notFound().build();
    }
    @PostMapping(path = "/userData/{user_id}")
    public ResponseEntity<User> updatePatientData(@PathVariable("user_id") ObjectId user_id, @RequestBody User updatedUser) {
        List<PatientCard> patientCards = patientCardRepository.findAll();

        for (PatientCard card : patientCards) {
            if (card.getUser_id().equals(user_id)) {
                User user = card.getUser();
                user.setName(updatedUser.getName());
                user.setSurname(updatedUser.getSurname());
                card.setAllergies(updatedUser.getPatientCard().getAllergies());
                card.setOSOZ_card(updatedUser.getPatientCard().getOSOZ_card());
                card.setDiseases(updatedUser.getPatientCard().getDiseases());
                card.setActive_package(updatedUser.getPatientCard().getActive_package());
                card.setNFZ_department(updatedUser.getPatientCard().getNFZ_department());
                card.setUsedMedications(updatedUser.getPatientCard().getUsedMedications());

                patientCardRepository.save(card);

                return ResponseEntity.ok(user);
            }
        }

        return ResponseEntity.notFound().build();
    }
    @GetMapping("/appointments/{user_id}")
    public ResponseEntity<List<Visitations>> getPatientAppointments(@PathVariable("user_id") ObjectId user_id) {
        List<Visitations> appointments = visitationsRepository.findAllByPatientId(user_id);

        if (appointments.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(appointments);
        }
    }

}
