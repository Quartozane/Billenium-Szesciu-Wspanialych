package szesciu.wspanialych.version1;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SignInController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/signin")
    public String getSignInPage() {
        return "signin";
    }

    @PostMapping(path = "/signin")
    @ResponseBody
    public ResponseEntity<User> submitSignin(@RequestParam @Email String mail, @RequestParam @Size(min = 8) String password) {
        User user = userRepository.findByMailAndPassword(mail, password);
        if (user != null) {
            user.setPassword("********");
            String userType = user.getUserType();
            if (userType.equals("Lekarz")) {
                return ResponseEntity.ok(user);
            } else if (userType.equals("Pacjent")) {
                return ResponseEntity.ok(user);
            } else if (userType.equals("Recepcjonista")) {
                return ResponseEntity.ok(user);
            }
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
    /*@PostMapping(path="/signin")
    public ModelAndView submitSignin(@RequestParam @Email String mail, @RequestParam @Size(min=8) String password) {
        User user = userRepository.findByMailAndPassword(mail, password);
        if(user != null) {
            user.setPassword("********");
            String userType = user.getUserType();
            ModelAndView mav = new ModelAndView();
            if(userType.equals("Lekarz")) {
                mav.setViewName("redirect:/lekarz");
            } else if(userType.equals("Pacjent")) {
                mav.setViewName("redirect:/pacjent");
            } else if(userType.equals("Recepcjonista")) {
                mav.setViewName("redirect:/recepcjonista");
            }
            mav.addObject("user", user);
            return mav;
        }
        else {
            return new ModelAndView("signin", "error", "Nieprawidłowe dane logowania.");
        }
    }
    */
    /*
    @GetMapping("/users")
    public String getUsers(Model model) {
        List<Userr> userrs = userrRepository.findAll();
        System.out.println("Liczba użytkowników: " + userrs.size());
        model.addAttribute("userrs", userrs);
        return "users";
    }
    */

