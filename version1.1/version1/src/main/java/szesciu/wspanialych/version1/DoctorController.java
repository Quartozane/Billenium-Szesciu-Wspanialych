package szesciu.wspanialych.version1;

import jakarta.servlet.http.HttpServletRequest;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoActionOperation;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
    private ResponseEntity<List<Visitations>> UpcomingVisit() {
        List<Visitations> allVisitations = visitationsRepository.findAll();
        List<Visitations> upcomingVisitations = new ArrayList<>();
        List<PatientCard> patientId = new ArrayList<>();

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
    private ResponseEntity<List<User>> getPatientCard(HttpServletRequest request) {
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
}
