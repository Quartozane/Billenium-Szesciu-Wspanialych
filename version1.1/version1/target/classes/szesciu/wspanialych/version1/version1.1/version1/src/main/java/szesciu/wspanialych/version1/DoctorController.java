package szesciu.wspanialych.version1;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoActionOperation;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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

        for(Visitations visitations : upcomingVisitations)
        {
            User user = userRepository.findByid(visitations.getId());
            if(user != null)
            {
                User userData = new User();
                userData.setId(user.getId());
                userData.setName(user.getName());
                userData.setSurname(user.getSurname());

            }

        }
        return ResponseEntity.ok(upcomingVisitations);
    }

}
