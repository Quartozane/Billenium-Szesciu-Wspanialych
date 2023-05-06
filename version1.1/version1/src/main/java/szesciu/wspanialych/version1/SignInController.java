package szesciu.wspanialych.version1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SignInController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/signin")
    public String getSignInPage() {
        return "signin";
    }

    @PostMapping(path="/signin")
    @ResponseBody
    public ResponseEntity<User> submitSignin(@RequestParam String mail, @RequestParam String password) {
        User user = userRepository.findByMailAndPassword(mail, password);
        if(user != null) {
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
    /*
    @GetMapping("/users")
    public String getUsers(Model model) {
        List<Userr> userrs = userrRepository.findAll();
        System.out.println("Liczba użytkowników: " + userrs.size());
        model.addAttribute("userrs", userrs);
        return "users";
    }
    */

