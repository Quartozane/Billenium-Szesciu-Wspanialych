package szesciu.wspanialych.version1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import szesciu.wspanialych.version1.Model.PatientCard;
import szesciu.wspanialych.version1.Repository.PatientCardRepository;

import java.util.List;

@RestController
@RequestMapping("/patientCard")
public class PatientCardController {

    @Autowired
    private PatientCardRepository patientCardRepository;

    @GetMapping
    public ResponseEntity<List<PatientCard>> getPatientCard() {
        List<PatientCard> patientCards = patientCardRepository.findAll();
        return ResponseEntity.ok(patientCards);
    }
}
