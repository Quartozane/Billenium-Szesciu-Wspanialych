package szesciu.wspanialych.version1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szesciu.wspanialych.version1.Model.Visitations;
import szesciu.wspanialych.version1.Repository.VisitationsRepository;

import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/visitations")
public class VisitationsController {

    @Autowired
    private final VisitationsRepository visitationsRepository;

    public VisitationsController(VisitationsRepository visitationsRepository) {
        this.visitationsRepository = visitationsRepository;
    }

    @GetMapping
    public ResponseEntity<List<Visitations>> getVisitations() {
        List<Visitations> visitations = visitationsRepository.findAll();
        visitations.sort(Comparator.comparing(Visitations::getAppointmentBookingDate));
        return ResponseEntity.ok(visitations);
    }

    @PostMapping
    public ResponseEntity<Visitations> createVisitations(@RequestBody Visitations visitations) {
        Visitations newVisitations = visitationsRepository.save(visitations);
        return ResponseEntity.ok(newVisitations);
    }
}
