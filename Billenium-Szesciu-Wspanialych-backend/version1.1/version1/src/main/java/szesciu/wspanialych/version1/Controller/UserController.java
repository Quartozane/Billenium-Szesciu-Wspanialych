package szesciu.wspanialych.version1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import szesciu.wspanialych.version1.Repository.UserRepository;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

}
