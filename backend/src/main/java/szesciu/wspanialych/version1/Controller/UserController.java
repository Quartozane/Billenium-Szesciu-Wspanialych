package szesciu.wspanialych.version1.Controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import szesciu.wspanialych.version1.Model.User;
import szesciu.wspanialych.version1.Repository.UserRepository;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private  final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/doctors")
    public ResponseEntity<List<User>> getDoctors() {
        List<User> doctors = userRepository.findAllByUserType("Lekarz");
        return ResponseEntity.ok(doctors);
    }

    @GetMapping("/user/{id}")
    public  ResponseEntity<User> getUser(@PathVariable ObjectId id) {

        User user = userRepository.findById(id).orElse(null);

        return ResponseEntity.ok(user);
    }
}
