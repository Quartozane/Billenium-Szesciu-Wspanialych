package szesciu.wspanialych.version1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SignInController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping(path="/signin")
    public String getSignInPage() {
        return "signin";
    }

    @PostMapping(path="/signin")
    public String submitSignin(@RequestParam String mail, @RequestParam String password) {
        //System.out.println("Mail: " + mail);
       // System.out.println("Password: " + password);
        User user = userRepository.findByMailAndPassword(mail, password);
        //System.out.println("Userr: " + userr);
        if(user != null) {
            return "signin-success";
        }
        else {
            return "signin-failure";
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

}
