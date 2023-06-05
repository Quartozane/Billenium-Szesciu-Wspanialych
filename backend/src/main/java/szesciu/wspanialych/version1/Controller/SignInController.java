package szesciu.wspanialych.version1.Controller;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import szesciu.wspanialych.version1.Model.User;
import szesciu.wspanialych.version1.Repository.UserRepository;

@RestController
public class SignInController {

    @Autowired
    private UserRepository userRepository;

//    @GetMapping(path = "/signin")
//    public String getSignInPage() {
//        return "signin";
//    }

    @PostMapping(path = "/signin")
    @ResponseBody
    public ResponseEntity<User> submitSignin(@RequestParam @Email String mail, @RequestParam @Size(min = 8) String password) {
        User user = userRepository.findByMailAndPassword(mail, password);
        if (user != null) {
//            user.setPassword("********");
            String userType = user.getUserType();
            if (userType.equals("Lekarz") || userType.equals("Pacjent") || userType.equals("Recepcjonista")) {
                return ResponseEntity.ok(user);
            }
        }
        return ResponseEntity.notFound().build();
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